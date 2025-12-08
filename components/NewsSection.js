export default function NewsSection() {
  const items = [
    {
      title: "Fresher Party Of Regular Batch",
      date: "February 2025",
      detail: "Students interacted with each other and celebrated their fresher party",
      image: "/news/1.jpeg",
    },
    {
      title: "Meeting with Dr. Ajit Kothari",
      date: "December 2024",
      detail: "Dr. Ajit Kothari meeting ",
      image: "/news/2.jpeg",
    },
  ];

  return (
    <section id="news" className="bg-[#0c1513] py-14 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              News & Events
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              A living, active department.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Keep this space updated with upcoming seminars, workshops, alumni talks, field camps
              and student achievements.
            </p>
          </div>

          <div className="w-full max-w-xl space-y-3 text-xs">
            {items.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40"
              >
                {item.image && (
                  <div className="h-32 w-full overflow-hidden border-b border-white/10 bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                    {item.date}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-slate-200">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
