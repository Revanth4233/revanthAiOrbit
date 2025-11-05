export interface ToolDetails {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  tags: string[];
  link: string;
  isPro?: boolean;
  bannerImage?: string;
  relatedTools?: string[];
  overview: string;
  examples: {
    title: string;
    description: string;
    input?: string;
    output?: string;
    steps?: string[];
  }[];
  howToUse: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  monetization: {
    services: string[];
    platforms: string[];
    toolCombinations: string[];
    tips: string[];
  };
  roadmap: {
    phase: string;
    title: string;
    steps: string[];
    earnings?: string;
  }[];
}

export const toolDetailsData: Record<string, ToolDetails> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Most advanced AI for text generation, Q&A, coding help, and content creation",
    category: "Research",
    rating: 4.9,
    reviews: 2500,
    tags: ["Conversational AI", "Content writing", "Code generation"],
    link: "https://chat.openai.com",
    bannerImage: "chatgpt-banner.jpg",
    relatedTools: ["claude", "gemini", "perplexity"],
    overview: "ChatGPT is OpenAI's revolutionary conversational AI that can assist with writing, coding, research, brainstorming, and problem-solving. It understands context and generates human-like responses across virtually any topic.",
    examples: [
      {
        title: "Blog Post Writing",
        description: "Creating a complete blog post about AI benefits for small businesses",
        input: "Write a 1000-word blog post titled 'How AI Can Transform Your Small Business in 2025'. Include an introduction, 5 main benefits with examples, and a conclusion. Use a friendly, professional tone.",
        output: "Title: How AI Can Transform Your Small Business in 2025\n\nIntroduction:\nArtificial Intelligence is no longer just for tech giants...\n\n1. Automate Customer Service (saves 30+ hours/month)\nExample: AI chatbots handle 80% of common questions...\n\n2. Personalized Marketing Campaigns...\n[Complete blog post with examples and actionable tips]",
        steps: [
          "Specify word count, tone, and structure",
          "Ask for specific examples in each section",
          "Request conclusion with call-to-action",
          "Review and add personal insights"
        ]
      },
      {
        title: "Product Description for E-commerce",
        description: "Creating compelling product copy that drives sales",
        input: "Write a product description for wireless noise-canceling headphones. Target audience: professionals working from home. Highlight comfort, battery life, and sound quality. Include emotional benefits.",
        output: "Transform Your Home Office Into Your Productivity Zone\n\nExperience crystal-clear calls and immersive focus with our premium wireless headphones. \n\n✓ 40-hour battery life - work all week on a single charge\n✓ Cloud-soft ear cushions - wear comfortably for 8+ hours\n✓ Active noise canceling - eliminate distractions instantly\n\nJoin 10,000+ professionals who've upgraded their WFH setup.",
      },
      {
        title: "Social Media Content Calendar",
        description: "Generate a week of engaging posts",
        input: "Create 7 Instagram captions for a fitness coach. Topics: motivation Monday, workout tips, nutrition advice, success stories, and weekend challenge. Include hashtags and emojis.",
        output: "Monday: 💪 New week, new goals! Remember: motivation gets you started, but discipline keeps you going. What's your #1 fitness goal this week? #MotivationMonday #FitnessGoals\n\nTuesday: 🏋️ Quick tip: Focus on form over weight. Perfect your squat technique...\n\n[7 complete posts with hashtags]"
      }
    ],
    howToUse: [
      { title: "Sign Up & Access", description: "Visit https://chat.openai.com and create a free account using your email or Google sign-in. For GPT-4 access and faster responses, upgrade to ChatGPT Plus ($20/month) which includes advanced features and priority access during peak times." },
      { title: "Master Prompt Engineering", description: "Be highly specific with your requests. Instead of vague prompts like 'write a blog', use detailed instructions: 'Write a 1000-word SEO-optimized blog post about AI benefits for small businesses. Include 5 benefits with real-world examples, statistics, and a compelling call-to-action. Use a professional yet conversational tone.'" },
      { title: "Iterate & Refine Output", description: "ChatGPT learns from conversation context. After receiving initial output, ask follow-up questions to improve: 'Make this more professional', 'Expand section 3 with more details', 'Add statistics and data points', or 'Rewrite the conclusion to be more actionable'." },
      { title: "Use Custom Instructions", description: "Save time by setting default preferences in Settings. Define your role (e.g., 'I'm a content marketer'), preferred response style ('Always include examples and actionable steps'), and formatting preferences. This ensures consistent, tailored responses without repeating instructions." },
      { title: "Leverage Advanced Features", description: "Use code interpreter for data analysis, DALL-E integration for image generation, web browsing for current information, and file uploads to analyze documents. Combine these features for comprehensive project workflows." },
    ],
    benefits: [
      { title: "24/7 Availability", description: "Get instant answers and content generation anytime without waiting for human experts." },
      { title: "Multi-Purpose Tool", description: "Handle writing, coding, research, analysis, and creative tasks all in one platform." },
      { title: "Cost-Effective", description: "Replace multiple tools and services with one AI assistant, saving hundreds per month." },
      { title: "Learning Companion", description: "Understand complex topics with clear explanations and step-by-step guidance." },
    ],
    monetization: {
      services: [
        "Blog writing & SEO content creation",
        "Social media content packages",
        "Email marketing campaigns",
        "Product descriptions for e-commerce",
        "Code debugging and documentation",
        "Business plan writing",
        "Resume and cover letter writing"
      ],
      platforms: [
        "Fiverr - https://www.fiverr.com",
        "Upwork - https://www.upwork.com",
        "Freelancer - https://www.freelancer.com",
        "Contra - https://www.contra.com",
        "LinkedIn - https://www.linkedin.com/in/mukesh-revanth-3529b329a/",
        "Your own website"
      ],
      toolCombinations: [
        "ChatGPT + Grammarly (polish content)",
        "ChatGPT + Canva (create visuals)",
        "ChatGPT + Surfer SEO (optimize ranking)",
        "ChatGPT + Copy.ai (variety of styles)"
      ],
      tips: [
        "Create service packages: Basic (1000 words) → Premium (3000 words + SEO)",
        "Offer same-day delivery to charge 20-30% more",
        "Build a portfolio with AI-generated + edited samples",
        "Create templates for common requests to serve clients faster",
        "Upsell with editing, formatting, and publishing services"
      ]
    },
    roadmap: [
      {
        phase: "Week 1-2: Foundation",
        title: "Master ChatGPT & Build Portfolio",
        steps: [
          "DAY 1-3: Complete 20+ hours of prompt engineering practice across different use cases",
          "→ Practice blog post writing: 'Write a 1000-word blog about [topic]' with various tones (professional, casual, technical)",
          "→ Test product descriptions: Try 10 different products (tech, fashion, food) to understand output quality",
          "→ Experiment with social media: Generate Instagram captions, Twitter threads, LinkedIn posts",
          "→ Try technical content: Ask for code explanations, tutorials, how-to guides",
          "DAY 4-5: Study successful content in your target niche (3-5 hours of research)",
          "→ Browse top blogs on Medium, analyze what makes them engaging (hooks, structure, examples)",
          "→ Read high-converting product descriptions on Amazon, Shopify stores",
          "→ Study viral social media posts, identify patterns and formulas",
          "→ Save 20-30 examples as your 'swipe file' for inspiration",
          "DAY 6-7: Create professional profiles on Fiverr and Upwork",
          "→ Write compelling profile headline: 'Professional AI-Powered Content Writer | 24-Hour Delivery'",
          "→ Create detailed bio highlighting your expertise and speed",
          "→ Add professional photo and portfolio samples",
          "→ Research competitor pricing in your niche",
          "DAY 8-10: Build 5-10 diverse portfolio samples (1-2 hours per sample)",
          "→ 2 blog posts (1000+ words each) on trending topics in business/tech",
          "→ 2 product description sets (5 products each) for e-commerce",
          "→ 1 email sequence (5-7 emails) for a fictional product launch",
          "→ 2 social media content calendars (7 days of posts)",
          "→ 1 landing page copy with headline, benefits, CTA",
          "DAY 11-14: Set up business infrastructure",
          "→ Create PayPal/Stripe account for receiving payments",
          "→ Write 5 client communication templates (greeting, revision request, delivery, follow-up)",
          "→ Set up time-tracking and project management system (Trello or Notion)",
          "→ Create Google Doc templates for different content types",
          "→ Practice delivering work in professional format (proper formatting, cover page)"
        ],
        earnings: "Setup phase - Investment in learning"
      },
      {
        phase: "Week 3-4: Launch Services",
        title: "Land Your First 5 Clients",
        steps: [
          "DAY 15-16: Create 3 focused service packages on Fiverr",
          "→ GIG 1: 'I will write a 1000-word SEO blog article' - Price: $30 (Basic), $50 (Standard with research), $75 (Premium with images)",
          "→ GIG 2: 'I will write 10 compelling product descriptions' - Price: $25 (Basic), $40 (Standard with SEO), $60 (Premium with A/B versions)",
          "→ GIG 3: 'I will create 30 days of social media content' - Price: $45 (Instagram), $65 (Multi-platform), $95 (With graphics coordination)",
          "→ Each gig description must have: Clear deliverables, turnaround time, what's included, FAQ section",
          "→ Add tags: 'content writing', 'blog post', 'SEO', 'copywriting', 'article writing'",
          "DAY 17-19: Launch Upwork presence (apply to 10-15 jobs daily)",
          "→ Filter jobs by: 'Entry Level', 'Fixed Price $50-200', 'Posted in last 24 hours'",
          "→ Proposal template: 'Hi [Name], I noticed you need [specific service]. I've helped [similar client type] achieve [specific result]. I can deliver [specific deliverables] within [timeframe]. Here's my approach: [3 bullet points]. Would you like to see relevant samples?'",
          "→ Customize each proposal (change 40% of content) - never send generic proposals",
          "→ Respond within 1 hour of job posting for maximum visibility",
          "→ Target industries: SaaS companies, e-commerce stores, digital marketing agencies, coaches/consultants",
          "DAY 20-22: Offer 'Launch Special' to first 3 clients",
          "→ Discount strategy: 'First-time client special: 30% off + satisfaction guarantee'",
          "→ Over-deliver on first projects: Add extra revisions, faster delivery, bonus content suggestions",
          "→ Create project checklist: Understand requirements → Draft → Client review → 2 rounds revisions → Delivery",
          "→ Send personalized thank-you message after delivery with request for review",
          "DAY 23-25: Build social proof and network",
          "→ Join 5 Facebook groups in your niche (freelance writers, content marketing, digital marketing)",
          "→ Engage daily: Comment on 10 posts, answer 3 questions, share 1 valuable tip",
          "→ Create LinkedIn post: 'Top 5 content writing mistakes I see (and how to fix them)'",
          "→ Connect with 20 potential clients: Founders, marketing managers, content directors",
          "→ Offer free value: '15-minute content strategy consultation' to warm leads",
          "DAY 26-28: Optimize and refine process",
          "→ Create 10 ChatGPT prompt templates for your most common requests (save 30+ minutes per project)",
          "→ Build quality checklist: Grammar check, plagiarism check, formatting, brand voice match",
          "→ Set up Grammarly Premium for error-free delivery",
          "→ Practice rapid content creation: Complete 1000-word blog in under 1 hour",
          "→ Prepare standard revision process to handle client feedback efficiently"
        ],
        earnings: "$200-500 (Building reputation phase)"
      },
      {
        phase: "Month 2-3: Scale & Optimize",
        title: "Increase Prices & Efficiency",
        steps: [
          "WEEK 5-6: Strategic price increases based on social proof",
          "→ After 5 five-star reviews: Increase base prices by 25% ($30 → $40, $50 → $65)",
          "→ After 10 reviews: Add 'Premium Tier' 40% above standard ($65 → $90, includes priority support + extra revisions)",
          "→ Update gig descriptions with 'In-demand service' badge and testimonials",
          "→ Create 'Express Delivery' add-on: +50% price for 24-hour turnaround",
          "WEEK 7-8: Build systematic content creation workflows",
          "→ Create master prompt library: 30+ pre-tested ChatGPT prompts for common requests (blog intros, conclusions, product features, social posts)",
          "→ Build content templates in Google Docs: Blog structure, product description framework, social media calendar format",
          "→ Set up Notion workspace: Client tracker, project pipeline, content ideas, pricing calculator",
          "→ Implement batch processing: Write multiple blogs on same topic cluster for efficiency",
          "WEEK 9-10: Develop niche specialization for premium pricing",
          "→ Choose ONE vertical: SaaS, E-commerce, Healthcare, Real Estate, Finance, or B2B Tech",
          "→ Study niche-specific terminology, trends, pain points, and buyer personas",
          "→ Create 5 case studies: 'How I Helped [Industry] Client Achieve [Specific Result]'",
          "→ Rebrand as specialist: Update profile to '[Niche] Content Writer & Strategist'",
          "→ Join 3 niche-specific communities and establish expertise",
          "WEEK 11-12: Scale client acquisition and retention",
          "→ Handle 12-15 projects monthly (3-4 per week) while maintaining quality",
          "→ Build email list: Create lead magnet 'Free Content Strategy Template for [Your Niche]'",
          "→ Launch simple landing page with Carrd or Webflow ($19/year)",
          "→ Set up email automation: Welcome sequence, weekly tips, service promotions",
          "→ Implement referral program: 'Refer a client, get $25 Amazon gift card'",
          "MONTH 3 ADVANCED TACTICS:",
          "→ Upsell existing clients: 'Content Strategy Package' ($300-500) - keyword research, content calendar, competitor analysis",
          "→ Create 'Content Subscription': $400/month for 4 blog posts + social media calendar",
          "→ Pitch guest posts to industry blogs (builds authority + backlinks to your site)",
          "→ Create YouTube channel: 'How to Write [Niche] Content with AI' (10-15 min tutorials)",
          "→ Track metrics: Revenue per project, time per 1000 words, client lifetime value"
        ],
        earnings: "$1,500-3,000/month"
      },
      {
        phase: "Month 4-6: Establish Authority",
        title: "Premium Positioning & Retainers",
        steps: [
          "MONTH 4: Transition to authority positioning",
          "→ Publish 2 LinkedIn articles per week: Industry insights, content marketing tips, AI tool reviews (aim for 500-1000 views each)",
          "→ Create comprehensive YouTube tutorial series: 'Complete Content Writing Course' (8-10 videos, 15-20 min each)",
          "→ Guest post on 3 industry blogs (Medium publications, niche blogs, industry newsletters)",
          "→ Start podcast outreach: Pitch to 10 marketing/business podcasts as guest expert",
          "→ Build personal brand website: Portfolio, testimonials, case studies, blog, booking calendar (use Webflow, WordPress, or Framer)",
          "MONTH 5: Launch retainer packages (recurring revenue)",
          "→ SILVER PACKAGE: $600/month - 4 blog posts (1000 words each) + social media snippets",
          "→ GOLD PACKAGE: $1200/month - 8 blog posts + email newsletter + content strategy call",
          "→ PLATINUM PACKAGE: $2500/month - 12 blog posts + 30 days social media + monthly strategy + analytics report",
          "→ Pitch retainers to best existing clients: 'Save 20% with monthly subscription vs project-based pricing'",
          "→ Target businesses spending $200+ per project - they're most likely to convert",
          "→ Create proposal template: ROI calculator, content calendar preview, success metrics",
          "MONTH 6: Develop signature methodology",
          "→ Create proprietary framework: 'The [Your Name] Content System' or 'AI-Powered Conversion Methodology'",
          "→ Define your unique approach: Research → AI-Generation → Human Optimization → Data Analysis → Continuous Improvement",
          "→ Document your process in 'Service Playbook' to ensure consistency",
          "→ Create 'done-for-you' content packages: Blog Launch ($1500), Content Refresh ($800), SEO Overhaul ($2000)",
          "SCALE OPERATIONS:",
          "→ Hire virtual assistant ($5-8/hour) for: Client communication, scheduling, basic formatting, research",
          "→ Or partner with junior writer: You handle strategy/editing, they handle drafts (50/50 or 60/40 split)",
          "→ Use Asana or ClickUp for project management and team collaboration",
          "→ Standard Operating Procedures (SOPs): Create step-by-step guides for every service you offer",
          "PREMIUM CLIENT ACQUISITION:",
          "→ Focus exclusively on clients paying $400+ per project or $600+ monthly retainer",
          "→ Increase minimum project size: 'Starting at $500' filters out low-budget clients",
          "→ Cold outreach to ideal clients: Research companies in your niche, send personalized pitch with relevant case study",
          "→ LinkedIn outreach: Connect with 30 decision-makers weekly, engage with their content, offer value before pitching",
          "DIGITAL PRODUCTS for passive income:",
          "→ Create 'Ultimate ChatGPT Prompt Library for [Niche]' - sell for $27-47 on Gumroad",
          "→ Build 'Content Writer Swipe File' with 100+ proven templates - $67",
          "→ Launch 'AI Content Masterclass' mini-course (90 min video + workbook) - $97-197 on Teachable or Kajabi"
        ],
        earnings: "$4,000-8,000+/month"
      },
      {
        phase: "Month 7+: Scale to Agency",
        title: "Build Team & Passive Income",
        steps: [
          "MONTH 7-8: Build and train content team",
          "→ Hire 2-3 content writers: Post on Upwork, ProBlogger, Contently (budget: $0.05-0.08 per word for quality writers)",
          "→ Create comprehensive training program: Your prompt templates, brand voice guide, quality standards, client communication protocols",
          "→ Implement quality control: Review first 10 pieces from each writer, provide detailed feedback, establish baseline",
          "→ Use project management: Assign projects, track deadlines, review drafts, manage revisions via Asana or Monday.com",
          "→ Pay structure: 60-70% to writer, 30-40% you keep for management, editing, client relations, strategy",
          "→ Your role shifts: Client acquisition, strategy calls, final editing, quality assurance, business development",
          "MONTH 9-10: Scale client acquisition to agency level",
          "→ Rebrand as 'Content Agency': Update website, LinkedIn, proposals to reflect team capability",
          "→ Offer enterprise packages: $5000-10,000/month for comprehensive content marketing (blogs, social, email, whitepapers)",
          "→ Target larger companies: 50-500 employees, marketing budget $10K+/month",
          "→ Build sales system: Lead generation → Discovery call → Custom proposal → Follow-up sequence → Close",
          "→ Sales goal: 40-60 projects monthly with team handling production",
          "→ Hire account manager ($15-25/hour) to handle client communication and project coordination",
          "MONTH 11-12: Launch comprehensive online course",
          "→ Create 'ChatGPT Content Mastery Course': 20-30 video lessons (5-15 min each) covering your entire system",
          "→ Course modules: Prompt engineering, niche selection, client acquisition, pricing strategy, scaling, AI tools stack",
          "→ Include: 100+ prompt templates, client proposal templates, pricing calculator, case studies, Q&A sessions",
          "→ Price: $197-497 (or $97 with monthly payment plan of $37 x 3)",
          "→ Launch strategy: Email list (free webinar → pitch), YouTube audience, LinkedIn, affiliates",
          "→ Goal: 50-100 students in first 3 months = $10,000-25,000 in course revenue",
          "BUILD SAAS OR MARKETPLACE:",
          "→ Option A: Create 'Prompt Marketplace' - sell your best prompts for $9-29 each (recurring revenue from creators)",
          "→ Option B: Build 'AI Content Tool' - wrapped ChatGPT with templates for specific niche (subscription $29-99/month)",
          "→ Option C: Launch 'Content Template Library' - monthly subscription for access to all your templates ($27-47/month)",
          "→ Hire developer on Upwork ($2000-5000 for MVP) or use no-code tools (Bubble, Softr)",
          "THOUGHT LEADERSHIP & AUTHORITY:",
          "→ Speak at marketing conferences or virtual summits (builds credibility, generates leads)",
          "→ Start podcast: Interview successful content marketers, agency owners, share insights (20-30 min episodes weekly)",
          "→ Publish book on Amazon: 'AI Content Marketing Mastery' or 'The $10K/Month Content Writer' ($2.99 ebook, lead generation tool)",
          "→ Build affiliate partnerships: Promote AI tools, get 20-50% recurring commissions",
          "ADVANCED REVENUE STREAMS:",
          "→ Agency services: $10,000-25,000/month from 5-10 retainer clients",
          "→ Online course: $3,000-8,000/month from ongoing enrollments",
          "→ Digital products: $1,000-3,000/month from templates, prompt packs, swipe files",
          "→ Affiliate income: $500-2,000/month from tool recommendations",
          "→ Speaking/consulting: $1,000-5,000/month from workshops and consulting",
          "→ SaaS/Tools: $2,000-10,000/month if you build successful tool"
        ],
        earnings: "$10,000-30,000+/month"
      }
    ]
  },
  
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    description: "Create stunning, professional images from text prompts",
    category: "Image",
    rating: 4.9,
    reviews: 3500,
    tags: ["Image generation", "Art creation", "Digital art"],
    link: "https://midjourney.com",
    isPro: true,
    overview: "Midjourney is the leading AI art generator that creates photorealistic images, illustrations, and designs from text descriptions. Used by artists, designers, and marketers worldwide.",
    examples: [
      {
        title: "Book Cover Design",
        description: "Creating a professional fantasy book cover",
        input: "/imagine a mysterious fantasy book cover, ancient magical tome with glowing runes, dark background with mystical purple and blue aura, ornate golden details, cinematic lighting, 8k, detailed --ar 2:3 --v 6",
        output: "[Generates a stunning book cover with glowing mystical elements, perfect for fantasy novels]",
        steps: [
          "Use /imagine command in Discord",
          "Describe the scene and mood clearly",
          "Add style keywords (cinematic, detailed, 8k)",
          "Specify aspect ratio with --ar 2:3 for book covers",
          "Upscale the best result with U1-U4 buttons"
        ]
      },
      {
        title: "Social Media Graphics",
        description: "Creating eye-catching Instagram posts",
        input: "/imagine minimalist product photography, luxury skincare bottle on marble surface, soft natural lighting, pink and white color scheme, professional studio quality, clean background --ar 1:1",
        output: "[Produces elegant product photo perfect for Instagram feed]",
        steps: [
          "Specify 1:1 aspect ratio for Instagram",
          "Mention lighting and color scheme",
          "Use professional photography terms",
          "Generate 4 variations and pick the best"
        ]
      },
      {
        title: "Logo Design Concept",
        description: "Generate logo ideas for a tech startup",
        input: "/imagine minimalist logo design, modern tech startup, geometric shapes, AI and cloud computing theme, blue and cyan gradient, vector style, simple, professional --v 6",
        output: "[Creates clean, modern logo concepts with tech-forward aesthetics]",
        steps: [
          "Emphasize 'minimalist' and 'simple' for logos",
          "Specify vector style for scalability",
          "Mention brand colors",
          "Create variations with V1-V4 buttons",
          "Upscale final choice and export"
        ]
      }
    ],
    howToUse: [
      { title: "Join Discord & Subscribe", description: "Midjourney operates exclusively through Discord. First, create a Discord account at https://discord.com, then join the Midjourney server at https://discord.gg/midjourney. Subscribe to a plan: Basic ($10/month, ~200 images), Standard ($30/month, unlimited relaxed mode), or Pro ($60/month, stealth mode + max speed)." },
      { title: "Master the /imagine Command", description: "In any Midjourney channel, type /imagine followed by a detailed prompt. Structure: [Subject] + [Style] + [Lighting] + [Details] + [Quality]. Example: '/imagine majestic mountain landscape at sunrise, oil painting style, dramatic golden hour lighting, highly detailed clouds and reflections, 8k quality, photorealistic --ar 16:9 --v 6'." },
      { title: "Use Advanced Parameters", description: "Enhance outputs with parameters: --ar 16:9 (aspect ratio for videos), --ar 1:1 (Instagram square), --ar 2:3 (book covers), --v 6 (latest version), --stylize 1000 (maximum artistic interpretation), --chaos 50 (more variety), --quality 2 (higher quality, uses 2x GPU minutes)." },
      { title: "Upscale & Create Variations", description: "After generation, use the button grid below each image: U1-U4 upscales specific images to full resolution (1024x1024+), V1-V4 creates 4 new variations based on selected image. Use '🔄' for complete re-roll, and '❤️' to save favorites." },
      { title: "Advanced Techniques", description: "Use image prompts by uploading reference images, combine multiple concepts with double colons (::), adjust weights with numbers (sunset::2 city::1), use negative prompts with --no (--no people, text), and blend images with /blend command." },
    ],
    benefits: [
      { title: "Professional Quality", description: "Generate images rivaling professional photographers and artists in seconds." },
      { title: "Unlimited Creativity", description: "Create any visual concept imaginable without design skills or photography equipment." },
      { title: "Commercial Rights", description: "Paid plans include commercial usage rights for selling and client work." },
      { title: "Rapid Iteration", description: "Test dozens of visual concepts in minutes instead of days of manual work." },
    ],
    monetization: {
      services: [
        "Stock images for sale on marketplaces",
        "Book covers and illustrations",
        "Social media graphics and ads",
        "Print-on-demand designs (t-shirts, mugs, posters)",
        "NFT art collections",
        "Custom art for clients",
        "Brand identity and marketing materials"
      ],
      platforms: [
        "Etsy - https://www.etsy.com (digital prints & downloads)",
        "Redbubble - https://www.redbubble.com (print-on-demand)",
        "Fiverr - https://www.fiverr.com (custom designs)",
        "Adobe Stock - https://stock.adobe.com (stock images)",
        "Shutterstock - https://www.shutterstock.com (contributor)",
        "OpenSea - https://opensea.io (NFT marketplace)",
        "Creative Market - https://creativemarket.com",
        "Your own Shopify store - https://www.shopify.com"
      ],
      toolCombinations: [
        "Midjourney + Photoshop (final edits)",
        "Midjourney + Canva (add text/branding)",
        "Midjourney + Printful (print-on-demand)",
        "Midjourney + ChatGPT (generate prompts)"
      ],
      tips: [
        "Create collections (10-20 images in same style) to sell as bundles",
        "Master specific niches: logos, book covers, abstract art, portraits",
        "Offer 'rush delivery' at 1.5x price for faster turnaround",
        "Build Instagram showcasing your AI art to attract clients",
        "Create templates for common requests to speed up workflow"
      ]
    },
    roadmap: [
      {
        phase: "Week 1-2",
        title: "Master the Tool",
        steps: [
          "Subscribe to Midjourney ($10-30/month plan)",
          "Practice 50+ prompts to understand parameters",
          "Study top-selling art styles on Etsy and marketplaces",
          "Create 20-30 portfolio pieces"
        ],
        earnings: "Setup phase"
      },
      {
        phase: "Week 3-4",
        title: "Start Selling",
        steps: [
          "Open Etsy shop and list 20 digital prints",
          "Create Fiverr gig for custom AI art",
          "Price: $5-20 for digital downloads, $30-50 for custom work",
          "Share on social media and design communities"
        ],
        earnings: "$100-300/month"
      },
      {
        phase: "Month 2-3",
        title: "Scale Production",
        steps: [
          "Upload to multiple stock sites (Adobe, Shutterstock)",
          "Launch print-on-demand with Redbubble",
          "Create NFT collection (50-100 pieces)",
          "Increase prices and add premium services"
        ],
        earnings: "$500-1,500/month"
      },
      {
        phase: "Month 4+",
        title: "Build Brand",
        steps: [
          "Establish signature style and niche authority",
          "Offer done-for-you branding packages ($500-2000)",
          "Create courses on AI art generation",
          "Build email list for repeat customers"
        ],
        earnings: "$2,000-10,000+/month"
      }
    ]
  },

  "copy-ai": {
    id: "copy-ai",
    name: "Copy.ai",
    description: "Generate marketing copy, ads, and content in seconds",
    category: "Copywriting",
    rating: 4.7,
    reviews: 1800,
    tags: ["Marketing copy", "Ad creation", "Content generation"],
    link: "https://copy.ai",
    bannerImage: "copyai-banner.jpg",
    relatedTools: ["jasper", "writesonic", "chatgpt"],
    overview: "Copy.ai is a powerful AI copywriting tool that generates high-converting marketing copy, ad campaigns, product descriptions, and sales content using advanced AI trained on top-performing copy.",
    examples: [
      {
        title: "Facebook Ad Campaign",
        description: "Creating scroll-stopping ad copy for an online course",
        input: "Product: Digital Marketing Course for Beginners\nTarget Audience: Small business owners\nKey Benefit: Learn to run profitable ads in 30 days\nTone: Motivational and professional",
        output: "Headline: Stop Wasting Money on Ads That Don't Work ❌\n\nBody: You're spending $500/month on Facebook ads but seeing zero sales. Sound familiar?\n\nWhat if you could turn that around in just 30 days?\n\nOur proven Digital Marketing Course shows you:\n✅ How to target the RIGHT customers\n✅ Ad copy that actually converts\n✅ Scale from $10/day to $100/day profitably\n\n1,247 business owners have already transformed their marketing.\n\nCTA: Start Your Free Trial Today →",
        steps: [
          "Select 'Facebook Ad' template in Copy.ai",
          "Fill in product details and target audience",
          "Generate 10+ variations",
          "Pick the most compelling hook",
          "A/B test top 2-3 versions"
        ]
      },
      {
        title: "Product Description",
        description: "Write compelling copy for an eco-friendly water bottle",
        input: "Product Name: EcoFlow Insulated Bottle\nFeatures: 24-hour cold, 12-hour hot, BPA-free, sustainable materials\nTarget: Eco-conscious millennials",
        output: "Hydration Meets Sustainability 🌱\n\nYour daily choices matter. EcoFlow isn't just a water bottle—it's your commitment to a healthier planet.\n\n🧊 Ice-cold drinks for 24 hours (even in summer heat)\n☕ Hot coffee stays warm for 12+ hours\n♻️ Made from 100% recycled stainless steel\n🚫 Zero plastic, Zero BPA, Zero compromise\n\nJoin 50,000+ eco-warriors who've eliminated 2M+ plastic bottles.\n\nEvery sip is a step toward a cleaner future.",
      },
      {
        title: "Email Subject Lines",
        description: "Create high-open-rate subject lines for a sale",
        input: "Email: Flash sale announcement, 40% off all products, ends in 24 hours",
        output: "1. ⚡ 24 Hours Only: 40% OFF Everything (Don't Miss This)\n2. Your cart misses you... + 40% OFF inside 💝\n3. [ENDING SOON] 40% off won't last 🚨\n4. We've never done this before (40% off ALL products)\n5. Quick question: Why haven't you opened this yet? (40% inside)\n6. Last chance: 40% OFF expires at midnight ⏰",
        steps: [
          "Use 'Email Subject Line' template",
          "Input offer details",
          "Generate 10-20 options",
          "Test urgency vs curiosity approaches",
          "Pick top 3 for A/B testing"
        ]
      }
    ],
    howToUse: [
      { title: "Sign Up & Explore Templates", description: "Create account at https://www.copy.ai and start with free plan (2,000 words/month). Explore 90+ templates organized by use case: Facebook Ads, Google Ads, Product Descriptions, Email Subject Lines, Blog Intros, Landing Pages, Sales Copy, Social Media Posts, and more." },
      { title: "Input Comprehensive Details", description: "For best results, provide: Product/Service name, 3-5 key features or benefits, specific target audience (age, profession, pain points), desired tone (professional, casual, urgent, friendly, persuasive), and any keywords to include. More detail = better output." },
      { title: "Generate & Compare Multiple Versions", description: "Copy.ai creates 10-20 variations per generation. Don't settle for first output - click 'Generate More' 3-4 times to get 40-80 options. Pick the best hooks, benefits descriptions, and CTAs from different versions and combine them for ultimate copy." },
      { title: "Edit & Brand Align", description: "Refine AI output to match exact brand voice. Add personal anecdotes, company-specific details, and authentic touches. Use Grammarly or Hemingway App to polish. Always A/B test different versions to find what converts best." },
      { title: "Save & Reuse Winning Copy", description: "Save high-performing copy in your Copy.ai projects. Create swipe files of successful patterns. Modify winning templates for new campaigns. Build a library of proven hooks, CTAs, and body copy structures." },
    ],
    benefits: [
      { title: "Speed", description: "Generate months of marketing copy in hours, not weeks of brainstorming." },
      { title: "Conversion-Focused", description: "Templates trained on high-converting copy formulas used by top marketers." },
      { title: "Overcome Writer's Block", description: "Never stare at blank page again - get instant inspiration and frameworks." },
      { title: "A/B Testing Ready", description: "Generate multiple versions for split testing to maximize conversions." },
    ],
    monetization: {
      services: [
        "Facebook/Instagram ad copywriting",
        "Google Ads campaigns",
        "Product descriptions for Shopify stores",
        "Email marketing sequences",
        "Landing page copy",
        "Social media captions and posts",
        "Sales page copy"
      ],
      platforms: [
        "Fiverr - https://www.fiverr.com (freelance marketplace)",
        "Upwork - https://www.upwork.com (professional services)",
        "Freelancer - https://www.freelancer.com (global projects)",
        "PeoplePerHour - https://www.peopleperhour.com (hourly work)",
        "LinkedIn - https://www.linkedin.com/in/mukesh-revanth-3529b329a/",
        "Guru - https://www.guru.com (expert marketplace)",
        "Direct outreach to e-commerce stores",
        "Marketing agencies (as subcontractor)"
      ],
      toolCombinations: [
        "Copy.ai + Grammarly (error-free copy)",
        "Copy.ai + Canva (create ad visuals)",
        "Copy.ai + ChatGPT (longer content)",
        "Copy.ai + Hemingway (readability)"
      ],
      tips: [
        "Specialize in one platform (Facebook Ads, Google Ads, Email) to become expert",
        "Create packages: 5 ad variations ($50), 10 variations ($80), 20 variations ($120)",
        "Offer A/B testing setup as premium service",
        "Show before/after examples of conversion improvements",
        "Target e-commerce stores and dropshippers as ideal clients"
      ]
    },
    roadmap: [
      {
        phase: "Week 1-2",
        title: "Foundation",
        steps: [
          "Subscribe to Copy.ai (free trial, then $49/month)",
          "Study high-converting ad examples on Facebook Ad Library",
          "Create swipe file of best AI-generated copy",
          "Make portfolio with 10 sample campaigns"
        ],
        earnings: "Setup phase"
      },
      {
        phase: "Week 3-4",
        title: "First Sales",
        steps: [
          "List gigs on Fiverr: 'I will write 10 Facebook ad copies'",
          "Price at $25-50 per package",
          "Reach out to 20 Shopify stores offering free sample",
          "Deliver in 24 hours for 5-star reviews"
        ],
        earnings: "$200-400/month"
      },
      {
        phase: "Month 2-3",
        title: "Grow Client Base",
        steps: [
          "Raise prices to $75-150 per package",
          "Add email sequence writing ($200-400)",
          "Create case studies showing conversion improvements",
          "Handle 15-20 clients per month"
        ],
        earnings: "$1,500-3,000/month"
      },
      {
        phase: "Month 4+",
        title: "Premium Service",
        steps: [
          "Offer full funnel copywriting ($1000-3000)",
          "Monthly retainers for ongoing copy ($500-1500/month)",
          "Hire VA to handle basic copy, you review",
          "Focus on high-ticket clients only"
        ],
        earnings: "$5,000-10,000+/month"
      }
    ]
  }
};

