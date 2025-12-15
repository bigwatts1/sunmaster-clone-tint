import { useState } from "react";
import { Menu, X, Phone, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const servicePages = [
  { label: "Automotive Tinting", href: "/automotive-tinting" },
  { label: "Residential Tinting", href: "/residential-tinting" },
  { label: "Commercial Tinting", href: "/commercial-tinting" },
  { label: "Paint Protection Film", href: "/paint-protection" },
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Security Film", href: "/security-film" },
  { label: "Smart Film", href: "/smart-film" },
  { label: "Motorized Patio Screens", href: "/motorized-patio-screens" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true, subLinks: servicePages },
  { label: "Locations", href: "/#areas" },
  { label: "About Us", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & CTA Button */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-12 md:h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground text-lg leading-tight">Sunmasters</p>
              <p className="text-muted-foreground text-xs">Window Tinting</p>
            </div>
          </Link>
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
            <div key={link.label} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className="nav-link text-foreground hover:text-primary flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                  </a>
                  {desktopServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl py-2 z-50">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-background transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="nav-link text-foreground hover:text-primary flex items-center gap-1"
                >
                  {link.label === "Locations" && <MapPin className="w-4 h-4" />}
                  {link.label}
                </a>
              )}
            </div>
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
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="nav-link text-foreground hover:text-primary py-2 w-full text-left flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/30 ml-2">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            className="text-muted-foreground hover:text-primary py-2 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="nav-link text-foreground hover:text-primary py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider w-full mt-2"
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
