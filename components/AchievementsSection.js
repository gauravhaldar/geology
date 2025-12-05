export default function AchievementsSection() {
  const items = [
    {
      title: "National Awards",
      description:
        "Faculty and alumni recognised with national awards for contributions in stratigraphy, basin studies and mineral exploration.",
    },
    {
      title: "Publications",
      description:
        "Research papers in leading international and national journals across sedimentology, tectonics, petrology and geochemistry.",
    },
    {
      title: "Collaborations",
      description:
        "Research and consultancy projects with ONGC, GSI, GMDC and allied government and industry partners.",
    },
  ];

  return (
    <section className="bg-[#101a18] py-14 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
          Awards, Research & Publications
        </h2>
        <p className="mt-3 text-2xl font-semibold text-slate-50">
          Scientific credibility built over decades.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0c1513] p-4 text-xs shadow-md shadow-black/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                {item.title}
              </p>
              <p className="mt-3 text-slate-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
