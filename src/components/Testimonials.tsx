import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Writer",
    content: "This platform transformed my workflow. I'm completing projects 5x faster and earning more than ever. The AI writing tools are game-changers!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Digital Marketer",
    content: "Having all AI tools in one place saves me hours every day. The social media and SEO tools alone have paid for themselves many times over.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Graphic Designer",
    content: "As a designer, the image and logo generation tools help me prototype ideas instantly. My clients are amazed at how quickly I can deliver variations.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Park",
    role: "Content Creator",
    content: "The video editing and automation tools changed everything for my YouTube channel. I'm now posting daily with half the effort.",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Lisa Thompson",
    role: "Business Consultant",
    content: "The research and presentation tools help me deliver professional reports to clients in record time. Absolutely worth the investment.",
    rating: 5,
    avatar: "LT",
  },
  {
    name: "Alex Martinez",
    role: "E-commerce Owner",
    content: "From product descriptions to ad copy to social posts - this platform handles it all. My online store has never looked better!",
    rating: 5,
    avatar: "AM",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals transforming their work with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
