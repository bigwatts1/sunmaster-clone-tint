import { useState } from "react";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Smart Film", href: "/smart-film" },
  { 
    label: "Locations", 
    href: "/#areas",
    hasDropdown: true 
  },
  { label: "About Us", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & CTA Button */}
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-12 md:h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground text-lg leading-tight">Sunmasters</p>
              <p className="text-muted-foreground text-xs">Window Tinting</p>
            </div>
          </a>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-xs md:text-sm"
            asChild
          >
            <a href="#estimate">Get Free Estimate</a>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-foreground hover:text-primary flex items-center gap-1"
            >
              {link.label === "Locations" && <MapPin className="w-4 h-4" />}
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </div>

        {/* Right Side - Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+14697574325"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">(469) 757-4325</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-secondary border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:469-757-4325"
              className="flex items-center gap-2 text-foreground hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>(469) 757-4325</span>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider w-full"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href="#estimate">Get Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
