import { Helmet } from "react-helmet";
import { Phone, CheckCircle2, Star, Thermometer, Shield, Sun, DollarSign, Award, ArrowRight, Home, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import residentialImg from "@/assets/rockwall-home-window-tinting.jpeg";
import logo from "@/assets/logo.png";

const LandingHomeTint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Home Window Tinting DFW | Cut Energy Bills 30% | Sunmasters</title>
        <meta name="description" content="Residential window tinting in Dallas-Fort Worth. Cut energy bills by 30%, block 99% UV rays, and protect your home. Free in-home estimates. Call (469) 757-4325." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/home-tinting-special" />
      </Helmet>

      {/* Sticky CTA Bar */}
      <div className="sticky top-0 z-50 bg-primary py-3 px-4 text-center">
        <a href="tel:+14697574325" className="text-primary-foreground font-heading font-bold text-sm md:text-base tracking-wider">
          CALL NOW: (469) 757-4325 — Free In-Home Estimates
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={residentialImg} alt="Home window tinting Dallas Fort Worth" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Sunmasters Window Tinting" className="h-20 mx-auto mb-6" />

            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Free In-Home Estimate</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-heading">
              Cut Your Energy Bills by 30%
            </h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-6">
              Professional Home Window Tinting — Pays for Itself
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Block 99% of UV rays, reduce heat by up to 85%, and protect your family and furniture. Serving DFW homeowners since 1979.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
                <a href="#estimate">
                  Get Free Estimate
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
                <span className="text-sm">15-20 Year Lifespan</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-sm">Free In-Home Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 font-heading">
            Your Windows Are Costing You Money
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Windows account for up to 40% of your home's cooling load. In Texas heat, that adds up fast.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Without Tint */}
            <div className="bg-card border border-destructive/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-destructive mb-4 font-heading">Without Window Film:</h3>
              <ul className="space-y-3">
                {[
                  "Energy bills $250-$400/month in summer",
                  "Hot spots and uneven temperatures room to room",
                  "UV rays fading your furniture, floors, and art",
                  "Blinding glare on TVs and computer screens",
                  "No daytime privacy from neighbors",
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
              <h3 className="text-xl font-bold text-primary mb-4 font-heading">With Sunmasters Window Film:</h3>
              <ul className="space-y-3">
                {[
                  "Save $50-$120/month on energy bills",
                  "Even, comfortable temperatures in every room",
                  "99% UV protection for your family & belongings",
                  "Work and watch TV without harsh glare",
                  "Daytime privacy while keeping your view",
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

      {/* ROI Calculator */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-10 font-heading">
            The Numbers Don't Lie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { stat: "30%", label: "Lower Energy Bills" },
              { stat: "99%", label: "UV Rays Blocked" },
              { stat: "15°F", label: "Cooler Near Windows" },
              { stat: "2-4 yrs", label: "Typical Payback" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{item.stat}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-6 mt-10 max-w-2xl mx-auto">
            <h3 className="text-primary-foreground font-bold text-center mb-4 font-heading">Average DFW Home Savings</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-primary-foreground/80">Avg. summer energy bill:</div>
              <div className="text-primary-foreground font-bold text-right">$300/month</div>
              <div className="text-primary-foreground/80">Savings with window film:</div>
              <div className="text-primary-foreground font-bold text-right">$90/month</div>
              <div className="text-primary-foreground/80">Annual savings:</div>
              <div className="text-primary-foreground font-bold text-right">$1,080/year</div>
              <div className="text-primary-foreground/80 border-t border-primary-foreground/20 pt-2">Typical payback period:</div>
              <div className="text-primary-foreground font-bold text-right border-t border-primary-foreground/20 pt-2">2-3 years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 font-heading">
            Window Film Options for Your Home
          </h2>
          <p className="text-center text-muted-foreground mb-12">Every option includes professional installation and manufacturer warranty</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Thermometer,
                name: "Solar Control Film",
                description: "The most popular choice for DFW homes. Blocks up to 85% of heat while maintaining your view and natural light.",
                bestFor: "Living rooms, bedrooms, sunrooms",
                highlight: false,
              },
              {
                icon: Sun,
                name: "Ceramic Window Film",
                description: "Premium nano-ceramic technology. Maximum heat rejection with no signal interference. Crystal clear clarity.",
                bestFor: "Home offices, media rooms, master bedrooms",
                highlight: true,
              },
              {
                icon: Shield,
                name: "Security + Solar Film",
                description: "Combines heat rejection with 4-14 mil safety film. Holds glass together if broken for added home protection.",
                bestFor: "Entry points, ground floor windows, glass doors",
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            DFW Homeowners Love the Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Our living room used to be unbearable after 2pm. Now it's the most comfortable room in the house. Our July electric bill dropped $85.",
                name: "Jennifer S.",
                location: "Rockwall, TX",
              },
              {
                quote: "We were about to replace our west-facing windows for $12,000. Window film solved the heat problem for a fraction of the cost. Wish we'd done it sooner.",
                name: "Mark & Lisa T.",
                location: "Plano, TX",
              },
              {
                quote: "My hardwood floors were fading badly near the windows. Since installing the film, they look brand new and the house stays so much cooler.",
                name: "Amanda K.",
                location: "Frisco, TX",
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
                  <p className="text-muted-foreground text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Estimate", description: "We assess your windows, discuss your goals, and provide a no-pressure quote." },
              { step: "2", title: "Choose Your Film", description: "Pick the perfect film type based on your needs, budget, and preferences." },
              { step: "3", title: "Professional Install", description: "Our certified team installs your film in 4-6 hours for a typical home." },
              { step: "4", title: "Enjoy the Savings", description: "Start saving on energy bills immediately while enjoying a more comfortable home." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold font-heading text-xl">{item.step}</span>
                </div>
                <h3 className="text-foreground font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "How dark will my windows look?", a: "Window film comes in many shades — from virtually invisible to moderate tint. Most homeowners choose films that are barely noticeable from inside but effectively block heat and UV rays. We bring samples to your home so you can see exactly how each option looks." },
              { q: "Will it damage my windows?", a: "No. Professional-grade window film is safe for all window types including double-pane and Low-E glass. Our installers are trained to match the right film to your window type." },
              { q: "How long does residential window film last?", a: "Quality window film lasts 15-20+ years with proper care. All our films come with manufacturer warranties for peace of mind." },
              { q: "How long does installation take?", a: "A typical home with 10-15 windows takes 4-6 hours. We work clean and respect your home — you won't even know we were there." },
              { q: "Will I really save money on energy bills?", a: "Yes. Our DFW customers typically see 20-30% savings on cooling costs. Window film reduces the heat entering through glass so your AC runs less, especially on south and west-facing windows." },
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Ready to Make Your Home More Comfortable?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get a free, no-obligation in-home estimate. See exactly how much you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-7" asChild>
              <a href="#estimate">
                Get Free Estimate
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

export default LandingHomeTint;
