export default function AlumniSection() {
  const sampleAlumni = [
    {
      name: "Dr. A. Patel",
      batch: "M.Sc. Geology, 2004",
      role: "Senior Geoscientist, ONGC",
      country: "India",
      sector: "Government / Exploration",
    },
    {
      name: "Ms. R. Shah",
      batch: "B.Sc. Geology, 2010",
      role: "Hydrogeologist, International NGO",
      country: "Kenya",
      sector: "Sustainable Development",
    },
    {
      name: "Dr. V. Mehta",
      batch: "Ph.D. Geology, 2016",
      role: "Research Scientist, University of Toronto",
      country: "Canada",
      sector: "Academia / Research",
    },
  ];

  return (
    <section id="alumni" className="bg-[#0c1513] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Alumni Success & Directory
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              A global network of Earth scientists.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Alumni from the department serve in oil and gas, mineral exploration, groundwater,
              environmental consulting, national research organisations and universities worldwide.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              This section can grow into a full searchable directory with filters by batch, country
              and sector, as well as an interactive world map.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-900/20 p-4 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200">
                Alumni Registration Form (Concept)
              </p>
              <p className="text-slate-100">
                Invite alumni to submit their details through a simple online form. Fields can
                include batch, current role, organisation, country, contact and a short message for
                students.
              </p>
              <button className="mt-2 rounded-full border border-emerald-400/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100 hover:bg-emerald-400 hover:text-[#0c1513]">
                Register as Alumni
              </button>
            </div>
          </div>

          <div className="w-full max-w-xl space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {sampleAlumni.map((alum) => (
                <div
                  key={alum.name}
                  className="rounded-xl border border-white/10 bg-[#101b18] p-3 text-xs shadow-md shadow-black/40"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C8A14D]">
                    {alum.country}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">{alum.name}</p>
                  <p className="text-[11px] text-slate-300">{alum.batch}</p>
                  <p className="mt-2 text-slate-100">{alum.role}</p>
                  <p className="mt-1 text-[11px] text-slate-300">{alum.sector}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#09100f] p-4 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Alumni Distribution Map
              </p>
              <p className="mt-2 text-slate-200">
                Embed a world map visual here (for example using a mapping library or a static
                illustration) to showcase alumni presence across countries.
              </p>
              <div className="mt-3 h-32 rounded-xl border border-emerald-500/25 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
              <p className="mt-2 text-[11px] text-slate-400">
                *Placeholder illustration – replace with interactive or static map.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