// Generate basic details for remaining tools
export const generateToolDetails = (toolId: string, name: string, description: string, category: string, rating: number, reviews: number, tags: string[], link: string, isPro?: boolean): ToolDetails => {
  return toolDetailsData[toolId] || {
    id: toolId,
    name,
    description,
    category,
    rating,
    reviews,
    tags,
    link,
    isPro,
    overview: `${name} is a powerful AI tool in the ${category} category that helps professionals and businesses ${description.toLowerCase()}. It combines cutting-edge AI technology with user-friendly interfaces to deliver professional results.`,
    examples: [
      {
        title: `Basic ${category} Project`,
        description: `Creating professional ${category.toLowerCase()} content with ${name}`,
        input: `Open ${name}, select your desired template or starting point, and input your project requirements including target audience, style preferences, and specific goals.`,
        output: `${name} generates high-quality ${category.toLowerCase()} content that meets professional standards. Review the output and make any necessary adjustments to match your exact needs.`,
        steps: [
          `Sign in to ${name} and navigate to the main dashboard`,
          `Choose the appropriate template or tool for your project type`,
          `Input your specific requirements and preferences`,
          `Generate initial results and review quality`,
          `Refine and iterate based on the output`,
          `Export or download the final result`
        ]
      },
      {
        title: `Advanced ${category} Workflow`,
        description: `Leveraging advanced features for professional results`,
        input: `Use advanced settings and customization options in ${name} to fine-tune your output. Experiment with different parameters to achieve unique results.`,
        output: `Professional-grade ${category.toLowerCase()} content optimized for your specific use case, ready to use in client projects or personal portfolio.`,
        steps: [
          `Explore advanced features and settings`,
          `Combine multiple tools or features for complex projects`,
          `Use presets or save custom configurations`,
          `Apply brand guidelines or style consistency`,
          `Quality check and optimize final output`
        ]
      },
      {
        title: `Client Project Example`,
        description: `How to use ${name} for freelance client work`,
        input: `Gather client requirements: brand colors, target audience, deliverable format, deadline, and any specific requests or restrictions.`,
        output: `Deliver professional ${category.toLowerCase()} assets that exceed client expectations, completed in 50-70% less time than traditional methods.`,
        steps: [
          `Create project brief from client requirements`,
          `Use ${name} to generate initial concepts`,
          `Present 2-3 options to client for feedback`,
          `Refine based on client input`,
          `Deliver final files in requested formats`,
          `Offer revisions using AI for quick turnaround`
        ]
      }
    ],
    howToUse: [
      { title: "Create Account", description: `Sign up at ${link} and explore the free trial or choose a subscription plan that fits your needs.` },
      { title: "Explore Features", description: `Familiarize yourself with the main features and templates available. Watch tutorial videos and read documentation.` },
      { title: "Start Creating", description: `Begin with simple projects to understand the workflow. Experiment with different settings and options.` },
      { title: "Optimize Results", description: `Learn advanced features and shortcuts to maximize efficiency and output quality.` },
    ],
    benefits: [
      { title: "Time Savings", description: `Automate repetitive tasks and reduce project completion time by 70-90%.` },
      { title: "Professional Quality", description: `Achieve professional-grade results without years of training or expensive software.` },
      { title: "Cost Effective", description: `Replace multiple tools and services with one affordable AI-powered solution.` },
      { title: "Scalability", description: `Handle increasing workload without proportional increase in time or resources.` },
    ],
    monetization: {
      services: [
        `${category} services for businesses`,
        `Freelance ${category.toLowerCase()} projects`,
        `Custom ${category.toLowerCase()} packages`,
        `Consulting and training on ${name}`,
      ],
      platforms: [
        "Fiverr - https://www.fiverr.com",
        "Upwork - https://www.upwork.com",
        "Freelancer - https://www.freelancer.com",
        "Toptal - https://www.toptal.com (top 3% freelancers)",
        "99designs - https://99designs.com (design-specific)",
        "LinkedIn - https://www.linkedin.com/in/mukesh-revanth-3529b329a/",
        "Behance - https://www.behance.net (portfolio showcase)",
        "Your own website",
        "Direct client outreach"
      ],
      toolCombinations: [
        `${name} + ChatGPT (content)`,
        `${name} + Canva (visuals)`,
        `${name} + Grammarly (quality)`,
      ],
      tips: [
        "Start with competitive pricing to build reviews and portfolio",
        "Create package deals (Basic, Standard, Premium) for different budgets",
        "Offer fast turnaround as premium service",
        "Build case studies and testimonials to attract higher-paying clients",
        "Specialize in a specific niche to become the go-to expert"
      ]
    },
    roadmap: [
      {
        phase: "Week 1-2",
        title: "Learning Phase",
        steps: [
          `Subscribe to ${name} and complete tutorials`,
          "Create 5-10 portfolio samples",
          "Research market rates and competition",
          "Set up freelance profiles"
        ],
        earnings: "Setup phase"
      },
      {
        phase: "Week 3-4",
        title: "First Clients",
        steps: [
          "List services on freelance platforms",
          "Price 20-30% below market to build reviews",
          "Deliver exceptional quality and fast turnaround",
          "Request testimonials from every client"
        ],
        earnings: "$200-500/month"
      },
      {
        phase: "Month 2-3",
        title: "Growth Phase",
        steps: [
          "Increase prices based on positive reviews",
          "Add premium service tiers",
          "Optimize workflow with templates",
          "Scale to 10-15 projects monthly"
        ],
        earnings: "$1,000-2,500/month"
      },
      {
        phase: "Month 4+",
        title: "Established Expert",
        steps: [
          "Position as specialist in your niche",
          "Offer retainer packages to recurring clients",
          "Build personal brand and website",
          "Consider hiring assistants to scale"
        ],
        earnings: "$3,000-8,000+/month"
      }
    ]
  };
};
