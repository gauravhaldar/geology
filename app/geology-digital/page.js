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
            Quick access to university services and resources
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Downloads</h3>
                    <p className="text-sm text-[#C8A14D]">Access university documents</p>
                  </div>
                </div>
                <a href="https://msub.digitaluniversity.ac/downloads" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  Go to Downloads
                </a>
              </div>

              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Activities/Services</h3>
                    <p className="text-sm text-[#C8A14D]">University activities and services</p>
                  </div>
                </div>
                <a href="https://msub.digitaluniversity.ac/activities" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  View Activities
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Online Admission</h3>
                    <p className="text-sm text-[#C8A14D]">Apply for admission online</p>
                  </div>
                </div>
                <a href="https://msuboa.digitaluniversity.ac/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  Apply Now
                </a>
              </div>

              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Online Examination Form</h3>
                    <p className="text-sm text-[#C8A14D]">Submit examination forms</p>
                  </div>
                </div>
                <a href="https://msubapp.digitaluniversity.ac/PreExamv2_ExamformSubmission_PpAmAtWise.aspx" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  Submit Form
                </a>
              </div>

              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Download Time Table</h3>
                    <p className="text-sm text-[#C8A14D]">View examination schedule</p>
                  </div>
                </div>
                <a href="https://msubapp.digitaluniversity.ac/PreExamV2_TimeTable_Report.aspx?ID=323" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  Download Time Table
                </a>
              </div>

              <div className="bg-[#0e1715] border border-white/10 rounded-lg p-6 hover:border-[#C8A14D]/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#C8A14D] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#1D3C34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">Check Results</h3>
                    <p className="text-sm text-[#C8A14D]">View examination results</p>
                  </div>
                </div>
                <a href="https://msubapp.digitaluniversity.ac/SearchProvisionalResult.aspx?ID=822" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full bg-[#C8A14D] text-[#1D3C34] px-4 py-2 rounded-lg font-semibold hover:bg-[#D5C7A1] transition-colors text-center">
                  View Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}
