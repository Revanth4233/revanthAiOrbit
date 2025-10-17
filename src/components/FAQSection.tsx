import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is the best AI platform in 2025?",
    answer: "AIOrbit is one of the best AI platforms in 2025, offering 100+ free AI tools for productivity, creativity, and automation. Our platform provides curated AI tools across 18 categories including writing, design, video, coding, and more—all without requiring a credit card."
  },
  {
    question: "How can I earn money using free AI tools?",
    answer: "You can earn money with AI tools by offering freelance services like content writing, graphic design, video editing, and social media management. Many users leverage our free AI tools to create digital products, automate business processes, or start AI-powered side hustles. Check our Monetization Guide for detailed strategies."
  },
  {
    question: "Which AI tools are best for students?",
    answer: "Students benefit most from AI tools in categories like Writing (for essays and research), Education (for learning), and Productivity (for note-taking and organization). Popular choices include AI writing assistants, research tools, study planners, and presentation creators—all available free on AIOrbit."
  },
  {
    question: "Which AI tools are best for business and content creators?",
    answer: "Business professionals and content creators should explore our Writing, Design, Video, Social Media, and Marketing categories. These AI tools help automate content creation, design graphics, edit videos, schedule posts, and analyze marketing performance—saving time while maintaining quality."
  },
  {
    question: "Are all the AI tools on AIOrbit really free?",
    answer: "Yes! All 100+ AI tools listed on AIOrbit are free to use. Some tools may offer premium upgrades for advanced features, but the core functionality is completely free. No credit card required to get started."
  },
  {
    question: "How do I get started with AI tools if I'm a beginner?",
    answer: "Start by exploring our 'How It Works' section and choose tools based on your goals (productivity, creativity, or learning). We recommend beginning with user-friendly tools in categories like Writing or Productivity, then gradually exploring more advanced AI tools as you become comfortable."
  },
  {
    question: "Can I use multiple AI tools together?",
    answer: "Absolutely! Many users combine multiple AI tools to create powerful workflows. For example, use an AI writing tool to draft content, an AI design tool to create graphics, and an AI video tool to produce final media. Our platform makes it easy to discover complementary tools across different categories."
  },
  {
    question: "How often are new AI tools added to AIOrbit?",
    answer: "We regularly update our AI platform with new tools and features. Our team continuously researches and tests emerging AI technologies to ensure you have access to the latest and most effective free AI tools available in 2025."
  }
];

const FAQSection = () => {
  useEffect(() => {
    // Add FAQ Schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section aria-labelledby="faq-title" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI platform and tools
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
