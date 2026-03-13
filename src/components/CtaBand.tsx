interface CtaBandProps {
  headline: string;
  supportingText?: string;
  primaryLabel?: string;
}

export default function CtaBand({
  headline,
  supportingText,
  primaryLabel = "Book a Demo",
}: CtaBandProps) {
  return (
    <section className="bg-slate-800 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {headline}
        </h2>
        {supportingText && (
          <p className="mt-4 text-slate-300 text-lg">{supportingText}</p>
        )}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://calendly.com/steffenhutchison/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-sm transition"
          >
            {primaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
