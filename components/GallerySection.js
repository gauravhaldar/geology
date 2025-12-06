export default function GallerySection() {
  const items = [
    { label: "Field camps in the Himalaya", src: "/gallery/1.jpeg" },
    { label: "Coastal geomorphology excursions", src: "/gallery/2.jpeg" },
    { label: "Thin-section petrography lab", src: "/gallery/3.jpeg" },
    { label: "Basin analysis workshop", src: "/gallery/4.jpeg" },
  ];

  return (
    <section className="bg-[#0b1412] py-14 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Heritage & Field Gallery
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              70 years of photographs and field memories.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Curate albums from archives, field notebooks, laboratory sessions and alumni meets to
              visually narrate the story of the department.
            </p>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Vibrant Startup and Technology Summit Gallery
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              70 years of photographs and field memories.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              The Dynamic and Mobile Advt innovation won an award at Vibrant Startup and Technology Summit 2019
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 md:max-w-xl">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#101915] p-3 text-xs shadow-md shadow-black/40"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg border border-white/15 bg-black/30">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E7C4]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
