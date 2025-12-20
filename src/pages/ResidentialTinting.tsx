import { Helmet } from "react-helmet";
import { ArrowRight, Sun, Thermometer, Shield, Eye, DollarSign, Sofa, Home, Zap, CheckCircle2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import residentialImg from "@/assets/rockwall-home-window-tinting.jpeg";

const benefits = [
  {
    icon: Thermometer,
    title: "Heat Reduction",
    description: "Block up to 85% of solar heat from entering your home. Keep rooms comfortable without overworking your AC system.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Block up to 99% of harmful UV rays that cause skin damage and fade your furniture, flooring, and artwork.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Reduce cooling costs by up to 30% in Texas summers. Window film pays for itself through lower utility bills.",
  },
  {
    icon: Eye,
    title: "Glare Reduction",
    description: "Eliminate harsh glare on TVs, computer screens, and workspaces while maintaining natural light.",
  },
  {
    icon: Shield,
    title: "Added Security",
    description: "Security films hold glass together if broken, deterring intruders and protecting against storm damage.",
  },
  {
    icon: Sofa,
    title: "Furniture Protection",
    description: "Preserve your interior investments. UV rays can fade furniture, hardwood floors, and artwork in just months.",
  },
];

const filmTypes = [
  {
    name: "Solar Control Film",
    description: "The most popular choice for Texas homes. Blocks heat and UV rays while maintaining your view and natural light.",
    bestFor: "Living rooms, bedrooms, sunrooms",
    features: ["Up to 85% heat rejection", "99% UV protection", "Reduces glare", "Various tint levels"],
  },
  {
    name: "Ceramic Window Film",
    description: "Premium nano-ceramic technology provides superior heat rejection without darkening your windows or interfering with electronics.",
    bestFor: "Home offices, media rooms, smart homes",
    features: ["No signal interference", "Crystal clear appearance", "Maximum heat rejection", "Color stable technology"],
  },
  {
    name: "Dual-Reflective Film",
    description: "Reflective exterior for daytime privacy, neutral interior to preserve your view. Perfect balance of privacy and aesthetics.",
    bestFor: "Street-facing windows, ground floor rooms",
    features: ["Daytime privacy", "Non-mirror interior", "Excellent heat control", "Professional appearance"],
  },
  {
    name: "Security Film",
    description: "Thick, tear-resistant film holds glass together when broken. Protects against break-ins, accidents, and severe weather.",
    bestFor: "Entry points, sliding doors, storm-prone areas",
    features: ["4-14 mil thickness", "Impact resistance", "Holds shattered glass", "Deters intruders"],
  },
  {
    name: "Decorative & Privacy Film",
    description: "Frosted, patterned, or custom designs provide 24/7 privacy while adding style to bathrooms, offices, and entryways.",
    bestFor: "Bathrooms, front doors, interior glass",
    features: ["Complete privacy", "Allows natural light", "Custom patterns available", "No adhesive residue"],
  },
  {
    name: "Low-E Window Film",
    description: "Year-round energy savings. Reflects heat back into your home in winter while blocking solar heat in summer.",
    bestFor: "Older windows, energy-conscious homes",
    features: ["Winter heat retention", "Summer heat rejection", "Improves window efficiency", "Reduces condensation"],
  },
];

const applications = [
  "Living rooms & family rooms",
  "Bedrooms & nurseries",
  "Home offices & studios",
  "Sunrooms & conservatories",
  "Kitchens & dining areas",
  "Bathrooms & shower enclosures",
  "Skylights & roof windows",
  "Sliding glass doors & patio doors",
  "Front entry sidelights",
  "Garage door windows",
];

const stats = [
  { value: "30%", label: "Average energy savings on cooling costs" },
  { value: "99%", label: "UV rays blocked by quality window film" },
  { value: "85%", label: "Solar heat rejection with ceramic film" },
  { value: "15°F", label: "Average temperature reduction near windows" },
];

const ResidentialTinting = () => {
  return (
    <>
      <Helmet>
        <title>Residential Window Tinting Dallas | Home Window Film | Sunmasters</title>
        <meta
          name="description"
          content="Professional home window tinting in Dallas-Fort Worth. Reduce energy bills up to 30%, block 99% UV rays, and protect your family and furnishings. Free estimates available."
        />
        <meta name="keywords" content="residential window tinting, home window film, Dallas window tinting, energy saving window film, UV protection film, heat reduction film, privacy window film, security film" />
        <link rel="canonical" href="https://sunmasterstintandshades.com/residential-tinting" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Home Window Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Residential Window Tinting: Comfort, Savings & Protection for Your Home
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Beat the Texas heat and protect your home with professional window tinting. 
                Our residential window films reduce energy costs, block harmful UV rays, 
                and add privacy—all while preserving your view and natural light.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                  Get Free Estimate
                </ContactLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card"
                  asChild
                >
                  <a href="tel:469-757-4325">Call (469) 757-4325</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={residentialImg}
                alt="Residential window tinting installation in Dallas home"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">45+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Texas Homes Need Window Film */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              The Texas Heat Challenge
            </span>
            <h2 className="section-title text-foreground mt-2">
              Why Dallas Homes Need Window Tinting
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                With summer temperatures regularly exceeding 100°F in the Dallas-Fort Worth area, 
                your home's windows become a major source of unwanted heat gain. In fact, 
                <strong> up to 40% of your home's cooling energy is lost through windows</strong>. 
                This forces your HVAC system to work overtime, driving up energy bills and 
                reducing comfort.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Hot Spots</h3>
                  <p className="text-muted-foreground text-sm">Untreated windows create uncomfortable hot zones in rooms</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">High Bills</h3>
                  <p className="text-muted-foreground text-sm">Texas homeowners pay some of the highest summer electric bills</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sofa className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Fading</h3>
                  <p className="text-muted-foreground text-sm">Intense sunlight fades furniture, floors, and artwork quickly</p>
                </div>
              </div>

              <p className="text-muted-foreground text-center mt-8">
                Window tinting addresses all these issues—<strong>at a fraction of the cost of 
                replacing your windows</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Choose Window Film
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Home Window Tinting
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Products
            </span>
            <h2 className="section-title text-foreground mt-2">
              Types of Residential Window Film
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We offer a complete range of window films to meet every need. Our experts 
              will help you choose the right film for each window in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmTypes.map((film) => (
              <div
                key={film.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {film.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{film.description}</p>
                <p className="text-primary text-sm font-medium mb-3">Best for: {film.bestFor}</p>
                <ul className="space-y-1">
                  {film.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Savings Deep Dive */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Save Money
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                How Window Film Reduces Energy Costs
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Window film works by reflecting and absorbing solar energy before it enters 
                your home. This means your air conditioning doesn't have to work as hard to 
                maintain comfortable temperatures.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Reduced AC Runtime</h4>
                    <p className="text-muted-foreground text-sm">Your system cycles less frequently, reducing wear and energy consumption</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Even Temperatures</h4>
                    <p className="text-muted-foreground text-sm">No more hot spots near windows—enjoy consistent comfort throughout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Year-Round Benefits</h4>
                    <p className="text-muted-foreground text-sm">Low-E films also retain heat in winter, providing savings all year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Typical Dallas Home Savings
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Average monthly summer bill</span>
                  <span className="font-bold text-foreground">$250-400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Typical savings with film</span>
                  <span className="font-bold text-primary">20-30%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Monthly savings</span>
                  <span className="font-bold text-primary">$50-120</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground">Typical payback period</span>
                  <span className="font-bold text-primary">2-4 years</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                *Actual savings depend on window size, film type, and current energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Whole-Home Solutions
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Where to Apply Window Film
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Window film can be applied to virtually any glass surface in your home. 
                Our experts will assess each room's needs and recommend the optimal film type.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Schedule Your Free Home Assessment
              </h3>
              <p className="text-muted-foreground mb-6">
                Our window film experts will evaluate your home, measure your windows, 
                and provide personalized recommendations—all at no cost or obligation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Free in-home consultation
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Custom recommendations per room
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Detailed written estimate
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  45+ years of experience
                </li>
              </ul>
              <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Get Your Free Assessment
              </ContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="section-title text-foreground mt-2">
              Professional Installation Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Free in-home assessment of your windows and needs" },
                { step: "2", title: "Selection", desc: "Expert recommendations for the right film for each window" },
                { step: "3", title: "Installation", desc: "Clean, professional installation by certified technicians" },
                { step: "4", title: "Inspection", desc: "Final walkthrough and care instructions for your new film" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Residential Window Tinting FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will window film make my home too dark?
              </h3>
              <p className="text-muted-foreground">
                Not at all! Modern window films come in various light transmission levels, 
                from nearly invisible to moderately tinted. We'll help you choose a film 
                that reduces heat and glare while maintaining the natural light you love. 
                Ceramic films, in particular, offer maximum heat rejection with minimal visible tint.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does residential window film last?
              </h3>
              <p className="text-muted-foreground">
                Quality residential window film typically lasts 15-20+ years when properly 
                installed and maintained. Most films come with manufacturer warranties 
                covering defects, peeling, bubbling, and color change. We use only premium 
                films from trusted manufacturers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will window film void my window warranty?
              </h3>
              <p className="text-muted-foreground">
                Most window manufacturers now accept window film, especially films designed 
                for dual-pane windows. We carry films specifically engineered for all window 
                types and can help you choose options compatible with your warranty.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can window film be applied to double-pane windows?
              </h3>
              <p className="text-muted-foreground">
                Yes! However, it's important to choose the right film. Some films absorb 
                too much heat and can stress the seal in dual-pane windows. We use films 
                specifically rated for insulated glass units (IGUs) to ensure safe, 
                long-lasting performance.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How do I clean windows with film?
              </h3>
              <p className="text-muted-foreground">
                Window film is easy to maintain! Simply clean with a soft cloth and 
                ammonia-free window cleaner. Avoid abrasive pads or harsh chemicals. 
                Most films have a scratch-resistant coating, but gentle cleaning ensures 
                the longest life and best appearance.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does installation take?
              </h3>
              <p className="text-muted-foreground">
                Most residential installations are completed in one day. A typical home 
                with 10-15 windows takes 4-6 hours. Larger projects may require additional 
                time. We work efficiently while ensuring meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make Your Home More Comfortable?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Dallas-Fort Worth homeowners who've discovered the benefits 
            of professional window tinting. Contact Sunmasters today for your free 
            in-home consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink variant="secondary" className="font-heading uppercase tracking-wider" showArrow={false}>
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading uppercase tracking-wider"
              asChild
            >
              <a href="tel:469-757-4325">Call (469) 757-4325</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResidentialTinting;
