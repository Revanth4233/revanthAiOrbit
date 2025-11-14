import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { BookOpen, Sparkles, TrendingUp, Grid3x3 } from "lucide-react";
import { useEffect } from "react";

const Resources = () => {
  useEffect(() => {
    // Add WebPage Schema
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Resources Hub - Free AI Tools, Guides & Tutorials",
      "description": "Comprehensive resource hub for AI tools, tutorials, and guides. Learn how to use AI for business, creativity, and productivity.",
      "url": "https://aiorbit4233.lovable.app/resources",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aiorbit4233.lovable.app/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://aiorbit4233.lovable.app/resources"
        }]
      }
    });
    document.head.appendChild(schema);

    return () => {
      if (document.head.contains(schema)) {
        document.head.removeChild(schema);
      }
    };
  }, []);

  const popularPosts = blogPosts.slice(0, 3);
  const newTools = tools.filter(t => t.isNew).slice(0, 6);
  const trendingTools = tools.filter(t => t.isTrending).slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 text-sm">
        <ol className="flex items-center gap-2 text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground">Home</Link></li>
          <li>/</li>
          <li className="text-foreground">Resources</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-4">AI Resources Hub</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to master AI tools for business, creativity, and productivity.
            Guides, tutorials, and curated tool collections.
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Link to="/blog">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Blog & Guides</CardTitle>
                <CardDescription>In-depth tutorials and how-tos</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/#tools">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Sparkles className="w-8 h-8 text-primary mb-2" />
                <CardTitle>All AI Tools</CardTitle>
                <CardDescription>100+ free tools catalog</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Link to="/#categories">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Grid3x3 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by use case</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 h-full">
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Just Released</CardTitle>
              <CardDescription>Latest AI tools weekly</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Popular Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Popular Articles</h2>
            <Link to="/blog">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <img src={post.image} alt={post.imageAlt || post.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <div className="text-sm text-primary mb-2">{post.category}</div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* New Tools */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">🆕 Just Released AI Tools</h2>
            <Link to="/#tools">
              <Button variant="outline">Browse All Tools</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">NEW</span>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Try Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Tools */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">🔥 Trending AI Tools</h2>
            <Link to="/#tools">
              <Button variant="outline">See More</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full">TRENDING</span>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Try Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tool Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={`/#categories`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <Icon className="w-6 h-6 text-primary mb-2" />
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription className="text-sm">{category.tools}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="mt-16 p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Start Exploring Free AI Tools Today</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of creators and businesses using AIOrbit to discover the best free AI tools. Updated weekly.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8">Explore All Tools</Button>
          </Link>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
