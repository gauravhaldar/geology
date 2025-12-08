"use client";

import { useState } from "react";

const degreePrograms = [
  {
    id: "bsc",
    label: "B.Sc. (Honours) in Geology",
    level: "Undergraduate",
    duration: "3 years (6 semesters)",
    mode: "Regular",
    overview:
      "Bachelor of Science (Honours) in Geology offered by the Department of Geology provides a strong foundation in earth materials, geomorphology, structural geology and field-based practical work. Geology has always been an interesting and alluring subject, attracting students in large numbers, and this programme is an ideal entry point into Earth sciences.",
    highlights: [
      "Emphasis on field-based practical knowledge and modern techniques of rapid communication and knowledge dispersal",
      "Core training in minerals, rocks, fossils, geomorphology and structural geology",
      "Well-equipped laboratories, lecture rooms with audio-visual facilities and access to departmental library and computer room",
      "Eligibility: 12th Standard theory marks of three science subjects; eligibility percentage as per MSUB norms",
      "Mode of admission: Through MSUB Portal as per Faculty of Science guidelines",
    ],
  },
  {
    id: "bsc-hpp",
    label: "B.Sc. (Honours) in Geology (HPP)",
    level: "Undergraduate",
    duration: "3 years (6 semesters)",
    mode: "Higher Payment Programme",
    overview:
      "Bachelor of Science (Honours) in Geology (Higher Payment Programme) is designed for students seeking the same strong academic foundation in Geology with a higher payment structure, retaining the Department’s emphasis on quality teaching, fieldwork and laboratory training.",
    highlights: [
      "Curriculum and academic standards aligned with the regular B.Sc. (Honours) in Geology",
      "Extensive field-based exercises and practicals in Sedimentology, Structural Geology and related areas",
      "Access to departmental laboratories, seminar room and computing facilities",
      "Eligibility: 12th Standard theory marks of three science subjects; eligibility percentage as per MSUB norms",
      "Mode of admission: Through MSUB Portal under Higher Payment Programme category",
    ],
  },
  {
    id: "msc",
    label: "M.Sc. in Geology",
    level: "Postgraduate",
    duration: "2 years (4 semesters)",
    mode: "Regular",
    overview:
      "Master of Science in Geology is a postgraduate programme offering advanced training in diverse branches of Geology with strong emphasis on research, fieldwork and use of state-of-the-art laboratory facilities.",
    highlights: [
      "Admission based on merit of entrance test conducted as per MSUB regulations",
      "Eligibility: B.Sc. or equivalent degree in relevant subject with required percentage/grade as per category (General/SC/ST/SEBC)",
      "Opportunities for dissertation work in areas such as Quaternary Geology, palaeoclimatology, geomorphology, neotectonics, Sedimentology and more",
      "Close interaction with faculty actively engaged in major research projects sponsored by DST, MoES, ISRO, UGC and other agencies",
    ],
  },
  {
    id: "msc-applied",
    label: "M.Sc. (Applied Geology)",
    level: "Postgraduate",
    duration: "2 years (4 semesters)",
    mode: "Regular",
    overview:
      "M.Sc. (Applied Geology) focuses on applied aspects of Earth sciences, including mineral and petroleum exploration, hydrogeology, engineering geology and environmental geoscience, with strong linkages to industry and national agencies.",
    highlights: [
      "Training in exploration techniques, subsurface data interpretation and application of Remote Sensing and GIS",
      "Laboratory work in Sedimentology, Geochemistry, Advanced Optical studies and Micropalaeontology",
      "Exposure to field equipment such as GPR, GPS and Resistivity meter for applied investigations",
      "Opportunities to work on projects supported by organisations like ONGC, GSI, ISRO, PRL and state government departments",
    ],
  },
  // {
  //   id: "msc-petroleum",
  //   label: "M.Sc. (Petroleum Geology)",
  //   level: "Postgraduate",
  //   duration: "2 years (4 semesters)",
  //   mode: "Regular",
  //   overview:
  //     "M.Sc. (Petroleum Geology) is a specialised postgraduate programme dealing with sedimentary basins, reservoir characterization, petroleum systems and exploration strategies, supported by the Department’s long-standing expertise in Sedimentology and basin analysis.",
  //   highlights: [
  //     "Focus on evolution of coastal plains, sediment disposal systems and basin-scale stratigraphy",
  //     "Use of core, well-log and subsurface data for understanding the evolution of the Gulf of Cambay, Kachchh and adjoining regions",
  //     "Training geared towards careers in petroleum industry, national exploration agencies and research organisations",
  //     "Access to laboratories and field-based investigations relevant to petroleum geology and basin analysis",
  //   ],
  // },
  {
    id: "phd",
    label: "Ph.D. in Geology",
    level: "Doctoral",
    duration: "Minimum 3 years (as per regulations)",
    mode: "Research",
    overview:
      "The Ph.D. programme in Geology is a research-intensive doctoral programme covering a wide spectrum of topics in Earth and environmental sciences. Since inception, about 145 students have completed their Ph.D. from the Department and several scholars are presently pursuing research.",
    highlights: [
      "Guidance by faculty members with strong national and international recognition and high citation indices",
      "Research in areas such as Quaternary climatic and hydrogeological changes, coastal evolution, active tectonics, Sedimentology, Metamorphic Petrology, Ichnology and palaeohydrology",
      "Access to specialised laboratories, advanced instruments and extensive fieldwork facilities",
      "Research support through fellowships and grants from CSIR, DST, MoES, ISRO, UGC, ONGC, GSI, PRL and state government departments",
    ],
  },
];

