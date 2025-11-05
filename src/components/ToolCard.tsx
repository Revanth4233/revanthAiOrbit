import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { Tool } from "@/data/tools";
import ToolDetailsModal from "./ToolDetailsModal";
import { toolDetailsData, generateToolDetails } from "@/data/toolDetails";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toolDetails = toolDetailsData[tool.id] || generateToolDetails(
    tool.id,
    tool.name,
    tool.description,
    tool.category,
    tool.rating,
    tool.reviews,
    tool.tags,
    tool.link,
    tool.isPro
  );

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card 
        className="group p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card cursor-pointer animate-fade-in"
        style={{ animationDelay: `${index * 0.03}s` }}
        onClick={handleLearnMore}
      >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              {tool.isPro && (
                <Badge variant="secondary" className="text-xs">Pro</Badge>
              )}
              {tool.isNew && (
                <Badge variant="secondary" className="text-xs bg-primary/20">🆕 NEW</Badge>
              )}
              {tool.isTrending && (
                <Badge variant="default" className="text-xs bg-gradient-primary">🔥 TRENDING</Badge>
              )}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {tool.category}
              </Badge>
              {tool.isFree && (
                <Badge variant="default" className="text-xs bg-green-600 hover:bg-green-700">100% FREE</Badge>
              )}
              {tool.noSignup && (
                <Badge variant="secondary" className="text-xs">No Sign-Up</Badge>
              )}
            </div>
          </div>
        </div>
        
        {/* Date Added */}
        {tool.dateAdded && (
          <p className="text-xs text-muted-foreground italic">
            Added: {tool.dateAdded}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {tool.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold text-sm">{tool.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({tool.reviews})</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 min-h-[60px]">
          {tool.tags.slice(0, 3).map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="hero" 
            className="flex-1 group-hover:shadow-glow"
            onClick={(e) => {
              e.stopPropagation();
              handleLearnMore();
            }}
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              window.open(tool.link, '_blank', 'noopener,noreferrer');
            }}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>

    <ToolDetailsModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      tool={toolDetails}
    />
    </>
  );
};

export default ToolCard;
