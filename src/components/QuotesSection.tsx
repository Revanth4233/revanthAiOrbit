import { Card } from "@/components/ui/card";

const quotes = [
  {
    text: "Start simple, solve one problem, and charge fairly. AI makes it faster—your clarity makes it valuable.",
    author: "AIOrbit"
  },
  {
    text: "Don’t wait to be an expert. Get your first client, learn on the job, improve every week.",
    author: "AIOrbit"
  },
  {
    text: "AI won’t replace you. Someone using AI better will. Be that person.",
    author: "AIOrbit"
  },
  {
    text: "Money follows value. Value follows speed + quality. AI gives you both.",
    author: "AIOrbit"
  },
  {
    text: "Create 3 samples, list your gig, deliver fast, collect reviews—repeat.",
    author: "AIOrbit"
  },
  {
    text: "Your first $100 is proof. Your first $1,000 is a system. Use AI to build it.",
    author: "AIOrbit"
  }
];

const QuotesSection = () => {
  return (
    <section aria-labelledby="quotes-title" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h2 id="quotes-title" className="text-3xl md:text-4xl font-bold">
            Inspiring Quotes to Build Your AI Income
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Motivation to take action, stay consistent, and grow with the help of AI.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Card key={i} className="p-6 bg-card/60 backdrop-blur border-border shadow-glow animate-fade-in">
              <blockquote className="space-y-3">
                <p className="text-lg leading-relaxed">“{q.text}”</p>
                <footer className="text-sm text-muted-foreground">— {q.author}</footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
