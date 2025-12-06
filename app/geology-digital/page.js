import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GeologyDigital() {
  return (
    <div className="min-h-screen bg-[#0b1412] text-slate-100">
      {/* <Navbar /> */}
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">Geology Digital</h1>
          <p className="text-xl text-[#C8A14D] max-w-2xl mx-auto">
            Comprehensive e-learning platform for geological sciences education
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Digital Learning Platform</h2>
            <p className="text-slate-200 leading-relaxed mb-8 text-center max-w-4xl">
              Geology Digital provides access to course materials, virtual labs, research resources, 
              and interactive learning tools for comprehensive geological education.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">VL</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Virtual Labs</h3>
                <p className="text-slate-200 text-center">3D geological models, virtual field trips, and interactive laboratory simulations.</p>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">DL</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Digital Library</h3>
                <p className="text-slate-200 text-center">Extensive collection of e-books, research papers, journals, and databases.</p>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">OC</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Online Courses</h3>
                <p className="text-slate-200 text-center">Self-paced courses and video lectures covering all geological sciences.</p>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">RT</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4 text-center">Research Tools</h3>
                <p className="text-slate-200 text-center">Advanced software for geological data analysis and research.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Platform Features</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">24/7 access to learning materials</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">Interactive 3D geological models</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">Real-time collaboration tools</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">Mobile app for learning on-the-go</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">Progress tracking and analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#C8A14D] rounded-full mr-3"></div>
                    <span className="text-slate-200">Online assessment and feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Get Started</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-2xl mx-auto text-center">
              <p className="text-slate-200 mb-6">
                Login with your university credentials to access the Geology Digital platform.
              </p>
              <button className="bg-[#C8A14D] text-[#1D3C34] px-8 py-3 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors">
                Access Geology Digital
              </button>
            </div>
          </section>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
