import { ArrowRight } from "lucide-react";
import automotiveImg from "@/assets/service-automotive.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import ppfImg from "@/assets/service-ppf.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";
import securityImg from "@/assets/service-security.jpg";
import smartfilmImg from "@/assets/service-smartfilm.jpg";

interface Service {
  title: string;
  description: string;
  image: string;
  video?: string;
  link?: string;
}

const services: Service[] = [
  {
    title: "Automotive Tinting",
    description: "Fast, reliable tinting for cars, trucks, and SUVs. UV protection, heat reduction, and enhanced privacy.",
    image: automotiveImg,
    video: "/videos/automotive-bg.mp4",
  },
  {
    title: "Residential Tinting",
    description: "Custom window film solutions for homes. Improve energy efficiency and protect your family from UV rays.",
    image: residentialImg,
    video: "/videos/residential-bg.mp4",
    link: "/residential-tinting",
  },
  {
    title: "Commercial Tinting",
    description: "Large-scale window solutions for businesses, offices, and commercial properties.",
    image: commercialImg,
    video: "/videos/commercial-bg.mp4",
  },
  {
    title: "Paint Protection Film",
    description: "Protect your vehicle's paint from rock chips, scratches, and road debris with PPF.",
    image: ppfImg,
    link: "/paint-protection",
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting paint protection with a brilliant, hydrophobic finish for your vehicle.",
    image: ceramicImg,
  },
  {
    title: "Security Film",
    description: "Strengthen windows against break-ins, storms, and accidents with safety film.",
    image: securityImg,
  },
  {
    title: "Smart Film",
    description: "Switchable privacy glass that transitions from clear to opaque with the flip of a switch.",
    image: smartfilmImg,
    video: "/videos/smartfilm-bg.mp4",
    link: "/smart-film",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-4">
          Complete Window Tinting Solutions for Texas Properties
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          From automotive to commercial and residential, we handle all your window tinting and protection needs across the Dallas-Fort Worth metropolitan area.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link || "/#estimate"}
              className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {service.video ? (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="hidden"
                    />
                  </>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
