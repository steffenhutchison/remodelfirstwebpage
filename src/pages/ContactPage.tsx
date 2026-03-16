import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const calendlyUrl = 'https://calendly.com/steffenhutchison/30min';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const payload = {
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      companyName: String(formData.get('companyName') ?? ''),
      phoneNumber: String(formData.get('phoneNumber') ?? ''),
      email: String(formData.get('email') ?? ''),
      website: String(formData.get('website') ?? ''),
      message: String(formData.get('message') ?? ''),
      smsConsent: formData.get('smsConsent') === 'agreed',
      honeypot: String(formData.get('websiteUrl') ?? ''),
      sourcePath: window.location.pathname,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        setErrorMessage(result.message || 'Unable to submit your request right now. Please try again.');
        return;
      }

      form.reset();
      setSuccessMessage('Thanks, your request was submitted. Our team will follow up shortly.');
    } catch {
      setErrorMessage('Unable to submit your request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B2A4A] leading-tight tracking-tight">
              Book a Demo to See the Fastest Path to More Booked Estimates
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              RemodelFirst helps remodeling companies turn missed calls and slow follow-up into more booked estimates. Book a
              demo now, or submit your information below for a follow-up.
            </p>
          </div>
        </section>

        <section className="bg-slate-800 py-14 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Book a Demo</h2>
            <p className="mt-4 text-slate-300 text-lg">This is the fastest way to see how RemodelFirst can improve your lead follow-up.</p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-sm transition"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A]">Submit Your Information</h2>
              <p className="mt-3 text-gray-600">Prefer a follow-up from our team? Share a few details and we will reach out.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="websiteUrl">Website URL</label>
                  <input id="websiteUrl" name="websiteUrl" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1B2A4A]">Message Type Disclosure</p>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    If you opt in, message types may include inquiry follow-up, demo scheduling details, service-related updates,
                    and support communication.
                  </p>
                  <label htmlFor="smsConsent" className="flex items-start gap-3">
                    <input
                      id="smsConsent"
                      name="smsConsent"
                      type="checkbox"
                      value="agreed"
                      className="mt-4 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="mt-3 text-sm text-gray-700 leading-relaxed">
                      I consent to receive SMS messages from RemodelFirst about my inquiry. Message frequency varies. Message and
                      data rates may apply. Reply STOP to opt out and HELP for help.
                    </span>
                  </label>
                  <p className="mt-3 text-xs text-gray-500">
                    By submitting this form, you acknowledge our{' '}
                    <a href="/privacy-policy" className="text-amber-700 hover:text-amber-800 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms-of-service" className="text-amber-700 hover:text-amber-800 underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>

                <div className="pt-2">
                  {successMessage && (
                    <p
                      className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
                      role="status"
                      aria-live="polite"
                    >
                      {successMessage}
                    </p>
                  )}
                  {errorMessage && (
                    <p
                      className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                      aria-live="assertive"
                    >
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg shadow-sm transition"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Contact Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
