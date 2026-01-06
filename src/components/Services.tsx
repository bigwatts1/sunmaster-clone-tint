import { ArrowRight } from "lucide-react";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import automotiveImg from "@/assets/rockwall-automotive-window-tinting.jpg";
import commercialImg from "@/assets/rockwall-commercial-window-tinting.jpg";
import residentialImg from "@/assets/rockwall-residential-window-tinting.jpg";
import ppfImg from "@/assets/rockwall-paint-protection-film.jpg";
import ceramicImg from "@/assets/rockwall-ceramic-coating.jpg";
import securityImg from "@/assets/rockwall-school-security-film.jpg";
import smartfilmImg from "@/assets/rockwall-smart-film-installation.jpg";

interface Service {
  title: string;
  description: string;
  image: string;
  video?: string;
  link?: string;
}

const services: Service[] = [
  {
    title: "Automotive Window Tinting Rockwall TX",
    description: "Fast, reliable tinting for cars, trucks, and SUVs in Rockwall. UV protection, heat reduction, and enhanced privacy.",
    image: automotiveImg,
    video: "/videos/automotive-bg.mp4",
    link: "/automotive-tinting",
  },
  {
    title: "Residential Window Tinting Rockwall TX",
    description: "Custom window film solutions for Rockwall homes. Improve energy efficiency and protect your family from UV rays.",
    image: residentialImg,
    video: "/videos/residential-bg.mp4",
    link: "/residential-tinting",
  },
  {
    title: "Commercial Window Tinting Rockwall TX",
    description: "Large-scale window solutions for Rockwall businesses, offices, and commercial properties.",
    image: commercialImg,
    video: "/videos/commercial-bg.mp4",
    link: "/commercial-tinting",
  },
  {
    title: "Smart Film Rockwall TX",
    description: "Switchable privacy glass that transitions from clear to opaque with the flip of a switch.",
    image: smartfilmImg,
    video: "/videos/smartfilm-bg.mp4",
    link: "/smart-film",
  },
  {
    title: "Paint Protection Film Rockwall TX",
    description: "Protect your vehicle's paint from rock chips, scratches, and road debris with PPF in Rockwall.",
    image: ppfImg,
    video: "/videos/ppf-homepage.mov",
    link: "/paint-protection",
  },
  {
    title: "Ceramic Coating Rockwall TX",
    description: "Long-lasting paint protection with a brilliant, hydrophobic finish for your vehicle in Rockwall.",
    image: ceramicImg,
    video: "/videos/ceramic-bg.mov",
    link: "/ceramic-coating",
  },
  {
    title: "Security Film Rockwall TX",
    description: "Strengthen windows against break-ins, storms, and accidents with safety film in Rockwall.",
    image: securityImg,
    link: "/security-film",
  },
  {
    title: "Motorized Patio Screens Rockwall TX",
    description: "Transform your outdoor living space in Rockwall with motorized retractable screens for patios and pergolas.",
    image: residentialImg,
    video: "https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//copy_DF98BC66-AF50-462F-AE4A-29E0ECEA82E5.mov",
    link: "/motorized-patio-screens",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [ref, isVisible] = useLazyLoad<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={service.link || "/#estimate"}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        {isVisible && service.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            poster={service.image}
          >
            <source src={service.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={250}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="p-6">
        <h2 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h2>
        <p className="text-muted-foreground text-sm mb-4">
          {service.description}
        </p>
        <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Get {service.title} Quote
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </a>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Window Tinting Services Rockwall TX</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-4">
          Professional Window Tinting Rockwall TX
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6">
          Sunmasters is Rockwall's premier window tinting company. From automotive to commercial and residential window film, we handle all your tinting needs in Rockwall TX and the Dallas-Fort Worth area.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="text-lg font-heading font-semibold text-foreground bg-secondary px-4 py-2 rounded-lg">Commercial Window Tinting Rockwall TX</span>
          <span className="text-lg font-heading font-semibold text-foreground bg-secondary px-4 py-2 rounded-lg">Automotive Window Tinting Rockwall TX</span>
          <span className="text-lg font-heading font-semibold text-foreground bg-secondary px-4 py-2 rounded-lg">Residential Window Tinting Rockwall TX</span>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
