"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0e1715]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm text-slate-100">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-[75px] w-[75px] items-center justify-center overflow-hidden rounded-full bg-[#1D3C34] shadow-lg shadow-black/40">
            <Image
              src="/logo.png"
              alt="Geology Alumni and Geo Sphere logo"
              width={75}
              height={75}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A14D]">
              Geology alumni and geo sphere
            </p>
            <p className="text-sm font-semibold text-slate-50">
              The M. S. University of Baroda
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
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
          <Link
            href="/be-member"
            className="rounded-full border border-[#C8A14D]/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]"
          >
            Be a Member
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-black/20 px-2 py-1 text-xs text-slate-100 hover:border-[#C8A14D]/60 hover:text-[#C8A14D] md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="mr-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Menu
          </span>
          <span className="flex flex-col gap-[3px]">
            <span
              className={`block h-[1px] w-4 bg-current transition-transform duration-200 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1px] w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1px] w-4 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#050908] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            <Link
              href="/about"
              className="py-1 text-slate-100 hover:text-[#C8A14D]"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="py-1 text-slate-100 hover:text-[#C8A14D]"
              onClick={() => setOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/alumni"
              className="py-1 text-slate-100 hover:text-[#C8A14D]"
              onClick={() => setOpen(false)}
            >
              Alumni
            </Link>
            <Link
              href="/careers"
              className="py-1 text-slate-100 hover:text-[#C8A14D]"
              onClick={() => setOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/news-events"
              className="py-1 text-slate-100 hover:text-[#C8A14D]"
              onClick={() => setOpen(false)}
            >
              News & Events
            </Link>
            <Link
              href="/be-member"
              className="mt-1 rounded-full border border-[#C8A14D]/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]"
              onClick={() => setOpen(false)}
            >
              Be a Member
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
