import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Sun Masters Window Tinting" className="h-24 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Professional window tinting services for automotive, residential,
              and commercial properties since 1979. Quality you can trust.
            </p>
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
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Main Street, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 uppercase">
              Business Hours
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sun Masters Window Tinting. Est. 1979. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
