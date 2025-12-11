import { Phone, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm border-b border-border">
      <a 
        href="tel:555-123-4567" 
        className="flex items-center gap-2 hover:text-primary transition-colors font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span>(555) 123-4567</span>
      </a>
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
