import { Button } from "@/components/ui/button";
import automotiveImg from "@/assets/service-automotive.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import ppfImg from "@/assets/service-ppf.jpg";
import ceramicImg from "@/assets/service-ceramic.jpg";
import securityImg from "@/assets/service-security.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: heroBg, alt: "Team at work" },
  { src: automotiveImg, alt: "Automotive tinting" },
  { src: commercialImg, alt: "Commercial installation" },
  { src: residentialImg, alt: "Residential project" },
  { src: ppfImg, alt: "Paint protection film" },
  { src: ceramicImg, alt: "Ceramic coating" },
  { src: securityImg, alt: "Security film" },
  { src: automotiveImg, alt: "Window tinting closeup" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Check Out How We Work!
          </h2>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
            asChild
          >
            <a href="#contact">Free Quote!</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
