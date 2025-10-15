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

const Index = () => {
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
