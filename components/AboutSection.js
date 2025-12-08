export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0f1815] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.9fr] md:items-start">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              About the Department
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              A legacy shaped by The Department of Geology
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              The Department of Geology was established in the year 1951 initially in the 
              Faculty of Technology and Engineering with limited staff and equipment's with undergraduate teaching.
               The present venue of the Department in the Faculty of Science was established in 1965 with full fledged undergraduate,
                postgraduate courses and research programmes in varied disciplines of Geology.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              An extension wing was added in 1987. At present there are 12 faculty members in the Department, of which six are Professors.
            </p>

            <div className="mt-6 grid gap-4 text-xs sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A14D]">
                  70-Year Timeline
                </p>
                <p className="mt-2 text-slate-100">
                  From early field parties to modern GIS and remote sensing.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A14D]">
                  Faculty Legacy
                </p>
                <p className="mt-2 text-slate-100">
                  Professors, researchers and mentors who shaped Indian geology.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A14D]">
                  Publications & Awards
                </p>
                <p className="mt-2 text-slate-100">
                  National and international recognitions across sub-disciplines.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <button className="rounded-full border border-[#C8A14D]/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
                Download Brochure (PDF)
              </button>
              <button className="rounded-full border border-slate-500/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-200 hover:bg-slate-200 hover:text-[#0f1815]">
                Achievements & Reports
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-5 shadow-xl shadow-black/50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F1E0B3]">
              Department Video Intro
            </p>
            <p className="mt-3 text-xs text-[#F8ECD0]">
              Hon'ble Chancellor's Address On The 71st Foundation Day Of University.
            </p>
            <div className="mt-4 w-full overflow-hidden rounded-xl border border-white/15 bg-black/40">
              <video
                src="/video.mp4"
                controls
                className="h-44 w-full bg-black object-cover sm:h-100"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
