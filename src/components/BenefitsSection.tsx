import { Clock, Layers, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Save Time & Effort",
    description: "Complete hours of work in minutes. Automate repetitive tasks and focus on what matters most - making money with AI tools.",
  },
  {
    icon: Layers,
    title: "All Tools in One Place",
    description: "Access 100+ free AI tools from a single dashboard. Everything you need to start earning online without switching platforms.",
  },
  {
    icon: Zap,
    title: "Multiple Income Streams",
    description: "Monetize AI skills through freelancing (Fiverr, Upwork), digital products (templates, courses), content creation (blogs, videos), automation services, and more. Start earning $500-$5000+ monthly.",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Earnings",
    description: "Start with simple services and scale to agency-level income. Build passive revenue through courses, templates, and subscription services while helping others succeed.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div id="benefits" className="text-center mb-16 space-y-4 animate-fade-in scroll-mt-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">AIOrbit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn free AI tools into multiple income streams. Learn how to make $500-$5000+ monthly through freelancing, digital products, content creation, and automation services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
