import { MapPin, Award, Star, Clock, Wrench } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Rockwall-Based Company",
    description: "We're your neighbors, serving Rockwall and Dallas with pride. Our team understands the unique challenges of Texas weather and provides solutions tailored to your needs."
  },
  {
    icon: Award,
    title: "High-Quality Film Brands",
    description: "We use only premium window films from trusted manufacturers like XPEL, backed by lifetime warranties. No cheap materials that bubble, fade, or peel."
  },
  {
    icon: Wrench,
    title: "Certified Installation Technicians",
    description: "Our installers are factory-trained and certified on all major window film systems. Expect clean, precise installations with no bubbles, gaps, or imperfections."
  },
  {
    icon: Star,
    title: "Excellent Customer Reviews",
    description: "Thousands of satisfied customers across Rockwall, Dallas, Plano, Garland, and beyond trust Sunmasters for their window tinting needs. Check our 5-star reviews."
  },
  {
    icon: Clock,
    title: "Fast Scheduling & Clean Installs",
    description: "We respect your time with efficient scheduling and professional installations. Most automotive jobs complete same-day; residential and commercial projects are scheduled to minimize disruption."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-4">
          Why Rockwall & Dallas Choose Sunmasters
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          When you search for window tinting Rockwall TX or Dallas window film installation, you want a company you can trust. Here's why thousands of customers choose Sunmasters.
        </p>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-secondary border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;