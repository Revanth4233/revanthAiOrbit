import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Best Free AI Tools for Making Money in 2025",
    excerpt: "Discover the top free AI platforms and tools that can help you generate income through content creation, automation, and productivity enhancement.",
    content: "Comprehensive guide to monetizing AI tools...",
    author: "AIOrbit Team",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Monetization",
    image: "/placeholder.svg",
    slug: "best-free-ai-tools-making-money-2025"
  },
  {
    id: "2",
    title: "How to Use AI Platform Tools for Content Creation",
    excerpt: "Learn how to leverage the best AI platform tools for creating engaging content across multiple formats - from writing to video production.",
    content: "Step-by-step tutorial on AI content creation...",
    author: "AIOrbit Team",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "Tutorial",
    image: "/placeholder.svg",
    slug: "ai-platform-tools-content-creation"
  },
  {
    id: "3",
    title: "Top 10 Free AI Tools Every Developer Needs",
    excerpt: "Boost your development workflow with these essential free AI tools for coding, debugging, and project management.",
    content: "Detailed review of developer AI tools...",
    author: "AIOrbit Team",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Development",
    image: "/placeholder.svg",
    slug: "top-free-ai-tools-developers"
  },
  {
    id: "4",
    title: "AI Platform Comparison: Which Free Tool is Best for You?",
    excerpt: "Compare the leading free AI platforms across categories to find the perfect match for your specific needs and workflow.",
    content: "In-depth comparison of AI platforms...",
    author: "AIOrbit Team",
    date: "2025-01-08",
    readTime: "12 min read",
    category: "Comparison",
    image: "/placeholder.svg",
    slug: "ai-platform-comparison-free-tools"
  },
  {
    id: "5",
    title: "Free AI Tools for Students: Learn Smarter in 2025",
    excerpt: "Essential free AI tools that help students with research, writing, studying, and project management.",
    content: "Student guide to AI tools...",
    author: "AIOrbit Team",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Education",
    image: "/placeholder.svg",
    slug: "free-ai-tools-students-2025"
  },
  {
    id: "6",
    title: "Automate Your Workflow with These Free AI Platforms",
    excerpt: "Discover how to save hours every week by automating repetitive tasks using the best free AI automation tools.",
    content: "Automation guide with AI tools...",
    author: "AIOrbit Team",
    date: "2025-01-03",
    readTime: "11 min read",
    category: "Productivity",
    image: "/placeholder.svg",
    slug: "automate-workflow-free-ai-platforms"
  }
];

const Blog = () => {
  useEffect(() => {
    // Add Blog schema markup for SEO
    const blogSchema = document.createElement('script');
    blogSchema.type = 'application/ld+json';
    blogSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "AIOrbit Blog",
      "description": "Latest insights, tutorials, and updates about free AI tools and platforms",
      "url": "https://aiorbit.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "AIOrbit",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lovable.dev/opengraph-image-p98pqg.png"
        }
      },
      "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "datePublished": post.date,
        "url": `https://aiorbit.com/blog/${post.slug}`
      }))
    });
    document.head.appendChild(blogSchema);

    return () => {
      if (document.head.contains(blogSchema)) {
        document.head.removeChild(blogSchema);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AIOrbit <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest insights, tutorials, and updates about the best free AI platform and tools for 2025
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-primary/10 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`${post.title} - Free AI tools guide`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Free AI Tools?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Access 100+ free AI tools curated for productivity, learning, and income
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/">
              Explore All Tools
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
