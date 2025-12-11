import ServiceCard from "./ServiceCard";
import automotiveImg from "@/assets/service-automotive.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import ppfImg from "@/assets/service-ppf.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";
import securityImg from "@/assets/service-security.jpg";

const services = [
  {
    title: "Automotive Tinting",
    description:
      "We specialize in expert automotive window tinting, providing superior UV protection, heat reduction, and enhanced privacy for your vehicle. Our skilled technicians ensure a flawless, bubble-free installation.",
    image: automotiveImg,
  },
  {
    title: "Commercial Tinting",
    description:
      "Enhance your commercial space with our professional window tinting services. Reduce energy costs, improve comfort, and add a sleek, professional appearance to your office or storefront.",
    image: commercialImg,
  },
  {
    title: "Residential Tinting",
    description:
      "Protect your home and family with our residential window tinting solutions. Enjoy improved energy efficiency, reduced glare, and enhanced privacy while maintaining your home's beautiful views.",
    image: residentialImg,
  },
  {
    title: "Paint Protection Film",
    description:
      "Protect your vehicle's paint from rock chips, scratches, and road debris with our premium paint protection film. Virtually invisible protection that preserves your car's showroom finish.",
    image: ppfImg,
  },
  {
    title: "Ceramic Coating",
    description:
      "Experience the ultimate in paint protection with our ceramic coating services. Achieve a brilliant, long-lasting shine while protecting your vehicle from environmental contaminants.",
    image: ceramicImg,
  },
  {
    title: "Security Film",
    description:
      "Our security film installation provides an extra layer of protection for your windows. Prevent break-ins, hold glass together during impacts, and protect against storms and accidents.",
    image: securityImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From automotive to commercial and residential, we offer comprehensive
            window tinting and protection services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
