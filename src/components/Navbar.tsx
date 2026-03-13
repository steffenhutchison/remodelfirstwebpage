export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-[#1B2A4A] tracking-tight">
          Remodel<span className="text-amber-600">First</span>
        </a>
        <a
          href="https://calendly.com/steffenhutchison/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm transition"
        >
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
