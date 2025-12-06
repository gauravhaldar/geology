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
              A legacy shaped by Prof. Dr. S. S. Mayer.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Founded nearly seven decades ago, the Department of Geology has steadily grown into a
              nationally recognised centre for teaching and research in Earth sciences. Classroom
              learning is closely interwoven with laboratory training, field camps, mapping
              exercises, and industry-linked projects.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Generations of faculty, researchers, technical staff and students have contributed to
              this heritage, creating a culture of rigour, curiosity and grounded field experience.
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
              A short film introducing our field camps, laboratories, classrooms and alumni
              stories.
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
