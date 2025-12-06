import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Admission() {
  return (
    <div className="min-h-screen bg-[#0b1412] text-slate-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">Admissions</h1>
          <p className="text-xl text-[#C8A14D] max-w-2xl mx-auto">
            Join our prestigious geology department and embark on a journey of scientific discovery
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 text-center hover:border-[#C8A14D]/50 transition-all">
                <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">Application</h3>
                <p className="text-slate-200">Fill out the online application form with required details and documents.</p>
              </div>
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 text-center hover:border-[#C8A14D]/50 transition-all">
                <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">Entrance Test</h3>
                <p className="text-slate-200">Appear for the university entrance examination.</p>
              </div>
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 text-center hover:border-[#C8A14D]/50 transition-all">
                <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">Merit List</h3>
                <p className="text-slate-200">Check merit list and attend counseling session.</p>
              </div>
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 text-center hover:border-[#C8A14D]/50 transition-all">
                <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">Fee Payment</h3>
                <p className="text-slate-200">Complete admission by paying required fees.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-50 mb-6 text-[#C8A14D]">Undergraduate</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-[#C8A14D] mr-3">•</span>
                    <span>B.Sc. (Hons): 12th Science with minimum 50% marks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8A14D] mr-3">•</span>
                    <span>Physics, Chemistry, and Mathematics/Geology as subjects</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-slate-50 mb-6 text-[#C8A14D]">Postgraduate</h3>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-[#C8A14D] mr-3">•</span>
                    <span>M.Sc.: B.Sc. Geology with minimum 55% marks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8A14D] mr-3">•</span>
                    <span>M.Phil.: M.Sc. Geology with minimum 55% marks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C8A14D] mr-3">•</span>
                    <span>Ph.D.: M.Phil./M.Sc. Geology with qualifying marks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Important Dates</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-200">Application Start</span>
                    <span className="text-[#C8A14D] font-semibold">1st May 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-200">Application Deadline</span>
                    <span className="text-[#C8A14D] font-semibold">30th June 2024</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-200">Entrance Test</span>
                    <span className="text-[#C8A14D] font-semibold">15th July 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-200">Result Declaration</span>
                    <span className="text-[#C8A14D] font-semibold">25th July 2024</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-200">Counseling Begins</span>
                  <span className="text-[#C8A14D] font-semibold">1st August 2024</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
