"use client";

import { useState } from "react";

const careerSectors = [
  {
    id: "industry",
    label: "Industry & Exploration",
    description:
      "Mining and mineral exploration companies, oil & gas, geo-technical firms and environmental consultancies.",
  },
  {
    id: "government",
    label: "Government & Public Sector",
    description:
      "Geological surveys, groundwater departments, disaster management authorities, regulatory and planning bodies.",
  },
  {
    id: "academia",
    label: "Academia & Research",
    description:
      "Universities, research institutes, laboratories and multi-disciplinary Earth system science centres.",
  },
  {
    id: "other",
    label: "Allied & Emerging Areas",
    description:
      "Data science in geoscience, geospatial analytics, climate risk, sustainability and science communication.",
  },
];

const steps = [
  {
    title: "Build strong foundations",
    text: "Focus on core courses in mineralogy, petrology, structural geology, stratigraphy and geomorphology.",
  },
  {
    title: "Engage in fieldwork & projects",
    text: "Make the most of mapping camps, project work and independent study courses to gain practical insights.",
  },
  {
    title: "Gain exposure",
    text: "Participate in internships, industry visits, online courses and workshops to understand current practices.",
  },
  {
    title: "Connect & prepare",
    text: "Interact with alumni, attend career talks and prepare for competitive exams or interviews as relevant.",
  },
];

const faqs = [
  {
    q: "What kinds of roles do geology graduates typically take up?",
    a: "Use this area to describe roles such as exploration geologist, hydrogeologist, environmental consultant, geo-technical engineer, researcher and educator.",
  },
  {
    q: "Are internships or campus placements supported by the department?",
    a: "Replace this text with details about placement cells, MoUs with organisations, internship support and alumni networks.",
  },
  {
    q: "Which competitive exams are relevant after a degree in geology?",
    a: "You may list national and state-level exams (e.g., GATE, NET, UPSC/State PSC geology posts) and specialised recruitment drives.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CareersPage() {
  const [activeSectorId, setActiveSectorId] = useState("industry");

  const activeSector =
    careerSectors.find((sector) => sector.id === activeSectorId) ?? careerSectors[0];

  return (
    <main className="min-h-screen bg-[#050908] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[1.4fr,1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Careers with Geology
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              Turning curiosity about the Earth into meaningful careers.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              This page can help prospective and current students understand the range of
              opportunities after completing programs in geology. All text on this page is
              placeholder – replace it with your department-specific data, examples and
              contacts.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              You can outline typical career paths, highlight employer organisations, and
              showcase how alumni have contributed across industries and regions.
            </p>
          </div>

          {/* Sector selector */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs shadow-xl shadow-black/40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Career sectors
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {careerSectors.map((sector) => (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setActiveSectorId(sector.id)}
                  className={classNames(
                    "w-full rounded-md px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                    activeSectorId === sector.id
                      ? "bg-[#C8A14D] text-[#1D3C34] shadow-inner"
                      : "text-slate-200 hover:bg-white/10 hover:text-slate-50"
                  )}
                >
                  {sector.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-300">
              Replace these sectors with the most relevant options for your graduates and add
              more as needed.
            </p>
          </div>
        </section>

        {/* Active sector details */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-6 text-xs shadow-xl shadow-black/50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
            Career pathway spotlight
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
            {activeSector.label}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#F8ECD0]">
            {activeSector.description}
          </p>

          <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                Example roles
              </p>
              <p className="mt-2 text-slate-100">
                Replace this text with specific job titles that your alumni typically occupy in
                this sector.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                Skills & preparation
              </p>
              <p className="mt-2 text-slate-100">
                Mention key courses, software tools, field experiences or certifications that
                strengthen readiness for this pathway.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                Representative organisations
              </p>
              <p className="mt-2 text-slate-100">
                List a few organisations, agencies or institutes where your graduates have
                worked or interned.
              </p>
            </div>
          </div>
        </section>

        {/* Steps / guidance */}
        <section className="mt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
            Planning your pathway
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
            Suggested steps during your time in the department.
          </h3>
          <div className="mt-4 grid gap-4 text-[11px] sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                  {step.title}
                </p>
                <p className="mt-2 leading-relaxed text-slate-200">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
            Frequently asked questions
          </p>
          <p className="mt-2 text-[11px] text-slate-300">
            Replace these items with questions your students commonly ask about careers,
            placements and further studies.
          </p>

          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="font-semibold text-slate-50">{item.q}</p>
                <p className="mt-1 leading-relaxed text-slate-200">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Info band */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Career guidance & support
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              Use this space to share contact details for career cells, faculty coordinators or
              alumni volunteers.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              You may link to separate pages for placements and internships, or embed
              downloadable reports summarising placement statistics and recruiter lists.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            <button className="rounded-full border border-[#C8A14D]/70 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
              Contact Career Cell
            </button>
            <button className="rounded-full border border-slate-400/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-100 hover:bg-slate-100 hover:text-[#050908]">
              Placement Reports
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
