export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. K. Desai",
      role: "Principal Geologist, Global Mining Firm",
      quote:
        "The department strong emphasis on field mapping and core logging gave me the confidence to lead exploration teams across challenging terrains.",
    },
    {
      name: "Ms. S. Iyer",
      role: "Hydrogeology Consultant",
      quote:
        "From groundwater projects to environmental impact assessments, the fundamentals I learnt here remain my daily toolkit.",
    },
  ];

  return (
    <section className="bg-[#0f1816] py-14 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Alumni Voices
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              Testimonials that build trust.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Short, authentic stories from alumni across sectors reassure prospective students and
              parents about the department&apos;s impact.
            </p>
          </div>

          <div className="grid w-full gap-4 md:max-w-xl md:grid-cols-2">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#101b18] p-4 text-xs shadow-md shadow-black/40"
              >
                <p className="text-slate-100">{item.quote}</p>
                <figcaption className="mt-4 border-t border-white/10 pt-3 text-[11px] text-slate-300">
                  <span className="block font-semibold text-slate-50">{item.name}</span>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
