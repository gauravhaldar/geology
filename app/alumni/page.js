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

        {/* Detailed alumni & Office of Alumni Affairs content */}
        <section className="mt-14 space-y-6 text-sm leading-relaxed text-slate-200">
          <p>
            Alumni are the face of the university to the world. An educational institute is
            known by the progress of its alumni. It is a matter of pride for The Maharaja
            Sayajirao University of Baroda to connect to its alumni through this portal.
          </p>
          <p>
            While there are several department level alumni associations functioning within the
            university, it is also important that there is inter-departmental and inter-
            institute interaction amongst the alumni for a holistic progress of the university
            in the times of inter-disciplinary professions and research being the need of the
            hour. Office of Alumni Affairs was formed to provide an umbrella to the existing
            alumni associations while giving them the complete freedom to carry out their
            activities and to initiate the formation of alumni associations in the
            departments/faculties where it does not exist.
          </p>
          <p>
            The first thought of having such an office was initiated during the first ever
            grand Reunion / Alumni Meet which happened in January 2013 at the university.
            During the two days meet several distinguished alumni were felicitated and alumni
            interactions took place at all departments as well as faculties. There was also an
            exhibition to showcase the thrust areas of all the departments at the Union
            Pavilion of the university. This was followed by a gala cultural programme by the
            students of the Faculty of Performing Arts.
          </p>
          <p>
            Subsequently, the Office of Alumni Affairs was established in January 2015 in the
            university vide S.R. number 37 dated 20/12/2014 after confirmation of minutes in
            the syndicate in January 2015. It was allotted the office premises at Chamelibaug
            in October 2015 vide letter number No. R/MSU/T76 dated 6th January 2016.
          </p>

          <p className="font-semibold text-slate-100">
            The major activities of the Office of Alumni Affairs are as follows:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Alumni interaction sessions</li>
            <li>Coordination of Reunions / Alumni Meets</li>
            <li>Heritage walk</li>
            <li>Heritage exhibition</li>
            <li>Coordination for alumni contributions / donations</li>
          </ul>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">
            Alumni Interaction Sessions
          </h2>
          <p>
            An alumnus is the best connecting link between what is taught at an institute and
            what are the recent developments on the field. Mentoring sessions by alumni can
            help develop industry required skills amongst the students.
          </p>
          <p>
            The activity of Alumni Interaction Session was initiated in July 2015 through the
            heads of the departments of all the faculties under which it was attempted to
            invite one alumnus of the department preferably every month or as frequently as
            possible and arrange an interaction session with the students of the department.
          </p>
          <p className="font-semibold text-slate-100">The purpose of the activity was as follows:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              To connect the alumni back to the department so as to enable creation /
              strengthening of the database at departmental / faculty level.
            </li>
            <li>
              To use the expertise and experience of the alumni for bridging the gap between
              industry and academia and make our students industry ready.
            </li>
            <li>To enable strengthening / modification of syllabus if any.</li>
            <li>To arrange site / industrial visits with the support of alumni.</li>
            <li>
              To improve placement scenario for students through knowledge gain and alumni
              connections.
            </li>
          </ul>
          <p>
            The activity was well received and provided excellent support by most of the
            departments especially in Faculty of Social Work, Faculty of Engineering and
            Technology, Faculty of Family and Community Sciences, Faculty of Fine Arts,
            Faculty of Pharmacy, Faculty of Performing Arts etc. The activity was also carried
            out at Faculty of Commerce, some departments at Faculty of Science, Faculty of
            Medicine and Faculty of Arts. Since the activity was targeted for students of
            final year / master&apos;s courses, students of all those departments which carried
            out the activities have benefitted.
          </p>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">
            Coordination for Reunions / Alumni Meets
          </h2>
          <p>
            Reunions / Alumni Meets are occasions where the alumni not only bond with each
            other but also the institute and existing staff and students. Such get-togethers
            in coordination with the department / faculty are also an occasion to felicitate
            the distinguished alumni.
          </p>
          <p>
            The Office of Alumni Affairs has supported several reunions / alumni meets by
            providing the database of alumni names, arranging press meets, coordinating with
            the alumni through emails, arranging for logistics during the alumni meets (no
            expenses on behalf of the office), documenting the meets etc. Major reunions /
            alumni meet have happened at several departments at Faculty of Technology &amp;
            Engineering, Faculty of Arts, Faculty of Fine Arts, Faculty of Performing Arts,
            Faculty of Social Work, Faculty of Science, Faculty of Family and Community
            Sciences.
          </p>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">Heritage Walk</h2>
          <p>
            A heritage walk was initiated through the campus of The Maharaja Sayajirao
            University of Baroda to bring awareness about the elements of heritage value
            amongst the students, staff and alumni members of the university. The idea was
            taking pride in the rich legacy of heritage buildings, paintings, murals, ancient
            relics, instruments and elements available within the university. The walk was
            open for the citizens of Vadodara too.
          </p>
          <p>
            It is for the first time in the history of the university that a heritage walk was
            conducted within the university. It was a successful event with the assistance of
            student interns and volunteers of FOOTPRINTS team. The walk was sponsored by GAIL
            India Ltd.
          </p>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">Heritage Exhibition</h2>
          <p>
            The UNESCO world heritage week is celebrated every year during 18-24 November
            across the world. The Office of Alumni Affairs participated in the heritage week
            in collaboration with Vadodara People&apos;s Heritage Festival by supporting our
            alumni for showcasing their personal collections of articles of heritage value in
            the form of an exhibition in the premises of Chamelibaug. The heritage exhibition
            was open for all the citizens of Vadodara, students and staff of the university.
          </p>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">
            Coordination for Alumni Contributions / Donations
          </h2>
          <p>
            The Office of Alumni Affairs has coordinated with alumni for donations for
            improving the infrastructure of the departments / faculties.
          </p>

          <h2 className="mt-6 text-base font-semibold text-[#F1E0B3]">Esteemed Alumni</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Dr. Venki Ramakrishnan</li>
            <li>Dr. Vijay Bhatkar</li>
            <li>Justice Mohit Shah</li>
            <li>Prof. Bakul Dholakia</li>
            <li>Ms. Bharti Mukherjee</li>
            <li>Shankarrao Thorat</li>
            <li>Shri Ajay Bhatt</li>
            <li>Shri Amarsinh Chaudhary</li>
            <li>Shri Anshuman Gaekwad</li>
            <li>Shri Atul Bedade</li>
            <li>Shri Chimanbhai Patel</li>
            <li>Shri D K Gaekwad</li>
          </ul>
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
        {/* <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1D3C34] via-[#121b19] to-[#444A53] p-6 text-xs shadow-xl shadow-black/50 sm:flex sm:items-center sm:justify-between sm:gap-6">
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
        </section> */}
      </div>
    </main>
  );
}
