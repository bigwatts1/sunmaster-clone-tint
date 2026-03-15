import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sunmasters tinted all the windows in my truck the same day I called. The technician was professional, explained everything clearly, and the price was very fair. My truck stays so much cooler now, and the tint looks amazing!",
    name: "Michael R.",
    location: "Dallas, TX",
    service: "Automotive Tinting"
  },
  {
    quote: "We've used Sunmasters for our office building and they did an incredible job. The energy savings have been significant and our employees are much more comfortable. Highly recommend for any business looking for professional window film.",
    name: "Jennifer S.",
    location: "Plano, TX",
    service: "Commercial Window Film"
  },
  {
    quote: "After getting quotes from several companies, Sunmasters offered the best value and quality. They installed ceramic tint on my home windows and the difference is night and day. Our AC runs less and the house stays cooler all day.",
    name: "David M.",
    location: "Frisco, TX",
    service: "Residential Tinting"
  },
  {
    quote: "I had the full paint protection film package done on my new Tesla. The installation was flawless and you can't even tell it's there. Sunmasters really knows their craft. Outstanding service from start to finish.",
    name: "Sarah L.",
    location: "McKinney, TX",
    service: "Paint Protection Film"
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Testimonials</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="text-foreground font-bold">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                <p className="text-primary text-sm mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
