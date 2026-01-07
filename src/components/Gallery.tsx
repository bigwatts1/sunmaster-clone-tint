import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Car, Home, Building2, Zap, Sun, X } from "lucide-react";
import automotiveHyundaiTint from "@/assets/gallery/automotive-hyundai-tint.jpeg";
import automotiveIneosGrenadier from "@/assets/gallery/automotive-ineos-grenadier.jpeg";
import automotiveTeslaRed from "@/assets/gallery/automotive-tesla-red.jpeg";
import automotiveFordRaptor from "@/assets/gallery/automotive-ford-raptor.jpeg";
import automotivePorsche911 from "@/assets/gallery/automotive-porsche-911.jpeg";
import automotiveGenesisUtv from "@/assets/gallery/automotive-genesis-utv.jpeg";
import automotiveTeslaModel3 from "@/assets/gallery/automotive-tesla-model3.jpeg";
import automotiveChallengerGreen from "@/assets/gallery/automotive-challenger-green.jpeg";
import automotiveCorvetteBlue from "@/assets/gallery/automotive-corvette-blue.jpeg";
import automotiveMercedesWhite from "@/assets/gallery/automotive-mercedes-white.jpeg";
import residentialModernHome from "@/assets/gallery/residential-modern-home.png";
import residentialFloorToCeiling from "@/assets/gallery/residential-floor-to-ceiling.jpeg";
import residentialLuxuryPoolside from "@/assets/gallery/residential-luxury-poolside.jpeg";
import residentialCourtyard from "@/assets/gallery/residential-courtyard.jpeg";
import residentialBrickBackyard from "@/assets/gallery/residential-brick-backyard.jpeg";
import residentialStoneFront from "@/assets/gallery/residential-stone-front.jpeg";
import residentialLuxuryEstate from "@/assets/gallery/residential-luxury-estate.jpeg";
import residentialPoolHome from "@/assets/gallery/residential-pool-home.jpeg";
import residentialFarmhouse from "@/assets/gallery/residential-farmhouse.jpeg";
import residentialWhiteCottage from "@/assets/gallery/residential-white-cottage.jpeg";

const galleryCategories = [
  {
    id: "automotive",
    title: "Automotive Tinting",
    icon: Car,
    images: [
      { src: automotiveHyundaiTint, alt: "Red Hyundai sedan with professional window tinting at Sun Masters" },
      { src: automotiveIneosGrenadier, alt: "Blue INEOS Grenadier SUV with window tinting at Sun Masters" },
      { src: automotiveTeslaRed, alt: "Red Tesla Model 3 with window tinting at Sun Masters" },
      { src: automotiveFordRaptor, alt: "White Ford F-150 Raptor with window tinting" },
      { src: automotivePorsche911, alt: "Silver Porsche 911 Turbo with window tinting at Sun Masters" },
      { src: automotiveGenesisUtv, alt: "White Genesis sedan and UTV with window tinting at Sun Masters" },
      { src: automotiveTeslaModel3, alt: "Red Tesla Model 3 side view with window tinting" },
      { src: automotiveChallengerGreen, alt: "Green Dodge Challenger with window tinting at Sun Masters" },
      { src: automotiveCorvetteBlue, alt: "Blue Chevrolet Corvette C8 with window tinting at Sun Masters" },
      { src: automotiveMercedesWhite, alt: "White Mercedes-Benz C-Class with window tinting at Sun Masters" },
    ],
  },
  {
    id: "residential",
    title: "Residential Tinting",
    icon: Home,
    images: [
      { src: residentialModernHome, alt: "Modern luxury home with professional window tinting in Rockwall" },
      { src: residentialFloorToCeiling, alt: "Floor-to-ceiling windows with tinting overlooking pool area" },
      { src: residentialLuxuryPoolside, alt: "Luxury Mediterranean estate with tinted windows poolside" },
      { src: residentialCourtyard, alt: "Elegant courtyard with tinted arched windows" },
      { src: residentialBrickBackyard, alt: "Brick home backyard view with tinted windows" },
      { src: residentialStoneFront, alt: "Contemporary stone home with tinted windows and landscaping" },
      { src: residentialLuxuryEstate, alt: "Luxury estate with full window tinting installation" },
      { src: residentialPoolHome, alt: "Family home with tinted windows overlooking pool" },
      { src: residentialFarmhouse, alt: "Modern farmhouse with professional window tinting" },
      { src: residentialWhiteCottage, alt: "White cottage with frosted door and tinted windows" },
    ],
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
