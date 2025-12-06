import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GeologyNews() {
  return (
    <div className="min-h-screen bg-[#0b1412] text-slate-100">
      {/* <Navbar /> */}
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">Geology in News</h1>
          <p className="text-xl text-[#C8A14D] max-w-2xl mx-auto">
            Latest updates, achievements, and media coverage from our department
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Latest News & Updates</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">The prestigious award bestowed upon Shastri Kapildev by the Gujarat Sahitya Academy, Gandhinagar, for the best books of the year</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">June 27, 2025</span>
                </div>
                <div className="text-slate-200 mb-4">
                  <p className="text-sm mb-2"><strong>News Paper:</strong> </p>
                  <p className="text-sm mb-2"><strong>Edition:</strong> Vadodara</p>
                  <p className="text-sm">27-06-2025</p>
                </div>
              </article>

              <article className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">Tabla origin research reveals 11th century Sufi saint, not 13th century Amir Khusro</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">September 25, 2023</span>
                </div>
                <div className="text-slate-200 mb-4">
                  <p className="text-sm mb-2"><strong>News Paper:</strong> </p>
                  <p className="text-sm mb-2"><strong>Edition:</strong> Vadodara</p>
                  <p className="text-sm">25-09-2023</p>
                </div>
              </article>

              <article className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">Sanatan literature to be taught as value-added course</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">August 22, 2023</span>
                </div>
                <div className="text-slate-200 mb-4">
                  <p className="text-sm mb-2"><strong>News Paper:</strong> </p>
                  <p className="text-sm mb-2"><strong>Edition:</strong> Vadodara</p>
                  <p className="text-sm">22-08-2023</p>
                </div>
              </article>

              <article className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">Geology museum, map to be upgraded</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">August 21, 2023</span>
                </div>
                <div className="text-slate-200 mb-4">
                  <p className="text-sm mb-2"><strong>News Paper:</strong> </p>
                  <p className="text-sm mb-2"><strong>Edition:</strong> Vadodara</p>
                  <p className="text-sm">21-08-2023</p>
                </div>
              </article>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Media Coverage</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
              <p className="text-slate-200 mb-6 text-center">
                Our department research and activities featured in national and international media
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#050908] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#1D3C34] font-bold">TH</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">The Hindu</p>
                      <p className="text-sm text-[#C8A14D]">National Newspaper</p>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm">"Groundbreaking research on earthquake prediction"</p>
                </div>
                <div className="bg-[#050908] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#1D3C34] font-bold">ST</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Science Today</p>
                      <p className="text-sm text-[#C8A14D]">Science Magazine</p>
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm">"Innovative approaches to mineral exploration"</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
