import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/rockwall-window-tinting-hero.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center"
    >
      {/* Background Video with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Video overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          // @ts-ignore - webkit prefix for Safari compatibility
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroBg}
          onError={(e) => {
            // Hide video if it fails to load, fallback image will show
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source 
            src="https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//64AE3775-E4F5-4A33-B85C-F0A60F3AD2A7.mov" 
            type="video/quicktime" 
          />
          <source 
            src="https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//64AE3775-E4F5-4A33-B85C-F0A60F3AD2A7.mov" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground text-sm font-medium">Trusted by Thousands of Customers</span>
            </div>

            {/* Main Heading - SEO Optimized H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">Window Tinting Rockwall TX</span>
              <br />
              <span className="text-primary">& Dallas Window Film Installation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-foreground font-medium">
              Professional Residential, Commercial & Automotive Window Tinting
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Sunmasters Window Tinting Rockwall delivers expert window film installation for homes, businesses, and vehicles across Rockwall, Dallas, and North Texas. With over 45 years of experience and certified technicians, we provide manufacturer-backed film options with lifetime warranties.
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
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                alt="Sunmasters Window Tinting Rockwall - Professional auto home and commercial tinting in Dallas TX" 
                className="w-64 md:w-80 h-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Experience Box */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-8 py-6 text-center">
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl font-bold text-primary font-heading">45+</span>
                <div className="text-left">
                  <p className="text-foreground font-bold text-lg">Years Experience</p>
                  <p className="text-muted-foreground text-sm">Serving Rockwall & Dallas</p>
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
