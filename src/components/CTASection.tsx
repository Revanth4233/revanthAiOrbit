import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span>Join 50,000+ professionals already using AI</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Start Your <span className="bg-gradient-accent bg-clip-text text-transparent">AI Journey</span> Today
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access 100+ powerful AI tools completely free. 
            No credit card required, no hidden costs — just pure innovation at your fingertips.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button asChild variant="hero" size="lg" className="text-lg group">
              <Link to="/auth">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg" onClick={() => scrollToSection('tools')}>
              Explore All Tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
