import { MousePointer, Sparkles, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: MousePointer,
    title: "Select Category",
    description: "Choose from 18 specialized AI tool categories based on your needs",
  },
  {
    icon: Sparkles,
    title: "Choose Tool",
    description: "Pick the perfect AI tool from our curated collection of 100+ options",
  },
  {
    icon: Download,
    title: "Generate Output",
    description: "Create professional results in seconds, ready to use or monetize",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and transform your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" style={{ top: '80px' }} />

          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className="relative p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm border-4 border-background">
                {index + 1}
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-accent flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
