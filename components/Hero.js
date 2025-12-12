import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1412] pb-20 pt-2 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,77,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(29,60,52,0.9),_#050908)] opacity-90" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:gap-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A14D]">
            70 Years of Geological Excellence
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Building Earth Scientists for the World.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-200">
            Established nearly 70 years ago by Prof. Dr. S. S. Mayer, the Geology Department of
            The Maharaja Sayajirao University of Baroda stands as one of India&apos;s most prominent
            centres for geological education and research. With 23 specialised subjects, extensive
            field-based learning, and more than 125 PhDs, our alumni today contribute across global
            industries, national research organisations, and sustainable development sectors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <Link href="/programs">
              <button className="rounded-full border border-emerald-500/50 bg-emerald-900/30 px-3 py-1 text-emerald-100 hover:bg-emerald-900/50 transition-colors cursor-pointer">
                Field-based learning culture
              </button>
            </Link>
            <Link href="/alumni">
              <button className="rounded-full border border-[#C8A14D]/40 bg-[#3b2f16]/60 px-3 py-1 text-[#F5E7C4] hover:bg-[#3b2f16]/80 transition-colors cursor-pointer">
                Strong alumni network
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="order-2 sm:order-1 rounded-2xl border border-white/10 bg-[#111917]/80 p-4 shadow-lg shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
                Academic Depth
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-50">23</p>
              <p className="text-xs text-slate-300">Specialised subjects spanning pure & applied geology.</p>
            </div>
            <div className="order-3 sm:order-2 rounded-2xl border border-white/10 bg-[#111917]/80 p-4 shadow-lg shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
                Research Legacy
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-50">125+</p>
              <p className="text-xs text-slate-300">Doctoral degrees completed under the department.</p>
            </div>
            <div className="order-1 sm:order-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] to-[#111917] p-4 shadow-lg shadow-black/40 sm:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F1E0B3]">
                Where Our Alumni Are Today
              </p>
              {/* <p className="mt-2 text-xs text-[#F8ECD0]">
                Alumni are placed across more than <span className="font-semibold">10 countries</span> in
                resource exploration companies, government organisations, research institutes and
                universities.
              </p> */}
              <p className="mt-2 text-xs text-[#F8ECD0]">
                Graduates of this department now work across the Globe — in the <span className="font-semibold">USA, UK, Africa, the Gulf nations, India, and neighbouring countries</span> in
               — across government organizations, private companies, and research institutions.
              </p>
              <div className="mt-4 h-28 rounded-xl border border-emerald-500/25 bg-[url('/hero.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
