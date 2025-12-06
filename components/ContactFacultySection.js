export default function ContactFacultySection() {
  const faculty = [
    {
      name: "Prof. (Dr.) Example Name",
      role: "Head, Department of Geology",
      speciality: "Sedimentology & Basin Analysis",
      image: "/faculty/1.jpeg",
    },
    {
      name: "Dr. Sample Faculty",
      role: "Associate Professor",
      speciality: "Structural Geology & Tectonics",
      image: "/faculty/2.jpg",
    },
  ];

  return (
    <section id="contact" className="bg-[#0b1412] py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A14D]">
              Faculty & Contact
            </h2>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              Reach out to the department.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Get in touch for admissions, research collaboration, alumni connect or academic
              enquiries.
            </p>

            <div className="mt-5 grid gap-3 text-xs sm:grid-cols-2">
              {faculty.map((f) => (
                <div
                  key={f.name}
                  className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-[#101b18] shadow-md shadow-black/40"
                >
                  {f.image && (
                    <div className="flex justify-center border-b border-white/10 bg-black/40">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="h-24 w-24 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <p className="text-sm font-semibold text-slate-50">{f.name}</p>
                    <p className="text-[11px] text-slate-300">{f.role}</p>
                    <p className="mt-1 text-slate-100">{f.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {/* <form className="space-y-3 rounded-2xl border border-white/10 bg-[#0c1513] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Contact Form
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] text-slate-300">Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-100 outline-none focus:border-[#C8A14D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-300">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-100 outline-none focus:border-[#C8A14D]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-slate-300">Message</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-100 outline-none focus:border-[#C8A14D]"
                />
              </div>
              <button
                type="button"
                className="mt-1 rounded-full border border-[#C8A14D]/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A14D] hover:bg-[#C8A14D] hover:text-[#1D3C34]"
              >
                Submit Enquiry
              </button>
            </form> */}

            <div className="rounded-2xl border border-white/10 bg-[#050908] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A14D]">
                Department Location
              </p>
              <p className="mt-2 text-slate-200">
                Geology Department, Faculty of Science,
                <br />
                The Maharaja Sayajirao University of Baroda, Vadodara, Gujarat, India.
              </p>
              <div className="mt-3 overflow-hidden rounded-xl border border-white/15 bg-black/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.81388058525!2d73.17355084382477!3d22.31759942526959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8cad5ef7941%3A0x5a613ac68ff3166a!2sThe%20Maharaja%20Sayajirao%20University%20of%20Baroda!5e0!3m2!1sen!2sin!4v1765018441723!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
