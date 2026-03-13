import { ShieldCheck, Zap, Phone, Wrench } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: "No Long-Term Contracts" },
  { icon: Zap, label: "Set Up in Under a Week" },
  { icon: Phone, label: "Works With Your Existing Number" },
  { icon: Wrench, label: "Built for Remodelers" },
];

export default function Trust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">
          Why Remodelers Trust It
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                <b.icon className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-sm font-semibold text-[#1B2A4A]">{b.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-gray-50 rounded-xl border border-gray-100 p-6 md:p-8 text-left">
          <p className="text-gray-700 leading-relaxed">
            RemodelFirst is built specifically for home remodeling companies &mdash;
            kitchens, baths, additions, whole-home renovations. We connect to
            your existing phone number and lead sources. There&apos;s no long-term
            contract and no complex software to learn.
          </p>
        </div>

        <p className="mt-8 text-gray-500">
          Try it with a free demo. If it&apos;s not right for your business, no
          pressure.
        </p>
      </div>
    </section>
  );
}
