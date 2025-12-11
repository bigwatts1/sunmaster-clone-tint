import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="relative pl-6">
            <div className="accent-line" />
            <h1 className="hero-title text-foreground mb-4 animate-fadeIn">
              SUN MASTERS
              <br />
              WINDOW TINTING
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Commercial & Residential & Automotive
            </p>
            <p className="text-lg text-primary mb-8 animate-fadeIn font-heading" style={{ animationDelay: "0.3s" }}>
              Est. 1979
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider px-8 py-6 text-lg animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
