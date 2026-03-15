import { Phone, MapPin, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm border-b border-border">
      <div className="flex items-center gap-4">
        <a 
          href="tel:469-757-4325" 
          className="flex items-center gap-2 hover:text-primary transition-colors font-semibold"
        >
          <Phone className="w-4 h-4" />
          <span>(469) 757-4325</span>
        </a>
        <Link 
          to="/gallery"
          className="flex items-center gap-2 hover:text-primary transition-colors font-semibold"
        >
          <Camera className="w-4 h-4" />
          <span>Photo Gallery</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <a href="#areas" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <MapPin className="w-4 h-4" />
          <span>Locations</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
