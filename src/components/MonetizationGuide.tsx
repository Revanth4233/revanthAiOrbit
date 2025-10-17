import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PenTool, Palette, Video, Share2, Search, 
  Zap, Music, Globe, Sparkles 
} from "lucide-react";

const monetizationCategories = [
  {
    id: "writing",
    title: "Freelance Writing & Copywriting",
    icon: PenTool,
    work: "Blog posts, website content, ad copy, email campaigns, social media posts",
    tools: [
      { name: "Copy.ai", link: "https://copy.ai" },
      { name: "Rytr", link: "https://rytr.me" },
      { name: "Grammarly", link: "https://grammarly.com" },
      { name: "QuillBot", link: "https://quillbot.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "Freelancer", link: "https://freelancer.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Select a niche (tech, finance, lifestyle, health)",
      "Use AI to generate SEO-friendly drafts quickly",
      "Offer revisions using AI editing tools",
      "Deliver projects faster to handle multiple clients"
    ],
    tips: "Create content bundles (blog + social captions), build recurring client relationships, offer SEO packages"
  },
  {
    id: "design",
    title: "Graphic Design & Logo Creation",
    icon: Palette,
    work: "Logos, social media graphics, banners, branding kits, marketing materials",
    tools: [
      { name: "Canva", link: "https://canva.com" },
      { name: "Remove.bg", link: "https://remove.bg" },
      { name: "Photopea", link: "https://www.photopea.com" },
      { name: "Canva Logo Maker", link: "https://www.canva.com/create/logos" },
      { name: "LogoMakr", link: "https://logomakr.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "Etsy", link: "https://etsy.com" },
      { name: "99Designs", link: "https://99designs.com" },
      { name: "Dribbble", link: "https://dribbble.com" }
    ],
    steps: [
      "Start with template-based designs",
      "Customize using AI tools for unique results",
      "Offer complete brand packages (logo + social kit)",
      "Build a portfolio of quick turnaround designs"
    ],
    tips: "Sell pre-made templates on Etsy or Creative Market, offer subscription-based design services, create design systems"
  },
  {
    id: "video",
    title: "Video Creation & Editing",
    icon: Video,
    work: "YouTube videos, TikTok/Instagram reels, ads, explainer videos, tutorials",
    tools: [
      { name: "InVideo", link: "https://invideo.io" },
      { name: "CapCut", link: "https://www.capcut.com" },
      { name: "Clipchamp", link: "https://clipchamp.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "YouTube", link: "https://youtube.com" },
      { name: "TikTok Creator Fund", link: "https://www.tiktok.com/creators/creator-portal/" }
    ],
    steps: [
      "Create content for small businesses or influencers",
      "Use AI to auto-generate scripts and edits",
      "Add AI voiceovers and subtitles automatically",
      "Deliver polished videos faster than manual editing"
    ],
    tips: "Offer monthly video subscriptions, sell video templates, provide package deals (5 videos/month), create viral content formats"
  },
  {
    id: "social",
    title: "Social Media Management",
    icon: Share2,
    work: "Social posts, threads, carousels, captions, short videos, content calendars",
    tools: [
      { name: "Buffer", link: "https://buffer.com" },
      { name: "Metricool", link: "https://metricool.com" },
      { name: "Later", link: "https://later.com" },
      { name: "Copy.ai", link: "https://copy.ai" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" },
      { name: "Instagram", link: "https://instagram.com" }
    ],
    steps: [
      "Schedule content for clients using AI",
      "Optimize captions and hashtags automatically",
      "Generate visual content with AI tools",
      "Provide AI-generated analytics reports"
    ],
    tips: "Offer full monthly social packages (20-30 posts), manage multiple clients simultaneously, provide content strategy consulting"
  },
  {
    id: "research",
    title: "AI-Powered Research & Reports",
    icon: Search,
    work: "Market research, competitor analysis, industry reports, data summaries, academic research",
    tools: [
      { name: "ChatGPT", link: "https://chatgpt.com" },
      { name: "Perplexity AI", link: "https://perplexity.ai" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Use AI for fast, accurate research gathering",
      "Summarize complex data into clear reports",
      "Offer reports for niche industries",
      "Provide competitive intelligence services"
    ],
    tips: "Sell report subscriptions (weekly/monthly insights), offer customized industry analysis, create report templates for recurring use"
  },
  {
    id: "automation",
    title: "Automation & Workflow Services",
    icon: Zap,
    work: "Automated email workflows, data entry, report generation, AI pipelines, business automation",
    tools: [
      { name: "Zapier", link: "https://zapier.com" },
      { name: "Make", link: "https://make.com" },
      { name: "IFTTT", link: "https://ifttt.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Identify repetitive tasks businesses want automated",
      "Create custom AI workflows and integrations",
      "Offer setup and maintenance services",
      "Provide training for team members"
    ],
    tips: "Package as monthly subscription service, offer tiered automation plans, combine multiple tools for comprehensive solutions"
  },
  {
    id: "audio",
    title: "Audio & Voice Services",
    icon: Music,
    work: "Voiceovers, podcasts, audiobooks, jingles, sound effects, narration",
    tools: [
      { name: "ElevenLabs", link: "https://elevenlabs.io" },
      { name: "Murf AI", link: "https://murf.ai" },
      { name: "Podcastle", link: "https://podcastle.ai" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "Spotify", link: "https://spotify.com" },
      { name: "YouTube", link: "https://youtube.com" }
    ],
    steps: [
      "Generate scripts using AI writing tools",
      "Convert to high-quality AI voiceovers",
      "Offer packages for video creators and marketers",
      "Create multiple language versions easily"
    ],
    tips: "Create AI voice templates and sell reusable packs, offer podcast editing services, produce audiobook narrations at scale"
  },
  {
    id: "website",
    title: "Website & App Creation",
    icon: Globe,
    work: "Landing pages, portfolios, small business websites, web apps, e-commerce stores",
    tools: [
      { name: "Framer", link: "https://framer.com" },
      { name: "Durable", link: "https://durable.co" },
      { name: "Carrd", link: "https://carrd.co" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "Shopify", link: "https://shopify.com" },
      { name: "WordPress", link: "https://wordpress.com" }
    ],
    steps: [
      "Build templates using AI website builders",
      "Offer customizations and branding",
      "Combine with SEO and content AI tools",
      "Provide ongoing maintenance services"
    ],
    tips: "Offer subscription maintenance packages, sell website templates, provide content + SEO combo services, target local businesses"
  },
  {
    id: "seo",
    title: "SEO & Content Optimization",
    icon: Search,
    work: "Keyword research, site audits, content optimization, backlink analysis, technical SEO",
    tools: [
      { name: "Ubersuggest", link: "https://neilpatel.com/ubersuggest" },
      { name: "Answer The Public", link: "https://answerthepublic.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Perform keyword research using AI tools",
      "Audit websites for SEO improvements",
      "Optimize content for search rankings",
      "Provide monthly SEO reports and strategies"
    ],
    tips: "Offer monthly SEO packages, combine with content writing services, provide competitor analysis, create SEO audit templates"
  },
  {
    id: "chatbots",
    title: "Chatbot Development",
    icon: Sparkles,
    work: "Customer service bots, lead generation bots, FAQ automation, website integration",
    tools: [
      { name: "Chatbase", link: "https://chatbase.co" },
      { name: "Tidio", link: "https://www.tidio.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Build custom ChatGPT chatbots for businesses",
      "Train bots on company-specific data",
      "Integrate chatbots into websites",
      "Provide ongoing maintenance and improvements"
    ],
    tips: "Offer monthly chatbot subscriptions, create industry-specific bot templates, provide training services, combine with website development"
  },
  {
    id: "presentations",
    title: "Presentation Design",
    icon: Sparkles,
    work: "Business presentations, pitch decks, educational slides, webinar materials",
    tools: [
      { name: "Gamma", link: "https://gamma.app" },
      { name: "Canva Presentations", link: "https://www.canva.com/create/presentations" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Create stunning presentations using AI templates",
      "Offer custom branding and design",
      "Provide quick turnaround for urgent projects",
      "Build presentation template libraries"
    ],
    tips: "Sell presentation templates, offer package deals for multiple decks, provide revision services, target startups and small businesses"
  },
  {
    id: "productivity",
    title: "Productivity Consulting",
    icon: Zap,
    work: "Workflow optimization, AI tool training, productivity systems, digital organization",
    tools: [
      { name: "Notion", link: "https://notion.so" },
      { name: "Taskade", link: "https://taskade.com" },
      { name: "Todoist", link: "https://todoist.com" }
    ],
    platforms: [
      { name: "Fiverr", link: "https://fiverr.com" },
      { name: "Upwork", link: "https://upwork.com" },
      { name: "LinkedIn", link: "https://linkedin.com" }
    ],
    steps: [
      "Set up AI-powered productivity systems for clients",
      "Train teams on AI tool usage",
      "Create custom workflow templates",
      "Provide ongoing optimization consulting"
    ],
    tips: "Offer monthly retainer packages, create productivity templates to sell, provide group training sessions, build industry-specific systems"
  }
];

const MonetizationGuide = () => {
  return (
    <section id="monetization" className="py-20 px-4 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Top AI Tools for <span className="bg-gradient-primary bg-clip-text text-transparent">Making Money</span> and Learning New Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn AI skills into real income. Comprehensive guides for each category with the best AI tools, platforms, and proven strategies.
          </p>
        </header>

        <Tabs defaultValue="writing" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-5 gap-2 h-auto bg-card p-2 mb-8">
            {monetizationCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {monetizationCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground">Transform this skill into a profitable business</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">📋 Type of Work / Services</h4>
                      <p className="text-muted-foreground leading-relaxed">{category.work}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">🤖 Recommended AI Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, index) => (
                          <a
                            key={index}
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                          >
                            {tool.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">💼 Monetization Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.platforms.map((platform, index) => (
                          <a
                            key={index}
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
                          >
                            {platform.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-accent">💡 Tips to Scale</h4>
                      <p className="text-muted-foreground leading-relaxed">{category.tips}</p>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                    <h4 className="text-lg font-semibold mb-4 text-primary">📈 Step-by-Step Micro-Guide</h4>
                    <ol className="space-y-4">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">1</span>
                        <div className="pt-1">
                          <span className="font-semibold">Choose your service</span>
                          <p className="text-muted-foreground">{category.work}</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">2</span>
                        <div className="pt-1">
                          <span className="font-semibold">Use these tools</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {category.tools.slice(0, 4).map((tool, idx) => (
                              <a key={idx} href={tool.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium">
                                {tool.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">3</span>
                        <div className="pt-1">
                          <span className="font-semibold">List your gig</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {category.platforms.slice(0, 4).map((platform, idx) => (
                              <a key={idx} href={platform.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium">
                                {platform.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">4</span>
                        <div className="pt-1">
                          <span className="font-semibold">Deliver & scale</span>
                          <p className="text-muted-foreground">{category.tips}</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MonetizationGuide;
