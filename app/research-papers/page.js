export default function ResearchPapersPage() {
  const researchProjects = [
    {
      title: "Late Quanternary megafloods in the Rivers of Western India: Generic processes and climate transitions",
      name: "Dr. Alpa Sridhar",
      agency: "DST-WOS-A",
      price: "33.17 Lacs",
      tag: "Individual",
      type: "Government",
      year: "2020-2021",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Holecene Climatic Changes Based On Multiproxy Data From Fluvial and Lacustrine Archives of Castern Margin of Little Rann of Kachch, Western india",
      name: "Dr. Rachna Raj, Co/ pi. L. S. Chamyal",
      agency: "DST",
      price: "26.14 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Frequency, Magnitude and Causes of Large Flouds Vis-A Vis Climbe Excursiens….india",
      name: "Dr. Alpa Sridhar, Prof. L. S. Chamyal",
      agency: "DST-WOS-A",
      price: "28.20 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Post Lgm Sedimentation Pattern and Environmental Chnges in The Great Kachchh Basin",
      name: "Dr. Niteshkumar Khonde",
      agency: "DST",
      price: "29.92 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2016-2017",
      duration: "3 Years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Late Quaternary Continental sequences of Gujarat, Western India: an appraisal of climatic, tectonic and eustatic processes",
      name: "Prof. D. M. Maurya",
      agency: "IGC",
      price: "3.50 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2018-2019",
      duration: "1 year",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
    {
      title: "Source-to-Sink Spatio-temporal variability in sediment fluxes and their control on coastal sediment dispersal system in Gujarat",
      name: "Prof. N. P. Bhatt",
      agency: "MoES",
      price: "21.25 Lakhs",
      tag: "Individual",
      type: "Government",
      year: "2019-2020",
      duration: "3 years",
      faculty: "Faculty of Science",
      department: "Department of Geology",
    },
  ];

  
  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      {/* Hero Section */}
      <section className="bg-[#0b1412] py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Research Projects
            </h1>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              Funded Research Initiatives
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 max-w-2xl mx-auto">
              Explore our department's funded research projects and their contributions to geological sciences.
            </p>
          </div>
        </div>
      </section>

      
      {/* Research Projects Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40 hover:border-[#C8A14D]/40 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                      {project.type}
                    </span>
                    <span className="text-xs text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-slate-50 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 mb-3">
                    {project.name}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-slate-200">
                      <span className="text-[#C8A14D]">Agency:</span> {project.agency}
                    </p>
                    <p className="text-xs text-slate-200">
                      <span className="text-[#C8A14D]">Price:</span> {project.price}
                    </p>
                    <p className="text-xs text-slate-200">
                      <span className="text-[#C8A14D]">Duration:</span> {project.duration}
                    </p>
                    <p className="text-xs text-slate-200">
                      <span className="text-[#C8A14D]">Tag:</span> {project.tag}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          </div>
  );
}
