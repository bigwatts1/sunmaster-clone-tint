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
import commercialStoneBuilding from "@/assets/gallery/commercial-stone-building.jpeg";
import commercialStorefront from "@/assets/gallery/commercial-storefront.jpeg";
import commercialInteriorWindows from "@/assets/gallery/commercial-interior-windows.jpeg";
import commercialCornerstone from "@/assets/gallery/commercial-cornerstone.jpeg";
import commercialDowntownStorefront from "@/assets/gallery/commercial-downtown-storefront.jpeg";
import commercialOfficeTower from "@/assets/gallery/commercial-office-tower.jpeg";
import commercialLobbyWindows from "@/assets/gallery/commercial-lobby-windows.jpeg";
import commercialOfficeBuilding from "@/assets/gallery/commercial-office-building.jpeg";
import commercialWarehouseTint from "@/assets/gallery/commercial-warehouse-tint.jpeg";
import commercialCrossland from "@/assets/gallery/commercial-crossland.jpeg";
import commercialResidenceInn from "@/assets/gallery/commercial-residence-inn.jpeg";
import commercialStorefrontConstruction from "@/assets/gallery/commercial-storefront-construction.jpeg";
import commercialAirviewBuilding from "@/assets/gallery/commercial-airview-building.jpeg";
import commercialCapitalTitle from "@/assets/gallery/commercial-capital-title.jpeg";
import commercialPoliceStation from "@/assets/gallery/commercial-police-station.jpeg";
import commercialSanMartinBakery from "@/assets/gallery/commercial-san-martin-bakery.jpeg";
import commercialWhiteBrickOffice from "@/assets/gallery/commercial-white-brick-office.png";
import commercialCurvedGlassBuilding from "@/assets/gallery/commercial-curved-glass-building.jpeg";
import commercialCrosslandWide from "@/assets/gallery/commercial-crossland-wide.jpeg";
import commercialModernGreyOffice from "@/assets/gallery/commercial-modern-grey-office.jpeg";
import commercialOrthodontics from "@/assets/gallery/commercial-orthodontics.jpeg";
import commercialFrostedGlassPartition from "@/assets/gallery/commercial-frosted-glass-partition.jpeg";

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
    images: [
      { src: commercialStoneBuilding, alt: "Commercial stone building with professional window tinting in Rockwall" },
      { src: commercialStorefront, alt: "Commercial storefront with tinted windows and awnings in DFW" },
      { src: commercialInteriorWindows, alt: "Commercial interior with floor-to-ceiling tinted windows" },
      { src: commercialCornerstone, alt: "Cornerstone commercial building with window tinting installation" },
      { src: commercialDowntownStorefront, alt: "Downtown commercial storefront with professional window tinting" },
      { src: commercialOfficeTower, alt: "Commercial office tower with tinted windows in DFW" },
      { src: commercialLobbyWindows, alt: "Commercial lobby with floor-to-ceiling tinted windows" },
      { src: commercialOfficeBuilding, alt: "Commercial office building with window tinting installation" },
      { src: commercialWarehouseTint, alt: "Commercial warehouse with frosted window tinting" },
      { src: commercialCrossland, alt: "Crossland commercial building with window tinting at sunset" },
      { src: commercialResidenceInn, alt: "Residence Inn hotel with professional window tinting" },
      { src: commercialStorefrontConstruction, alt: "Commercial storefront under construction with new window film" },
      { src: commercialAirviewBuilding, alt: "Airview AC modern white brick building with tinted windows" },
      { src: commercialCapitalTitle, alt: "Capital Title office storefront in stone building with tinted windows" },
      { src: commercialPoliceStation, alt: "Rowlett Police & Courts building with professional window tinting" },
      { src: commercialSanMartinBakery, alt: "San Martin Bakery building with large tinted glass windows" },
      { src: commercialWhiteBrickOffice, alt: "Modern white brick office building with XPEL Vision window film" },
      { src: commercialCurvedGlassBuilding, alt: "Commercial building featuring curved glass windows with tint" },
      { src: commercialCrosslandWide, alt: "Wide view of Crossland commercial building with window tinting" },
      { src: commercialModernGreyOffice, alt: "Modern grey office complex with reflective window film" },
      { src: commercialOrthodontics, alt: "Crossley Orthodontics stone building with tinted storefront windows" },
      { src: commercialFrostedGlassPartition, alt: "Commercial interior frosted glass partition wall with black metal framing and privacy film" },
    ],
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
              width={1200}
              height={800}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
