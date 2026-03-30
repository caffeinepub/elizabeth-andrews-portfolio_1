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

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--ink-black)",
      }}
    >
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
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
