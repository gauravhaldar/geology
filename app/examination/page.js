import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Examination() {
  return (
    <div className="min-h-screen bg-[#0b1412] text-slate-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">Examinations</h1>
          <p className="text-xl text-[#C8A14D] max-w-2xl mx-auto">
            Comprehensive examination system designed to assess and enhance geological knowledge
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Examination Schedule</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#1D3C34] font-bold text-xl">I</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-50">Internal Examinations</h3>
                </div>
                <p className="text-slate-200 mb-4">Regular internal assessments conducted throughout the semester.</p>
                <div className="flex justify-between items-center bg-[#050908] rounded-lg p-3">
                  <span className="text-slate-300">Frequency</span>
                  <span className="text-[#C8A14D] font-semibold">Monthly</span>
                </div>
                <div className="flex justify-between items-center bg-[#050908] rounded-lg p-3 mt-2">
                  <span className="text-slate-300">Weightage</span>
                  <span className="text-[#C8A14D] font-semibold">40%</span>
                </div>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#1D3C34] font-bold text-xl">S</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-50">Semester End Examinations</h3>
                </div>
                <p className="text-slate-200 mb-4">Comprehensive examinations covering the entire semester syllabus.</p>
                <div className="flex justify-between items-center bg-[#050908] rounded-lg p-3">
                  <span className="text-slate-300">Frequency</span>
                  <span className="text-[#C8A14D] font-semibold">End of Semester</span>
                </div>
                <div className="flex justify-between items-center bg-[#050908] rounded-lg p-3 mt-2">
                  <span className="text-slate-300">Weightage</span>
                  <span className="text-[#C8A14D] font-semibold">60%</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Examination Guidelines</h2>
            <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-50 mb-4 text-[#C8A14D]">Before Examination</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">Carry university ID card to examination hall</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">Reach 30 minutes before scheduled time</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">Follow dress code specified by university</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-50 mb-4 text-[#C8A14D]">During Examination</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">Electronic devices strictly prohibited</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">No malpractice allowed</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#C8A14D] mr-3 mt-1">•</span>
                      <span className="text-slate-200">Follow invigilator instructions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-[#C8A14D] mb-8 text-center">Results & Revaluation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">R</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4">Results</h3>
                <p className="text-slate-200 mb-4">Results declared within 30 days of examination completion</p>
                <div className="bg-[#050908] rounded-lg p-3">
                  <p className="text-[#C8A14D] font-semibold">www.geology.ac.in/results</p>
                </div>
              </div>
              
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#C8A14D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1D3C34] font-bold text-2xl">RV</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-4">Revaluation</h3>
                <p className="text-slate-200 mb-4">Apply within 15 days of result declaration</p>
                <div className="bg-[#050908] rounded-lg p-3">
                  <p className="text-[#C8A14D] font-semibold">Fee: ₹500 per paper</p>
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
