import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SpeakingSection from "@/components/SpeakingSection";
import PortfolioSection from "@/components/PortfolioSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Index() {
  useScrollAnimation();

  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <SpeakingSection />
        <PortfolioSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
