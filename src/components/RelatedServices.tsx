import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, Building2, Shield, Sparkles, Sun, ToggleRight, PanelTop } from "lucide-react";

interface RelatedService {
  title: string;
  description: string;
  slug: string;
  icon: React.ElementType;
}

const allServices: RelatedService[] = [
  {
    title: "Automotive Window Tinting",
    description: "XPEL ceramic window film for cars, trucks, and SUVs with up to 98% heat rejection.",
    slug: "/automotive-tinting",
    icon: Car,
  },
  {
    title: "Residential Window Tinting",
    description: "Energy-saving window film for homes that reduces heat, glare, and UV damage.",
    slug: "/residential-tinting",
    icon: Home,
  },
  {
    title: "Commercial Window Tinting",
    description: "Professional window film solutions for offices, storefronts, and commercial buildings.",
    slug: "/commercial-tinting",
    icon: Building2,
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting paint protection with a brilliant, hydrophobic finish for your vehicle.",
    slug: "/ceramic-coating",
    icon: Sparkles,
  },
  {
    title: "Paint Protection Film",
    description: "Protect your vehicle's paint from rock chips, scratches, and road debris with PPF.",
    slug: "/paint-protection",
    icon: Shield,
  },
  {
    title: "Security Window Film",
    description: "Strengthen windows against break-ins, storms, and accidents with safety film.",
    slug: "/security-film",
    icon: Shield,
  },
  {
    title: "Smart Film",
    description: "Switchable privacy glass that transitions from clear to opaque instantly.",
    slug: "/smart-film",
    icon: ToggleRight,
  },
  {
    title: "Motorized Patio Screens",
    description: "Transform your outdoor living space with retractable motorized screens.",
    slug: "/motorized-patio-screens",
    icon: PanelTop,
  },
];

interface RelatedServicesProps {
  currentService: string;
  relatedSlugs?: string[];
}

const RelatedServices = ({ currentService, relatedSlugs }: RelatedServicesProps) => {
  // Filter out current service and get related services
  let relatedServices = allServices.filter(
    (service) => service.slug !== currentService
  );

  // If specific related slugs provided, filter to those
  if (relatedSlugs && relatedSlugs.length > 0) {
    relatedServices = relatedServices.filter((service) =>
      relatedSlugs.includes(service.slug)
    );
  } else {
    // Otherwise take first 3
    relatedServices = relatedServices.slice(0, 3);
  }

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Related Services
          </span>
          <h2 className="section-title text-foreground mt-2">
            Explore Our Other Window Tinting Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              to={service.slug}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn About {service.title.split(" ")[0]} Services
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Need help choosing the right service?{" "}
            <Link to="/#contact" className="text-primary hover:underline font-medium">
              Contact our Rockwall window tinting experts
            </Link>{" "}
            for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
