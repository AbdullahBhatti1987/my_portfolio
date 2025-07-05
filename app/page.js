// app/page.js

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
// import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
   
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      {/* <ResumeSection /> */}    
      <ContactForm />

      <Footer />
       </main>
    </>
  );
}
