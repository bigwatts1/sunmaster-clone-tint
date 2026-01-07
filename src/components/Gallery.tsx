import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Car, Home, Building2, Zap, Sun, X } from "lucide-react";
import automotiveHyundaiTint from "@/assets/gallery/automotive-hyundai-tint.jpeg";

const galleryCategories = [
  {
    id: "automotive",
    title: "Automotive Tinting",
    icon: Car,
    images: [
      { src: automotiveHyundaiTint, alt: "Red Hyundai sedan with professional window tinting at Sun Masters" },
    ],
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
                  <button
                    key={index}
                    className="gallery-item cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                      width={300}
                      height={224}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