const specialisations = [
  "Quaternary Geology & Palaeoclimatology",
  "Geomorphology & Neotectonics",
  "Sedimentology & Basin Analysis",
  "Metamorphic Petrology",
  "Ichnology & Palaeohydrology",
  "Hydrogeology & Water Resources",
  "Remote Sensing & GIS",
  "Environmental Geology",
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
              Department of Geology
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              Academic Programs and Research in Earth Sciences
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              The Department of Geology was established in 1951 and has grown into a vibrant
              centre of teaching and research in Earth Sciences. Since 1965 it has been housed in
              the Faculty of Science, offering full-fledged undergraduate, postgraduate and
              doctoral programmes in varied disciplines of Geology.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              The Department is nationally and internationally recognised for high quality
              teaching and cutting-edge research, particularly in Quaternary Geology,
              palaeoclimatology, Geomorphology, Neotectonics, Sedimentology, Metamorphic
              Petrology, Ichnology, palaeohydrology and Remote Sensing. Majority of the teaching
              staff are actively pursuing research with support from DST, Ministry of Earth
              Sciences, ISRO, UGC and other agencies.
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
              Select a programme to view a brief overview, key highlights and admission-related
              details.
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
                    The Department offers B.Sc. (Honours), B.Sc. (Honours) in Geology (HPP),
                    M.Sc., M.Sc. (Applied Geology), M.Sc. (Petroleum Geology) and Ph.D. programmes.
                    The syllabi of various courses are periodically upgraded in line with
                    contemporary trends and needs, ensuring that students are exposed to both
                    classical and emerging areas in Earth Sciences.
                  </p>
                  <p className="mt-2">
                    Curriculum across programmes integrates classroom teaching with practical
                    and field-based components in areas such as Quaternary Geology,
                    palaeoclimatology, Geomorphology, Neotectonics, Sedimentology, Metamorphic
                    Petrology, Ichnology, palaeohydrology, Hydrogeology, Geochemistry and Remote
                    Sensing & GIS. A large number of students regularly qualify in NET and other
                    competitive examinations, and graduates find placement in reputed government
                    and private organisations.
                  </p>
                </>
              )}

              {activeTab === "fieldwork" && (
                <>
                  <p>
                    Field-based learning is a cornerstone of Geology teaching in the Department.
                    Students participate in regular excursions, mapping camps and applied
                    fieldwork that complement classroom and laboratory instruction.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    <li>
                      Field-based practical knowledge is given priority in all programmes,
                      with structured field exercises across diverse geological terrains.
                    </li>
                    <li>
                      Use of advanced field equipment such as GPR, GPS and Resistivity meter,
                      along with camping facilities for extended fieldwork.
                    </li>
                    <li>
                      Integration of field observations with laboratory studies in Sedimentology,
                      Geochemistry, Advanced Optical methods and Micropalaeontology.
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "eligibility" && (
                <>
                  {activeDegree.id === "bsc" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> Bachelor of Science
                        (Honours) in Geology (Regular)
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Eligibility:</span> 12th Standard theory
                        marks of three science subjects are considered for eligibility.
                        Eligibility is determined based on the prescribed eligibility percentage
                        for preparing the merit lists, as per MSUB guidelines.
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Duration:</span> 3 years (6 semesters)
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Mode of Admission:</span> Admission
                        through MSUB Portal as per Faculty of Science norms.
                      </p>
                    </>
                  )}

                  {activeDegree.id === "bsc-hpp" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> Bachelor of Science
                        (Honours) in Geology (Higher Payment Programme)
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Eligibility:</span> 12th Standard theory
                        marks of three science subjects are considered for eligibility.
                        Eligibility is determined based on the prescribed eligibility percentage
                        for preparing the merit lists, as per MSUB guidelines.
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Duration:</span> 3 years (6 semesters)
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Mode of Admission:</span> Admission
                        through MSUB Portal under Higher Payment Programme.
                      </p>
                    </>
                  )}

                  {activeDegree.id === "msc" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> Master of Science in
                        Geology
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Eligibility:</span> B.Sc. or equivalent
                        degree (10+2+3 pattern) in relevant subject from a recognised university.
                        Minimum marks/grade points as per category:
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-4">
                        <li>General category: 50% or equivalent grade points (all three years).</li>
                        <li>SC/ST: must have passed qualifying examination.</li>
                        <li>
                          SEBC: 45% (Gujarat) and 50% (other states/UTs) or equivalent grade
                          points.
                        </li>
                      </ul>
                      <p className="mt-2">
                        <span className="font-semibold">Admission:</span> Based on merit of
                        entrance test only. Candidates appearing in final year of qualifying
                        examination may also apply, subject to submission of final marksheet and
                        fulfillment of eligibility at the time of admission.
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Duration:</span> 2 years (4 semesters)
                      </p>
                    </>
                  )}

                  {activeDegree.id === "msc-applied" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> M.Sc. (Applied Geology)
                      </p>
                      <p className="mt-2">
                        Detailed eligibility and admission rules follow the general M.Sc. norms of
                        the Faculty of Science and MSUB, with an emphasis on relevant background in
                        Geology or allied Earth Science subjects at B.Sc. level.
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Duration:</span> 2 years (4 semesters)
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Mode of Admission:</span> As notified by
                        the Faculty of Science / MSUB portal for Applied Geology intake.
                      </p>
                    </>
                  )}

                  {activeDegree.id === "msc-petroleum" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> M.Sc. (Petroleum
                        Geology)
                      </p>
                      <p className="mt-2">
                        Admission and eligibility criteria are aligned with the postgraduate
                        regulations of the Faculty of Science for specialised programmes in
                        Geology, with detailed notifications issued through the MSUB portal.
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Duration:</span> 2 years (4 semesters)
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Mode of Admission:</span> Through MSUB
                        Portal as per the notified schedule for Petroleum Geology.
                      </p>
                    </>
                  )}

                  {activeDegree.id === "phd" && (
                    <>
                      <p>
                        <span className="font-semibold">Programme:</span> Ph.D. in Geology
                      </p>
                      <p className="mt-2">
                        The Ph.D. programme follows MSUB and national regulations for doctoral
                        admissions in Earth Sciences. Candidates are expected to have a relevant
                        postgraduate degree in Geology or allied disciplines and to qualify as per
                        the norms notified by the University (including entrance tests / fellowships
                        where applicable).
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Programme Level:</span> Doctoral (Research)
                      </p>
                      <p className="mt-1">
                        <span className="font-semibold">Research Areas:</span> Quaternary climatic
                        and hydrogeological changes, evolution of coastal plains and sediment
                        disposal systems, active faults in Gujarat, evolution of the Great and
                        Little Rann of Kachchh, late Quaternary environmental changes, structural
                        and metamorphic history of the Aravalli Group, ichnological and
                        sedimentological studies of Mesozoic and Cenozoic sequences, and related
                        themes.
                      </p>
                    </>
                  )}
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

        {/* Department overview and research */}
        <section className="mt-12 grid gap-8 md:grid-cols-2 text-xs text-slate-200">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Department Overview
            </p>
            <p className="mt-3 leading-relaxed">
              The Department is housed in a three-storied building with an extension wing. All
              staff members are provided with individual rooms in addition to several specialised
              laboratories. Facilities include well-equipped laboratories with sophisticated
              instruments, lecture rooms with audio-visual facilities, a computer room with
              internet access, a seminar room and a departmental library. A centralised canteen of
              the Faculty of Science is located adjacent to the Department.
            </p>
            <p className="mt-3 leading-relaxed">
              The main strength of the Department is its well-qualified and highly distinguished
              faculty. The Department maintains a vibrant atmosphere of teaching and research, and
              continues to create additional infrastructure to further enhance the quality of
              teaching and learning.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Research Highlights
            </p>
            <p className="mt-3 leading-relaxed">
              The Department is known for producing high quality research publications in reputed
              national and international journals. All staff members have excellent academic
              credentials and are recognised as research supervisors. Some faculty members possess
              very high citation indices, reflecting the impact of research carried out in the
              Department.
            </p>
            <p className="mt-3 leading-relaxed">
              Active research themes include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Quaternary climatic and hydrogeological changes in Western India.</li>
              <li>
                Evolution of coastal plains and sediment disposal systems along the Gulf of Cambay
                and Kachchh.
              </li>
              <li>Geometry and nature of active faults in Gujarat.</li>
              <li>Evolution of the Great and Little Rann of Kachchh using subsurface cores.</li>
              <li>Late Quaternary environmental conditions in the Nal-Bhal corridor.</li>
              <li>
                Structural and metamorphic history of the Aravalli Group of rocks of NE Gujarat.
              </li>
              <li>
                Ichnological and sedimentological studies of Mesozoic and Cenozoic sequences in
                Gujarat.
              </li>
            </ul>
          </div>
        </section>

        {/* Info band */}
        {/* <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
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
        </section> */}
      </div>
    </main>
  );
}
