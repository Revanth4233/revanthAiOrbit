import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolsSection";
import CategoryGrid from "@/components/CategoryGrid";
import BenefitsSection from "@/components/BenefitsSection";
import MonetizationGuide from "@/components/MonetizationGuide";
import RoadmapSection from "@/components/RoadmapSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import QuotesSection from "@/components/QuotesSection";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add Organization Schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AIOrbit",
      "url": "https://aiorbit.com",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
      "description": "Best AI platform with 100+ free AI tools for productivity, creativity, and automation in 2025",
      "sameAs": [
        // Add your social media profiles here when available
      ]
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ToolsSection />
      <CategoryGrid />
      <BenefitsSection />
      <MonetizationGuide />
      <RoadmapSection />
      <HowItWorks />
      <Testimonials />
      <QuotesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
