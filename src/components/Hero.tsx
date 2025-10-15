import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>AIOrbit – Everything Revolving Around AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform Your Ideas Into Reality
              </span>
              <br />
              <span className="text-foreground">
                With AI-Powered Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              "The best way to predict the future is to create it with AI." 
              Explore 100+ free AI tools curated to amplify your creativity and productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-lg" onClick={() => navigate('/auth')}>
                <Zap className="w-5 h-5" />
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg" onClick={() => scrollToSection('tools')}>
                Explore Tools
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">18</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-glow">10x</div>
                <div className="text-sm text-muted-foreground">Productivity</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img 
              src={heroImage} 
              alt="AI Tools Platform Dashboard" 
              className="relative rounded-3xl shadow-glow border border-primary/20 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
