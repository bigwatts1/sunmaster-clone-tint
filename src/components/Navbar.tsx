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

const locationPages = [
  { label: "Dallas", href: "/locations/dallas" },
  { label: "Fort Worth", href: "/locations/fort-worth" },
  { label: "Plano", href: "/locations/plano" },
  { label: "Frisco", href: "/locations/frisco" },
  { label: "McKinney", href: "/locations/mckinney" },
  { label: "Arlington", href: "/locations/arlington" },
  { label: "Irving", href: "/locations/irving" },
  { label: "Garland", href: "/locations/garland" },
  { label: "Grand Prairie", href: "/locations/grand-prairie" },
  { label: "Richardson", href: "/locations/richardson" },
  { label: "Allen", href: "/locations/allen" },
  { label: "Carrollton", href: "/locations/carrollton" },
  { label: "Lewisville", href: "/locations/lewisville" },
  { label: "Denton", href: "/locations/denton" },
  { label: "Flower Mound", href: "/locations/flower-mound" },
  { label: "The Colony", href: "/locations/the-colony" },
  { label: "Little Elm", href: "/locations/little-elm" },
  { label: "Prosper", href: "/locations/prosper" },
  { label: "Mesquite", href: "/locations/mesquite" },
  { label: "Rockwall", href: "/locations/rockwall" },
  { label: "Rowlett", href: "/locations/rowlett" },
  { label: "Wylie", href: "/locations/wylie" },
  { label: "Murphy", href: "/locations/murphy" },
  { label: "Sachse", href: "/locations/sachse" },
  { label: "Coppell", href: "/locations/coppell" },
  { label: "Grapevine", href: "/locations/grapevine" },
  { label: "Southlake", href: "/locations/southlake" },
  { label: "Greenville", href: "/locations/greenville" },
  { label: "Caddo Mills", href: "/locations/caddo-mills" },
  { label: "Commerce", href: "/locations/commerce" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", hasDropdown: true, dropdownType: "services" },
  { label: "Locations", href: "/#areas", hasDropdown: true, dropdownType: "locations" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const getDropdownItems = (type: string) => {
    if (type === "services") return servicePages;
    if (type === "locations") return locationPages;
    return [];
  };

  const toggleDropdown = (type: string) => {
    if (type === "services") {
      setServicesOpen(!servicesOpen);
      setLocationsOpen(false);
    } else if (type === "locations") {
      setLocationsOpen(!locationsOpen);
      setServicesOpen(false);
    }
  };

  const isDropdownOpen = (type: string) => {
    if (type === "services") return servicesOpen;
    if (type === "locations") return locationsOpen;
    return false;
  };

  return (
    <nav className="bg-secondary sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Text */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sunmasters Window Tinting and Shades" className="h-12 md:h-14 w-auto" />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-primary text-lg md:text-xl leading-tight tracking-wide">SUNMASTERS</p>
            <p className="text-foreground text-xs md:text-sm tracking-wide">WINDOW TINTING AND SHADES</p>
          </div>
        </Link>

        {/* Right Side - CTA Button & Menu */}
        <div className="flex items-center gap-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-xs md:text-sm px-4 md:px-8 py-5 md:py-6"
            asChild
          >
            <a href="#estimate">Get Free Estimate</a>
          </Button>
          
          {/* Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-secondary border-t border-border shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.dropdownType!)}
                      className="nav-link text-foreground hover:text-primary py-2 w-full text-left flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        {link.dropdownType === "locations" && <MapPin className="w-4 h-4" />}
                        {link.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen(link.dropdownType!) ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen(link.dropdownType!) && (
                      <div className={`pl-4 flex flex-col gap-1 border-l-2 border-primary/30 ml-2 ${link.dropdownType === "locations" ? "max-h-64 overflow-y-auto" : ""}`}>
                        {getDropdownItems(link.dropdownType!).map((subLink) => (
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
                ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className="nav-link text-foreground hover:text-primary py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
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
            <a 
              href="#estimate"
              className="inline-flex items-center justify-center h-10 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider w-full mt-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
