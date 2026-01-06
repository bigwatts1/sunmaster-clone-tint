import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.webp";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center"
    >
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window tinting service in Rockwall TX"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-foreground text-sm font-medium">Trusted by Thousands of Customers</span>
            </div>

            {/* Main Heading - Plain H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              #1 Window Tinting Rockwall TX
              <br />
              <span className="text-primary">Auto, Home & Commercial Window Film</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-foreground font-medium">
              Professional Window Tinting in Rockwall TX | Automotive, Residential & Commercial
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Sunmasters is Rockwall TX's trusted window tinting company with 45+ years of experience. We provide expert automotive window tinting, residential window film, and commercial window tinting in Rockwall TX and the Dallas-Fort Worth area. Certified XPEL installers with lifetime warranties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider group"
                asChild
              >
                <a href="#estimate">
                  Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <a
                href="tel:+14697574325"
                className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider text-sm font-medium transition-colors"
              >
                Call (469) 757-4325
              </a>
            </div>
            
            {/* Photo Gallery Button */}
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider text-sm font-medium transition-colors gap-2"
            >
              <Camera className="w-4 h-4" />
              Photo Gallery
            </Link>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">45+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Certified Installers</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo & Experience */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <img 
                src={logo} 
                alt="Sunmasters Window Tinting Rockwall TX - #1 Auto Home and Commercial Window Film in Rockwall Texas" 
                className="w-64 md:w-80 h-auto"
                width={320}
                height={320}
                loading="eager"
              />
            </div>
            
            {/* Experience Box */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-8 py-6 text-center">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-bold text-primary font-heading">45+</span>
                <div className="text-left">
                  <p className="text-foreground font-bold text-lg">Years Experience</p>
                  <p className="text-muted-foreground text-sm">Serving Rockwall TX & Dallas</p>
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
