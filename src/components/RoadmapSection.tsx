import { Card } from "@/components/ui/card";
import { Compass, BookOpen, Rocket, TrendingUp, DollarSign } from "lucide-react";

const roadmapSteps = [
  {
    icon: Compass,
    number: "01",
    title: "Step 1: Choose One Free AI Tool",
    description: "Pick one free tool from our list: ChatGPT for writing content, Canva for creating designs, CapCut for editing videos, or ElevenLabs for voice creation. Start with what excites you most!",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Step 2: Learn the Basics in 7 Days",
    description: "Spend 1 hour each day watching free YouTube tutorials and experimenting with the tool. Create 5-10 practice projects. Don't worry about perfection - just learn by doing!",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Step 3: Sign Up on Freelance Platforms",
    description: "Create a free account on Fiverr.com or Upwork.com. Set up a simple profile with your practice projects. Offer ONE clear service: 'I will write blog posts using AI' or 'I will create social media graphics'.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Step 4: Get Your First Paying Client",
    description: "Price your first service at $10-15 to attract customers quickly. Deliver excellent work on time. Ask every happy client for a 5-star review. Your first sale proves it works!",
  },
  {
    icon: DollarSign,
    number: "05",
    title: "Step 5: Scale Your Earnings",
    description: "After getting 5-10 positive reviews, increase prices to $25-50 per project. Learn a second AI tool to offer more services. Create package deals. Dedicate 2-3 hours daily to consistently earn $500-$2000+ monthly!",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="w-full h-full bg-gradient-primary opacity-5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Money Making <span className="bg-gradient-accent bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these clear, simple steps that anyone can understand. Go from zero to earning $500-$2000+ monthly using free AI tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapSteps.map((step, index) => (
            <Card 
              key={step.number}
              className="relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6 items-start">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 mt-2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2 mt-2">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {index < roadmapSteps.length - 1 && (
                <div className="absolute left-[4.5rem] bottom-0 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent translate-y-full" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
