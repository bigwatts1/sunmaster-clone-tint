import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Shield, Droplets, Sun, Award, ArrowRight, Car, Sparkles, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import ppfImg from "@/assets/rockwall-paint-protection-film.jpg";
import logo from "@/assets/logo.png";

const LandingPPF = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Paint Protection Film DFW | XPEL PPF | Sunmasters</title>
        <meta name="description" content="XPEL paint protection film in Dallas-Fort Worth. Self-healing technology. Protect your car from rock chips, scratches, and road debris. Lifetime warranty. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/ppf-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Certified XPEL Installers
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ppfImg} alt="XPEL paint protection film installation DFW" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Certified XPEL Installer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Your Paint Deserves Armor
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              XPEL Paint Protection Film — Self-Healing. Invisible. Permanent.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Rock chips, road debris, bug acid, and bird droppings don't stand a chance. XPEL ULTIMATE PLUS PPF heals itself and keeps your paint flawless for 10+ years.
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
                <span className="text-sm">Certified XPEL Installer</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm">Self-Healing Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Texas Roads Are Brutal on Your Paint
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Every mile on DFW highways puts your paint at risk. One rock chip can cost hundreds to fix — or tank your resale value.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-destructive/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-destructive mb-4 font-heading">Without PPF:</h3>
              <ul className="space-y-3">
                {[
                  "Rock chips on your hood and bumper within months",
                  "Bug acid and bird droppings etching your clear coat",
                  "Swirl marks from every car wash",
                  "Paint fading from Texas UV exposure",
                  "Thousands lost in resale value",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-primary/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">With XPEL PPF:</h3>
              <ul className="space-y-3">
                {[
                  "Invisible barrier absorbs rock chip impacts",
                  "Self-healing — minor scratches disappear with heat",
                  "Hydrophobic surface repels water, dirt, and contaminants",
                  "UV protection prevents paint oxidation and fading",
                  "Preserves resale value and showroom appearance",
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
              { stat: "10+ yrs", label: "Protection Life" },
              { stat: "Self", label: "Healing Film" },
              { stat: "99%", label: "UV Protection" },
              { stat: "Invisible", label: "To The Eye" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{item.stat}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            Choose Your Coverage
          </h2>
          <p className="text-center text-muted-foreground mb-12">From high-impact zones to full vehicle wraps</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Partial Front",
                description: "Protects the most vulnerable areas — partial hood, fenders, mirrors, and bumper. Ideal entry-level protection for daily drivers.",
                coverage: ["Partial hood (24\")", "Front bumper", "Side mirrors", "Door edges"],
                highlight: false,
              },
              {
                name: "Full Front",
                description: "Complete front-end coverage. The most popular package for DFW drivers who want real protection without wrapping the whole car.",
                coverage: ["Full hood", "Full front bumper", "Full fenders", "Side mirrors", "Headlights"],
                highlight: true,
              },
              {
                name: "Full Vehicle Wrap",
                description: "Total protection for every painted surface. The ultimate choice for luxury, exotic, and high-value vehicles.",
                coverage: ["Every painted panel", "Full hood & bumpers", "Doors & quarter panels", "Rocker panels", "A-pillars"],
                highlight: false,
              },
            ].map((pkg, i) => (
              <div key={i} className={`rounded-lg p-8 ${pkg.highlight ? 'bg-primary/10 border-2 border-primary' : 'bg-card border border-border'}`}>
                {pkg.highlight && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground font-heading mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.coverage.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-heading uppercase tracking-wider ${pkg.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-card border border-primary text-primary hover:bg-primary/10'}`} asChild>
                  <a href="#estimate">Get Quote</a>
                </Button>
              </div>
            ))}
          </div>

          {/* XPEL STEALTH callout */}
          <div className="max-w-3xl mx-auto mt-10 bg-card border border-border rounded-lg p-6 text-center">
            <h3 className="text-foreground font-bold font-heading text-lg mb-2">Want a Matte/Satin Finish?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              XPEL STEALTH™ gives any gloss paint a factory-matte look while providing the same self-healing protection. Transform your car's appearance and protect it at the same time.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading uppercase tracking-wider" asChild>
              <a href="#estimate">Ask About XPEL STEALTH</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            DFW Car Owners Trust Sunmasters
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Had the full front done on my new BMW. Hit a rock on 635 the next week — checked the film and it absorbed the hit perfectly. Zero damage to the paint. Worth every penny.",
                name: "Chris T.",
                location: "Plano, TX",
                vehicle: "BMW M4",
              },
              {
                quote: "I got XPEL STEALTH on my black Porsche 911. The matte finish is absolutely stunning and I don't have to worry about rock chips anymore. Sunmasters nailed the install.",
                name: "Jason W.",
                location: "Southlake, TX",
                vehicle: "Porsche 911",
              },
              {
                quote: "Third vehicle I've brought to Sunmasters for PPF. They're the only ones I trust. Clean install every time, no edges lifting, no orange peel. True professionals.",
                name: "Amanda K.",
                location: "Frisco, TX",
                vehicle: "Mercedes GLE",
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

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "What is paint protection film?", a: "PPF is a clear, thermoplastic urethane film applied to your car's paint. It acts as an invisible shield against rock chips, scratches, bug acid, bird droppings, and UV damage. XPEL ULTIMATE PLUS is the industry gold standard." },
              { q: "How does self-healing work?", a: "XPEL's elastomeric polymer technology allows minor scratches and swirl marks to disappear on their own when exposed to heat — whether from the sun, warm water, or a heat gun. The surface literally repairs itself." },
              { q: "Will I be able to see the film?", a: "No. XPEL ULTIMATE PLUS is virtually invisible once installed. It maintains your paint's original gloss and color. Most people can't tell it's there even up close." },
              { q: "How long does PPF last?", a: "XPEL ULTIMATE PLUS is rated for 10+ years and comes with a 10-year manufacturer warranty against yellowing, cracking, peeling, and staining." },
              { q: "Can PPF be removed without damaging paint?", a: "Yes. Professional-grade PPF like XPEL can be safely removed without damaging your factory paint. This makes it ideal for leased vehicles as well." },
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

export default LandingPPF;
