import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Sunmasters Window Tinting and Shades" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Professional window tinting and protection solutions for automotive, residential,
              and commercial properties since 1979.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Automotive Tinting
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Residential Tinting
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Commercial Tinting
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Paint Protection Film
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Smart Film
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Areas Served
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:469-757-4325"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>(469) 757-4325</span>
              </a>
              <a
                href="mailto:aaron@sunmastersdfw.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>aaron@sunmastersdfw.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Serving Dallas, TX & Surrounding Counties</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sunmasters Window Tinting and Shades. Est. 1979. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
