import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0e1715]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm text-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1D3C34] text-xs font-semibold tracking-tight text-[#D5C7A1] shadow-lg shadow-black/40">
            GEO
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A14D]">
              Geology alumni and geo sphere
            </p>
            <p className="text-sm font-semibold text-slate-50">
              The M. S. University of Baroda
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about" className="hover:text-[#C8A14D]">
            About
          </Link>
          <Link href="/programs" className="hover:text-[#C8A14D]">
            Programs
          </Link>
          <Link href="/alumni" className="hover:text-[#C8A14D]">
            Alumni
          </Link>
          <Link href="/careers" className="hover:text-[#C8A14D]">
            Careers
          </Link>
          <Link href="/news-events" className="hover:text-[#C8A14D]">
            News & Events
          </Link>
          <Link href="/be-member" className="rounded-full border border-[#C8A14D]/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
            Be a Member
          </Link>
        </div>
      </nav>
    </header>
  );
}
