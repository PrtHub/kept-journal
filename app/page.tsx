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
import { APP_STORE_URL, SITE_URL } from "@/lib/config";
import { FAQS } from "@/lib/faqs";

// No aggregateRating: there are no ratings, and inventing them is fraud.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Kept",
      description:
        "A private journal for iPhone. Write freely, and get a one-page summary of what you wrote on the day you chose. Encrypted on the device, with no account and no server.",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      url: SITE_URL,
      installUrl: APP_STORE_URL,
      offers: [
        { "@type": "Offer", name: "A month", price: "9.99", priceCurrency: "USD" },
        { "@type": "Offer", name: "A year", price: "39.99", priceCurrency: "USD" },
        {
          "@type": "Offer",
          name: "No end date",
          price: "99.99",
          priceCurrency: "USD",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AmbientField />
      <Navbar />

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

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
