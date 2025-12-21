import { Link } from "react-router-dom";
import { Home, Building2, Car, Shield, Blinds, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Window Tinting",
    slug: "residential-tinting",
    paragraphs: [
      "Keep your Rockwall or Dallas home cool and comfortable year-round with professional residential window tinting. Our films block up to 99% of harmful UV rays and significantly reduce heat gain, helping you save on energy bills while protecting your furniture, flooring, and artwork from sun damage.",
      "Whether you want enhanced privacy for your living spaces or simply a more comfortable indoor environment, our residential window films deliver. We offer a range of shades from nearly invisible to full privacy options, all installed by certified technicians with clean, bubble-free results."
    ],
    benefits: [
      "Block 99% of UV rays to protect interiors",
      "Reduce cooling costs by up to 30%",
      "Enhance privacy without sacrificing natural light",
      "Protect furniture and flooring from fading"
    ]
  },
  {
    icon: Building2,
    title: "Commercial Window Tinting",
    slug: "commercial-tinting",
    paragraphs: [
      "Create a more productive and comfortable workplace with commercial window tinting near me services from Sunmasters. Our commercial films reduce glare on computer screens, regulate indoor temperatures, and provide a professional appearance for storefronts, offices, and industrial buildings across Rockwall and Dallas.",
      "We work around your business schedule to minimize disruption and complete installations efficiently. From single-office suites to large commercial buildings, our team handles projects of all sizes with the same attention to quality and customer service."
    ],
    benefits: [
      "Reduce glare for improved employee comfort",
      "Lower energy costs with heat-rejecting films",
      "Create a professional, uniform exterior look",
      "Quick installation with minimal business disruption"
    ]
  },
  {
    icon: Car,
    title: "Automotive Window Tinting",
    slug: "automotive-tinting",
    paragraphs: [
      "Protect your vehicle and enhance its appearance with professional automotive window tinting in Rockwall TX. Our ceramic and nano-ceramic films block up to 98% of infrared heat without interfering with GPS, cell phone, or radio signals. We tint cars, trucks, SUVs, and luxury vehicles with same-day service available.",
      "All our automotive tinting complies with Texas legal limits, so you can drive confidently knowing your tint meets state regulations. We use precision-cut film for seamless installation on any vehicle make and model."
    ],
    benefits: [
      "Block up to 98% of infrared heat",
      "Protect leather and interior from UV damage",
      "Texas-legal tint levels with documentation",
      "Same-day service available for most vehicles"
    ]
  },
  {
    icon: Shield,
    title: "Safety & Security Film",
    slug: "security-film",
    paragraphs: [
      "Protect your Rockwall or Dallas property with safety and security window film. Our films hold shattered glass together during break-in attempts, severe storms, or accidents, helping prevent injuries from flying glass and deterring intruders. This added layer of protection is ideal for homes, schools, and businesses.",
      "Security film provides peace of mind without changing the appearance of your windows. It's virtually invisible once installed, yet provides significant protection against forced entry and storm damage."
    ],
    benefits: [
      "Hold shattered glass in place during impacts",
      "Deter break-ins and forced entry attempts",
      "Protect against storm and debris damage",
      "Virtually invisible once professionally installed"
    ]
  },
  {
    icon: Blinds,
    title: "Custom Window Shades and Roller Shades",
    slug: "motorized-patio-screens",
    paragraphs: [
      "Complete your window treatment solution with custom shades and motorized roller shades from Sunmasters. We offer a wide selection of fabrics, colors, and opacity levels to match any décor while providing excellent light control and privacy for homes and businesses throughout Rockwall and Dallas.",
      "Our motorized shade systems integrate with smart home technology for convenient control from your phone or voice assistant. Enjoy the perfect balance of natural light and privacy with one-touch adjustments."
    ],
    benefits: [
      "Custom sizes and fabrics for any window",
      "Motorized options with smart home integration",
      "Excellent light control and privacy",
      "Professional measurement and installation"
    ]
  },
  {
    icon: Sun,
    title: "Turf Protection Film",
    slug: "residential-tinting",
    paragraphs: [
      "Prevent window reflection damage to your artificial turf and natural landscaping with turf protection film. Low-E windows can concentrate sunlight and create hot spots that melt synthetic grass and damage plants. Our anti-reflective film diffuses these harmful reflections to protect your outdoor investment.",
      "If you've noticed melting or brown spots on your lawn or artificial turf, window reflections are likely the cause. Our turf protection solutions solve this problem while maintaining your window's energy efficiency."
    ],
    benefits: [
      "Prevent artificial turf from melting",
      "Protect natural landscaping from burn spots",
      "Maintain window energy efficiency",
      "Permanent solution for reflection damage"
    ]
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-4">
          Window Tinting & Protection Services
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Sunmasters Window Tinting Rockwall provides comprehensive window film and protection services for homes, businesses, and vehicles across Rockwall, Dallas, and North Texas.
        </p>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-2xl">{service.title}</h3>
                </div>
                
                {service.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <Button asChild className="mt-2">
                  <Link to={`/${service.slug}`}>Learn More About {service.title}</Link>
                </Button>
              </div>
              
              <div className={`bg-card border border-border rounded-lg p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h4 className="font-heading font-bold text-foreground text-lg mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;