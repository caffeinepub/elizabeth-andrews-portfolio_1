import { useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import FullPortfolio from "./components/FullPortfolio";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import OrnamentalDivider from "./components/OrnamentalDivider";
import PortfolioPreview from "./components/PortfolioPreview";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [isDark, toggleDark] = useDarkMode();
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "var(--ink-black)" : "var(--off-white)",
        transition: "background-color 0.5s ease",
      }}
    >
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar isDark={isDark} toggleDark={toggleDark} />
          <main>
            <HeroSection />
            <OrnamentalDivider />
            <StatsSection />
            <OrnamentalDivider />
            <ServicesSection />
            <OrnamentalDivider />
            <PortfolioPreview />
            <OrnamentalDivider />
            <AboutSection />
            <OrnamentalDivider />
            <FullPortfolio />
            <OrnamentalDivider />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
