import { Helmet } from "react-helmet";
import { ArrowRight, Shield, Sparkles, Sun, Droplets, Clock, Award, CheckCircle2, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import RelatedServices from "@/components/RelatedServices";


const benefits = [
  {
    icon: Shield,
    title: "Rock Chip Protection",
    description: "XPEL PPF absorbs the impact of rocks, gravel, and road debris that would otherwise chip and damage your vehicle's paint.",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Technology",
    description: "Minor scratches and swirl marks disappear with heat from the sun or warm water. The film's elastomeric polymers flow back together.",
  },
  {
    icon: Sun,
    title: "UV Ray Protection",
    description: "Blocks harmful ultraviolet rays that cause paint oxidation and fading, keeping your vehicle's color vibrant for years.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic Properties",
    description: "Water, mud, and contaminants bead up and roll off the surface, making your vehicle easier to clean and maintain.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Durability",
    description: "XPEL ULTIMATE PLUS is engineered to last 10+ years without yellowing, cracking, or peeling when properly maintained.",
  },
  {
    icon: Award,
    title: "Preserves Resale Value",
    description: "Maintain your vehicle's original factory paint in pristine condition, significantly increasing resale value.",
  },
];

const coverageOptions = [
  {
    title: "Partial Front",
    description: "Essential protection for high-impact areas",
    includes: ["Partial Hood (24\")", "Partial Fenders", "Full Front Bumper"],
  },
  {
    title: "Full Front",
    description: "Complete front-end coverage for maximum protection",
    includes: ["Full Hood", "Full Fenders", "Full Front Bumper", "Mirrors", "Headlamps"],
  },
  {
    title: "Track Pack",
    description: "Extended coverage for enthusiasts and frequent drivers",
    includes: ["Full Hood", "Full Fenders", "Full Front Bumper & A-Pillars", "Mirrors & Headlamps", "Partial Roof & Rocker Panels"],
  },
  {
    title: "Complete Wrap",
    description: "Total coverage of all painted surfaces",
    includes: ["Hood, Roof & Trunk", "All Fenders & Bumpers", "All Pillars & Mirrors", "Headlamps & Spoilers", "Rocker Panels & Door Edges"],
  },
];

const xpelProducts = [
  {
    name: "XPEL ULTIMATE PLUS™",
    description: "The industry-leading clear paint protection film with self-healing technology. Crystal clear finish that's virtually invisible.",
    features: ["Self-healing clear coat", "10-year warranty", "Non-yellowing formula", "Edge seal technology"],
  },
  {
    name: "XPEL STEALTH™",
    description: "Transform any gloss paint to a stunning satin/matte finish while providing the same protection as ULTIMATE PLUS.",
    features: ["Satin matte finish", "Self-healing technology", "Transforms gloss to matte", "10-year warranty"],
  },
];

const PaintProtection = () => {
  return (
    <>
      <Helmet>
        <title>Paint Protection Film Dallas | XPEL PPF Installation | Sunmasters</title>
        <meta
          name="description"
          content="Professional XPEL paint protection film installation in Dallas-Fort Worth. Self-healing PPF protects against rock chips, scratches & UV damage. 10-year warranty. Free estimates."
        />
        <link rel="canonical" href="https://sunmasterstintandshades.com/paint-protection" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                XPEL Certified Installer
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Paint Protection Film: Invisible Armor for Your Vehicle
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Protect your vehicle's paint from rock chips, scratches, bug acids, and UV damage 
                with XPEL Paint Protection Film. As a certified XPEL installer, we provide 
                precision-cut, computer-designed patterns for a perfect fit on every vehicle.
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
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full"
              >
                <source src="/videos/ppf-bg.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">10 Year</p>
                <p className="text-sm">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PPF */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              The Technology
            </span>
            <h2 className="section-title text-foreground mt-2">
              What is Paint Protection Film?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                Paint Protection Film (PPF), also known as "clear bra," is a virtually invisible 
                urethane film applied to your vehicle's painted surfaces. Originally developed 
                by the military to protect helicopter rotor blades, this technology has been 
                refined for automotive use to provide the ultimate defense against everyday hazards.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">8 mil Thick</h3>
                  <p className="text-muted-foreground text-sm">Substantial thickness absorbs impacts while remaining invisible</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Self-Healing</h3>
                  <p className="text-muted-foreground text-sm">Scratches disappear with heat exposure</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Precision Cut</h3>
                  <p className="text-muted-foreground text-sm">Computer-designed patterns for perfect fitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XPEL Products */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Premium Products
            </span>
            <h2 className="section-title text-foreground mt-2">
              XPEL Paint Protection Films
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We exclusively install XPEL products—the industry leader in paint protection technology. 
              Each product is backed by XPEL's comprehensive warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {xpelProducts.map((product) => (
              <div
                key={product.name}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-foreground text-2xl mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Choose PPF
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Paint Protection Film
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

      {/* Coverage Options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Protection Packages
            </span>
            <h2 className="section-title text-foreground mt-2">
              Coverage Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              From essential front-end protection to complete vehicle coverage, 
              we offer packages tailored to your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageOptions.map((option) => (
              <div
                key={option.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What PPF Protects Against */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Complete Protection
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                What Does PPF Protect Against?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your vehicle faces countless hazards every day. XPEL Paint Protection Film 
                creates an invisible barrier against:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Rock chips & road debris",
                  "Bug acids & bird droppings",
                  "Tree sap & pollen",
                  "Minor scratches & scuffs",
                  "UV rays & oxidation",
                  "Salt & chemical damage",
                  "Water spots & staining",
                  "Paint transfer from objects",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Ready to Protect Your Investment?
              </h3>
              <p className="text-muted-foreground mb-6">
                As certified XPEL installers, we use precision computer-cut patterns and 
                professional-grade installation techniques to ensure flawless results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Free vehicle inspection & quote
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  XPEL certified installation
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  10-year manufacturer warranty
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  45+ years of industry experience
                </li>
              </ul>
              <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Schedule Your Free Estimate
              </ContactLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Paint Protection Film FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does PPF installation take?
              </h3>
              <p className="text-muted-foreground">
                Installation time varies based on coverage. A partial front can be completed in 
                2-4 hours, while a full vehicle wrap typically takes 2-3 days to ensure 
                perfect alignment and adhesion.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will PPF damage my paint when removed?
              </h3>
              <p className="text-muted-foreground">
                No! When professionally removed, XPEL PPF leaves no residue or damage to 
                factory paint. In fact, your paint will be in the same condition as the day 
                the film was applied—protected from years of wear.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How does self-healing work?
              </h3>
              <p className="text-muted-foreground">
                XPEL's elastomeric polymer technology allows the film's clear coat to "flow" 
                back together when heated. Minor scratches and swirl marks disappear with 
                exposure to sunlight, warm water, or a heat gun.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can PPF be applied to any vehicle?
              </h3>
              <p className="text-muted-foreground">
                Yes! XPEL has patterns for virtually every make and model, including exotic 
                cars, trucks, SUVs, and motorcycles. Custom patterns can be created for 
                vehicles not in the database.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How do I care for PPF after installation?
              </h3>
              <p className="text-muted-foreground">
                PPF is low maintenance! Wash normally with pH-neutral car soap. Avoid 
                automatic car washes with harsh brushes. The film can be waxed and detailed 
                just like regular paint. We recommend a ceramic coating on top for added 
                protection and easier cleaning.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What's the difference between ULTIMATE PLUS and STEALTH?
              </h3>
              <p className="text-muted-foreground">
                ULTIMATE PLUS provides a crystal-clear, glossy finish that's virtually 
                invisible on your vehicle. STEALTH transforms any gloss paint into a 
                satin/matte finish while providing the same level of protection. Both 
                feature self-healing technology and carry a 10-year warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Protect Your Vehicle with XPEL PPF
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for the first rock chip to damage your paint. Contact Sunmasters today 
            for a free consultation and quote. Serving Dallas-Fort Worth with 45+ years of 
            window film and paint protection expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink variant="secondary" className="font-heading uppercase tracking-wider">
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

      <RelatedServices 
        currentService="/paint-protection" 
        relatedSlugs={["/ceramic-coating", "/automotive-tinting"]} 
      />

      <Footer />
    </>
  );
};

export default PaintProtection;
