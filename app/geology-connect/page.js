import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GeologyConnect() {
  return (
    <div className="min-h-screen bg-[#0b1412] text-slate-100">
      {/* <Navbar /> */}
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">Geology Connect</h1>
          <p className="text-xl text-[#C8A14D] max-w-2xl mx-auto">
            Connect with our community of students, alumni, faculty, and industry professionals
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Community Platform</h2>
            <p className="text-slate-200 leading-relaxed mb-8 text-center">
              Geology Connect bridges academia and industry, fostering collaboration and knowledge sharing in geological sciences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">AN</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Alumni Network</h3>
                <p className="text-slate-200 mb-4 text-center">5000+ alumni working across various industries worldwide</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Mentorship programs</li>
                  <li>• Career opportunities</li>
                  <li>• Alumni events</li>
                </ul>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">SP</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Student Portal</h3>
                <p className="text-slate-200 mb-4 text-center">Resources and collaboration for current students</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Study groups</li>
                  <li>• Project collaboration</li>
                  <li>• Event registration</li>
                </ul>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">IC</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Industry Connect</h3>
                <p className="text-slate-200 mb-4 text-center">Bridge between academia and industry</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Job portal</li>
                  <li>• Industry partnerships</li>
                  <li>• Guest lectures</li>
                </ul>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">RF</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Research Forum</h3>
                <p className="text-slate-200 mb-4 text-center">Platform for researchers and collaboration</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Research publications</li>
                  <li>• Discussion forums</li>
                  <li>• Conference updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">Alumni Meet 2024</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">Dec 20, 2024</span>
                </div>
                <p className="text-slate-200">Annual alumni reunion with networking sessions and cultural programs</p>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-50">Industry-Academia Conclave</h3>
                  <span className="text-sm text-[#C8A14D] bg-[#050908] px-3 py-1 rounded">Jan 15, 2025</span>
                </div>
                <p className="text-slate-200">Panel discussions with industry leaders on career opportunities</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Join Our Community</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-2xl mx-auto text-center">
              <p className="text-slate-200 mb-6">
                Register to become part of our growing community and stay connected
              </p>
              <button className="bg-[#C8A14D] text-[#1D3C34] px-8 py-3 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors">
                Register Now
              </button>
            </div>
          </section>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
