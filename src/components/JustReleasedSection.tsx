import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, TrendingUp, Sparkles } from "lucide-react";
import { tools } from "@/data/tools";

const JustReleasedSection = () => {
  // Get top 10 trending or new tools
  const trendingTools = tools
    .filter(tool => tool.isTrending || tool.isNew)
    .sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0))
    .slice(0, 10);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              Just Released
            </h2>
            <TrendingUp className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the <span className="text-primary font-semibold">hottest new free AI tools</span> trending right now. 
            Updated weekly with the latest releases from the AI community.
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            🔥 Top 10 Trending • November 2025
          </Badge>
        </header>

        {/* Trending Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingTools.map((tool, index) => (
            <Card 
              key={tool.id}
              className="group p-5 bg-card hover:bg-card/80 border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-glow cursor-pointer animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => window.open(tool.link, '_blank', 'noopener,noreferrer')}
            >
              {/* Trending Badge */}
              {tool.isTrending && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  🔥 TRENDING
                </div>
              )}

              <div className="space-y-3 mt-6">
                {/* Tool Name */}
                <div>
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                    {tool.name}
                  </h3>
                  <Badge variant="outline" className="text-xs mt-2">
                    {tool.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground line-clamp-3 min-h-[60px]">
                  {tool.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="font-semibold text-xs">{tool.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({tool.reviews})</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1">
                  {tool.isFree && (
                    <Badge variant="default" className="text-xs bg-green-600 hover:bg-green-700">
                      100% FREE
                    </Badge>
                  )}
                  {tool.noSignup && (
                    <Badge variant="secondary" className="text-xs">
                      No Sign-Up
                    </Badge>
                  )}
                  {tool.isNew && (
                    <Badge variant="secondary" className="text-xs bg-primary/20">
                      NEW
                    </Badge>
                  )}
                </div>

                {/* Date Added */}
                {tool.dateAdded && (
                  <p className="text-xs text-muted-foreground italic">
                    Added: {tool.dateAdded}
                  </p>
                )}

                {/* Try Now Button */}
                <Button 
                  variant="hero" 
                  size="sm"
                  className="w-full group-hover:shadow-glow"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(tool.link, '_blank', 'noopener,noreferrer');
                  }}
                >
                  Try Now <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            🎯 <strong>Updated Weekly:</strong> AIOrbit is constantly updated with the hottest free AI tools. 
            Data curated from top AI communities and "There's An AI For That".
          </p>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore All 100+ Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JustReleasedSection;
