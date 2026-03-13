import { PhoneMissed, Clock, Inbox, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls go to voicemail \u2014 and your competitor",
    desc: "When you\u2019re on a job site, every unanswered call is a potential customer calling the next contractor on their list.",
  },
  {
    icon: Clock,
    title: "New leads wait hours or days for a reply",
    desc: "By the time you follow up, they\u2019ve already gotten three other quotes and picked someone faster.",
  },
  {
    icon: Inbox,
    title: "Old quote requests sit untouched in your inbox",
    desc: "Leads who weren\u2019t ready last month might be ready now \u2014 but nobody\u2019s reaching out.",
  },
  {
    icon: HelpCircle,
    title: "You have no idea which leads slipped through the cracks",
    desc: "Without a system, there\u2019s no way to know how many jobs you lost to slow or missed follow-up.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] text-center">
          Sound familiar?
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto">
          Most remodeling companies lose jobs not because of bad work &mdash; but
          because leads don&apos;t get a fast, consistent response.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 md:gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#1B2A4A]">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
