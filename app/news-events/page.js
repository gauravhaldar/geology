"use client";

import { useState } from "react";

const newsFilters = [
  { id: "all", label: "All" },
  { id: "seminar", label: "Seminars" },
  { id: "field", label: "Field Trips" },
  { id: "alumni", label: "Alumni Meets" },
  { id: "announcement", label: "Announcements" },
];

const newsItems = [
  {
    id: 1,
    type: "seminar",
    title: "Guest lecture on Precambrian basement evolution",
    date: "12 Oct 20XX",
    tag: "Seminar",
    summary:
      "Use this card to describe invited talks, departmental seminars, colloquia and special lecture series.",
  },
  {
    id: 2,
    type: "field",
    title: "Annual field camp: Sedimentary basin mapping",
    date: "22–29 Jan 20XX",
    tag: "Field Trip",
    summary:
      "Highlight compulsory and elective field training programs, mapping camps and exposure visits.",
  },
  {
    id: 3,
    type: "alumni",
    title: "Alumni interaction: Careers in exploration geology",
    date: "05 Nov 20XX",
    tag: "Alumni Meet",
    summary:
      "Showcase alumni talks, panel discussions and networking sessions organised for students.",
  },
  {
    id: 4,
    type: "announcement",
    title: "Call for applications: Summer research internships",
    date: "Deadline: 30 Apr 20XX",
    tag: "Announcement",
    summary:
      "Use this space for calls for projects, internships, conferences and other important notices.",
  },
];

const timelineEvents = [
  {
    year: "Sep",
    title: "Orientation & induction",
    description:
      "Welcoming new batches, introducing curriculum, labs, fieldwork calendar and student activities.",
  },
  {
    year: "Nov–Feb",
    title: "Field camps & excursions",
    description:
      "Major field mapping exercises, short excursions and data collection for student projects.",
  },
  {
    year: "Mar–Apr",
    title: "Project reviews & presentations",
    description:
      "Internal seminars, poster sessions and viva voce for B.Sc./M.Sc. projects.",
  },
  {
    year: "Year-round",
    title: "Seminars & visiting speakers",
    description:
      "Regular expert talks by geoscientists from academia, industry and government organisations.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewsEventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNews =
    activeFilter === "all"
      ? newsItems
      : newsItems.filter((item) => item.type === activeFilter);

  return (
    <main className="min-h-screen bg-[#050908] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <section className="grid gap-8 md:grid-cols-[1.4fr,1.1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              News & Events
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
              Field stories, research highlights and departmental updates.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              This page can be used to announce upcoming events, record recent activities and
              archive important milestones of the department. All content here is placeholder –
              replace it with your official notices, schedules and reports.
            </p>
          </div>

          {/* Filter panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs shadow-xl shadow-black/40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Filter by type
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {newsFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={classNames(
                    "rounded-full border px-3 py-1 font-semibold uppercase tracking-[0.18em] transition",
                    activeFilter === filter.id
                      ? "border-[#F1E0B3] bg-[#F1E0B3] text-[#1D3C34]"
                      : "border-white/25 text-slate-100 hover:bg-white/10"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-300">
              You can map filters to categories such as seminars, workshops, conferences, field
              trips and alumni events.
            </p>
          </div>
        </section>

        {/* News list */}
        <section className="mt-12 grid gap-8 md:grid-cols-[1.6fr,1.1fr] md:items-start">
          <div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Latest updates
              </p>
              <p className="text-[11px] text-slate-400">
                Replace these cards with real items; you can link each to a detailed post or PDF
                notice.
              </p>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                      {item.tag}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.date}</p>
                  </div>
                  <h2 className="mt-2 text-sm font-semibold text-slate-50">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-200">
                    {item.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-[10px]">
                    <button className="rounded-full border border-[#C8A14D]/60 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
                      Read More
                    </button>
                    <button className="rounded-full border border-slate-500/60 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-slate-200 hover:bg-slate-200 hover:text-[#050908]">
                      Download Notice
                    </button>
                  </div>
                </article>
              ))}

              {filteredNews.length === 0 && (
                <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-[11px] text-slate-300">
                  No items under this filter yet. Once you add content, you can show older
                  items as an archive or link to a detailed page.
                </p>
              )}
            </div>
          </div>

          {/* Timeline / calendar */}
          <aside className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-5 text-xs shadow-xl shadow-black/50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
              Annual activity rhythm
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-[#F8ECD0]">
              Use this timeline to give prospective students and alumni a sense of how the
              academic year looks in terms of events, fieldwork and academic milestones.
            </p>

            <div className="mt-4 space-y-4">
              {timelineEvents.map((event) => (
                <div key={event.title} className="flex gap-3">
                  <div className="mt-1 flex flex-col items-center">
                    <div className="h-7 w-7 rounded-full border border-[#F1E0B3] bg-black/40 text-[10px] font-semibold uppercase tracking-tight text-[#F1E0B3] flex items-center justify-center">
                      {event.year}
                    </div>
                    <div className="h-full w-px flex-1 bg-gradient-to-b from-[#F1E0B3]/60 to-transparent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                      {event.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#F8ECD0]">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Info band */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
              Submissions & contact
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
              Invite faculty, students and alumni to share news and event information.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              You can convert this text into clear instructions: who to email, which formats to
              use (poster, notice, photographs) and timelines for submitting items to be
              featured on the News & Events page.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            <button className="rounded-full border border-[#C8A14D]/70 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]">
              Submit News
            </button>
            <button className="rounded-full border border-slate-400/60 px-4 py-1.5 font-semibold uppercase tracking-[0.2em] text-slate-100 hover:bg-slate-100 hover:text-[#050908]">
              Event Calendar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
