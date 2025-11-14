import AboutSection from "@/component/AboutSection";
import ContactSection from "@/component/ContactSection";
import EducationSection from "@/component/EducationSection";
import HeroSection from "@/component/HeroSection";
import ResearchExperienceSection from "@/component/ResearchExperienceSection";
import TechnicalSkills from "@/component/TechnicalSkills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ResearchExperienceSection />
      <TechnicalSkills /> 
      <ContactSection />
    </div>
  );
}
