import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import AlumniSection from "../components/AlumniSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AchievementsSection from "../components/AchievementsSection";
import GallerySection from "../components/GallerySection";
import CareersSection from "../components/CareersSection";
import NewsSection from "../components/NewsSection";
import ContactFacultySection from "../components/ContactFacultySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050908] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <AlumniSection />
        <TestimonialsSection />
        <AchievementsSection />
        <GallerySection />
        <CareersSection />
        <NewsSection />
        <ContactFacultySection />
      </main>
      <Footer />
    </div>
  );
}
