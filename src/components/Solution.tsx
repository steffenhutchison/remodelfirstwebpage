import {
  PhoneOff,
  MessageCircle,
  CalendarDays,
  RefreshCw,
  RotateCcw,
  BarChart3,
} from 'lucide-react';

const capabilities = [
  {
    icon: PhoneOff,
    title: "Missed-Call Text Back",
    desc: "When you can\u2019t answer, your leads still get a response in seconds.",
  },
  {
    icon: MessageCircle,
    title: "Instant SMS Follow-Up",
    desc: "New leads hear from you before they call your competitor.",
  },
  {
    icon: CalendarDays,
    title: "Automated Booking Flow",
    desc: "Leads can schedule an estimate without you picking up the phone.",
  },
  {
    icon: RefreshCw,
    title: "3\u20137 Day Lead Nurture",
    desc: "Interested but not ready? The system stays in touch so you don\u2019t have to.",
  },
  {
    icon: RotateCcw,
    title: "Old Lead Reactivation",
    desc: "Past quotes and cold leads get a second chance automatically.",
  },
  {
    icon: BarChart3,
    title: "Simple Reporting",
    desc: "See what\u2019s working without logging into another dashboard.",
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] text-center">
          What RemodelFirst Does
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto">
          One system to catch, follow up, and convert the leads your business is
          already getting.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-gray-50 rounded-xl border border-gray-100 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-base font-semibold text-[#1B2A4A]">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
