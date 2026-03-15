import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Thermometer, Shield, Sun, Clock, Award, ArrowRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import automotiveImg from "@/assets/rockwall-car-window-tinting.jpeg";
import logo from "@/assets/logo.png";

const LandingAutoTint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Auto Window Tinting DFW | $50 Off Today | Sunmasters</title>
        <meta name="description" content="Professional automotive window tinting in Dallas-Fort Worth. XPEL ceramic tint blocks 98% heat. Same-day service. Lifetime warranty. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/auto-tinting-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Same-Day Appointments Available
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={automotiveImg} alt="Professional car window tinting Dallas Fort Worth" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Limited Time Offer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Keep Your Car 25°F Cooler
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              Professional Ceramic Window Tint — Starting at $199
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              XPEL certified installers. 98% heat rejection. Lifetime warranty. Same-day service available for most vehicles.
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
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Texas Heat Is Destroying Your Car
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Without quality window tint, your vehicle suffers every day in the DFW sun.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Without Tint */}
            <div className="bg-card border border-destructive/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-destructive mb-4 font-heading">Without Window Tint:</h3>
              <ul className="space-y-3">
                {[
                  "Interior temps reach 150°F+ in summer",
                  "UV rays fade your seats and dashboard",
                  "AC works overtime, wasting gas",
                  "Painful glare while driving",
                  "Zero privacy for your valuables",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Tint */}
            <div className="bg-card border border-primary/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">With XPEL Ceramic Tint:</h3>
              <ul className="space-y-3">
                {[
                  "Cabin stays up to 25°F cooler",
                  "99% UV protection for you & your interior",
                  "Save money on gas with less AC usage",
                  "Crystal clear visibility, zero glare",
                  "Enhanced privacy & security",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "98%", label: "Heat Rejection" },
              { stat: "99%", label: "UV Protection" },
              { stat: "25°F", label: "Cooler Cabin" },
              { stat: "2-4 hrs", label: "Install Time" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{item.stat}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            What DFW Drivers Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Got my truck done same day I called. The difference is insane — my AC barely runs now. Should have done this years ago.",
                name: "Michael R.",
                location: "Dallas, TX",
                vehicle: "F-150",
              },
              {
                quote: "Sunmasters tinted my Tesla Model 3 and you can't even tell it's there from inside. Crystal clear but blocks all the heat. 10/10.",
                name: "Sarah L.",
                location: "Plano, TX",
                vehicle: "Tesla Model 3",
              },
              {
                quote: "I've had cheap tint before that bubbled in a year. This XPEL ceramic is on another level. Lifetime warranty sealed the deal.",
                name: "David M.",
                location: "Frisco, TX",
                vehicle: "BMW X5",
              },
            ].map((review, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 text-sm leading-relaxed">"{review.quote}"</p>
                <div className="border-t border-border pt-3">
                  <p className="text-foreground font-bold text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.location} — {review.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            Choose Your Protection Level
          </h2>
          <p className="text-center text-muted-foreground mb-12">All packages include lifetime warranty & professional installation</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "XPEL PRIME CS™",
                tagline: "Good",
                description: "Carbon ceramic film with reliable heat rejection. Great entry-level protection.",
                features: ["68% Heat Rejection", "99% UV Protection", "No Signal Interference", "Lifetime Warranty"],
                highlight: false,
              },
              {
                name: "XPEL PRIME XR™",
                tagline: "Better",
                description: "High-performance ceramic film. The perfect balance of performance and value.",
                features: ["88% Heat Rejection", "99% UV Protection", "Crystal Clear Clarity", "Lifetime Warranty"],
                highlight: true,
              },
              {
                name: "XPEL PRIME XR PLUS™",
                tagline: "Best",
                description: "Maximum heat rejection with the clearest film on the market. The ultimate choice.",
                features: ["98% Heat Rejection", "99% UV Protection", "Nano-Ceramic Technology", "Lifetime Warranty"],
                highlight: false,
              },
            ].map((tier, i) => (
              <div key={i} className={`rounded-lg p-8 ${tier.highlight ? 'bg-primary/10 border-2 border-primary' : 'bg-card border border-border'}`}>
                {tier.highlight && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground font-heading">{tier.name}</h3>
                <p className="text-primary font-bold mb-2">{tier.tagline}</p>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-heading uppercase tracking-wider ${tier.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-card border border-primary text-primary hover:bg-primary/10'}`} asChild>
                  <a href="#estimate">Get Quote</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "How long does installation take?", a: "Most vehicles are completed in 2-4 hours. We offer same-day appointments so you can drop off in the morning and pick up the same day." },
              { q: "Is window tinting legal in Texas?", a: "Yes. Texas law requires at least 25% VLT on front windows and allows any darkness on rear windows. We ensure every install is 100% legal." },
              { q: "How long does the tint last?", a: "XPEL ceramic window film comes with a lifetime manufacturer warranty. Unlike cheap dyed films, ceramic tint won't bubble, peel, or turn purple." },
              { q: "Will it interfere with my electronics?", a: "No. XPEL ceramic films are metal-free, so they won't interfere with GPS, cell signal, Bluetooth, or satellite radio." },
              { q: "Can I roll my windows down after installation?", a: "We recommend waiting 3-5 days before rolling windows down to allow the film to fully cure." },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-foreground font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* Minimal Footer */}
      <footer className="bg-card py-8 border-t border-border text-center">
        <img src={logo} alt="Sunmasters" className="h-12 mx-auto mb-3" />
        <p className="text-muted-foreground text-sm">4480 E Interstate 30, Ste 200, Rockwall, TX 75087</p>
        <a href="tel:+14697574325" className="text-primary font-bold text-lg">(469) 757-4325</a>
        <p className="text-muted-foreground text-xs mt-4">© {new Date().getFullYear()} Sunmasters Window Tinting. Est. 1979. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingAutoTint;
