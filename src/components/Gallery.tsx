import { Button } from "@/components/ui/button";
import { Car, Home, Building2, Zap, Sun } from "lucide-react";

const galleryCategories = [
  {
    id: "automotive",
    title: "Automotive Tinting",
    icon: Car,
    images: [],
  },
  {
    id: "residential",
    title: "Residential Tinting",
    icon: Home,
    images: [],
  },
  {
    id: "commercial",
    title: "Commercial Tinting",
    icon: Building2,
    images: [],
  },
  {
    id: "smart-film",
    title: "Smart Film",
    icon: Zap,
    images: [],
  },
  {
    id: "patio-shades",
    title: "Motorized Patio Shades",
    icon: Sun,
    images: [],
  },
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

        {/* Gallery Categories */}
        <div className="space-y-16">
          {galleryCategories.map((category) => (
            <div key={category.id} id={category.id}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Category Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 md:h-56 object-cover rounded-lg"
                      width={300}
                      height={224}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
