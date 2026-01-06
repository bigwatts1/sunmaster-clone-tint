import { Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image/Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Sunmasters Window Tinting and Shades" 
                  className="w-64 h-auto rounded-sm shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-primary italic text-xl mb-2 font-heading">
                We love helping our neighbors stay cool & safe!
              </p>
              <p className="text-primary italic text-lg mb-6">
                I look forward to meeting you.
              </p>
              
              <h2 className="section-title text-foreground mb-4">
                Sunmasters Team
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Office Hours: Monday – Friday: 8AM-6PM
              </p>
              
              <a 
                href="tel:469-757-4325" 
                className="flex items-center gap-2 text-2xl font-heading text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-6 h-6" />
                (469) 757-4325
              </a>

              {/* Certifications */}
              <div className="flex gap-4 mt-6">
                <div className="bg-background p-3 rounded-sm">
                  <p className="text-xs text-muted-foreground font-heading uppercase">Certified Installer</p>
                </div>
                <div className="bg-background p-3 rounded-sm">
                  <p className="text-xs text-muted-foreground font-heading uppercase">Security Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
