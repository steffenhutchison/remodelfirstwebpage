import { Resend } from 'resend';

type ContactPayload = {
  firstName: string;
  lastName?: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  website?: string;
  message?: string;
  smsConsent: boolean;
  honeypot?: string;
  sourcePath?: string;
};

type ApiRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: { remoteAddress?: string };
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const MAX_BODY_BYTES = 15 * 1024;
const MAX_TEXT_LENGTH = 2000;

const getEnv = (key: string): string => process.env[key]?.trim() ?? '';

const normalizeText = (value: unknown, max = MAX_TEXT_LENGTH): string => {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
};

const parseBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.toLowerCase() === 'true';
  return false;
};

const getIp = (request: ApiRequest): string => {
  const forwardedFor = request.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
    return forwardedFor.split(',')[0].trim();
  }
  return request.socket?.remoteAddress ?? '';
};

const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const parseBody = (body: unknown): Record<string, unknown> => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body) as Record<string, unknown>;
      return parsed ?? {};
    } catch {
      return {};
    }
  }
  if (typeof body === 'object') return body as Record<string, unknown>;
  return {};
};

const getBodySizeBytes = (body: unknown): number => {
  if (typeof body === 'string') return Buffer.byteLength(body, 'utf8');
  try {
    return Buffer.byteLength(JSON.stringify(body ?? {}), 'utf8');
  } catch {
    return 0;
  }
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const contentLength = Number(request.headers['content-length'] ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    response.status(413).json({ message: 'Request body is too large' });
    return;
  }

  const bodySizeBytes = getBodySizeBytes(request.body);
  if (bodySizeBytes > MAX_BODY_BYTES) {
    response.status(413).json({ message: 'Request body is too large' });
    return;
  }

  const resendApiKey = getEnv('RESEND_API_KEY');
  const contactToEmail = getEnv('CONTACT_TO_EMAIL');
  const contactFromEmail = getEnv('CONTACT_FROM_EMAIL');
  const configuredReplyToEmail = getEnv('CONTACT_REPLY_TO_EMAIL');

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    response.status(500).json({ message: 'Contact service is not configured' });
    return;
  }

  const body = parseBody(request.body);
  const payload: ContactPayload = {
    firstName: normalizeText(body.firstName, 120),
    lastName: normalizeText(body.lastName, 120),
    companyName: normalizeText(body.companyName, 160),
    phoneNumber: normalizeText(body.phoneNumber, 40),
    email: normalizeText(body.email, 200).toLowerCase(),
    website: normalizeText(body.website, 300),
    message: normalizeText(body.message, 2000),
    smsConsent: parseBoolean(body.smsConsent),
    honeypot: normalizeText(body.honeypot, 255),
    sourcePath: normalizeText(body.sourcePath, 300),
  };

  if (payload.honeypot) {
    response.status(200).json({ message: 'Submission received' });
    return;
  }

  if (!payload.firstName || !payload.companyName || !payload.phoneNumber || !payload.email) {
    response.status(400).json({ message: 'Please complete all required fields.' });
    return;
  }

  if (!isValidEmail(payload.email)) {
    response.status(400).json({ message: 'Please enter a valid email address.' });
    return;
  }

  const submittedAt = new Date().toISOString();
  const sourcePath = payload.sourcePath || '/contact';
  const userAgent = normalizeText(request.headers['user-agent'], 500);
  const ip = getIp(request);
  const fallbackReplyToEmail = configuredReplyToEmail || contactToEmail;
  const replyToEmail = isValidEmail(payload.email) ? payload.email : fallbackReplyToEmail;

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: replyToEmail,
      subject: `New RemodelFirst contact request - ${payload.companyName}`,
      text: [
        'New contact request received.',
        '',
        'Submitted Fields',
        `First Name: ${payload.firstName}`,
        `Last Name: ${payload.lastName || '(not provided)'}`,
        `Company Name: ${payload.companyName}`,
        `Phone Number: ${payload.phoneNumber}`,
        `Email: ${payload.email}`,
        `Website: ${payload.website || '(not provided)'}`,
        `Message: ${payload.message || '(not provided)'}`,
        `SMS Consent: ${payload.smsConsent}`,
        '',
        'Metadata',
        `submittedAt: ${submittedAt}`,
        `sourcePath: ${sourcePath}`,
        `userAgent: ${userAgent || '(not available)'}`,
        `ip: ${ip || '(not available)'}`,
      ].join('\n'),
    });

    response.status(200).json({ message: 'Contact request submitted successfully.' });
  } catch (error) {
    console.error('Contact email send failed:', error);
    response.status(500).json({ message: 'Unable to submit your request right now.' });
  }
}
