export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            &copy; {year} RemodelFirst. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="mailto:steffenhutchison@gmail.com" className="hover:text-white transition">
              Steffen Hutchison
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Lead conversion built for remodelers.
        </p>
      </div>
    </footer>
  );
}
