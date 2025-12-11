import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <div className="bg-secondary/90 backdrop-blur-sm p-8 md:p-12 rounded-sm">
            <h1 className="hero-title text-foreground mb-4 animate-fadeIn text-4xl md:text-6xl">
              Sunmasters of Dallas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Serving Dallas, Texas, and the surrounding area. Contact us today for a FREE consultation and learn how we can help you.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
                asChild
              >
                <a href="#estimate">Request a Free Estimate</a>
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider"
                asChild
              >
                <a href="#team">Our Team</a>
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider"
                asChild
              >
                <a href="#areas">Areas Served</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Temperature Display */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <div className="bg-red-600 text-white px-6 py-4 rounded-sm text-center">
          <p className="text-sm font-heading uppercase">Before</p>
          <p className="text-3xl font-bold font-heading">82°</p>
        </div>
        <div className="bg-green-600 text-white px-6 py-4 rounded-sm text-center">
          <p className="text-sm font-heading uppercase">After</p>
          <p className="text-3xl font-bold font-heading">72°</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
