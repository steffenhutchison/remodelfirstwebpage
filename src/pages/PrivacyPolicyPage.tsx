import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
            <header className="pb-8 border-b border-gray-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Privacy Policy</p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B2A4A] leading-tight">
                RemodelFirst Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-gray-600">Effective Date: March 13, 2026</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                RemodelFirst helps remodeling companies turn missed calls and slow follow-up into more booked estimates. This
                Privacy Policy explains how we collect, use, and protect information when you use our website, request a demo, or
                submit a contact form.
              </p>
            </header>

            <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Information We Collect</h2>
                <p className="mt-3">
                  We collect information you submit directly through this website, including first name, last name, company name,
                  phone number, email address, website, message content, and SMS consent status.
                </p>
                <p className="mt-3">
                  We may also collect limited technical information such as browser type, device information, IP address, and page
                  path when forms are submitted for security, troubleshooting, and service operations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">How We Use Submitted Information</h2>
                <p className="mt-3">We use submitted information to:</p>
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  <li>Respond to your inquiry and follow up on your request.</li>
                  <li>Schedule and deliver product demos.</li>
                  <li>Provide service-related updates and support communication.</li>
                  <li>Operate, improve, and secure our website and lead-response services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Phone Number and SMS Consent</h2>
                <p className="mt-3">
                  If you opt in to SMS communication, RemodelFirst may send text messages related to inquiry follow-up, demo
                  scheduling, service-related updates, and support-related communication for remodeling companies interested in
                  our lead follow-up system.
                </p>
                <p className="mt-3">
                  Message frequency varies. Message and data rates may apply. You can reply STOP to opt out at any time and HELP
                  for help.
                </p>
                <p className="mt-3 font-medium text-[#1B2A4A]">
                  SMS consent is not shared with third parties or affiliates for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Cookies and Analytics</h2>
                <p className="mt-3">
                  We use standard website analytics and similar technologies to understand site usage and improve performance. These
                  tools may collect general usage data such as pages visited and session activity but are not intended to collect
                  sensitive personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Data Protection and Retention</h2>
                <p className="mt-3">
                  We use reasonable administrative and technical safeguards to protect personal information. While no system is
                  guaranteed to be fully secure, we work to keep submitted data protected and accessible only to authorized parties
                  supporting business operations.
                </p>
                <p className="mt-3">
                  We retain submitted information for as long as reasonably necessary to respond to requests, operate services,
                  maintain records, and meet legal or compliance obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Information Sharing</h2>
                <p className="mt-3">
                  We do not sell your personal information. We may share information with service providers that support operations
                  such as hosting, communications delivery, and analytics, only as needed to operate RemodelFirst.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Contact Information</h2>
                <p className="mt-3">For privacy questions or requests, contact:</p>
                <p className="mt-2 font-medium text-[#1B2A4A]">Steffen Hutchison</p>
                <p className="mt-1">
                  Email:{' '}
                  <a className="text-amber-700 hover:text-amber-800 underline" href="mailto:steffenhutchison@gmail.com">
                    steffenhutchison@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
