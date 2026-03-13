import { Phone, MessageSquare, CalendarCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1B2A4A] leading-[1.1] tracking-tight">
              Missed Calls Are Costing You Booked Estimates
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
              RemodelFirst helps remodeling companies respond to leads in
              seconds, follow up automatically, and turn more missed calls and
              quote requests into booked estimates.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="https://calendly.com/steffenhutchison/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-sm transition inline-flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#free-audit"
                className="border border-gray-300 hover:border-amber-600 hover:text-amber-700 text-gray-600 font-medium px-6 py-3.5 rounded-lg text-sm transition"
              >
                Get a Free Lead Follow-Up Audit
              </a>
            </div>
          </div>

          <div className="hidden md:block" aria-hidden="true">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-6">
                How a missed call becomes a booked estimate
              </p>

              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div className="pt-0.5">
                  <p className="text-sm font-semibold text-[#1B2A4A]">Missed call at 2:14 PM</p>
                  <p className="text-xs text-gray-500 mt-0.5">Homeowner called while you were on a job</p>
                </div>
              </div>

              <div className="border-l-2 border-dashed border-amber-300 ml-[22px] h-5" />

              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                </div>
                <div className="pt-0.5">
                  <p className="text-sm font-semibold text-[#1B2A4A]">Auto text sent at 2:14 PM</p>
                  <p className="text-xs text-gray-500 mt-0.5">&ldquo;Hi, thanks for calling! How can we help?&rdquo;</p>
                </div>
              </div>

              <div className="border-l-2 border-dashed border-amber-300 ml-[22px] h-5" />

              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5 text-green-600" />
                </div>
                <div className="pt-0.5">
                  <p className="text-sm font-semibold text-[#1B2A4A]">Estimate booked at 2:22 PM</p>
                  <p className="text-xs text-gray-500 mt-0.5">Lead scheduled a walkthrough for Thursday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
