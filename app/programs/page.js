"use client";

import { useState } from "react";

const degreePrograms = [
  {
    id: "bsc",
    label: "B.Sc. Geology",
    level: "Undergraduate",
    duration: "3 years (6 semesters)",
    overview:
      "Foundation in earth materials, geomorphology, structural geology and basic field techniques. Ideal entry point for students beginning their journey in Earth sciences.",
    highlights: [
      "Core training in minerals, rocks and fossils",
      "Introductory field camps and mapping exercises",
      "Laboratory classes in petrology, palaeontology and geomorphology",
    ],
  },
  {
    id: "msc",
    label: "M.Sc. Geology",
    level: "Postgraduate",
    duration: "2 years (4 semesters)",
    overview:
      "Advanced specialization in key domains such as economic geology, basin analysis, hydrogeology, remote sensing and environmental geology.",
    highlights: [
      "Advanced field training and independent mapping projects",
      "Electives in resource exploration and environmental assessment",
      "Dissertation / research project with faculty guidance",
    ],
  },
  {
    id: "phd",
    label: "Ph.D. in Geology",
    level: "Doctoral",
    duration: "Minimum 3 years",
    overview:
      "Research-intensive program in diverse areas of solid earth, surface processes, applied geology and allied Earth-system sciences.",
    highlights: [
      "Supervised research with access to laboratories and field sites",
      "Opportunities to publish and present at conferences",
      "Collaborations with industry, research institutes and agencies",
    ],
  },
];

const specialisations = [
  "Sedimentology & Basin Analysis",
  "Igneous, Metamorphic & Structural Geology",
  "Economic Geology & Ore Deposits",
  "Hydrogeology & Water Resources",
  "Geomorphology & Quaternary Geology",
  "Remote Sensing & GIS",
  "Environmental Geology & Natural Hazards",
  "Petroleum Geology",
];

const tabs = [
  { id: "curriculum", label: "Curriculum Snapshot" },
  { id: "fieldwork", label: "Fieldwork & Labs" },
  { id: "eligibility", label: "Eligibility & Admissions" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProgramsPage() {
  const [activeDegreeId, setActiveDegreeId] = useState("bsc");
  const [activeTab, setActiveTab] = useState("curriculum");

  const activeDegree =
    degreePrograms.find((program) => program.id === activeDegreeId) ?? degreePrograms[0];

  return (
    <main className="min-h-screen bg-[#050908] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[1.4fr,1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Academic Programs in Geology
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              From classroom to outcrop, from hand specimen to satellite image.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Use this page to showcase the undergraduate, postgraduate and doctoral programs
              offered by the department. You can describe structure, strengths, unique
              opportunities and exit pathways for each program.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              The content below is a placeholder template for you to replace with detailed
              information on the actual programs, intake capacity, syllabi and regulations.
            </p>
          </div>

          {/* Degree selector card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs shadow-xl shadow-black/40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Choose a program
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {degreePrograms.map((program) => (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setActiveDegreeId(program.id)}
                  className={classNames(
                    "w-full rounded-md px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                    activeDegreeId === program.id
                      ? "bg-[#C8A14D] text-[#1D3C34] shadow-inner"
                      : "text-slate-200 hover:bg-white/10 hover:text-slate-50"
                  )}
                >
                  {program.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-300">
              Use this selector to highlight key differences between your B.Sc., M.Sc. and
              Ph.D. offerings.
            </p>
          </div>
        </section>

        {/* Active degree details */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-6 text-xs shadow-xl shadow-black/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
                {activeDegree.level}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                {activeDegree.label}
              </h2>
            </div>
            <p className="text-[11px] text-[#F8ECD0]">{activeDegree.duration}</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#F8ECD0]">
            {activeDegree.overview}
          </p>

          <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3">
            {activeDegree.highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-black/25 px-3 py-3"
              >
                <p className="text-slate-100">{item}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-2 text-[11px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={classNames(
                    "rounded-full border px-3 py-1 font-semibold uppercase tracking-[0.18em] transition",
                    activeTab === tab.id
                      ? "border-[#F1E0B3] bg-[#F1E0B3] text-[#1D3C34]"
                      : "border-white/20 text-slate-100 hover:bg-white/10"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4 text-[11px] leading-relaxed text-[#F8ECD0]">
              {activeTab === "curriculum" && (
                <>
                  <p>
                    Use this section to describe semester-wise structure, core and elective
                    courses, and integration of fieldwork with classroom teaching. You could
                    link to downloadable syllabi or curriculum handbooks here.
                  </p>
                  <p className="mt-2">
                    For example, highlight introductory Earth science modules in early
                    semesters, followed by specialised papers in stratigraphy, tectonics,
                    geophysics, environmental geology and applied geosciences.
                  </p>
                </>
              )}

              {activeTab === "fieldwork" && (
                <>
                  <p>
                    Geology programs are distinguished by intensive field-based learning. Use
                    this area to describe compulsory field camps, mapping projects and
                    industrial/organisation visits.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    <li>
                      Short local field excursions for lithology and structure identification.
                    </li>
                    <li>
                      Multi-day mapping camps in diverse terrains (e.g., cratons, fold belts,
                      sedimentary basins).
                    </li>
                    <li>
                      Visits to mines, exploration sites, water supply projects or research
                      institutes.
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "eligibility" && (
                <>
                  <p>
                    Here you can specify eligibility criteria, admission process, entrance
                    tests, reservation policies and important dates for each program.
                  </p>
                  <p className="mt-2">
                    For instance, mention required subjects at school level for B.Sc.
                    admissions, prior degrees for M.Sc., and areas of interest plus
                    qualifying exams for Ph.D. entry.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Specialisations chips */}
        <section className="mt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
            Possible areas of focus
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Specialisations and thematic domains.
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            Replace or reorder these chips to match the strengths and focus areas of your
            department.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            {specialisations.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Info band */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Next steps
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              Link this section to prospectus, syllabus documents and admission portals.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              You can convert these buttons into external or internal links for application
              forms, downloadable curricula, fee structure and contact details for the
              program coordinators.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            <button className="rounded-full border border-[#C8A14D]/70 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
              View Prospectus
            </button>
            <button className="rounded-full border border-slate-400/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-100 hover:bg-slate-100 hover:text-[#050908]">
              How to Apply
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
