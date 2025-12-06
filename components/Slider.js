"use client";

import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 5000;

export default function Slider() {
  const slides = [
    {
      src: "/sl1.jpg",
      alt: "Campus view",
      caption: "Historic campus of The Maharaja Sayajirao University of Baroda",
    },
    {
      src: "/sl2.jpg",
      alt: "Geology department building",
      caption: "Geology Department – academic blocks and labs",
    },
    {
      src: "/sl3.png",
      alt: "Students in field",
      caption: "Students and faculty on geological field work",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [slides.length]);

  function goTo(index) {
    setCurrent(index);
  }

  const activeSlide = slides[current];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1412] shadow-lg shadow-black/40">
      <div className="relative h-64 w-full sm:h-80 md:h-96">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,77,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(29,60,52,0.9),_#050908)] opacity-70" />

        <img
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          className="relative h-full w-full object-cover mix-blend-normal"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F1E0B3]">
            Campus & Department Glimpses
          </p>
          <p className="mt-2 max-w-xl text-xs text-slate-100 sm:text-sm">
            {activeSlide.caption}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 sm:px-6">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={`h-1.5 w-6 rounded-full border border-white/10 transition-colors duration-200 ${
                  index === current ? "bg-emerald-400" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
