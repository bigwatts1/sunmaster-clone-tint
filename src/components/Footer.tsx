import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Professional window tinting and surface solutions for automotive, residential,
              and commercial properties. Serving Dallas and the surrounding area.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 uppercase">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Window Films
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Window Coverings
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Surface Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Automotive Tinting
                </a>
              </li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 uppercase">
              Get to Know Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Areas Served
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 uppercase">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:555-123-4567"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@sunmasters.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@sunmasters.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Dallas, Texas</span>
              </div>
            </div>
            <Button
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider w-full"
              asChild
            >
              <a href="#estimate">Request a Free Estimate</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sunmasters Window Tinting. Est. 1979. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
