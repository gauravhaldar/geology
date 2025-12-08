"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
              Department of Geology, Faculty of Science
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              The Department of Geology was established in 1951 in the Faculty of
              Technology and Engineering. In 1965, it moved to its present venue in the
              Faculty of Science with full-fledged undergraduate, postgraduate and
              research programmes. An extension wing was added in 1987.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Today, the department hosts 12 faculty members, including six Professors,
              and is known for high-quality research and strong student mentoring.
              Graduates build careers in industry, government, academia and emerging
              geoscience domains.
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
              These broad sectors represent common pathways for our geology graduates,
              from exploration and resource management to advanced research and
              interdisciplinary careers.
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
                Exploration geologist, hydrogeologist, engineering geologist, petroleum
                geoscientist, environmental consultant, GIS & remote sensing analyst,
                researcher, teacher and science communicator.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                Skills & preparation
              </p>
              <p className="mt-2 text-slate-100">
                Strong grounding in field geology, mineralogy, petrology, structural
                geology and stratigraphy; exposure to geophysics, hydrogeology and
                environmental geology; training in mapping, core logging, data
                interpretation, and relevant software tools.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/25 px-3 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                Representative organisations
              </p>
              <p className="mt-2 text-slate-100">
                Geological Survey of India, Central Ground Water Board, State
                groundwater and mining departments, oil & gas companies, mineral
                exploration agencies, environmental consultancies and academic
                institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Department, research and programmes */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-xs shadow-xl shadow-black/40">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
            About the department
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            The Department is known for producing high quality research publications in
            reputed national and international journals. All staff members have excellent
            academic credentials and are recognised research guides, with some members
            having very high citation indices.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            Research is actively pursued in diverse areas, including:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[11px] leading-relaxed text-slate-100">
            <li>Quaternary climatic and hydrogeological changes in Western India.</li>
            <li>
              Evolution of coastal plains and sediment disposal systems along the Gulf of
              Cambay and Kachchh.
            </li>
            <li>Geometry and nature of active faults in Gujarat.</li>
            <li>Evolution of the Great and Little Rann of Kachchh using subsurface cores.</li>
            <li>
              Environmental conditions during the late Quaternary in the Nal-Bhal
              corridor.
            </li>
            <li>
              Structural and metamorphic history of the Aravalli Group of rocks of NE
              Gujarat.
            </li>
            <li>
              Ichnological and sedimentological studies of Mesozoic and Cenozoic
              sequences in Gujarat.
            </li>
          </ul>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
                Undergraduate programmes
              </p>
              <div className="mt-3 space-y-3 text-[11px] leading-relaxed text-slate-100">
                <div>
                  <p className="font-semibold text-slate-50">
                    Bachelor of Science (Honors) in Geology
                  </p>
                  <p>
                    A 3-year (6 semester) regular undergraduate programme offered by the
                    Department of Geology.
                  </p>
                  <p className="mt-1">
                    Eligibility is based on 12th standard theory marks of three science
                    subjects only, with an eligibility percentage used for merit list
                    preparation as per MSUB rules.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">
                    Bachelor of Science (Honors) in Geology (HPP)
                  </p>
                  <p>
                    A 3-year (6 semester) Higher Payment Programme (HPP) version of the
                    B.Sc. (Honors) in Geology.
                  </p>
                  <p className="mt-1">
                    Admission is through the MSUB portal, following the same basic
                    eligibility framework for 12th science theory marks.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
                Postgraduate & doctoral programmes
              </p>
              <div className="mt-3 space-y-3 text-[11px] leading-relaxed text-slate-100">
                <div>
                  <p className="font-semibold text-slate-50">Master of Science in Geology</p>
                  <p>
                    A 2-year (4 semester) regular postgraduate programme. Admission is
                    based solely on the merit of an entrance test.
                  </p>
                  <p className="mt-1">
                    Applicants must hold a B.Sc. or equivalent (10+2+3) in a relevant
                    subject with minimum marks as per category-wise requirements, and
                    candidates appearing in the final year may also apply.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Ph.D. in Geology</p>
                  <p>
                    Doctoral research in geology is offered under the Faculty of Science,
                    with emphasis on advanced field, laboratory and analytical work in the
                    department&apos;s thrust areas.
                  </p>
                </div>
              </div>
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
            MSUB in News & events
          </p>
          <p className="mt-2 text-[11px] text-slate-300">
            A glimpse of recent coverage and activities related to the university and
            the Department of Geology.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-50">
                MSUB in News
              </p>
              <div className="space-y-2 text-[11px] leading-relaxed text-slate-200">
                <div>
                  <p>
                    The prestigious award bestowed upon Shastri Kapildev by the Gujarat
                    Sahitya Academy, Gandhinagar, for the best books of the year.
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">27-06-2025 · Vadodara</p>
                </div>
                <div>
                  <p>
                    Faculty of Management Studies welcomes you to the world of real
                    estate (રિયલ એસ્ટેટની દુનિયામાં આપનું સ્વાગત).
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">10-04-2025 · Vadodara</p>
                </div>
                <div>
                  <p>બરોડા સંસ્કૃત મહાવિદ્યાલય and ૧૧૦ વર્ષની પરંપરા: સંસ્કૃત વિદ્યાલયમાં.</p>
                  <p className="mt-1 text-[10px] text-slate-400">2025 · Vadodara</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-50">
                Events
              </p>
              <div className="space-y-2 text-[11px] leading-relaxed text-slate-200">
                <div>
                  <p>Workshop on Detrital Thermochronology.</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    29-01-2020 · Faculty of Science · Department of Geology
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-50">
                Notifications
              </p>
              <div className="space-y-2 text-[11px] leading-relaxed text-slate-200">
                <div>
                  <p>FoS-Geology Merit list - 2025 and location-wise merit lists.</p>
                  <p className="mt-1 text-[10px] text-slate-400">May–June 2025</p>
                </div>
                <div>
                  <p>
                    Result of M.Sc. Entrance Test in Geology and answer keys for SET
                    A–D, FoS – 2025.
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">12-06-2025</p>
                </div>
                <div>
                  <p>
                    Provisional admission lists and merit lists for M.Sc. Geology (2021–
                    2024) and B.Sc. Geology.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-50">
                Circulars & examinations
              </p>
              <div className="space-y-2 text-[11px] leading-relaxed text-slate-200">
                <div>
                  <p>
                    Time Tables for B.Sc. Sem I, III, V and M.Sc. Sem III, Geology,
                    Faculty of Science.
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">13-06-2025</p>
                </div>
                <div>
                  <p>
                    Schedule for regular and additional mid-semester examinations.
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">14-10-2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info band */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Career guidance & support
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              The Department of Geology actively supports students in planning their
              academic and professional futures through dedicated faculty coordinators,
              university-level career and placement cells, and a strong alumni network.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              For detailed information on placements, internships, mentoring and
              collaboration opportunities, you may connect with the Career Cell team
              using the link alongside.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => router.push("/be-member")}
              className="rounded-full border border-[#C8A14D]/70 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]"
            >
              Contact Career Cell
            </button>
            {/* <button className="rounded-full border border-slate-400/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-100 hover:bg-slate-100 hover:text-[#050908]">
              Placement Reports
            </button> */}
          </div>
        </section>
      </div>
    </main>
  );
}
