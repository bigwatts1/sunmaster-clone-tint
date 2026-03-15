import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Shield, Droplets, Sun, Award, ArrowRight, Sparkles, Clock, Gem, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import ceramicImg from "@/assets/rockwall-ceramic-coating.jpg";
import logo from "@/assets/logo.png";

const LandingCeramicCoating = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ceramic Coating DFW | Professional Application | Sunmasters</title>
        <meta name="description" content="Professional ceramic coating in Dallas-Fort Worth. Permanent hydrophobic protection. UV resistance. Brilliant gloss. 5-7+ year durability. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/ceramic-coating-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Professional Ceramic Coating
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ceramicImg} alt="Professional ceramic coating Dallas Fort Worth" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Professional Grade Only</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Make Your Car Look Wet. Permanently.
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              Ceramic Coating — The Last Wax You'll Ever Need
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Professional-grade nano-ceramic coating bonds to your paint at a molecular level. Insane gloss. Hydrophobic surface. UV protection. 5-7+ years of effortless shine.
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

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">45+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm">Hydrophobic Finish</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gem className="w-5 h-5 text-primary" />
                <span className="text-sm">Showroom Gloss</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Stop Wasting Time and Money on Wax
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Traditional wax lasts weeks. Ceramic coating lasts years. It's not even close.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-destructive/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-destructive mb-4 font-heading">Wax & Sealants:</h3>
              <ul className="space-y-3">
                {[
                  "Lasts 2-4 weeks before it wears off",
                  "Needs constant reapplication",
                  "Water spots and bird droppings still damage paint",
                  "Dulls over time with each wash",
                  "No real UV or chemical protection",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-primary/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">Professional Ceramic Coating:</h3>
              <ul className="space-y-3">
                {[
                  "Lasts 5-7+ years with one application",
                  "Zero maintenance beyond normal washing",
                  "Water, dirt, and contaminants slide right off",
                  "Gets glossier with every wash",
                  "UV protection prevents paint oxidation",
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

      {/* Stats */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "9H", label: "Hardness Rating" },
              { stat: "5-7+", label: "Years Protection" },
              { stat: "99%", label: "UV Protection" },
              { stat: "Super", label: "Hydrophobic" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{item.stat}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            Choose Your Protection Package
          </h2>
          <p className="text-center text-muted-foreground mb-12">All packages include paint decontamination, clay bar treatment, and professional application</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Essential Protection",
                duration: "2-3 Years",
                description: "Single-layer ceramic coating. Great for daily drivers who want easy maintenance and solid protection without breaking the bank.",
                features: ["1 layer of ceramic coating", "Paint decontamination", "Clay bar treatment", "Hydrophobic finish", "2-3 year durability"],
                highlight: false,
              },
              {
                name: "Premium Protection",
                duration: "5+ Years",
                description: "Multi-layer ceramic coating for maximum gloss and durability. Our most popular package for car enthusiasts who want the best value.",
                features: ["2 layers of ceramic coating", "Full paint correction", "Clay bar treatment", "Extreme hydrophobic finish", "5+ year durability"],
                highlight: true,
              },
              {
                name: "Ultimate Protection",
                duration: "7+ Years",
                description: "The pinnacle of ceramic protection. Multi-layer coating with full paint correction for a finish that looks better than factory new.",
                features: ["3+ layers of ceramic coating", "Multi-stage paint correction", "Trim & wheel coating included", "Maximum gloss & depth", "7+ year durability"],
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
                <p className="text-primary font-bold mb-2">{tier.duration}</p>
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

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Our 5-Step Professional Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Wash & Decon", description: "Deep clean to remove all surface contaminants" },
              { step: "2", title: "Clay Bar", description: "Remove embedded particles for a glass-smooth surface" },
              { step: "3", title: "Paint Correction", description: "Remove swirls, scratches, and imperfections" },
              { step: "4", title: "Coating", description: "Apply nano-ceramic coating panel by panel" },
              { step: "5", title: "Cure & Inspect", description: "IR-assisted cure and final quality inspection" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold font-heading text-xl">{item.step}</span>
                </div>
                <h3 className="text-foreground font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Results Speak for Themselves
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "My 3-year-old black car looks better than the day I bought it. Water just beads up and rolls off. I haven't waxed once since getting the ceramic coating. Game changer.",
                name: "Kevin R.",
                location: "McKinney, TX",
                vehicle: "Audi Q7",
              },
              {
                quote: "I was skeptical about ceramic coating vs regular wax. After 2 years, my car still looks freshly detailed after every rain. The gloss is insane. Should have done this day one.",
                name: "Nicole P.",
                location: "Rockwall, TX",
                vehicle: "Lexus RX",
              },
              {
                quote: "Got the Ultimate package with full paint correction and ceramic coating. The before/after difference was jaw-dropping. My wife thought I bought a new car. Sunmasters is legit.",
                name: "Marcus J.",
                location: "Dallas, TX",
                vehicle: "Ford Mustang GT",
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

      {/* DIY vs Pro */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Why Professional Beats DIY
          </h2>
          <div className="space-y-4">
            {[
              { pro: "Controlled environment prevents dust contamination", diy: "Garage dust ruins the finish" },
              { pro: "Multi-stage paint correction before coating", diy: "Coating over scratches locks them in" },
              { pro: "Professional-grade coatings not sold to public", diy: "Consumer-grade coatings last 6-12 months" },
              { pro: "Even, precise application — no high spots", diy: "High spots create hazy, uneven appearance" },
              { pro: "Warranty-backed protection for 5-7+ years", diy: "No warranty, no recourse if it fails" },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 bg-card border border-primary/30 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item.pro}</span>
                </div>
                <div className="flex items-start gap-2 bg-card border border-destructive/30 rounded-lg p-4">
                  <span className="text-destructive mt-0.5">✕</span>
                  <span className="text-muted-foreground text-sm">{item.diy}</span>
                </div>
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
              { q: "How long does ceramic coating application take?", a: "A professional ceramic coating typically takes 1-3 days depending on the package. This includes wash, decontamination, paint correction, coating application, and curing time. We never rush the process." },
              { q: "Is ceramic coating worth it?", a: "Absolutely. When you factor in the cost of regular detailing, waxing, and potential paint damage over 5-7 years, ceramic coating is actually cheaper — and your car looks better the entire time." },
              { q: "Do I still need to wash my car?", a: "Yes, but it's much easier. Dirt and grime don't bond to the surface, so a simple hand wash keeps your car looking freshly detailed. Many owners find they wash less often because the car stays cleaner longer." },
              { q: "Can ceramic coating be applied to any vehicle?", a: "Yes — new and used vehicles, any color, any make. For used vehicles, we perform paint correction first to remove imperfections before the coating is applied." },
              { q: "What's the difference between ceramic coating and PPF?", a: "Ceramic coating provides chemical protection, UV resistance, and gloss but doesn't prevent rock chips. PPF is a physical film that stops impact damage. For ultimate protection, many clients combine both." },
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

export default LandingCeramicCoating;
