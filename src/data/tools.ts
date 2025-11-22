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
  isNew?: boolean;
  isTrending?: boolean;
  noSignup?: boolean;
  isFree?: boolean;
  dateAdded?: string;
  bannerImage?: string;
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
  { id: "clickup", name: "ClickUp", description: "All-in-one project management with AI-powered automation and task management", category: "Productivity", rating: 4.8, reviews: 4200, tags: ["Project management", "AI automation", "Team collaboration"], link: "https://clickup.com" },
  { id: "notion", name: "Notion", description: "All-in-one workspace with AI writing assistant for notes, docs, and databases", category: "Productivity", rating: 4.7, reviews: 5800, tags: ["Workspace", "AI writing", "Organization"], link: "https://notion.so" },
  { id: "taskade", name: "Taskade", description: "AI-powered task management and collaboration workspace", category: "Productivity", rating: 4.6, reviews: 1420, tags: ["Tasks", "Collaboration", "AI assistant"], link: "https://taskade.com" },
  { id: "todoist", name: "Todoist", description: "Smart task manager with AI-powered task suggestions and natural language processing", category: "Productivity", rating: 4.7, reviews: 3200, tags: ["Task management", "Natural language", "Cross-platform"], link: "https://todoist.com" },
  
  // PDF & Document AI Tools
  { id: "humata", name: "Humata AI", description: "AI-powered document analysis and chat with PDFs for instant insights", category: "PDFs", rating: 4.8, reviews: 1820, tags: ["PDF analysis", "Document chat", "Research"], link: "https://humata.ai" },
  { id: "updf", name: "UPDF", description: "AI-powered PDF editor with translation, summarization, and analysis", category: "PDFs", rating: 4.7, reviews: 1540, tags: ["PDF editing", "AI features", "Translation"], link: "https://updf.com" },
  { id: "chatpdf", name: "ChatPDF", description: "Chat with any PDF document using AI for instant answers and summaries", category: "PDFs", rating: 4.6, reviews: 2100, tags: ["PDF chat", "Summarization", "Free"], link: "https://chatpdf.com" },
  { id: "doclime", name: "Doclime", description: "AI document assistant for research papers, legal docs, and technical documents", category: "PDFs", rating: 4.5, reviews: 920, tags: ["Research papers", "Legal docs", "Technical"], link: "https://doclime.com" },
  { id: "notebooklm", name: "NotebookLM", description: "Google's AI research assistant that works with your documents and notes", category: "Research", rating: 4.9, reviews: 2800, tags: ["Research", "Google AI", "Document analysis"], link: "https://notebooklm.google.com" },
  
  // More Presentation Tools
  { id: "slidesgo", name: "Slidesgo", description: "AI-enhanced presentation templates with customizable designs", category: "Presentations", rating: 4.6, reviews: 1680, tags: ["Templates", "Free", "Customizable"], link: "https://slidesgo.com" },
  { id: "simplified", name: "Simplified", description: "All-in-one design platform with AI for presentations, graphics, and videos", category: "Design", rating: 4.7, reviews: 2100, tags: ["All-in-one", "AI design", "Templates"], link: "https://simplified.com" },
  
  // Vibe Coding Tools
  { id: "lovable", name: "Lovable", description: "AI-powered app builder that generates full-stack applications from descriptions", category: "Code", rating: 4.9, reviews: 1580, tags: ["No-code", "Full-stack", "Rapid development"], link: "https://lovable.dev" },
  { id: "windsurf", name: "Windsurf", description: "AI coding assistant for developers with intelligent code suggestions", category: "Code", rating: 4.6, reviews: 980, tags: ["Code assistant", "Developer tools", "AI suggestions"], link: "https://windsurf.dev" },
  { id: "deepseek", name: "DeepSeek", description: "Advanced AI model for coding, reasoning, and research tasks", category: "Research", rating: 4.7, reviews: 1320, tags: ["Coding", "Reasoning", "Open source"], link: "https://deepseek.com" },
  
  // More Research Tools
  { id: "kagi", name: "Kagi", description: "Premium AI-powered search engine with no ads and privacy focus", category: "Research", rating: 4.8, reviews: 1120, tags: ["Search", "Privacy", "Ad-free"], link: "https://kagi.com" },
  
  // Free Learning Resources
  { id: "freecodecamp", name: "FreeCodeCamp", description: "Free coding education platform with AI-enhanced learning paths", category: "Education", rating: 4.9, reviews: 8500, tags: ["Free", "Coding", "Certifications"], link: "https://freecodecamp.org" },
  { id: "roadmap-sh", name: "Roadmap.sh", description: "Interactive learning roadmaps for developers with AI-powered recommendations", category: "Education", rating: 4.8, reviews: 3200, tags: ["Learning paths", "Developers", "Free"], link: "https://roadmap.sh" },
  { id: "google-skills", name: "Google Skills", description: "Free courses and certifications from Google with AI-driven personalization", category: "Education", rating: 4.7, reviews: 2800, tags: ["Free courses", "Certifications", "Google"], link: "https://skills.google" },
  
  // Prompt Writing Tools
  { id: "g-prompter", name: "G-Prompter", description: "AI tool for generating and optimizing prompts for better AI outputs", category: "Productivity", rating: 4.6, reviews: 780, tags: ["Prompt engineering", "Optimization", "Free"], link: "https://g-prompter.com" },
  
  // Resume Tools
  { id: "enhancv", name: "Enhancv", description: "AI-powered resume builder with professional templates and optimization", category: "Career", rating: 4.7, reviews: 2400, tags: ["Resume", "CV builder", "Professional"], link: "https://enhancv.com" },
  
  // Interview Prep
  { id: "finalround", name: "Final Round AI", description: "AI interview copilot that helps you ace technical and behavioral interviews", category: "Career", rating: 4.8, reviews: 1620, tags: ["Interview prep", "Real-time help", "Career"], link: "https://finalroundai.com" },
  { id: "lockedin", name: "LockedIn AI", description: "AI-powered interview preparation and practice platform", category: "Career", rating: 4.6, reviews: 980, tags: ["Interview practice", "AI feedback", "Career"], link: "https://lockedinai.com" },
  
  // Content Ideas
  { id: "virality", name: "ViralityAI", description: "AI tool for generating viral content ideas and analyzing trends", category: "Marketing", rating: 4.5, reviews: 820, tags: ["Content ideas", "Viral marketing", "Trends"], link: "https://viralityai.net" },
  
  // More Image Generation
  { id: "bluewillow", name: "BlueWillow", description: "Free AI image generator with diverse artistic styles", category: "Image", rating: 4.5, reviews: 1420, tags: ["Free", "Art generation", "Styles"], link: "https://bluewillow.ai" },
  
  // More Video Tools
  { id: "mirage", name: "Mirage", description: "AI video generation platform for creating stunning visual content", category: "Video", rating: 4.6, reviews: 980, tags: ["Video generation", "Visual effects", "Creative"], link: "https://mirage.ai" },
  { id: "aivideo", name: "AIVideo.com", description: "AI-powered video creation platform for marketing and social media", category: "Video", rating: 4.5, reviews: 820, tags: ["Marketing videos", "Social media", "Templates"], link: "https://aivideo.com" },
  { id: "syllaby", name: "Syllaby.io", description: "AI video script writer and content planner for social media", category: "Video", rating: 4.6, reviews: 720, tags: ["Script writing", "Social media", "Planning"], link: "https://syllaby.io" },
  { id: "riverside", name: "Riverside", description: "AI-powered podcast and video recording with studio-quality output", category: "Video", rating: 4.8, reviews: 2100, tags: ["Podcasting", "Recording", "Studio quality"], link: "https://riverside.fm" },
  { id: "wisecut", name: "Wisecut", description: "AI video editor that automatically cuts silences and adds subtitles", category: "Video", rating: 4.6, reviews: 1120, tags: ["Auto-editing", "Subtitles", "Time-saving"], link: "https://wisecut.video" },
  { id: "eddie-ai", name: "Eddie AI", description: "AI video editing assistant for automated post-production", category: "Video", rating: 4.5, reviews: 680, tags: ["Auto-editing", "Post-production", "AI assistant"], link: "https://eddie.ai" },
  { id: "visla", name: "Visla", description: "AI video creation platform for businesses and teams", category: "Video", rating: 4.6, reviews: 920, tags: ["Business videos", "Team collaboration", "AI generation"], link: "https://visla.us" },
  { id: "vidnoz", name: "Vidnoz", description: "AI video generator with avatars and voiceovers", category: "Video", rating: 4.5, reviews: 780, tags: ["AI avatars", "Voiceovers", "Quick creation"], link: "https://vidnoz.com" },
  { id: "ossa", name: "Ossa AI", description: "AI-powered video creation for social media and marketing", category: "Video", rating: 4.4, reviews: 620, tags: ["Social media", "Marketing", "Templates"], link: "https://ossa.ai" },
  { id: "pikalabs", name: "Pika Labs", description: "Text-to-video AI generator for creative video content", category: "Video", rating: 4.7, reviews: 1580, tags: ["Text-to-video", "Creative", "AI generation"], link: "https://pika.art" },
  { id: "jupitrr", name: "Jupitrr AI", description: "AI video editor for adding B-roll footage automatically", category: "Video", rating: 4.5, reviews: 580, tags: ["B-roll", "Auto-editing", "Stock footage"], link: "https://jupitrr.com" },
  { id: "filmora-ai", name: "Filmora AI", description: "Video editing software with AI-powered features and effects", category: "Video", rating: 4.7, reviews: 3200, tags: ["Video editing", "AI effects", "User-friendly"], link: "https://filmora.wondershare.com" },
  { id: "gling", name: "Gling.ai", description: "AI video editor that automatically removes bad takes and silences", category: "Video", rating: 4.6, reviews: 880, tags: ["Auto-editing", "YouTube", "Time-saving"], link: "https://gling.ai" },
  { id: "vmaker", name: "Vmaker", description: "AI-powered screen recorder and video editor", category: "Video", rating: 4.6, reviews: 1020, tags: ["Screen recording", "Video editing", "Tutorials"], link: "https://vmaker.com" },
  
  // Photo Editing Tools
  { id: "watermark-remover", name: "Watermark Remover", description: "AI tool to remove watermarks from images instantly", category: "Design", rating: 4.5, reviews: 1420, tags: ["Watermark removal", "Image editing", "Free"], link: "https://watermarkremover.io" },
  
  // Writing Tools
  { id: "hemingway", name: "Hemingway Editor", description: "AI writing tool that makes your writing bold and clear", category: "Writing", rating: 4.6, reviews: 2100, tags: ["Clarity", "Readability", "Editing"], link: "https://hemingwayapp.com" },
  
  // Design Tools
  { id: "microsoft-designer", name: "Microsoft Designer", description: "AI-powered graphic design tool integrated with Microsoft 365", category: "Design", rating: 4.6, reviews: 1820, tags: ["Graphic design", "Microsoft", "Templates"], link: "https://designer.microsoft.com" },
  
  // Data Analytics
  { id: "knime", name: "KNIME", description: "Open-source data analytics platform with AI and machine learning", category: "Analytics", rating: 4.7, reviews: 1280, tags: ["Data science", "ML", "Open source"], link: "https://knime.com" },
  
  // Email & Marketing
  { id: "moosend", name: "Moosend", description: "Email marketing platform with AI-powered automation", category: "Marketing", rating: 4.6, reviews: 980, tags: ["Email marketing", "Automation", "Free tier"], link: "https://moosend.com" },
  
  // SEO Tools
  { id: "moz", name: "Moz Keyword Explorer", description: "SEO tool with AI-powered keyword research and analysis", category: "SEO", rating: 4.7, reviews: 3200, tags: ["SEO", "Keywords", "Analytics"], link: "https://moz.com" },
  
  // Music Tools
  { id: "mubert", name: "Mubert", description: "AI music generator creating royalty-free tracks for any content", category: "Audio", rating: 4.6, reviews: 1420, tags: ["Music generation", "Royalty-free", "Instant"], link: "https://mubert.com" },
  
  // AI Development
  { id: "huggingface", name: "Hugging Face", description: "AI community platform with models, datasets, and ML tools", category: "Development", rating: 4.8, reviews: 4200, tags: ["AI models", "ML", "Open source"], link: "https://huggingface.co" },
  
  // Automation
  { id: "bardeen", name: "Bardeen", description: "AI automation tool for repetitive tasks and workflows", category: "Productivity", rating: 4.7, reviews: 1680, tags: ["Automation", "Workflows", "Browser extension"], link: "https://bardeen.ai" },
  
  // Project Ideas
  { id: "engg-room", name: "Engg Room", description: "Platform for engineering project ideas and resources", category: "Education", rating: 4.5, reviews: 680, tags: ["Projects", "Engineering", "Ideas"], link: "https://enggroom.com" },
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
  
  // Email Assistance AI Tools
  { id: "superhuman", name: "Superhuman", description: "Blazingly fast email with AI-powered features and shortcuts", category: "Email", rating: 4.8, reviews: 2100, tags: ["Email", "Speed", "Productivity"], link: "https://superhuman.com" },
  { id: "shortwave", name: "Shortwave", description: "AI email assistant that helps you reach inbox zero faster", category: "Email", rating: 4.7, reviews: 1420, tags: ["Free", "Email", "AI assistant"], link: "https://shortwave.com" },
  { id: "mailmaestro", name: "Mailmaestro", description: "Free AI email assistant that writes better emails faster", category: "Email", rating: 4.6, reviews: 980, tags: ["Free", "Email writing", "Productivity"], link: "https://mailmaestro.com" },
  { id: "clippit", name: "Clippit.Ai", description: "Free AI-powered email assistant for Gmail and Outlook", category: "Email", rating: 4.5, reviews: 680, tags: ["Free", "Gmail", "Outlook"], link: "https://clippit.ai" },
  { id: "friday-ai", name: "Friday", description: "Free AI email writer that helps you craft perfect emails", category: "Email", rating: 4.5, reviews: 520, tags: ["Free", "Email writing", "Simple"], link: "https://friday.app" },
  
  // Spreadsheet AI Tools
  { id: "rows-ai", name: "Rows AI", description: "Free AI-powered spreadsheet with integrated data sources", category: "Spreadsheet", rating: 4.7, reviews: 1280, tags: ["Free", "Data analysis", "Integration"], link: "https://rows.com" },
  { id: "formula-bot", name: "Formula Bot", description: "Free AI that writes Excel and Google Sheets formulas", category: "Spreadsheet", rating: 4.6, reviews: 920, tags: ["Free", "Formulas", "Excel"], link: "https://formulabot.com" },
  { id: "sheetai", name: "SheetAI", description: "Free AI assistant for Google Sheets automation", category: "Spreadsheet", rating: 4.5, reviews: 680, tags: ["Free", "Google Sheets", "Automation"], link: "https://sheetai.app" },
  { id: "bricks", name: "Bricks", description: "Free AI spreadsheet that creates visuals from your data", category: "Spreadsheet", rating: 4.7, reviews: 1120, tags: ["Free", "Visualization", "Easy"], link: "https://bricksapp.io" },
  { id: "gigasheet", name: "Gigasheet", description: "Free AI-powered spreadsheet for big data analysis", category: "Spreadsheet", rating: 4.6, reviews: 580, tags: ["Free", "Big data", "Analysis"], link: "https://gigasheet.com" },
  
  // More Presentation AI Tools
  { id: "slidesgo-ai", name: "Slidesgo", description: "Free AI-powered presentation templates and designs", category: "Presentations", rating: 4.7, reviews: 2800, tags: ["Free", "Templates", "Google Slides"], link: "https://slidesgo.com" },
  { id: "presentations-ai", name: "Presentations.AI", description: "Free AI presentation maker with instant slide generation", category: "Presentations", rating: 4.6, reviews: 1120, tags: ["Free", "Fast", "Professional"], link: "https://presentations.ai" },
  { id: "plus-ai", name: "Plus AI", description: "Free AI presentation tool for Google Slides", category: "Presentations", rating: 4.6, reviews: 980, tags: ["Free", "Google Slides", "Automation"], link: "https://plusdocs.com" },
  { id: "popai", name: "PopAI", description: "Free AI-powered presentation creator with templates", category: "Presentations", rating: 4.5, reviews: 720, tags: ["Free", "Templates", "Simple"], link: "https://popai.pro" },
  
  // More Chatbot AI Tools
  { id: "deepseek", name: "DeepSeek", description: "Free advanced AI chatbot for coding and reasoning", category: "Chatbots", rating: 4.7, reviews: 1420, tags: ["Free", "Coding", "Advanced"], link: "https://deepseek.com" },
  { id: "grok", name: "Grok", description: "Free AI assistant with real-time information access", category: "Chatbots", rating: 4.6, reviews: 1680, tags: ["Free", "Real-time", "X integration"], link: "https://grok.x.ai" },
  { id: "meta-ai", name: "Meta AI", description: "Free AI assistant by Meta for chat and creation", category: "Chatbots", rating: 4.6, reviews: 2100, tags: ["Free", "Multimodal", "Integration"], link: "https://ai.meta.com" },
  { id: "ms-copilot", name: "Microsoft Copilot", description: "Free AI assistant integrated across Microsoft products", category: "Chatbots", rating: 4.7, reviews: 3200, tags: ["Free", "Microsoft", "Integration"], link: "https://copilot.microsoft.com" },
  
  // More Code AI Tools
  { id: "askcodi", name: "Askcodi", description: "Free AI coding assistant for multiple programming languages", category: "Code", rating: 4.5, reviews: 680, tags: ["Free", "Multi-language", "Learning"], link: "https://askcodi.com" },
  { id: "codiga", name: "Codiga", description: "Free AI code analysis and security scanning", category: "Code", rating: 4.6, reviews: 820, tags: ["Free", "Security", "Code review"], link: "https://codiga.io" },
  { id: "qodo", name: "Qodo", description: "Free AI code testing and quality assistant", category: "Code", rating: 4.5, reviews: 520, tags: ["Free", "Testing", "Quality"], link: "https://qodo.ai" },
  
  // More Workflow Automation AI Tools
  { id: "integrately", name: "Integrately", description: "Free AI automation platform with 8M+ ready automations", category: "Automation", rating: 4.7, reviews: 1680, tags: ["Free", "No-code", "Templates"], link: "https://integrately.com" },
  { id: "monday", name: "Monday.com", description: "Work management platform with free AI automation features", category: "Automation", rating: 4.8, reviews: 4200, tags: ["Free tier", "Project management", "Teams"], link: "https://monday.com" },
  { id: "wrike", name: "Wrike", description: "Project management with free AI-powered automation", category: "Automation", rating: 4.6, reviews: 2100, tags: ["Free tier", "Project management", "Collaboration"], link: "https://wrike.com" },
  
  // Meeting Notes AI Tools
  { id: "fathom", name: "Fathom", description: "Free AI meeting assistant that records and transcribes", category: "Meetings", rating: 4.8, reviews: 2400, tags: ["Free", "Recording", "Transcription"], link: "https://fathom.video" },
  { id: "avoma", name: "Avoma", description: "Free AI meeting assistant with automated notes and insights", category: "Meetings", rating: 4.7, reviews: 1680, tags: ["Free tier", "Notes", "CRM integration"], link: "https://avoma.com" },
  { id: "equal-time", name: "Equal Time", description: "Free AI meeting assistant for balanced conversations", category: "Meetings", rating: 4.6, reviews: 520, tags: ["Free", "Collaboration", "Insights"], link: "https://equaltime.io" },
  { id: "fellow", name: "Fellow.app", description: "Free AI meeting management with agendas and notes", category: "Meetings", rating: 4.7, reviews: 1420, tags: ["Free tier", "Agendas", "Team collaboration"], link: "https://fellow.app" },
  
  // More Video AI Tools
  { id: "luma-ai", name: "Luma AI", description: "Free AI tool for creating 3D assets and video", category: "Video", rating: 4.7, reviews: 1280, tags: ["Free", "3D", "Creative"], link: "https://lumalabs.ai" },
  { id: "haiper-ai", name: "Haiper AI", description: "Free AI video generator with creative controls", category: "Video", rating: 4.6, reviews: 980, tags: ["Free", "Video generation", "Creative"], link: "https://haiper.ai" },
  { id: "kling-ai", name: "Kling", description: "Free advanced AI video generator with long video support", category: "Video", rating: 4.7, reviews: 1420, tags: ["Free", "Long videos", "High quality"], link: "https://klingai.com" },
  { id: "krea-ai", name: "Krea AI", description: "Free AI video and image generator with real-time preview", category: "Video", rating: 4.6, reviews: 880, tags: ["Free", "Real-time", "Creative"], link: "https://krea.ai" },
  { id: "ltx-studio", name: "LTX Studio", description: "Free AI video storytelling platform", category: "Video", rating: 4.6, reviews: 720, tags: ["Free", "Storytelling", "Professional"], link: "https://ltx.studio" },
  { id: "sora-ai", name: "Sora", description: "OpenAI's text-to-video AI model", category: "Video", rating: 4.8, reviews: 2100, tags: ["Text-to-video", "Advanced", "High quality"], link: "https://openai.com/sora" },
  
  // More Image Generation AI Tools
  { id: "flux-ai", name: "FLUX.1", description: "Free advanced AI image generator with exceptional quality", category: "Image", rating: 4.8, reviews: 2400, tags: ["Free", "High quality", "Fast"], link: "https://flux-ai.io" },
  { id: "recraft-ai", name: "Recraft", description: "Free AI design tool for vector art and illustrations", category: "Image", rating: 4.7, reviews: 1280, tags: ["Free", "Vector", "Design"], link: "https://recraft.ai" },
  
  // More Design AI Tools
  { id: "autodraw", name: "AutoDraw", description: "Free AI tool that turns sketches into polished drawings", category: "Design", rating: 4.5, reviews: 1420, tags: ["Free", "Sketching", "Google"], link: "https://autodraw.com" },
  { id: "design-com", name: "Design.com", description: "Free AI-powered logo and brand design platform", category: "Design", rating: 4.6, reviews: 1680, tags: ["Free", "Branding", "Templates"], link: "https://design.com" },
  { id: "ms-designer", name: "Microsoft Designer", description: "Free AI graphic design tool by Microsoft", category: "Design", rating: 4.7, reviews: 2100, tags: ["Free", "Templates", "Social media"], link: "https://designer.microsoft.com" },
  
  // Scheduling AI Tools
  { id: "calendly", name: "Calendly", description: "Free AI-powered scheduling platform", category: "Scheduling", rating: 4.8, reviews: 4200, tags: ["Free tier", "Scheduling", "Integration"], link: "https://calendly.com" },
  { id: "clockwise", name: "Clockwise", description: "Free AI calendar assistant for time management", category: "Scheduling", rating: 4.7, reviews: 1680, tags: ["Free tier", "Calendar", "Teams"], link: "https://clockwise.com" },
  { id: "taskade", name: "Taskade", description: "Free AI-powered task management and collaboration", category: "Scheduling", rating: 4.6, reviews: 1280, tags: ["Free", "Tasks", "Collaboration"], link: "https://taskade.com" },
  { id: "trevor-ai", name: "Trevor AI", description: "Free AI daily planner for time blocking", category: "Scheduling", rating: 4.5, reviews: 680, tags: ["Free", "Time blocking", "Planning"], link: "https://trevorai.com" },
  
  // More Writing AI Tools
  { id: "jotbot", name: "JotBot", description: "Free AI writing assistant that mimics your style", category: "Writing", rating: 4.6, reviews: 1120, tags: ["Free", "Style matching", "Essays"], link: "https://jotbot.ai" },
  { id: "quarkle", name: "Quarkle", description: "Free AI writing assistant with grammar and style checks", category: "Writing", rating: 4.5, reviews: 820, tags: ["Free", "Grammar", "Style"], link: "https://quarkle.com" },
  
  // Data Visualization AI Tools
  { id: "flourish", name: "Flourish", description: "Free AI-powered data visualization and storytelling", category: "Data Viz", rating: 4.7, reviews: 1680, tags: ["Free", "Visualization", "Charts"], link: "https://flourish.studio" },
  { id: "julius-ai", name: "Julius", description: "Free AI data analyst that creates insights and charts", category: "Data Viz", rating: 4.6, reviews: 1120, tags: ["Free", "Analysis", "Charts"], link: "https://julius.ai" },
  { id: "visme", name: "Visme", description: "Free AI design tool for presentations and infographics", category: "Data Viz", rating: 4.7, reviews: 2100, tags: ["Free tier", "Infographics", "Design"], link: "https://visme.co" },
  { id: "deckpilot", name: "Deckpilot", description: "Free AI presentation and data visualization tool", category: "Data Viz", rating: 4.5, reviews: 680, tags: ["Free", "Presentations", "Data"], link: "https://deckpilot.com" },
  { id: "zing-data", name: "Zing Data", description: "Free AI-powered business intelligence and data analysis", category: "Data Viz", rating: 4.6, reviews: 920, tags: ["Free", "BI", "Analysis"], link: "https://getzingdata.com" },
  
  // Knowledge Management AI Tools
  { id: "tettra", name: "Tettra", description: "Free AI-powered knowledge base for teams", category: "Productivity", rating: 4.6, reviews: 1120, tags: ["Free tier", "Knowledge base", "Teams"], link: "https://tettra.com" },
  
  // ===== NEW TRENDING FREE AI TOOLS (November 2025) =====
  
  // Video Enhancement & Editing
  { id: "sora-watermark", name: "Sora Watermark Remover", description: "Remove watermarks from Sora AI-generated videos for free", category: "Video", rating: 4.8, reviews: 1240, tags: ["Free", "Watermark removal", "Sora"], link: "https://remove-watermark.ai", isNew: true, isTrending: true, isFree: true, noSignup: true, dateAdded: "Nov 2025" },
  { id: "video-upscaler", name: "AI Video Upscaler", description: "Free AI-powered video upscaling and enhancement with magic quality", category: "Video", rating: 4.7, reviews: 2100, tags: ["Free", "Upscaling", "Enhancement"], link: "https://upscale.video", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "lyric-video-ai", name: "Lyric Video AI", description: "Create stunning lyric videos with AI, no editing skills required", category: "Video", rating: 4.6, reviews: 980, tags: ["Free", "Music videos", "Auto-generate"], link: "https://lyricvideomaker.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "luma-ai", name: "Luma AI", description: "Free advanced AI for 3D and long-form video generation", category: "Video", rating: 4.9, reviews: 3200, tags: ["Free", "3D", "Long video"], link: "https://lumalabs.ai", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "kling-ai", name: "Kling AI", description: "Free AI video generation with cinematic quality", category: "Video", rating: 4.8, reviews: 2650, tags: ["Free", "Cinematic", "High quality"], link: "https://klingai.com", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "krea-ai", name: "Krea AI", description: "Free real-time AI video and image generation", category: "Video", rating: 4.7, reviews: 1890, tags: ["Free", "Real-time", "Creative"], link: "https://krea.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "haiper-ai", name: "Haiper AI", description: "Free AI video creation with advanced effects", category: "Video", rating: 4.6, reviews: 1420, tags: ["Free", "Effects", "Creative"], link: "https://haiper.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  
  // Audio & Transcription
  { id: "free-transcription", name: "Free AI Transcriber", description: "Free video and audio transcription with automatic summaries", category: "Audio", rating: 4.8, reviews: 3400, tags: ["Free", "Transcription", "Summaries"], link: "https://freeaitranscriber.com", isNew: true, isTrending: true, isFree: true, noSignup: true, dateAdded: "Nov 2025" },
  
  // Image & Photo Tools
  { id: "photo-restore", name: "AI Photo Restore", description: "Free AI-powered old photo restoration tool", category: "Image", rating: 4.7, reviews: 2200, tags: ["Free", "Restoration", "Enhancement"], link: "https://restore.photo", isNew: true, isTrending: true, isFree: true, noSignup: true, dateAdded: "Nov 2025" },
  { id: "prompt-from-image", name: "Prompt Generator AI", description: "Instantly generate AI prompts from any image for free", category: "Image", rating: 4.6, reviews: 1650, tags: ["Free", "Prompts", "Reverse engineer"], link: "https://promptgenerator.ai", isNew: true, isFree: true, noSignup: true, dateAdded: "Nov 2025" },
  { id: "text-photo-edit", name: "Text Photo Editor", description: "Edit photos using text prompts - transform, enhance, edit with AI", category: "Image", rating: 4.8, reviews: 2850, tags: ["Free", "Text-to-edit", "Enhancement"], link: "https://textphotoeditor.com", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  
  // AI Models & Research
  { id: "red-teaming-ai", name: "Adaptive Red Team AI", description: "Bulletproof your AI models with adaptive red teaming", category: "Research", rating: 4.7, reviews: 820, tags: ["Free tier", "Security", "Testing"], link: "https://redteam.ai", isNew: true, dateAdded: "Nov 2025" },
  { id: "model-compare", name: "AI Model Comparer", description: "Leading platform for comparing AI model performance", category: "Research", rating: 4.8, reviews: 1980, tags: ["Free", "Comparison", "Analysis"], link: "https://modelcompare.ai", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  
  // Chatbots & Social AI
  { id: "ai-companion", name: "AI Companion Chat", description: "Chat and connect with AI companions - social AI for everyone", category: "Chatbots", rating: 4.6, reviews: 3100, tags: ["Free", "Social", "Conversational"], link: "https://character.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  
  // Writing & Content
  { id: "ebook-creator-ai", name: "Automateed eBook AI", description: "Free AI eBook creator - generate complete books instantly", category: "Writing", rating: 4.7, reviews: 1420, tags: ["Free", "eBooks", "Publishing"], link: "https://automateed.com", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "ai-humanizer", name: "AI Humanizer Pro", description: "Make AI-generated text undetectable and human-like", category: "Writing", rating: 4.8, reviews: 2680, tags: ["Free tier", "Humanize", "Undetectable"], link: "https://aihumanizer.pro", isNew: true, isTrending: true, dateAdded: "Nov 2025" },
  
  // SEO & Keywords
  { id: "free-keyword-tool", name: "100% Free Keyword Tool", description: "Multi-platform keyword research tool completely free", category: "SEO", rating: 4.7, reviews: 2100, tags: ["Free", "Keywords", "Multi-platform"], link: "https://keywordtool.io/free", isNew: true, isTrending: true, isFree: true, noSignup: true, dateAdded: "Nov 2025" },
  
  // Spreadsheets & Data
  { id: "excel-ai-query", name: "Excel AI Query", description: "Ask questions to Excel and CSV files in natural language", category: "Spreadsheet", rating: 4.6, reviews: 1540, tags: ["Free tier", "Natural language", "Data analysis"], link: "https://excelquery.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  
  // PDF & Documents
  { id: "pdf-translator", name: "AI PDF Translator", description: "Translate PDFs without losing formatting using OCR and ML", category: "Productivity", rating: 4.7, reviews: 1890, tags: ["Free", "Translation", "OCR"], link: "https://pdftranslator.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  
  // Email & Productivity
  { id: "gmail-ai-assistant", name: "Gmail AI Executive", description: "AI executive assistant for Gmail productivity and automation", category: "Email", rating: 4.8, reviews: 2420, tags: ["Free tier", "Gmail", "Automation"], link: "https://emailassistant.ai", isNew: true, isTrending: true, dateAdded: "Nov 2025" },
  
  // Presentations
  { id: "ai-ppt-generator", name: "AI PowerPoint Pro", description: "Generate professional PowerPoint slides in minutes with AI", category: "Presentations", rating: 4.7, reviews: 2280, tags: ["Free tier", "PowerPoint", "Auto-generate"], link: "https://aipowerpointgenerator.com", isNew: true, isTrending: true, dateAdded: "Nov 2025" },
  
  // Meetings
  { id: "fathom-ai", name: "Fathom AI", description: "Free AI meeting recorder with transcripts and summaries", category: "Meetings", rating: 4.9, reviews: 3850, tags: ["Free", "Recording", "Transcription"], link: "https://fathom.video", isNew: true, isTrending: true, isFree: true, dateAdded: "Nov 2025" },
  { id: "avoma-ai", name: "Avoma AI", description: "Free AI meeting assistant with notes and action items", category: "Meetings", rating: 4.7, reviews: 2100, tags: ["Free tier", "Notes", "Action items"], link: "https://avoma.com", isNew: true, isFree: true, dateAdded: "Nov 2025" },
  
  // Code & Development
  { id: "askcodi", name: "AskCodi", description: "Free advanced AI for coding, testing, and code analysis", category: "Code", rating: 4.7, reviews: 1680, tags: ["Free tier", "Coding", "Testing"], link: "https://askcodi.com", isNew: true, dateAdded: "Nov 2025" },
  { id: "qodo-ai", name: "Qodo AI", description: "Free AI code quality and testing assistant", category: "Code", rating: 4.6, reviews: 1240, tags: ["Free", "Quality", "Testing"], link: "https://qodo.ai", isNew: true, isFree: true, dateAdded: "Nov 2025" },
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
  "Automation",
  "Email",
  "Spreadsheet",
  "Meetings",
  "Scheduling",
  "Data Viz"
];
