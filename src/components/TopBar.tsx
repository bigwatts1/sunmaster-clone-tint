import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm">
      <a 
        href="tel:555-123-4567" 
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="font-semibold">Call: (555) 123-4567</span>
      </a>
      <span className="text-muted-foreground hidden md:block">
        Professional Window Tinting for Auto, Home & Commercial
      </span>
    </div>
  );
};

export default TopBar;
