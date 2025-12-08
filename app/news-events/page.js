"use client";

const msubNews = [
  {
    id: 1,
    title: "બરોડા સંસ્કૃત મહાવિધાલયમાં",
    date: "28-11-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 2,
    title: "૧૧૦ વર્ષની પરંપરા: સંસ્કૃત વિધાલયમાં",
    date: "30-09-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 3,
    title:
      "MSU ની મેનેજમેન્ટ ફેકલ્ટીમાંઆત્મવિશ્વાસથી ભરેલ જીવન જીવવાની રીતોની માહિતી અપાઈ.",
    date: "07-08-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 4,
    title:
      "the prestigious award bestowed upon Shastri Kapildev by the Gujarat Sahitya Academy, Gandhinagar, for the best books of the year.",
    date: "27-06-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 5,
    title:
      "ફેકલ્ટી ઓફ મેનેજમેન્ટ સ્ટડીઝ દ્વારા રિયલ એસ્ટેટની દુનિયામાં આપનું સ્વાગત વિષય પર માર્ગદર્શન અપાયું.",
    date: "10-04-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 6,
    title: "સકારાત્મકતા પરિવર્તન લાવે છે તે વિષયે MSU માં ચર્ચાસત્ર યોજાયું",
    date: "25-02-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 7,
    title: "રાષ્ટ્રની અસ્મિતાને સાચવી રાખવામાં માતૃભાષાનું મહત્વનું યોગદાન.",
    date: "22-02-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 8,
    title:
      "MSUની મેનેજમેન્ટ સ્ટડીઝ ફેકલ્ટીમાં નેશનલ કોન્ફરન્સ નું આયોજન કરાયું.",
    date: "29-01-2025",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 9,
    title: "ચેતન બાલવાડી માં પ્રયોગ",
    date: "13-09-2024",
    newspaper: ".",
    edition: "Vadodara",
  },
  {
    id: 10,
    title:
      "તબલાના જન્મદાતા ૧૩મી સદીના અમીર ખુશરો નહીં ,૧૧ મી સદીના સ્વાતિ મુનિ છે",
    date: "25-09-2023",
    newspaper: ".",
    edition: "Vadodara",
  },
];

const msubEvents = [
  {
    id: 1,
    day: "27",
    month: "Nov",
    year: "2025",
    type: "Seminar",
    title: "The Safe Campus Programme, Baroda Sanskrit Mahavidhyalaya, MSU.",
    venue: "Baroda Sanskrit Mahavidhyalaya",
    unit: "Office",
  },
  {
    id: 2,
    day: "22",
    month: "Nov",
    year: "2025",
    type: "Exhibition",
    title:
      "GYAN DEEP, Banyan Heritage Festival 2025, Oriental Institute, MSU.",
    venue: "Oriental Institute",
    unit: "Office",
  },
  {
    id: 3,
    day: "21",
    month: "Nov",
    year: "2025",
    type: "Festival",
    title:
      "Open City Contest, Banyan Heritage Festival 2025, Oriental Institute, MSU.",
    venue: "Oriental Institute",
    unit: "Office",
  },
  {
    id: 4,
    day: "13",
    month: "Oct",
    year: "2025",
    type: "Awareness Programme",
    title:
      "Closing Ceremony of Five Days Awareness Campaign on Road Safety & Seminar on Fundamental Rights and Duties",
    venue: "Faculty of Management Studies",
    unit: "Department of Management Studies",
  },
  {
    id: 5,
    day: "29",
    month: "Sep",
    year: "2025",
    type: "Festival",
    title: "Sardiya Navratri utsav 29-09-2025 To 30-10-2025",
    venue: "Baroda Sanskrit Mahavidhyalaya",
    unit: "",
  },
];

export default function NewsEventsPage() {
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
              Official MSUB news coverage and events from Baroda Sanskrit Mahavidhyalaya
              and related units.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              This page lists MSUB in News items as they appear in newspapers and the latest
              MSUB Events such as seminars, festivals, exhibitions and awareness programmes.
            </p>
          </div>
        </section>

        {/* News list */}
        <section className="mt-12 grid gap-8 md:grid-cols-[1.6fr,1.1fr] md:items-start">
          <div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                MSUB in News
              </p>
              <p className="text-[11px] text-slate-400">
                Newspaper coverage and reports related to MSUB, Baroda Sanskrit Mahavidhyalaya
                and other university units.
              </p>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              {msubNews.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1E0B3]">
                      News Paper : {item.newspaper}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.date}</p>
                  </div>
                  <h2 className="mt-2 text-sm font-semibold text-slate-50">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-200">
                    Edition : {item.edition}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* MSUB Events */}
          <aside className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D3C34] via-[#121b19] to-[#444A53] p-5 text-xs shadow-xl shadow-black/50">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F1E0B3]">
              MSUB Events
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-[#F8ECD0]">
              Key seminars, festivals, exhibitions and awareness programmes organised by MSUB
              and its institutes.
            </p>

            <div className="mt-4 space-y-4">
              {msubEvents.map((event) => (
                <div key={event.id} className="flex gap-3">
                  <div className="mt-1 flex flex-col items-center">
                    <div className="h-7 w-7 rounded-full border border-[#F1E0B3] bg-black/40 text-[10px] font-semibold uppercase tracking-tight text-[#F1E0B3] flex items-center justify-center">
                      {event.day}
                    </div>
                    <div className="h-full w-px flex-1 bg-gradient-to-b from-[#F1E0B3]/60 to-transparent" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                      {event.type}  b7 {event.month} {event.year}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#F8ECD0]">
                      {event.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#F8ECD0]/90">
                      {event.venue}
                      {event.unit ? `  b7 ${event.unit}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Info band */}
        {/* <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-[11px] shadow-xl shadow-black/40 sm:flex sm:items-center sm:justify-between sm:gap-6">
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
        </section> */}
      </div>
    </main>
  );
}
