import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { useEffect } from "react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;

    // Add Article Schema
    const articleSchema = document.createElement('script');
    articleSchema.type = 'application/ld+json';
    articleSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "AIOrbit",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aiorbit4233.lovable.app/favicon.ico"
        }
      },
      "datePublished": post.date,
      "dateModified": post.lastUpdated || post.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://aiorbit4233.lovable.app/blog/${post.slug}`
      }
    });
    document.head.appendChild(articleSchema);

    // Add BreadcrumbList Schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aiorbit4233.lovable.app/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://aiorbit4233.lovable.app/blog"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://aiorbit4233.lovable.app/blog/${post.slug}`
      }]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      if (document.head.contains(articleSchema)) {
        document.head.removeChild(articleSchema);
      }
      if (document.head.contains(breadcrumbSchema)) {
        document.head.removeChild(breadcrumbSchema);
      }
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-4 text-sm">
        <ol className="flex items-center gap-2 text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground">Home</Link></li>
          <li>/</li>
          <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          <li>/</li>
          <li className="text-foreground">{post.title}</li>
        </ol>
      </nav>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>By {post.author}</span>
            {post.lastUpdated && (
              <>
                <span className="mx-2">•</span>
                <span>Last updated: {post.lastUpdated}</span>
              </>
            )}
          </div>
        </header>

        {post.image && (
          <img 
            src={post.image} 
            alt={post.imageAlt || post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            loading="eager"
          />
        )}

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Internal Links Section */}
        <Card className="p-6 my-8 bg-muted/50">
          <h3 className="text-xl font-semibold mb-4">Explore More AI Tools</h3>
          <div className="grid gap-4">
            <Link to="/#tools" className="text-primary hover:underline">
              Browse All Free AI Tools →
            </Link>
            <Link to="/#categories" className="text-primary hover:underline">
              Explore AI Tools by Category →
            </Link>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Workflow with AI?</h3>
          <p className="text-muted-foreground mb-6">
            Discover 100+ free AI tools handpicked for creators, businesses, and innovators.
          </p>
          <Link to="/">
            <Button size="lg">Explore Free AI Tools</Button>
          </Link>
        </Card>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
