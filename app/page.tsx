import AmbientField from "@/components/background/AmbientField";
import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProblemSection from "@/components/problem/ProblemSection";
import DayOneSection from "@/components/day-one/DayOneSection";
import PageFeatureSection from "@/components/page-feature/PageFeatureSection";
import PrivacySection from "@/components/privacy/PrivacySection";
import MemorySection from "@/components/memory/MemorySection";
import PricingSection from "@/components/pricing/PricingSection";
import FaqSection from "@/components/faq/FaqSection";
import CloseSection from "@/components/close/CloseSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-[#7ac4d1]/30 selection:text-[#f4f4f1]">
      {/* Signature WebGL Ambient Field (Fixed Background) */}
      <AmbientField />

      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content Sections (Z-index 10 above ambient shader) */}
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <DayOneSection />
        <PageFeatureSection />
        <PrivacySection />
        <MemorySection />
        <PricingSection />
        <FaqSection />
        <CloseSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
