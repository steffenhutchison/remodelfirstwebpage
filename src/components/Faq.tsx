import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I need to change my phone number?",
    a: "No. RemodelFirst connects to your existing business phone number. Your customers won\u2019t notice anything different \u2014 they\u2019ll just get faster responses.",
  },
  {
    q: "How long does setup take?",
    a: "Most remodeling companies are up and running in under a week. We handle the technical setup so you can stay focused on your jobs.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. It\u2019s month-to-month. If it\u2019s not working for you, cancel anytime \u2014 no penalties, no hassle.",
  },
  {
    q: "Will this work for my type of remodeling business?",
    a: "Yes. RemodelFirst is designed for remodelers \u2014 kitchens, baths, additions, whole-home renovations, and more. If you get leads from phone calls or online forms, it works.",
  },
  {
    q: "What if I already have a CRM?",
    a: "RemodelFirst works alongside your existing tools. It doesn\u2019t replace your CRM \u2014 it makes sure leads actually get followed up on before they go cold.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] text-center">
          Common Questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#1B2A4A] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
