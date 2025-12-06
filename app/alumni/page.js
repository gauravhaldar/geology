"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sliderAlumni = [
  {
    name: "Alumnus Name 1",
    title: "Geologist, Exploration & Mining",
    quote:
      "This is a sample quote from an alumnus. You can replace this text with real stories from your graduates.",
    image: "/alumni/slide-1.jpg",
    batch: "Batch 19XX-19XX",
  },
  {
    name: "Alumnus Name 2",
    title: "Research Scientist, Earth Sciences",
    quote:
      "Use this area to highlight impact, fieldwork memories, or how the department shaped career journeys.",
    image: "/alumni/slide-2.jpg",
    batch: "Batch 20XX-20XX",
  },
  {
    name: "Alumnus Name 3",
    title: "Energy & Sustainability Consultant",
    quote:
      "You can showcase global roles, leadership positions and contributions to industry or academia.",
    image: "/alumni/slide-3.jpg",
    batch: "Batch 20XX-20XX",
  },
];

const highlightAlumni = [
  {
    name: "Alumnus A",
    role: "Leadership / Industry",
    image: "/alumni/highlight-1.jpg",
  },
  {
    name: "Alumnus B",
    role: "Research / Academia",
    image: "/alumni/highlight-2.jpg",
  },
  {
    name: "Alumnus C",
    role: "Entrepreneurship",
    image: "/alumni/highlight-3.jpg",
  },
  {
    name: "Alumnus D",
    role: "Public Service",
    image: "/alumni/highlight-4.jpg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useAutoplaySlider(length, delay = 7000) {
  const [index, setIndex] = useState(0);

  useEffect(() => 
{
    if (length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(id);
  }, [length, delay]);

  const goTo = (i) => setIndex(((i % length) + length) % length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return { index, next, prev, goTo };
}

export default function AlumniPage() {
  const { index, next, prev, goTo } = useAutoplaySlider(sliderAlumni.length, 8000);
  const activeSlide = sliderAlumni[index] ?? sliderAlumni[0];

  return (
    <main className="min-h-screen bg-[#050908] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero / Intro */}
        <section className="grid gap-10 md:grid-cols-[1.4fr,1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Alumni of Geology Department
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              A global community shaped by the Earth.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              This alumni page is a dedicated space to celebrate your graduates, their journeys
              and their contributions across industry, academia, research and public service.
              You can replace all of this placeholder content with real data and images.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Use it to feature distinguished alumni, cohort memories, reunion highlights,
              and ongoing collaborations between the department and its vibrant alumni
              network.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <button className="rounded-full border border-[#C8A14D]/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
                Share Your Story
              </button>
              <button className="rounded-full border border-slate-500/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-200 hover:bg-slate-200 hover:text-[#0f1815]">
                Alumni Association
              </button>
            </div>
          </div>

          {/* Main slider */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-5 shadow-xl shadow-black/50">
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/40">
              <div className="relative w-full aspect-video">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.name}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 text-xs sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F1E0B3]">
                  Featured Alumni
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  {activeSlide.name}
                </p>
                <p className="text-[11px] text-slate-200">{activeSlide.title}</p>
                <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-[#F8ECD0]">
                  {activeSlide.quote}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  {activeSlide.batch}
                </p>
              </div>

              {/* Slider controls */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 text-[10px]">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-white/30 bg-black/40 px-2 py-1 font-semibold uppercase tracking-[0.18em] text-slate-100 hover:bg-white/15"
                >
                  Prev
                </button>
                <div className="flex gap-1">
                  {sliderAlumni.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      className={classNames(
                        "h-1.5 w-4 rounded-full bg-white/20 transition",
                        i === index && "bg-[#F1E0B3] w-6"
                      )}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-white/30 bg-black/40 px-2 py-1 font-semibold uppercase tracking-[0.18em] text-slate-100 hover:bg-white/15"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight grid */}
        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
                Alumni Highlights
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                Snapshots from the alumni galaxy.
              </h2>
            </div>
            <p className="max-w-xl text-xs text-slate-300">
              Replace these cards with real alumni photos and short captions – awards, field
              photos, reunion moments, keynote talks and more.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlightAlumni.map((alumnus) => (
              <div
                key={alumnus.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/40"
              >
                <div className="relative h-40 w-full overflow-hidden bg-black/40">
                  <Image
                    src={alumnus.image}
                    alt={alumnus.name}
                    width={400}
                    height={260}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-3 text-xs">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                    {alumnus.role}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">
                    {alumnus.name}
                  </p>
                  <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-slate-300">
                    Short description or achievement highlight can be written here for this
                    alumnus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-action band */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1D3C34] via-[#121b19] to-[#444A53] p-6 text-xs shadow-xl shadow-black/50 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
              Stay connected
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              Invite alumni to register, mentor, collaborate and support the next generation.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-[#F8ECD0]">
              You can link this section to an alumni registration form, mentoring initiative,
              fundraising page or social media groups.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            <button className="rounded-full border border-[#F1E0B3]/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3] hover:bg-[#F1E0B3] hover:text-[#1D3C34]">
              Register as Alumni
            </button>
            <button className="rounded-full border border-slate-400/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100 hover:bg-slate-100 hover:text-[#050908]">
              Become a Mentor
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
