import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ExternalLink, Star, Lightbulb, TrendingUp, Map, DollarSign, ShoppingBag, FileText } from "lucide-react";
import { ToolDetails } from "@/data/toolDetails";

interface ToolDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: ToolDetails;
}

const ToolDetailsModal = ({ isOpen, onClose, tool }: ToolDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-xl md:text-2xl font-bold mb-2">{tool.name}</DialogTitle>
              <DialogDescription className="text-sm md:text-base">{tool.description}</DialogDescription>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3">
                <Badge variant="outline" className="text-xs md:text-sm">{tool.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
                  <span className="font-semibold text-xs md:text-sm">{tool.rating}</span>
                  <span className="text-xs text-muted-foreground">({tool.reviews})</span>
                </div>
              </div>
            </div>
            <Button
              variant="hero"
              size="sm"
              className="w-full md:w-auto"
              asChild
            >
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Tool <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </a>
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4 md:mt-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-1 h-auto">
            <TabsTrigger value="overview" className="text-xs md:text-sm py-2">Overview</TabsTrigger>
            <TabsTrigger value="usage" className="text-xs md:text-sm py-2">How to Use</TabsTrigger>
            <TabsTrigger value="examples" className="text-xs md:text-sm py-2">Real-Time Examples</TabsTrigger>
            <TabsTrigger value="benefits" className="text-xs md:text-sm py-2">Benefits</TabsTrigger>
            <TabsTrigger value="monetize" className="text-xs md:text-sm py-2">Make Money</TabsTrigger>
            <TabsTrigger value="roadmap" className="text-xs md:text-sm py-2">Money Roadmap</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                What is {tool.name}?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{tool.overview}</p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-sm md:text-base mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* How to Use Tab */}
          <TabsContent value="usage" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4">Step-by-Step Guide</h3>
              <div className="space-y-4">
                {tool.howToUse.map((step, index) => (
                  <div key={index} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm md:text-base font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm md:text-base mb-1">{step.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground break-words">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                Real-Time Examples & Benefits
              </h3>
              <div className="space-y-6">
                {tool.examples.map((example, index) => (
                  <div key={index} className="border-l-4 border-primary/50 pl-3 md:pl-4 py-2">
                    <h4 className="font-semibold text-sm md:text-base mb-2 text-primary">{example.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">{example.description}</p>
                    
                    {example.input && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-muted-foreground mb-1">Input/Prompt:</div>
                        <div className="bg-secondary/30 p-2 md:p-3 rounded text-xs md:text-sm font-mono break-words whitespace-pre-wrap">
                          {example.input}
                        </div>
                      </div>
                    )}
                    
                    {example.output && (
                      <div className="mb-3">
                        <div className="text-xs font-semibold text-muted-foreground mb-1">Output/Result:</div>
                        <div className="bg-accent/10 p-2 md:p-3 rounded text-xs md:text-sm border border-accent/20 break-words whitespace-pre-wrap">
                          {example.output}
                        </div>
                      </div>
                    )}
                    
                    {example.steps && example.steps.length > 0 && (
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground mb-2">Steps:</div>
                        <ol className="list-decimal list-inside space-y-1 text-xs md:text-sm text-muted-foreground">
                          {example.steps.map((step, i) => (
                            <li key={i} className="break-words">{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                Key Benefits
              </h3>
              <div className="grid gap-4">
                {tool.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-accent text-base md:text-lg">✓</div>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base mb-1">{benefit.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Monetization Tab */}
          <TabsContent value="monetize" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                How to Make Money
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm md:text-base mb-2">Services You Can Offer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-muted-foreground">
                    {tool.monetization.services.map((service, i) => (
                      <li key={i} className="break-words">{service}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm md:text-base mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
                    Platforms to Sell On:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.monetization.platforms.map((platform, i) => (
                      <Badge key={i} variant="secondary" className="text-xs break-words">{platform}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm md:text-base mb-2">Recommended Tool Combinations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.monetization.toolCombinations.map((combo, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{combo}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/20 p-3 md:p-4 rounded-lg">
                  <h4 className="font-semibold text-sm md:text-base mb-2">💡 Pro Tips:</h4>
                  <ul className="space-y-2">
                    {tool.monetization.tips.map((tip, i) => (
                      <li key={i} className="text-xs md:text-sm text-muted-foreground break-words">• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-4 mt-4">
            <Card className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2">
                <Map className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                Money Making Roadmap
              </h3>
              <div className="space-y-6">
                {tool.roadmap.map((phase, index) => (
                  <div key={index} className="relative pl-6 md:pl-8 pb-6 border-l-2 border-primary/30 last:border-0 last:pb-0">
                    <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-primary"></div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium">{phase.phase}</div>
                      <h4 className="font-semibold text-sm md:text-base mb-2">{phase.title}</h4>
                      <ul className="space-y-1">
                        {phase.steps.map((step, i) => (
                          <li key={i} className="text-xs md:text-sm text-muted-foreground break-words">• {step}</li>
                        ))}
                      </ul>
                      {phase.earnings && (
                        <div className="mt-2 inline-block px-2 md:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                          {phase.earnings}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ToolDetailsModal;
