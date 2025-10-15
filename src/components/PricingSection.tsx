import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out AI tools",
    features: [
      "Access to 10 AI tools",
      "100 generations per month",
      "Basic support",
      "Community access",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    description: "For professionals and creators",
    features: [
      "Access to all 100+ AI tools",
      "Unlimited generations",
      "Priority support",
      "Advanced features",
      "API access",
      "Team collaboration",
    ],
    cta: "Start Premium Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and businesses",
    features: [
      "Everything in Premium",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom training",
      "Volume discounts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePlanSelect = (planName: string) => {
    if (planName === "Enterprise") {
      toast({
        title: "Contact Sales",
        description: "We'll reach out to discuss your enterprise needs.",
      });
    } else {
      navigate('/auth');
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Simple, <span className="bg-gradient-accent bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 ${
                plan.popular 
                  ? 'bg-gradient-primary border-primary shadow-glow scale-105' 
                  : 'bg-card border-border'
              } transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : ''}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-primary-foreground' : ''}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className={`${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  variant={plan.popular ? "secondary" : "hero"}
                  className="w-full"
                  size="lg"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 pt-6 border-t border-border/50">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
