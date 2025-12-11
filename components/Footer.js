import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e1715] text-slate-100 border-t border-white/10">
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          
          {/* Column 1 - Logo & About */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#1D3C34] shadow-lg shadow-black/40">
                <Image
                  src="/logo.png"
                  alt="Geology Alumni and Geo Sphere logo"
                  width={120}
                  height={120}
                  className="h-20 w-20 object-contain"
                  priority
                />
              </div>
            </div>
            <h3 className="font-semibold text-[#C8A14D] mb-2 text-sm">About Geology Alumni & Geo Sphere</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Connecting alumni, fostering geological research, and celebrating the legacy of the Geology Department of M.S. University, Baroda.
            </p>
          </div>

          {/* Column 2 - Quick Navigation Links */}
          <div>
            <h4 className="font-semibold text-[#C8A14D] mb-4 text-sm">Quick Navigation</h4>
            <ul className="text-xs text-gray-300 space-y-2">
              <li><Link href="/" className="hover:text-[#C8A14D] transition-colors">Home</Link></li>
              <li><Link href="/about-geology-department" className="hover:text-[#C8A14D] transition-colors">About the Department</Link></li>
              <li><Link href="/alumni" className="hover:text-[#C8A14D] transition-colors">Alumni Directory</Link></li>
              <li><Link href="/research-papers" className="hover:text-[#C8A14D] transition-colors">Research & Publications</Link></li>
              <li><Link href="/news-events" className="hover:text-[#C8A14D] transition-colors">Events / Seminars</Link></li>
              <li><Link href="/be-member" className="hover:text-[#C8A14D] transition-colors">Contact Us</Link></li>
              <li><Link href="/faculty-members" className="hover:text-[#C8A14D] transition-colors">Faculty & Staff</Link></li>
            </ul>
          </div>

          {/* Column 3 - Important Resources */}
          <div>
            <h4 className="font-semibold text-[#C8A14D] mb-4 text-sm">Resources</h4>
            <ul className="text-xs text-gray-300 space-y-2">
              <li><Link href="/about-ms-university" className="hover:text-[#C8A14D] transition-colors">Department History</Link></li>
              <li><Link href="/alumni" className="hover:text-[#C8A14D] transition-colors">Notable Alumni</Link></li>
              {/* <li><Link href="/reference-maps" className="hover:text-[#C8A14D] transition-colors">Geological Maps</Link></li> */}
              <li><Link href="/programs" className="hover:text-[#C8A14D] transition-colors">Academic Programs</Link></li>
              <li><a href="https://www.msubaroda.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A14D] transition-colors">MSU Official Website</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Information */}
          <div>
            <h4 className="font-semibold text-[#C8A14D] mb-4 text-sm">Contact Information</h4>
            <div className="text-xs text-gray-300 space-y-3">
              <div>
                <p className="font-medium text-slate-100 mb-1">Department Address</p>
                <p className="leading-relaxed">Department of Geology, The Maharaja Sayajirao University of Baroda, Vadodara, Gujarat, India.</p>
              </div>
              <div>
                <p className="font-medium text-slate-100 mb-1">Email</p>
                <p><a href="mailto:info@msubaroda.ac.in" className="hover:text-[#C8A14D] transition-colors">info@msubaroda.ac.in</a></p>
              </div>
              <div>
                <p className="font-medium text-slate-100 mb-1">Phone</p>
                <p><a href="tel:+91-265-2795555" className="hover:text-[#C8A14D] transition-colors">+91-265-2795555</a></p>
              </div>
              <div>
                <p className="font-medium text-slate-100 mb-1">Office Hours</p>
                <p>Monday to Saturday<br/>10:30 AM to 6:10 PM</p>
              </div>
            </div>
          </div>

          {/* Column 5 - Social Media */}
          <div>
            <h4 className="font-semibold text-[#C8A14D] mb-4 text-sm">Follow Us</h4>
            <div className="flex flex-col space-y-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#C8A14D] transition-colors group">
                <div className="w-5 h-5 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-400 transition-all">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#C8A14D] transition-colors group">
                <div className="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </div>
                LinkedIn
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#C8A14D] transition-colors group">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                YouTube
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#C8A14D] transition-colors group">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                Facebook
              </a>
            </div>
          </div>

          {/* Column 6 - MSUB Links */}
          <div>
            <h4 className="font-semibold text-[#C8A14D] mb-4 text-sm">MSUB Links</h4>
            <ul className="text-xs text-gray-300 space-y-2">
              <li><Link href="/geology-digital" className="hover:text-[#C8A14D] transition-colors">MSUB Digital</Link></li>
              <li><Link href="/geology-news" className="hover:text-[#C8A14D] transition-colors">MSUB in News</Link></li>
              <li><Link href="/geology-connect" className="hover:text-[#C8A14D] transition-colors">MSUB Connect</Link></li>
            </ul>
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
              {/* <a href="#" className="hover:text-[#C8A14D] transition-colors">Academic Calendar</a> */}
              {/* <a href="#" className="hover:text-[#C8A14D] transition-colors">Useful Links</a> */}
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