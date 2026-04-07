import { Loader } from "../components/Loader";
import { ChatbotWidget } from "../components/ChatbotWidget";
import { TopNav } from "../components/TopNav";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { AboutSection } from "../sections/AboutSection";
import { CertificationsSection } from "../sections/CertificationsSection";
import { ContactSection } from "../sections/ContactSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ResumeSection } from "../sections/ResumeSection";
import { SkillsSection } from "../sections/SkillsSection";

export function PortfolioPage() {
  const { data, loading } = usePortfolioData();
  const year = new Date().getFullYear();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-white">
      <TopNav portfolio={data} />
      <main className="relative z-10 pt-24 md:pt-28">
        <HeroSection portfolio={data} />
        <AboutSection portfolio={data} />
        <SkillsSection portfolio={data} />
        <ProjectsSection portfolio={data} />
        <ExperienceSection portfolio={data} />
        <EducationSection portfolio={data} />
        <CertificationsSection portfolio={data} />
        <ResumeSection portfolio={data} />
        <ContactSection portfolio={data} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/45">
        © {year} {data.hero.name}. {data.footerNote}
      </footer>
      <ChatbotWidget portfolio={data} />
    </div>
  );
}
