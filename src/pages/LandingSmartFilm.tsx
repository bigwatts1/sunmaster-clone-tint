import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Eye, Zap, Shield, Clock, Award, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import smartfilmImg from "@/assets/rockwall-smart-film-installation.jpg";
import logo from "@/assets/logo.png";

const LandingSmartFilm = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Smart Film DFW | Instant Privacy Glass | Sunmasters</title>
        <meta name="description" content="Professional smart film installation in Dallas-Fort Worth. Switch glass from clear to frosted instantly. Offices, homes, and storefronts. Free estimates. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/smart-film-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Free Smart Film Consultation
        </a>
      </div>

      {/* Hero Section with Video */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/smartfilm-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Advanced Technology</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Privacy at the Touch of a Button
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              Smart Film — Instant Privacy Glass for Homes & Businesses
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Transform any glass from clear to frosted in milliseconds. No blinds, no curtains — just cutting-edge PDLC technology. Smart home compatible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
                <a href="#estimate">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
                <a href="tel:+14697574325">
                  <Phone className="mr-2 w-5 h-5" />
                  (469) 757-4325
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">45+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Warranty Included</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm">Smart Home Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            How Smart Film Works
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            PDLC liquid crystal technology gives you complete control over your glass.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card border border-primary/30 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-heading">Power ON</h3>
              <p className="text-muted-foreground text-lg">Crystals align — glass is <strong className="text-foreground">clear and transparent</strong></p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-heading">Power OFF</h3>
              <p className="text-muted-foreground text-lg">Crystals scatter — glass is <strong className="text-foreground">frosted and private</strong></p>
            </div>
          </div>

          <p className="text-center text-primary font-bold text-xl">
            Transition happens in less than 100 milliseconds — faster than a blink
          </p>
        </div>
      </section>

      {/* Smart Film Video Demo */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            See Smart Film in Action
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Watch how smart film transforms glass from clear to frosted instantly.
          </p>
          <div className="max-w-3xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="rounded-lg shadow-2xl w-full"
            >
              <source src="/videos/smartfilm-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-heading">
            Why DFW Businesses & Homeowners Choose Smart Film
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Instant Privacy", desc: "Switch from transparent to opaque in milliseconds. Perfect for conference rooms, bathrooms, and private offices." },
              { icon: Zap, title: "Energy Efficient", desc: "Reduce cooling costs by blocking solar heat when frosted. Cut energy consumption by up to 30%." },
              { icon: Shield, title: "99% UV Protection", desc: "Blocks harmful UV rays in both clear and frosted states, protecting furnishings and skin." },
              { icon: Lock, title: "Security Layer", desc: "The film adds shatter resistance to glass, providing an extra layer of break-in protection." },
              { icon: Clock, title: "Smart Home Ready", desc: "Control via remote, wall switch, app, Alexa, or Google Home. Set schedules and scenes." },
              { icon: Award, title: "10+ Year Lifespan", desc: "Rated for over 1 million switching cycles. Install once and enjoy for a decade or more." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Perfect For Any Glass Surface
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Smart film can be retrofitted to existing windows — no need to replace glass.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Office conference rooms",
              "Medical facilities",
              "Residential bathrooms",
              "Retail storefronts",
              "Restaurant private areas",
              "Bank teller windows",
              "Hotel partitions",
              "Residential skylights",
            ].map((app) => (
              <div key={app} className="flex items-center gap-2 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary font-heading">45+</p>
                <p className="text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary font-heading">1M+</p>
                <p className="text-muted-foreground mt-1">Switching Cycles Rated</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mt-1">5-Star Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Upgrade Your Glass?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Free consultation and estimate. We'll assess your space and recommend the perfect smart film solution for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
              <a href="#estimate">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
              <a href="tel:+14697574325">
                <Phone className="mr-2 w-5 h-5" />
                (469) 757-4325
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default LandingSmartFilm;
