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
  // Research & Chat AI Tools
  { id: "chatgpt", name: "ChatGPT", description: "OpenAI's most advanced AI chatbot for conversations, writing, coding, and problem-solving", category: "Research", rating: 4.9, reviews: 5000, tags: ["Conversational AI", "Writing", "Code generation"], link: "https://chatgpt.com" },
  { id: "claude", name: "Claude", description: "Anthropic's AI assistant with advanced reasoning and long context understanding", category: "Research", rating: 4.9, reviews: 3200, tags: ["AI assistant", "Analysis", "Writing"], link: "https://claude.ai" },
  { id: "perplexity", name: "Perplexity AI", description: "AI-powered search engine that provides accurate answers with cited sources", category: "Research", rating: 4.8, reviews: 2400, tags: ["Search", "Research", "Citations"], link: "https://perplexity.ai" },
  { id: "gemini", name: "Google Gemini", description: "Google's multimodal AI for research, writing, coding, and creative tasks", category: "Research", rating: 4.8, reviews: 4100, tags: ["Multimodal AI", "Search", "Productivity"], link: "https://gemini.google.com" },
  { id: "you", name: "You.com", description: "AI search engine with personalized results and chat interface", category: "Research", rating: 4.6, reviews: 1100, tags: ["Search", "AI chat", "Privacy"], link: "https://you.com" },
  { id: "consensus", name: "Consensus", description: "AI-powered search engine for scientific research papers with evidence-based answers", category: "Research", rating: 4.7, reviews: 850, tags: ["Academic", "Research", "Science"], link: "https://consensus.app" },
  { id: "elicit", name: "Elicit", description: "AI research assistant that helps analyze research papers and extract insights", category: "Research", rating: 4.6, reviews: 920, tags: ["Research", "Academic", "Analysis"], link: "https://elicit.org" },
  { id: "scite", name: "Scite", description: "AI tool that shows how research papers have been cited and supported", category: "Research", rating: 4.7, reviews: 780, tags: ["Citations", "Research", "Academic"], link: "https://scite.ai" },
  
  // Image Generation AI Tools
  { id: "midjourney", name: "Midjourney", description: "Leading AI art generator creating stunning, imaginative images from text prompts", category: "Image", rating: 4.9, reviews: 6500, tags: ["Art generation", "Creative", "High quality"], link: "https://midjourney.com" },
  { id: "dalle", name: "DALL-E 3", description: "OpenAI's powerful image generator integrated with ChatGPT", category: "Image", rating: 4.8, reviews: 4200, tags: ["Image generation", "Creative", "Integration"], link: "https://openai.com/dall-e-3" },
  { id: "leonardo", name: "Leonardo.ai", description: "AI-powered platform for creating production-quality visual assets", category: "Image", rating: 4.7, reviews: 2800, tags: ["Game assets", "Digital art", "Commercial"], link: "https://leonardo.ai" },
  { id: "stable-diffusion", name: "Stable Diffusion", description: "Open-source AI image generator with full control and customization", category: "Image", rating: 4.6, reviews: 3400, tags: ["Open source", "Customizable", "Free"], link: "https://stability.ai" },
  { id: "adobe-firefly", name: "Adobe Firefly", description: "Adobe's AI image generator designed for commercial use", category: "Image", rating: 4.7, reviews: 2100, tags: ["Commercial safe", "Adobe integration", "Professional"], link: "https://firefly.adobe.com" },
  { id: "ideogram", name: "Ideogram", description: "AI image generator excellent at rendering text within images", category: "Image", rating: 4.6, reviews: 1650, tags: ["Text rendering", "Typography", "Creative"], link: "https://ideogram.ai" },
  { id: "bing-image", name: "Bing Image Creator", description: "Free AI image generator powered by DALL-E 3", category: "Image", rating: 4.7, reviews: 2900, tags: ["Free", "Microsoft", "Easy to use"], link: "https://www.bing.com/images/create" },
  { id: "playground-ai", name: "Playground AI", description: "Free AI image generator with advanced editing capabilities", category: "Image", rating: 4.6, reviews: 1420, tags: ["Free", "Editing", "Creative"], link: "https://playground.com" },
  { id: "artbreeder", name: "Artbreeder", description: "AI tool for blending and evolving images collaboratively", category: "Image", rating: 4.5, reviews: 980, tags: ["Image mixing", "Collaborative", "Creative"], link: "https://artbreeder.com" },
  { id: "craiyon", name: "Craiyon", description: "Free AI image generator, formerly known as DALL-E mini", category: "Image", rating: 4.3, reviews: 1850, tags: ["Free", "Simple", "Accessible"], link: "https://craiyon.com" },
  
  // Video AI Tools
  { id: "runway", name: "Runway", description: "Advanced AI video editing and generation platform for creators", category: "Video", rating: 4.8, reviews: 2400, tags: ["Video generation", "Editing", "Professional"], link: "https://runwayml.com" },
  { id: "pika", name: "Pika", description: "AI video generator that creates and edits videos from text prompts", category: "Video", rating: 4.7, reviews: 1680, tags: ["Video generation", "Text-to-video", "Creative"], link: "https://pika.art" },
  { id: "synthesia", name: "Synthesia", description: "AI video platform creating professional videos with AI avatars", category: "Video", rating: 4.7, reviews: 2100, tags: ["AI avatars", "Professional", "Business"], link: "https://synthesia.io" },
  { id: "heygen", name: "HeyGen", description: "AI video generator with customizable avatars and voice cloning", category: "Video", rating: 4.6, reviews: 1520, tags: ["Avatars", "Voice cloning", "Marketing"], link: "https://heygen.com" },
  { id: "descript", name: "Descript", description: "AI-powered video and podcast editor with transcription", category: "Video", rating: 4.8, reviews: 3200, tags: ["Editing", "Transcription", "Podcasts"], link: "https://descript.com" },
  { id: "invideo-ai", name: "InVideo AI", description: "AI video creator that generates complete videos from text prompts", category: "Video", rating: 4.6, reviews: 1980, tags: ["Text-to-video", "Templates", "Social media"], link: "https://invideo.io" },
  { id: "capcut", name: "CapCut", description: "Free video editor with AI-powered features and effects", category: "Video", rating: 4.8, reviews: 4500, tags: ["Free", "Mobile", "AI effects"], link: "https://www.capcut.com" },
  { id: "opus-clip", name: "Opus Clip", description: "AI tool that creates viral short clips from long videos", category: "Video", rating: 4.7, reviews: 1340, tags: ["Clips", "Social media", "Automation"], link: "https://opus.pro" },
  { id: "fliki", name: "Fliki", description: "AI tool converting text into videos with realistic voices", category: "Video", rating: 4.6, reviews: 1120, tags: ["Text-to-video", "Voiceover", "Simple"], link: "https://fliki.ai" },
  { id: "pictory", name: "Pictory", description: "AI video creator that turns scripts and articles into videos", category: "Video", rating: 4.5, reviews: 980, tags: ["Script-to-video", "Marketing", "Content"], link: "https://pictory.ai" },
  
  // Audio & Voice AI Tools
  { id: "elevenlabs", name: "ElevenLabs", description: "Leading AI voice generator with ultra-realistic speech synthesis", category: "Audio", rating: 4.9, reviews: 3800, tags: ["Voice generation", "Text-to-speech", "Voice cloning"], link: "https://elevenlabs.io" },
  { id: "murf", name: "Murf AI", description: "AI voice generator for professional voiceovers and narration", category: "Audio", rating: 4.7, reviews: 1650, tags: ["Voiceover", "Professional", "Natural voices"], link: "https://murf.ai" },
  { id: "play-ht", name: "Play.ht", description: "AI voice generator with ultra-realistic text-to-speech", category: "Audio", rating: 4.6, reviews: 1280, tags: ["Text-to-speech", "Realistic", "API"], link: "https://play.ht" },
  { id: "resemble", name: "Resemble AI", description: "AI voice cloning and generation for custom voice synthesis", category: "Audio", rating: 4.7, reviews: 920, tags: ["Voice cloning", "Custom voices", "API"], link: "https://resemble.ai" },
  { id: "descript-overdub", name: "Descript Overdub", description: "AI voice cloning for editing speech in your own voice", category: "Audio", rating: 4.6, reviews: 1540, tags: ["Voice cloning", "Editing", "Personal"], link: "https://descript.com" },
  { id: "adobe-podcast", name: "Adobe Podcast", description: "AI audio enhancement tool for crystal-clear podcast recordings", category: "Audio", rating: 4.7, reviews: 1820, tags: ["Enhancement", "Podcasts", "Free"], link: "https://podcast.adobe.com" },
  { id: "krisp", name: "Krisp", description: "AI noise cancellation for calls and recordings", category: "Audio", rating: 4.8, reviews: 2400, tags: ["Noise cancellation", "Calls", "Productivity"], link: "https://krisp.ai" },
  { id: "lalal", name: "LALAL.AI", description: "AI-powered audio source separation for stems extraction", category: "Audio", rating: 4.6, reviews: 1150, tags: ["Stem separation", "Music", "Audio editing"], link: "https://lalal.ai" },
  { id: "suno", name: "Suno", description: "AI music generator creating complete songs from text prompts", category: "Audio", rating: 4.7, reviews: 2100, tags: ["Music generation", "Songs", "Creative"], link: "https://suno.ai" },
  { id: "udio", name: "Udio", description: "AI music creation platform for generating original songs", category: "Audio", rating: 4.6, reviews: 1680, tags: ["Music generation", "Original", "Creative"], link: "https://udio.com" },
  
  // Writing & Copywriting AI Tools
  { id: "jasper", name: "Jasper", description: "AI writing assistant for marketing copy, blogs, and content", category: "Copywriting", rating: 4.7, reviews: 3200, tags: ["Marketing", "SEO", "Professional"], link: "https://jasper.ai" },
  { id: "copy-ai", name: "Copy.ai", description: "AI copywriter for marketing content and sales copy", category: "Copywriting", rating: 4.7, reviews: 2800, tags: ["Marketing", "Sales copy", "Fast"], link: "https://copy.ai" },
  { id: "writesonic", name: "Writesonic", description: "AI writing tool for articles, ads, and product descriptions", category: "Copywriting", rating: 4.6, reviews: 2100, tags: ["Content", "Ads", "SEO"], link: "https://writesonic.com" },
  { id: "rytr", name: "Rytr", description: "Affordable AI writing assistant for multiple content types", category: "Copywriting", rating: 4.5, reviews: 1850, tags: ["Affordable", "Multi-purpose", "Fast"], link: "https://rytr.me" },
  { id: "anyword", name: "Anyword", description: "AI copywriting platform optimized for conversion and performance", category: "Copywriting", rating: 4.6, reviews: 1420, tags: ["Conversion", "Marketing", "Data-driven"], link: "https://anyword.com" },
  { id: "grammarly", name: "Grammarly", description: "AI writing assistant for grammar, style, and tone improvement", category: "Writing", rating: 4.8, reviews: 8500, tags: ["Grammar", "Style", "Professional"], link: "https://grammarly.com" },
  { id: "quillbot", name: "QuillBot", description: "AI paraphrasing and summarization tool for writers", category: "Writing", rating: 4.6, reviews: 2400, tags: ["Paraphrasing", "Summarization", "Academic"], link: "https://quillbot.com" },
  { id: "wordtune", name: "Wordtune", description: "AI writing companion that suggests better ways to phrase your text", category: "Writing", rating: 4.7, reviews: 1920, tags: ["Rewriting", "Clarity", "Professional"], link: "https://wordtune.com" },
  { id: "notion-ai", name: "Notion AI", description: "AI assistant integrated into Notion for writing and organizing", category: "Writing", rating: 4.7, reviews: 3400, tags: ["Integration", "Organization", "Productivity"], link: "https://notion.so" },
  { id: "sudowrite", name: "Sudowrite", description: "AI writing tool specifically designed for creative fiction writers", category: "Writing", rating: 4.6, reviews: 980, tags: ["Fiction", "Creative", "Storytelling"], link: "https://sudowrite.com" },
  
  // Code AI Tools
  { id: "github-copilot", name: "GitHub Copilot", description: "AI pair programmer that suggests code completions in your IDE", category: "Code", rating: 4.8, reviews: 5200, tags: ["Code completion", "IDE integration", "Productivity"], link: "https://github.com/features/copilot" },
  { id: "cursor", name: "Cursor", description: "AI-first code editor built for pair programming with AI", category: "Code", rating: 4.9, reviews: 2800, tags: ["Code editor", "AI pair programming", "Modern"], link: "https://cursor.sh" },
  { id: "tabnine", name: "Tabnine", description: "AI code completion tool that learns from your codebase", category: "Code", rating: 4.6, reviews: 1680, tags: ["Code completion", "Privacy", "Custom models"], link: "https://tabnine.com" },
  { id: "codeium", name: "Codeium", description: "Free AI code completion and chat for developers", category: "Code", rating: 4.7, reviews: 1420, tags: ["Free", "Code completion", "Multi-language"], link: "https://codeium.com" },
  { id: "replit-ai", name: "Replit AI", description: "AI assistant integrated into Replit's online IDE", category: "Code", rating: 4.6, reviews: 1150, tags: ["Online IDE", "Learning", "Collaboration"], link: "https://replit.com" },
  { id: "cody", name: "Cody", description: "AI coding assistant by Sourcegraph with context awareness", category: "Code", rating: 4.5, reviews: 820, tags: ["Context-aware", "Enterprise", "Code search"], link: "https://sourcegraph.com/cody" },
  
  // Design AI Tools
  { id: "canva-magic", name: "Canva AI", description: "AI-powered design platform with magic tools for instant designs", category: "Design", rating: 4.9, reviews: 6800, tags: ["Design", "Templates", "Easy"], link: "https://canva.com" },
  { id: "figma-ai", name: "Figma AI", description: "AI features in Figma for design generation and automation", category: "Design", rating: 4.7, reviews: 2400, tags: ["UI design", "Prototyping", "Collaboration"], link: "https://figma.com" },
  { id: "uizard", name: "Uizard", description: "AI tool that transforms sketches into digital designs", category: "Design", rating: 4.6, reviews: 1280, tags: ["Sketch-to-design", "UI/UX", "Prototyping"], link: "https://uizard.io" },
  { id: "galileo-ai", name: "Galileo AI", description: "AI tool generating editable UI designs from text descriptions", category: "Design", rating: 4.5, reviews: 920, tags: ["Text-to-UI", "Design", "Fast"], link: "https://galileo.ai" },
  { id: "khroma", name: "Khroma", description: "AI color tool that learns which colors you like", category: "Design", rating: 4.6, reviews: 780, tags: ["Colors", "Palettes", "Personalized"], link: "https://khroma.co" },
  { id: "removebg", name: "Remove.bg", description: "AI tool for instant background removal from images", category: "Design", rating: 4.7, reviews: 3200, tags: ["Background removal", "Free", "Fast"], link: "https://remove.bg" },
  { id: "cleanup", name: "Cleanup.pictures", description: "AI-powered object removal and image inpainting", category: "Design", rating: 4.6, reviews: 1540, tags: ["Object removal", "Inpainting", "Free"], link: "https://cleanup.pictures" },
  { id: "photopea", name: "Photopea", description: "Free online photo editor with AI features", category: "Design", rating: 4.8, reviews: 2100, tags: ["Photo editing", "Free", "Advanced"], link: "https://www.photopea.com" },
  
  // SEO AI Tools
  { id: "surfer-seo", name: "Surfer SEO", description: "AI-powered SEO tool for content optimization and research", category: "SEO", rating: 4.7, reviews: 1820, tags: ["Content optimization", "Research", "Data-driven"], link: "https://surferseo.com" },
  { id: "frase", name: "Frase", description: "AI SEO content optimization and research assistant", category: "SEO", rating: 4.6, reviews: 1420, tags: ["Content briefs", "Optimization", "Research"], link: "https://frase.io" },
  { id: "semrush", name: "Semrush", description: "All-in-one AI-powered marketing toolkit for SEO and content", category: "SEO", rating: 4.8, reviews: 4200, tags: ["SEO", "Marketing", "Analytics"], link: "https://semrush.com" },
  { id: "ahrefs", name: "Ahrefs", description: "SEO toolset with AI features for research and analysis", category: "SEO", rating: 4.8, reviews: 3800, tags: ["Backlinks", "Keywords", "Analysis"], link: "https://ahrefs.com" },
  { id: "marketmuse", name: "MarketMuse", description: "AI content intelligence and strategy platform", category: "SEO", rating: 4.6, reviews: 980, tags: ["Content strategy", "AI research", "Planning"], link: "https://marketmuse.com" },
  
  // Chatbot AI Tools
  { id: "chatbase", name: "Chatbase", description: "AI platform for building custom ChatGPT chatbots", category: "Chatbots", rating: 4.7, reviews: 1620, tags: ["Custom chatbots", "Training", "Integration"], link: "https://chatbase.co" },
  { id: "intercom-ai", name: "Intercom Fin", description: "AI chatbot for customer support by Intercom", category: "Chatbots", rating: 4.7, reviews: 2100, tags: ["Customer support", "Integration", "Advanced"], link: "https://intercom.com" },
  { id: "drift", name: "Drift", description: "AI-powered conversational marketing and sales platform", category: "Chatbots", rating: 4.6, reviews: 1840, tags: ["Sales", "Marketing", "Conversational"], link: "https://drift.com" },
  { id: "manychat", name: "ManyChat", description: "AI chatbot builder for Instagram, WhatsApp, and Messenger", category: "Chatbots", rating: 4.6, reviews: 2400, tags: ["Social media", "Automation", "Marketing"], link: "https://manychat.com" },
  { id: "landbot", name: "Landbot", description: "No-code AI chatbot builder for conversational experiences", category: "Chatbots", rating: 4.5, reviews: 1120, tags: ["No-code", "Conversational", "Lead generation"], link: "https://landbot.io" },
  
  // Presentation AI Tools
  { id: "gamma", name: "Gamma", description: "AI-powered tool for creating beautiful presentations and docs", category: "Presentations", rating: 4.8, reviews: 2400, tags: ["Presentations", "AI design", "Fast"], link: "https://gamma.app" },
  { id: "beautiful-ai", name: "Beautiful.ai", description: "AI presentation software with smart slide formatting", category: "Presentations", rating: 4.7, reviews: 1680, tags: ["Templates", "Auto-formatting", "Professional"], link: "https://beautiful.ai" },
  { id: "tome", name: "Tome", description: "AI-powered storytelling format for presentations", category: "Presentations", rating: 4.6, reviews: 1320, tags: ["Storytelling", "AI generation", "Modern"], link: "https://tome.app" },
  { id: "pitch", name: "Pitch", description: "Collaborative presentation software with AI features", category: "Presentations", rating: 4.7, reviews: 1540, tags: ["Collaboration", "Templates", "Teams"], link: "https://pitch.com" },
  { id: "decktopus", name: "Decktopus", description: "AI presentation maker with auto-layout and design", category: "Presentations", rating: 4.5, reviews: 920, tags: ["Auto-layout", "Fast", "Simple"], link: "https://decktopus.com" },
  
  // Productivity AI Tools
  { id: "notion", name: "Notion", description: "All-in-one workspace with powerful AI features", category: "Productivity", rating: 4.8, reviews: 5400, tags: ["Workspace", "AI assistant", "Organization"], link: "https://notion.so" },
  { id: "mem", name: "Mem", description: "AI-powered note-taking with automatic organization", category: "Productivity", rating: 4.6, reviews: 1120, tags: ["Notes", "AI organization", "Search"], link: "https://mem.ai" },
  { id: "reflect", name: "Reflect", description: "AI-enhanced note-taking for networked thought", category: "Productivity", rating: 4.7, reviews: 980, tags: ["Notes", "Backlinking", "AI assistant"], link: "https://reflect.app" },
  { id: "otter", name: "Otter.ai", description: "AI meeting assistant with transcription and summaries", category: "Productivity", rating: 4.7, reviews: 3200, tags: ["Transcription", "Meetings", "Notes"], link: "https://otter.ai" },
  { id: "fireflies", name: "Fireflies.ai", description: "AI meeting recorder and transcription service", category: "Productivity", rating: 4.6, reviews: 2400, tags: ["Meetings", "Transcription", "Search"], link: "https://fireflies.ai" },
  { id: "reclaim", name: "Reclaim.ai", description: "AI scheduling assistant for smart calendar management", category: "Productivity", rating: 4.7, reviews: 1680, tags: ["Scheduling", "Calendar", "Automation"], link: "https://reclaim.ai" },
  { id: "motion", name: "Motion", description: "AI calendar and task manager that builds your perfect schedule", category: "Productivity", rating: 4.6, reviews: 1420, tags: ["Calendar", "Tasks", "AI scheduling"], link: "https://usemotion.com" },
  
  // Social Media AI Tools
  { id: "hootsuite", name: "Hootsuite", description: "Social media management platform with AI content suggestions", category: "Social Media", rating: 4.7, reviews: 4200, tags: ["Scheduling", "Management", "Analytics"], link: "https://hootsuite.com" },
  { id: "buffer", name: "Buffer", description: "Social media scheduler with AI-powered analytics", category: "Social Media", rating: 4.7, reviews: 3800, tags: ["Scheduling", "Analytics", "Simple"], link: "https://buffer.com" },
  { id: "lately", name: "Lately", description: "AI social media content creator from long-form content", category: "Social Media", rating: 4.6, reviews: 1240, tags: ["Content generation", "Automation", "Repurposing"], link: "https://lately.ai" },
  { id: "predis", name: "Predis.ai", description: "AI tool for creating social media content with designs", category: "Social Media", rating: 4.5, reviews: 980, tags: ["Content creation", "Design", "Fast"], link: "https://predis.ai" },
  { id: "brandwatch", name: "Brandwatch", description: "AI-powered social listening and analytics platform", category: "Social Media", rating: 4.6, reviews: 1540, tags: ["Analytics", "Listening", "Insights"], link: "https://brandwatch.com" },
  
  // Website Building AI Tools
  { id: "framer-ai", name: "Framer", description: "AI-powered website builder for professional sites", category: "Website", rating: 4.8, reviews: 2400, tags: ["Website builder", "Design", "No-code"], link: "https://framer.com" },
  { id: "wix-adi", name: "Wix ADI", description: "AI website builder that creates sites automatically", category: "Website", rating: 4.6, reviews: 3200, tags: ["Auto-generation", "Simple", "Fast"], link: "https://wix.com" },
  { id: "10web", name: "10Web", description: "AI-powered WordPress platform for building websites", category: "Website", rating: 4.7, reviews: 1680, tags: ["WordPress", "AI builder", "Hosting"], link: "https://10web.io" },
  { id: "durable", name: "Durable", description: "AI website builder creating complete sites in 30 seconds", category: "Website", rating: 4.5, reviews: 1120, tags: ["Instant", "Small business", "Fast"], link: "https://durable.co" },
  { id: "mixo", name: "Mixo", description: "AI website builder for launching startups in seconds", category: "Website", rating: 4.6, reviews: 920, tags: ["Startup", "Landing pages", "Fast"], link: "https://mixo.io" },
  
  // Logo & Branding AI Tools
  { id: "looka", name: "Looka", description: "AI logo maker and brand identity platform", category: "Logo", rating: 4.7, reviews: 2100, tags: ["Logo design", "Branding", "Professional"], link: "https://looka.com" },
  { id: "brandmark", name: "Brandmark", description: "AI-powered logo generator with instant branding", category: "Logo", rating: 4.6, reviews: 1420, tags: ["Logo", "Branding", "Fast"], link: "https://brandmark.io" },
  { id: "designhill", name: "Designhill Logo Maker", description: "AI logo creator with thousands of templates", category: "Logo", rating: 4.5, reviews: 1680, tags: ["Templates", "Customizable", "Affordable"], link: "https://designhill.com" },
  { id: "hatchful", name: "Hatchful", description: "Free AI logo maker by Shopify", category: "Logo", rating: 4.6, reviews: 1840, tags: ["Free", "Simple", "E-commerce"], link: "https://hatchful.shopify.com" },
  
  // Automation AI Tools
  { id: "zapier", name: "Zapier", description: "AI-powered automation connecting 5000+ apps", category: "Automation", rating: 4.8, reviews: 5200, tags: ["Workflow", "Integration", "No-code"], link: "https://zapier.com" },
  { id: "make", name: "Make", description: "Visual automation platform with AI capabilities", category: "Automation", rating: 4.7, reviews: 2400, tags: ["Visual", "Advanced", "Integration"], link: "https://make.com" },
  { id: "n8n", name: "n8n", description: "Open-source workflow automation with AI nodes", category: "Automation", rating: 4.7, reviews: 1280, tags: ["Open-source", "Self-hosted", "Advanced"], link: "https://n8n.io" },
  { id: "bardeen", name: "Bardeen", description: "AI automation tool for browser-based workflows", category: "Automation", rating: 4.6, reviews: 1120, tags: ["Browser automation", "No-code", "Productivity"], link: "https://bardeen.ai" },
];

export const categories = [
  "All Tools",
  "Research",
  "Image",
  "Video",
  "Audio",
  "Copywriting",
  "Writing",
  "Code",
  "Design",
  "SEO",
  "Chatbots",
  "Presentations",
  "Productivity",
  "Social Media",
  "Website",
  "Logo",
  "Automation"
];
