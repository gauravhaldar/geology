import { Merriweather, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Geology Department – Alumni & Programs",
  description:
    "Geology Department of The Maharaja Sayajirao University of Baroda – academic programs, alumni achievements, careers and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-[#050908] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
