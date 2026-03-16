import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
            <header className="pb-8 border-b border-gray-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Terms of Service</p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B2A4A] leading-tight">
                RemodelFirst Terms of Service
              </h1>
              <p className="mt-3 text-sm text-gray-600">Effective Date: March 13, 2026</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These Terms of Service govern your use of the RemodelFirst website and related communications. By using this
                website, submitting a contact request, or scheduling a demo, you agree to these terms.
              </p>
            </header>

            <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Overview of Website and Service</h2>
                <p className="mt-3">
                  RemodelFirst provides information, consultation, and service support for remodeling companies interested in
                  improving missed call response and lead follow-up processes. Website content is provided for general business
                  information and service evaluation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Contact and Demo Submission Expectations</h2>
                <p className="mt-3">
                  When submitting a contact form or demo request, you agree to provide accurate business contact information and to
                  use this website for legitimate business inquiries. We may use submitted information to contact you regarding your
                  request, demo scheduling, service information, or support.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">SMS Messaging Terms</h2>
                <p className="mt-3">
                  If you opt in, RemodelFirst may send SMS messages related to inquiry follow-up, demo scheduling, service-related
                  updates, and support-related communication for remodeling companies interested in our lead follow-up system.
                </p>
                <p className="mt-3">By opting in, you consent to receive text messages from RemodelFirst for these purposes.</p>
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  <li>Message frequency varies.</li>
                  <li>Message and data rates may apply.</li>
                  <li>Text STOP to opt out.</li>
                  <li>Text HELP for help.</li>
                  <li>Carrier participation is not guaranteed, and carriers are not liable for delayed or undelivered messages.</li>
                  <li>SMS consent and messaging is intended for users 18 years of age or older.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">No Guarantee and Service Limitations</h2>
                <p className="mt-3">
                  RemodelFirst works to provide high-quality service information and support, but we do not guarantee specific
                  business outcomes, revenue increases, lead volume, or estimate booking results from use of our website or
                  services.
                </p>
                <p className="mt-3">
                  Website availability and communication systems may occasionally be interrupted for maintenance, technical issues, or
                  third-party service outages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Acceptable Use</h2>
                <p className="mt-3">
                  You agree not to misuse the website, attempt unauthorized access, submit false information, or interfere with
                  website operations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Updates to These Terms</h2>
                <p className="mt-3">
                  We may update these Terms of Service from time to time. Updates will be posted on this page with a revised
                  effective date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#1B2A4A]">Contact Information</h2>
                <p className="mt-3">For questions about these terms, contact:</p>
                <p className="mt-2">
                  For SMS support, Text HELP or email us at{' '}
                  <a className="text-amber-700 hover:text-amber-800 underline" href="mailto:steffenhutchison@gmail.com">
                    steffenhutchison@gmail.com
                  </a>
                  .
                </p>
                <p className="mt-2 font-medium text-[#1B2A4A]">Steffen Hutchison</p>
                <p className="mt-1">
                  Email:{' '}
                  <a className="text-amber-700 hover:text-amber-800 underline" href="mailto:steffenhutchison@gmail.com">
                    steffenhutchison@gmail.com
                  </a>
                </p>
                <p className="mt-3">
                  Review our{' '}
                  <a className="text-amber-700 hover:text-amber-800 underline" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  .
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
