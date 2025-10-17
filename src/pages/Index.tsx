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
    // Add comprehensive Schema markup for SEO
    const organizationSchema = document.createElement('script');
    organizationSchema.type = 'application/ld+json';
    organizationSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AIOrbit",
      "url": "https://aiorbit.com",
      "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
      "description": "Best AI platform with 100+ free AI tools for productivity, creativity, and automation in 2025",
      "sameAs": []
    });
    document.head.appendChild(organizationSchema);

    // Add WebSite schema for search box
    const websiteSchema = document.createElement('script');
    websiteSchema.type = 'application/ld+json';
    websiteSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AIOrbit",
      "url": "https://aiorbit.com",
      "description": "Find 100+ free AI tools for productivity, creativity, and automation. Discover the best AI platform for making money, learning new skills, and boosting your workflow.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aiorbit.com/#tools?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(websiteSchema);

    // Add SoftwareApplication schema for AI platform
    const softwareSchema = document.createElement('script');
    softwareSchema.type = 'application/ld+json';
    softwareSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AIOrbit",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      },
      "description": "AI platform with 100+ free AI tools for productivity, creativity, and automation"
    });
    document.head.appendChild(softwareSchema);

    return () => {
      if (document.head.contains(organizationSchema)) {
        document.head.removeChild(organizationSchema);
      }
      if (document.head.contains(websiteSchema)) {
        document.head.removeChild(websiteSchema);
      }
      if (document.head.contains(softwareSchema)) {
        document.head.removeChild(softwareSchema);
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
