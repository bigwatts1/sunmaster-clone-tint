import logo from "@/assets/logo.webp";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Sunmasters Window Tinting Rockwall" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-4">
              Professional window tinting and protection solutions for automotive, residential,
              and commercial properties. Serving Rockwall, Dallas, and North Texas since 1979.
            </p>
            {/* NAP for SEO */}
            <address className="text-muted-foreground text-sm not-italic">
              <strong className="text-foreground">Sunmasters Window Tinting Rockwall</strong><br />
              4480 E Interstate 30, Ste 200<br />
              Rockwall, TX 75087<br />
              <a href="tel:+14697574325" className="hover:text-primary">(469) 757-4325</a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/automotive-tinting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Automotive Window Tinting
                </a>
              </li>
              <li>
                <a href="/residential-tinting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Residential Window Tinting
                </a>
              </li>
              <li>
                <a href="/commercial-tinting" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Commercial Window Tinting
                </a>
              </li>
              <li>
                <a href="/paint-protection" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Paint Protection Film
                </a>
              </li>
              <li>
                <a href="/ceramic-coating" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="/security-film" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Security Film
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
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Free Estimate
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
                href="tel:+14697574325"
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
                <span>4480 E Interstate 30, Ste 200<br />Rockwall, TX 75087</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sunmasters Window Tinting Rockwall. Est. 1979. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
