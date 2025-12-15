import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center"
    >
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground text-sm font-medium">Trusted by 1000+ Customers</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Expert Window</span>
              <br />
              <span className="text-primary">Tinting &</span>
              <br />
              <span className="text-primary">Protection</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Keep your space cool and your energy bills low. We specialize in residential, commercial, and automotive window tinting, paint protection, and ceramic coatings.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider group"
                asChild
              >
                <a href="#estimate">
                  Get Free Estimate
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider"
              >
                <a href="tel:+14697574325" className="flex items-center">
                  Call Now: (469) 757-4325
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Free Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Experience */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <img 
                src={logo} 
                alt="Sunmasters Window Tinting" 
                className="w-64 md:w-80 h-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Experience Box */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-8 py-6 text-center">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-bold text-primary font-heading">45+</span>
                <div className="text-left">
                  <p className="text-foreground font-bold text-lg">Years Experience</p>
                  <p className="text-muted-foreground text-sm">Serving our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
