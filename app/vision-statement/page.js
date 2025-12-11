export default function VisionStatement() {
  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      <section className="bg-[#0b1412] pb-20 pt-2 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,77,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(29,60,52,0.9),_#050908)] opacity-90" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A14D]">
              Our Future
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Vision Statement
            </h1>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[#0f1815]/80 p-8 shadow-lg shadow-black/40">
              <h2 className="text-2xl font-semibold mb-6 text-slate-50">Vision of The Maharaja Sayajirao University of Baroda:</h2>
              <blockquote className="border-l-4 border-[#C8A14D] pl-6 italic text-sm text-slate-200">
                "The Progress of a nation requires that its people should be educated. Knowledge is a necessity of man. It instils in him a desire to question and to investigate, which leads him on the path of progress. Education, in the broadest sense, must be spread everywhere. Progress can only be achieved by the spread of education. Cooperation is necessary to achieve any worthy end and this readiness to cooperate will not be found in people if they are not educated."
              </blockquote>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-[#0f1815]/80 p-8 shadow-lg shadow-black/40">
              <div className="mt-4">
                <img 
                  src="/vision/vision1.jpg" 
                  alt="University Vision" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
