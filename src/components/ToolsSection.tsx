import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { tools, categories } from "@/data/tools";
import ToolCard from "./ToolCard";

const ToolsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Tools");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    let filtered = [...tools]; // Create a copy to avoid mutations

    // Filter by category first
    if (selectedCategory !== "All Tools") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Filter by special badges
    if (selectedFilter === "New") {
      filtered = filtered.filter(tool => tool.isNew === true);
    } else if (selectedFilter === "Trending") {
      filtered = filtered.filter(tool => tool.isTrending === true);
    } else if (selectedFilter === "100% Free") {
      filtered = filtered.filter(tool => tool.isFree === true);
    } else if (selectedFilter === "No Sign-Up") {
      filtered = filtered.filter(tool => tool.noSignup === true);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
        tool.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery, selectedFilter]);

  return (
    <section id="tools" className="py-20 px-4 bg-secondary/20 scroll-mt-16">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            100+ Free AI Tools for <span className="bg-gradient-primary bg-clip-text text-transparent">Productivity, Creativity, and Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the best AI platform with powerful free AI tools. Filter by category or search for specific features to boost your workflow.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search AI tools by name, features, or tags..."
              className="pl-12 pr-12 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setSearchQuery("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Special Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {["New", "Trending", "100% Free", "No Sign-Up"].map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(selectedFilter === filter ? null : filter)}
              className={selectedFilter === filter ? "bg-gradient-primary" : ""}
            >
              {filter === "New" && "🆕 "}
              {filter === "Trending" && "🔥 "}
              {filter === "100% Free" && "💯 "}
              {filter === "No Sign-Up" && "⚡ "}
              {filter}
            </Button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mb-6 text-muted-foreground">
          Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" key={selectedCategory}>
            {filteredTools.map((tool, index) => (
              <ToolCard key={`${tool.id}-${selectedCategory}`} tool={tool} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No tools found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Tools");
                setSelectedFilter(null);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsSection;
