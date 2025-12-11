export default function MissionStatement() {
  const visitors = [
    {
      id: 1,
      name: "Shri B. G. Kher",
      designation: "Former Chief Minister of Bombay",
      purpose: "Distinguished Guest in Convocation",
      date: "06-10-1951",
      image: "/vision/1.jpg"
    },
    {
      id: 2,
      name: "Dr. Amarnath Jha",
      designation: "Vice Chancellor of The University of Allahabad",
      purpose: "Distinguished Guest in Convocation",
      date: "04-10-1954",
      image: "/vision/2.png"
    },
    {
      id: 3,
      name: "Dr. S. S. Bhatnagar",
      designation: "Indian Scientist",
      purpose: "Distinguished Guest in Convocation",
      date: "10-10-1953",
      image: "/vision/3.png"
    },
    {
      id: 4,
      name: "Shri V. T. Krishnamachari",
      designation: "Indian civil servant and administrator",
      purpose: "Distinguished Guest in Convocation",
      date: "17-10-1954",
      image: "/vision/4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      <section className="bg-[#0b1412] pb-20 pt-2 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,77,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(29,60,52,0.9),_#050908)] opacity-90" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A14D]">
              Our Foundation
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Mission Statement
            </h1>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0f1815]/80 p-8 shadow-lg shadow-black/40">
              <h2 className="text-2xl font-semibold mb-6 text-slate-50">Mission of The Maharaja Sayajirao University of Baroda:</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Sustain an environment of academic excellence and innovative research that enable students to think global and act local with a conscious focus on indigenous perspectives.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Striving to create an equitable and gender just society that ensures better quality of life to individuals, families, and communities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    To inculcate highest human values, tolerance, Compassion, and equanimity in all the adherents, students, teachers, and support staff of the University.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Promoting and enhancing high standards of Teaching, Learning and Research for an all-round development of Students.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Providing a learning environment that nurtures critical reflections, exchange of ideas and innovation among students to help them realize their optimum potential.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Increasing access to education by all sections of the society.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Relating knowledge to the contemporary socio-economic needs and moral concerns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                  <span className="text-sm leading-relaxed text-slate-200">
                    Building mutually enriching linkages with the society and its institutions.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0f1815]/80 p-8 shadow-lg shadow-black/40">
              <h3 className="text-xl font-semibold mb-6 text-slate-50">Distinguished Visitors</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {visitors.map((visitor) => (
                  <div key={visitor.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={visitor.image}
                        alt={visitor.name}
                        className="w-24 h-24 rounded-lg object-cover border border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-50">{visitor.name}</h4>
                      <p className="text-sm text-slate-300">{visitor.designation}</p>
                      <p className="text-sm text-[#C8A14D]">{visitor.purpose}</p>
                      <p className="text-xs text-slate-400 mt-1">{visitor.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
