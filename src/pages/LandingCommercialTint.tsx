import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Thermometer, Shield, Sun, DollarSign, Award, ArrowRight, Building2, Users, TrendingDown, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import commercialImg from "@/assets/rockwall-commercial-window-tinting.jpg";
import logo from "@/assets/logo.png";

const LandingCommercialTint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Window Tinting DFW | Cut Cooling Costs 35% | Sunmasters</title>
        <meta name="description" content="Commercial window tinting for DFW businesses. Reduce cooling costs by 25-35%, improve employee comfort, and protect your building. Free assessment. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/commercial-tinting-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Free Commercial Assessments
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={commercialImg} alt="Commercial window tinting Dallas Fort Worth" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Free Commercial Assessment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Cut Your Building's Cooling Costs by 35%
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              Commercial Window Film — ROI in 3-4 Years
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Offices, storefronts, restaurants, and warehouses across DFW trust Sunmasters. 45+ years of commercial experience. Minimal disruption to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
                <a href="#estimate">
                  Get Free Assessment
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
                <span className="text-sm">15+ Year Film Lifespan</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm">After-Hours Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Your Windows Are Your Biggest Energy Leak
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Windows account for up to 40% of a commercial building's cooling load. In Texas, that's thousands of dollars wasted every year.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-destructive/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-destructive mb-4 font-heading">Without Window Film:</h3>
              <ul className="space-y-3">
                {[
                  "Cooling costs eating into your bottom line",
                  "Hot spots making employees uncomfortable",
                  "Glare on computer screens reducing productivity",
                  "UV damage fading merchandise, furniture, and flooring",
                  "Street-level visibility inviting break-ins",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-primary/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">With Commercial Window Film:</h3>
              <ul className="space-y-3">
                {[
                  "Reduce cooling costs by 25-35%",
                  "Consistent, comfortable temperatures throughout",
                  "Eliminate glare — happier, more productive employees",
                  "99% UV protection for your interior investments",
                  "Enhanced security with safety film options",
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

      {/* ROI Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-10 font-heading">
            The Business Case for Window Film
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { stat: "25-35%", label: "Lower Cooling Costs" },
              { stat: "99%", label: "UV Rays Blocked" },
              { stat: "15+ yrs", label: "Film Lifespan" },
              { stat: "3-4 yrs", label: "Typical ROI" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{item.stat}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 mt-10 max-w-2xl mx-auto">
            <h3 className="text-primary-foreground font-bold text-center mb-4 font-heading">Sample ROI: 10,000 sq ft Office Building</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-primary-foreground/80">Current annual cooling cost:</div>
              <div className="text-primary-foreground font-bold text-right">$15,000</div>
              <div className="text-primary-foreground/80">Estimated savings (30%):</div>
              <div className="text-primary-foreground font-bold text-right">$4,500/year</div>
              <div className="text-primary-foreground/80">Window film investment:</div>
              <div className="text-primary-foreground font-bold text-right">$12,000–$18,000</div>
              <div className="text-primary-foreground/80 border-t border-primary-foreground/20 pt-2">Payback period:</div>
              <div className="text-primary-foreground font-bold text-right border-t border-primary-foreground/20 pt-2">3-4 years</div>
              <div className="text-primary-foreground/80">Savings over film lifespan:</div>
              <div className="text-primary-foreground font-bold text-right">$50,000+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            We Serve Every Type of Business
          </h2>
          <p className="text-center text-muted-foreground mb-12">From single storefronts to multi-story office towers</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Building2, title: "Office Buildings", description: "Reduce HVAC costs & improve tenant comfort" },
              { icon: DollarSign, title: "Retail & Storefronts", description: "Protect merchandise & control glare" },
              { icon: Users, title: "Restaurants & Hotels", description: "Create a comfortable guest experience" },
              { icon: Shield, title: "Schools & Churches", description: "Safety film + energy savings" },
              { icon: Lock, title: "Medical Offices", description: "Privacy film + UV protection" },
              { icon: Zap, title: "Warehouses", description: "Reduce heat in large spaces" },
              { icon: TrendingDown, title: "Banks & Financial", description: "Security film + professional appearance" },
              { icon: Sun, title: "Gyms & Studios", description: "Heat control for active spaces" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-foreground font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Options */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            Commercial Film Solutions
          </h2>
          <p className="text-center text-muted-foreground mb-12">Every solution includes professional installation and manufacturer warranty</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Thermometer,
                name: "Solar Control Film",
                description: "The most popular commercial solution. Blocks up to 85% of solar heat, reducing HVAC strain and creating even temperatures throughout your building.",
                bestFor: "Offices, retail spaces, restaurants",
                highlight: false,
              },
              {
                icon: Shield,
                name: "Security + Solar Film",
                description: "Dual-purpose protection. Combines heat rejection with 4-14 mil safety film that holds glass together during impacts, storms, or break-in attempts.",
                bestFor: "Ground floor, schools, banks, storefronts",
                highlight: true,
              },
              {
                icon: Sun,
                name: "Decorative & Branding Film",
                description: "Custom frosted, etched, or branded films for privacy and aesthetics. Add your logo, create private conference rooms, or enhance your building's appearance.",
                bestFor: "Conference rooms, lobbies, storefronts",
                highlight: false,
              },
            ].map((film, i) => (
              <div key={i} className={`rounded-lg p-8 ${film.highlight ? 'bg-primary/10 border-2 border-primary' : 'bg-card border border-border'}`}>
                {film.highlight && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <film.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground font-heading mb-2">{film.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{film.description}</p>
                <p className="text-xs text-primary font-medium">Best for: {film.bestFor}</p>
                <Button className={`w-full mt-6 font-heading uppercase tracking-wider ${film.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-card border border-primary text-primary hover:bg-primary/10'}`} asChild>
                  <a href="#estimate">Get Quote</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Trusted by DFW Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "We tinted our entire office building — 3 floors of windows. Our summer energy bills dropped by almost $4,000. The team worked after hours so there was zero disruption to our staff.",
                name: "Robert H.",
                location: "Richardson, TX",
                business: "Law Firm — 15,000 sq ft",
              },
              {
                quote: "Our west-facing storefront was driving customers away in the afternoon because it was so hot. Since the tinting, foot traffic is up and our electric bill is way down. Best business investment this year.",
                name: "Maria G.",
                location: "Rockwall, TX",
                business: "Retail Store",
              },
              {
                quote: "Sunmasters installed security film on all our ground-floor windows after a break-in. Now we have peace of mind plus the heat rejection is a huge bonus. Very professional team.",
                name: "James P.",
                location: "Dallas, TX",
                business: "Medical Office",
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
                  <p className="text-muted-foreground text-xs">{review.location} — {review.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sunmasters */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Why DFW Businesses Choose Sunmasters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "After-Hours Installation", description: "We work evenings and weekends so your business doesn't lose a minute of productivity." },
              { title: "45+ Years Commercial Experience", description: "From single storefronts to multi-story towers, we've done it all since 1979." },
              { title: "Minimal Disruption Guarantee", description: "Our crew is clean, quiet, and efficient. Your employees and customers won't be disturbed." },
              { title: "Custom Solutions", description: "We assess your building's specific needs — sun exposure, window types, energy goals — and recommend the perfect film." },
              { title: "Manufacturer Warranties", description: "All commercial films include long-term manufacturer warranties. We stand behind every installation." },
              { title: "Free Energy Assessment", description: "We calculate your projected savings before you commit. No pressure, just data." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-foreground font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
              { q: "How much will commercial window tinting save my business?", a: "Most DFW businesses see 25-35% reduction in cooling costs. For a 10,000 sq ft office, that's typically $3,000-$5,000 per year in savings. We provide a free energy assessment with projected ROI before you commit." },
              { q: "Will installation disrupt my business?", a: "No. We schedule installations around your operations — evenings, weekends, or in phases. Most businesses don't experience any downtime. Our crew works clean and quiet." },
              { q: "How long does commercial window film last?", a: "Commercial-grade window film lasts 15-20+ years with proper installation. All our films come with manufacturer warranties, and many outlast the warranty period significantly." },
              { q: "Can you tint high-rise or multi-story buildings?", a: "Absolutely. We have extensive experience with multi-story commercial buildings across DFW. We handle everything from ground-floor storefronts to high-rise office towers." },
              { q: "Will the film change how my building looks?", a: "Modern commercial films are virtually invisible from inside and give a clean, professional appearance from outside. We bring samples so you can see exactly how each option looks on your windows before committing." },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-foreground font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Ready to Reduce Your Operating Costs?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get a free commercial assessment with projected energy savings. No obligation, just data to help you make the right decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
              <a href="#estimate">
                Get Free Assessment
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

export default LandingCommercialTint;
