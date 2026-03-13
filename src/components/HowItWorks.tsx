const steps = [
  {
    num: "1",
    title: "Connect",
    desc: "We connect to your business phone number and lead sources \u2014 no new number, no complicated setup.",
  },
  {
    num: "2",
    title: "Respond",
    desc: "Missed calls and new leads get instant, personalized follow-up via text \u2014 even while you\u2019re on a job.",
  },
  {
    num: "3",
    title: "Book",
    desc: "Leads are nurtured and guided toward booking an estimate on your calendar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] text-center">
          How It Works
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto">
          Up and running in days, not weeks. Three steps &mdash; that&apos;s it.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-2xl font-bold">
                {s.num}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1B2A4A]">{s.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
