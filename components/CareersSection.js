export default function CareersSection() {
  const placements = [
    "Oil & Natural Gas Corporation (ONGC)",
    "Geological Survey of India (GSI)",
    "Gujarat Mineral Development Corporation (GMDC)",
    "Defence Research and Development Organisation (DRDO)",
  ];

  return (
    <section id="careers" className="bg-[#101a17] py-14 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] md:items-start">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Careers & Opportunities
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              Pathways into industry, government and research.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Graduates and postgraduates from the department have joined exploration and mining
              companies, groundwater and environmental consultancies, government agencies and
              academic institutions.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1412] p-4 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Representative Recruiters
              </p>
              <ul className="mt-2 space-y-1 text-slate-100">
                {placements.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div className="rounded-2xl border border-white/10 bg-[#0c1513] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Internships & Campus Activities
              </p>
              <p className="mt-2 text-slate-100">
                Student chapters, invited industry lectures, field-based mini-projects and summer
                internships help students understand real-world geological problem solving.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0c1513] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Ongoing Research Projects
              </p>
              <p className="mt-2 text-slate-100">
                Highlight active projects with funding agencies, topics, and opportunities for
                student involvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
