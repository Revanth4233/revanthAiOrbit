import { 
  Search, Image, FileText, PenTool, Globe, Video, 
  Users, TrendingUp, MessageSquare, Presentation, 
  Zap, Lightbulb, Palette, Layers, Music, 
  BarChart, Share2, Sparkles 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Research", icon: Search, description: "AI-powered research and data analysis", tools: "ChatGPT, Perplexity, Consensus" },
  { name: "Image", icon: Image, description: "Generate and edit stunning visuals", tools: "Midjourney, DALL-E, Stable Diffusion" },
  { name: "Copywriting", icon: FileText, description: "Create compelling copy instantly", tools: "Copy.ai, Jasper, Writesonic" },
  { name: "Writing", icon: PenTool, description: "Long-form content & articles", tools: "Grammarly, Sudowrite, Rytr" },
  { name: "Website", icon: Globe, description: "Build websites without coding", tools: "Framer, Durable, 10Web" },
  { name: "Video", icon: Video, description: "Create professional videos easily", tools: "Pictory, InVideo, Runway" },
  { name: "Meetings", icon: Users, description: "AI meeting assistants & notes", tools: "Otter.ai, Fireflies, Fathom" },
  { name: "SEO", icon: TrendingUp, description: "Optimize for search engines", tools: "Surfer SEO, Clearscope, Frase" },
  { name: "Chatbots", icon: MessageSquare, description: "Build intelligent chatbots", tools: "Chatbase, CustomGPT, Voiceflow" },
  { name: "Presentations", icon: Presentation, description: "Design stunning slides", tools: "Gamma, Beautiful.ai, Tome" },
  { name: "Automation", icon: Zap, description: "Automate repetitive tasks", tools: "Zapier, Make, Bardeen" },
  { name: "Prompts", icon: Lightbulb, description: "Optimize your AI prompts", tools: "PromptBase, AIPRM, PromptHero" },
  { name: "UI/UX", icon: Palette, description: "Design interfaces with AI", tools: "Uizard, Galileo, Magician" },
  { name: "Design", icon: Layers, description: "Complete design solutions", tools: "Canva, Designify, Artbreeder" },
  { name: "Logo", icon: Sparkles, description: "Create unique brand logos", tools: "Looka, Brandmark, Designs.ai" },
  { name: "Audio", icon: Music, description: "Generate & edit audio", tools: "Eleven Labs, LOVO, Podcastle" },
  { name: "Productivity", icon: BarChart, description: "Boost your workflow", tools: "Notion AI, Mem, Taskade" },
  { name: "Social Media", icon: Share2, description: "Manage social presence", tools: "Buffer, Postwise, Hypefury" },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20 px-4 relative scroll-mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Explore AI Tools by <span className="bg-gradient-primary bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From research to social media, find the perfect AI tool for every task
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary/70 font-medium">
                    {category.tools}
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

export default CategoryGrid;
