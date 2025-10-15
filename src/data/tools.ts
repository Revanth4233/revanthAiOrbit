export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
  link: string;
  isPro?: boolean;
}

export const tools: Tool[] = [
  // Research Tools - FREE
  { id: "chatgpt", name: "ChatGPT", description: "Most advanced free AI for text generation, Q&A, coding help, and content creation", category: "Research", rating: 4.9, reviews: 2500, tags: ["Conversational AI", "Content writing", "Code generation"], link: "https://chatgpt.com" },
  { id: "perplexity", name: "Perplexity AI", description: "Free AI-powered search engine that provides accurate answers with sources", category: "Research", rating: 4.8, reviews: 1200, tags: ["Search", "Research", "Citations"], link: "https://perplexity.ai" },
  
  // Image Tools - FREE
  { id: "leonardo", name: "Leonardo.ai", description: "Free AI tool to create stunning images, art, and designs", category: "Image", rating: 4.7, reviews: 1500, tags: ["Game assets", "Digital art", "Design"], link: "https://leonardo.ai" },
  { id: "stable-diffusion", name: "Stable Diffusion", description: "Free open-source AI image generation with full control and customization", category: "Image", rating: 4.6, reviews: 2200, tags: ["Open source", "Customizable", "Art"], link: "https://stability.ai" },
  { id: "bing-image", name: "Bing Image Creator", description: "Free AI image generator powered by DALL-E, unlimited usage", category: "Image", rating: 4.7, reviews: 1800, tags: ["Image generation", "Free", "Easy to use"], link: "https://www.bing.com/images/create" },
  
  // Copywriting Tools - FREE
  { id: "copy-ai", name: "Copy.ai", description: "Free plan to generate marketing copy, ads, and content", category: "Copywriting", rating: 4.7, reviews: 1800, tags: ["Marketing copy", "Ad creation", "Content generation"], link: "https://copy.ai" },
  { id: "rytr", name: "Rytr", description: "Free forever plan AI writing assistant for various content types", category: "Copywriting", rating: 4.5, reviews: 1100, tags: ["Affordable", "Multi-purpose", "Fast"], link: "https://rytr.me" },
  
  // Writing Tools - FREE
  { id: "grammarly", name: "Grammarly", description: "Free AI-powered writing assistant for grammar, style, and tone", category: "Writing", rating: 4.8, reviews: 5000, tags: ["Grammar check", "Style improvement", "Tone detection"], link: "https://grammarly.com" },
  { id: "quillbot", name: "QuillBot", description: "Free paraphrasing and summarization tool for writers", category: "Writing", rating: 4.6, reviews: 1600, tags: ["Paraphrasing", "Summarization", "Writing"], link: "https://quillbot.com" },
  { id: "hemingway", name: "Hemingway Editor", description: "Free tool to make your writing bold and clear", category: "Writing", rating: 4.7, reviews: 1200, tags: ["Writing improvement", "Readability", "Editing"], link: "https://hemingwayapp.com" },
  
  // Website Tools - FREE
  { id: "framer", name: "Framer", description: "Free plan to design and publish stunning websites with AI", category: "Website", rating: 4.8, reviews: 1200, tags: ["Website builder", "Design", "No-code"], link: "https://framer.com" },
  { id: "durable", name: "Durable", description: "Build a complete website in 30 seconds with free trial", category: "Website", rating: 4.6, reviews: 800, tags: ["Instant websites", "Small business", "Fast"], link: "https://durable.co" },
  { id: "carrd", name: "Carrd", description: "Free simple, responsive one-page websites", category: "Website", rating: 4.7, reviews: 950, tags: ["One-page", "Simple", "Free"], link: "https://carrd.co" },
  
  // Video Tools - FREE
  { id: "invideo", name: "InVideo", description: "Free plan to create professional videos with AI templates", category: "Video", rating: 4.6, reviews: 1300, tags: ["Video templates", "Editing", "Social media"], link: "https://invideo.io" },
  { id: "capcut", name: "CapCut", description: "100% free video editor with AI features and effects", category: "Video", rating: 4.8, reviews: 2000, tags: ["Video editing", "Free", "AI effects"], link: "https://www.capcut.com" },
  { id: "clipchamp", name: "Clipchamp", description: "Free online video editor with AI features by Microsoft", category: "Video", rating: 4.5, reviews: 1100, tags: ["Video editing", "Templates", "Free"], link: "https://clipchamp.com" },
  
  // Audio Tools - FREE
  { id: "elevenlabs", name: "ElevenLabs", description: "Free plan for realistic AI voice generation and text-to-speech", category: "Audio", rating: 4.9, reviews: 1800, tags: ["Voice generation", "Voice cloning", "Text-to-speech"], link: "https://elevenlabs.io" },
  { id: "murf", name: "Murf AI", description: "Free AI voice generator for podcasts and videos", category: "Audio", rating: 4.7, reviews: 1000, tags: ["Voiceover", "Text-to-speech", "Natural voices"], link: "https://murf.ai" },
  { id: "podcastle", name: "Podcastle", description: "Free podcast recording and editing with AI", category: "Audio", rating: 4.6, reviews: 750, tags: ["Podcast", "Recording", "Editing"], link: "https://podcastle.ai" },
  
  // SEO Tools - FREE
  { id: "ubersuggest", name: "Ubersuggest", description: "Free SEO tool for keyword research and site audit", category: "SEO", rating: 4.7, reviews: 1200, tags: ["SEO optimization", "Keyword research", "Free"], link: "https://neilpatel.com/ubersuggest" },
  { id: "answerthepublic", name: "Answer The Public", description: "Free tool to discover what people are asking online", category: "SEO", rating: 4.6, reviews: 800, tags: ["Content ideas", "Keyword research", "Free"], link: "https://answerthepublic.com" },
  
  // Chatbot Tools - FREE
  { id: "chatbase", name: "Chatbase", description: "Free plan to build custom ChatGPT chatbots for your website", category: "Chatbots", rating: 4.7, reviews: 850, tags: ["Custom chatbots", "Website integration", "Training"], link: "https://chatbase.co" },
  { id: "tidio", name: "Tidio", description: "Free live chat and chatbot for customer service", category: "Chatbots", rating: 4.6, reviews: 650, tags: ["Live chat", "Customer service", "Free"], link: "https://www.tidio.com" },
  
  // Presentation Tools - FREE
  { id: "gamma", name: "Gamma", description: "Free plan to create beautiful presentations and docs with AI", category: "Presentations", rating: 4.8, reviews: 1100, tags: ["Presentations", "Documents", "Design"], link: "https://gamma.app" },
  { id: "canva-presentations", name: "Canva Presentations", description: "Free AI-powered presentation maker with templates", category: "Presentations", rating: 4.7, reviews: 900, tags: ["Templates", "AI design", "Free"], link: "https://www.canva.com/create/presentations" },
  
  // Automation Tools - FREE
  { id: "zapier", name: "Zapier", description: "Free plan to connect and automate apps without coding", category: "Automation", rating: 4.8, reviews: 3000, tags: ["Workflow automation", "App integration", "No-code"], link: "https://zapier.com" },
  { id: "make", name: "Make", description: "Free plan for visual automation building", category: "Automation", rating: 4.7, reviews: 1500, tags: ["Visual builder", "Advanced automation", "Integrations"], link: "https://make.com" },
  { id: "ifttt", name: "IFTTT", description: "100% free automation for apps and devices", category: "Automation", rating: 4.6, reviews: 700, tags: ["Automation", "Free", "Easy"], link: "https://ifttt.com" },
  
  // Design Tools - FREE
  { id: "canva", name: "Canva", description: "100% free design platform with AI magic tools", category: "Design", rating: 4.9, reviews: 4500, tags: ["Graphic design", "Templates", "AI features"], link: "https://canva.com" },
  { id: "removebg", name: "Remove.bg", description: "Free background removal tool with AI", category: "Design", rating: 4.7, reviews: 1000, tags: ["Background removal", "Free", "Fast"], link: "https://remove.bg" },
  { id: "photopea", name: "Photopea", description: "Free online photo editor like Photoshop", category: "Design", rating: 4.8, reviews: 850, tags: ["Photo editing", "Free", "Advanced"], link: "https://www.photopea.com" },
  
  // Logo Tools - FREE
  { id: "canva-logo", name: "Canva Logo Maker", description: "Free AI-powered logo maker with templates", category: "Logo", rating: 4.7, reviews: 1200, tags: ["Logo design", "Free", "Templates"], link: "https://www.canva.com/create/logos" },
  { id: "logomakr", name: "LogoMakr", description: "Free online logo maker, easy and simple", category: "Logo", rating: 4.6, reviews: 900, tags: ["Logo creation", "Free", "Simple"], link: "https://logomakr.com" },
  
  // Productivity Tools - FREE
  { id: "notion", name: "Notion", description: "Free all-in-one workspace with AI features", category: "Productivity", rating: 4.8, reviews: 2000, tags: ["Workspace", "Organization", "Free"], link: "https://notion.so" },
  { id: "taskade", name: "Taskade", description: "Free AI-powered tasks, notes, and collaboration", category: "Productivity", rating: 4.7, reviews: 800, tags: ["Task management", "Collaboration", "AI assistant"], link: "https://taskade.com" },
  { id: "todoist", name: "Todoist", description: "Free task manager with AI features", category: "Productivity", rating: 4.6, reviews: 600, tags: ["Task management", "Free", "Simple"], link: "https://todoist.com" },
  
  // Social Media Tools - FREE
  { id: "buffer", name: "Buffer", description: "Free plan for social media scheduling and management", category: "Social Media", rating: 4.7, reviews: 2500, tags: ["Scheduling", "Analytics", "Multi-platform"], link: "https://buffer.com" },
  { id: "metricool", name: "Metricool", description: "Free social media planner and analytics", category: "Social Media", rating: 4.6, reviews: 700, tags: ["Scheduling", "Free", "Analytics"], link: "https://metricool.com" },
  { id: "later", name: "Later", description: "Free visual social media planner", category: "Social Media", rating: 4.7, reviews: 850, tags: ["Instagram", "Visual planner", "Free"], link: "https://later.com" },
];

export const categories = [
  "All Tools",
  "Research",
  "Image",
  "Copywriting",
  "Writing",
  "Website",
  "Video",
  "Audio",
  "SEO",
  "Chatbots",
  "Presentations",
  "Automation",
  "Design",
  "Logo",
  "Productivity",
  "Social Media"
];
