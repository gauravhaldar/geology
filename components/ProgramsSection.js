"use client";

import { useState } from "react";

const PROGRAMS = [
  {
    id: "bsc",
    title: "B.Sc. Geology",
    duration: "3 years, full-time",
    eligibility: "Higher secondary with science stream (PCM/PCB).",
    fieldWork:
      "Introductory field camps, local mapping, stratigraphic logging and basic surveying.",
    subjects:
      "Mineralogy, Petrology, Structural Geology, Stratigraphy, Palaeontology, Geomorphology.",
    careers:
      "Entry-level positions in exploration, environmental consultancy, laboratories and as preparation for competitive exams.",
  },
  {
    id: "msc",
    title: "M.Sc. Geology",
    duration: "2 years, full-time",
    eligibility: "B.Sc. degree in Geology or allied Earth science disciplines.",
    fieldWork:
      "Advanced field training, thematic mapping, ore and basin studies, dissertation-based field projects.",
    subjects:
      "Ore Geology, Sedimentology, Metamorphic Petrology, Geochemistry, Geophysics, Hydrogeology.",
    careers:
      "Technical roles in exploration & mining, groundwater, engineering geology, government organisations and research projects.",
  },
  {
    id: "msc-applied",
    title: "M.Sc. Applied Geology",
    duration: "2 years, full-time",
    eligibility: "B.Sc. in Geology/Applied Geology or related fields, as per university norms.",
    fieldWork:
      "Industry-oriented field work with focus on applied mapping, remote sensing & GIS, and resource evaluation.",
    subjects:
      "Remote Sensing & GIS, Petroleum Geology, Engineering Geology, Environmental Geology, Exploration Techniques.",
    careers:
      "Applied roles in oil & gas, mineral exploration, infrastructure projects, environmental and geotechnical consulting.",
  },
  {
    id: "phd",
    title: "Ph.D. in Geology",
    duration: "Minimum 3 years (as per regulations)",
    eligibility: "Postgraduate degree in Geology/Applied Geology with eligibility as per university rules.",
    fieldWork:
      "Research-specific field campaigns, analytical work, and collaborative projects with national agencies.",
    subjects:
      "Research across igneous, sedimentary and metamorphic terrains, groundwater, tectonics, geochemistry, and more.",
    careers:
      "Academic and research careers in universities, national institutes, laboratories and specialised industry R&D units.",
  },
];

export default function ProgramsSection() {
  const [active, setActive] = useState("bsc");
  const program = PROGRAMS.find((p) => p.id === active) ?? PROGRAMS[0];

  return (
    <section id="programs" className="bg-[#101a17] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Academic Programs
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              Comprehensive training from foundation to research.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Each program is designed to balance classroom teaching, laboratory skills and
              compulsory field work so that students graduate as confident, field-ready geologists.
            </p>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1412] p-2 text-xs shadow-lg shadow-black/40">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PROGRAMS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={`rounded-lg border px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active === p.id
                      ? "border-[#C8A14D] bg-[#3b2f16] text-[#F1E0B3]"
                      : "border-white/10 bg-transparent text-slate-200 hover:border-[#C8A14D]/60 hover:text-[#F1E0B3]"
                  }`}
                >
                  {p.title.replace("M.Sc.", "M.Sc").replace("B.Sc.", "B.Sc")}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                {program.title}
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold tracking-wide text-slate-300">Duration</p>
                  <p className="text-xs text-slate-100">{program.duration}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-wide text-slate-300">Eligibility</p>
                  <p className="text-xs text-slate-100">{program.eligibility}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[11px] font-semibold tracking-wide text-slate-300">
                  Field Work Requirements
                </p>
                <p className="mt-1 text-xs text-slate-100">{program.fieldWork}</p>
              </div>
              <div className="mt-3">
                <p className="text-[11px] font-semibold tracking-wide text-slate-300">
                  Core & Complimentary Courses
                </p>
                <p className="mt-1 text-xs text-slate-100">{program.subjects}</p>
              </div>
              <div className="mt-3">
                <p className="text-[11px] font-semibold tracking-wide text-slate-300">
                  Career Paths
                </p>
                <p className="mt-1 text-xs text-slate-100">{program.careers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
