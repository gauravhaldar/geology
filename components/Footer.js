export default function Footer() {
  return (
    <footer className="bg-[#0e1715] text-slate-100 border-t border-white/10">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Left Column - Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-center md:text-left">
                Geology<br/>Website
              </h3>
              {/* <p className="text-sm text-gray-300 mt-2">सत्यं शिवं सुन्दरम्</p> */}
              {/* <p className="text-xs text-gray-400 mt-1">Estd. 1949</p> */}
            </div>
          </div>

          {/* Middle-Left Column - Head Office Address */}
          <div>
            <h4 className="font-semibold mb-3">Head Office Address</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>The M. S. University of Baroda,<br/> Pratapgunj,<br/>
               Vadodara, Gujarat-390002</p>
              <p>+91-265-2795555</p>
              <p>info@msubaroda.ac.in</p>
              <p>www.msubaroda.ac.in</p>
              {/* <div className="flex space-x-2 mt-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gray-600 rounded"></div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Middle-Right Column - Useful Links */}
          <div>
            <h4 className="font-semibold mb-3">Useful Links</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="/geology-digital" className="hover:text-white transition-colors">Geology Digital</a></li>
              <li><a href="/geology-news" className="hover:text-white transition-colors">Geology in News</a></li>
              <li><a href="/geology-connect" className="hover:text-white transition-colors">Geology Connect</a></li>
            </ul>
          </div>

          {/* Right Column - Head Office Working Hours */}
          <div>
            <h4 className="font-semibold mb-3">Head Office Working Hours</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p><span className="font-medium">Day:</span> Monday to Saturday</p>
              <p><span className="font-medium">Time:</span> 10:30 am to 06:10 pm</p>
              <p className="text-xs mt-2">Closed on: 2nd and 4th Saturday, Sunday, Government Approved Holidays</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 bg-[#050908]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-400 mb-2 md:mb-0">
              Copyright 2025 Geology Alumni & Geo Sphere. All Rights Reserved, Designed by Haldar AI & IT
            </p>
            <div className="flex flex-wrap items-center space-x-4 text-xs text-slate-400">
              {/* <a href="#" className="hover:text-[#C8A14D] transition-colors">Geology Webmail</a> */}
              <a href="#" className="hover:text-[#C8A14D] transition-colors">Academic Calendar</a>
              <a href="#" className="hover:text-[#C8A14D] transition-colors">Useful Links</a>
              {/* <a href="#" className="hover:text-[#C8A14D] transition-colors">Site Map</a> */}
              <a href="/be-member" className="hover:text-[#C8A14D] transition-colors">Contact Us</a>
              <div className="w-4 h-4 bg-[#1D3C34] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}