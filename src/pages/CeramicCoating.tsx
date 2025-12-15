import { Helmet } from "react-helmet";
import { ArrowRight, Shield, Droplets, Sun, Sparkles, Car, Clock, CheckCircle2, Layers, Gem, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ceramicImg from "@/assets/service-ceramic.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Superior Paint Protection",
    description: "Creates a hard, sacrificial layer that shields your paint from scratches, swirl marks, bird droppings, tree sap, and environmental contaminants.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic Properties",
    description: "Water beads up and rolls off effortlessly, taking dirt and grime with it. Your car stays cleaner longer between washes.",
  },
  {
    icon: Sun,
    title: "UV Ray Protection",
    description: "Blocks harmful UV rays that cause oxidation, fading, and premature aging of your vehicle's paint and clear coat.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Gloss & Depth",
    description: "Amplifies your paint's natural shine with a deep, mirror-like finish that turns heads wherever you go.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Protection",
    description: "Professional-grade ceramic coatings last 2-7+ years depending on the package, far outlasting traditional wax or sealants.",
  },
  {
    icon: Zap,
    title: "Chemical Resistance",
    description: "Resists acidic contaminants like bug splatter, bird droppings, and acid rain that can etch unprotected paint.",
  },
];

const coatingPackages = [
  {
    name: "Essential Protection",
    duration: "2-3 Years",
    description: "Perfect entry-level ceramic protection for daily drivers who want lasting shine and easy maintenance.",
    features: [
      "Single-layer ceramic coating",
      "9H hardness rating",
      "Hydrophobic water beading",
      "UV protection",
      "Enhanced gloss finish",
      "Paint decontamination",
      "Single-stage polish",
    ],
    ideal: "Daily drivers, lease vehicles, budget-conscious owners",
  },
  {
    name: "Premium Protection",
    duration: "5+ Years",
    description: "Our most popular package offering exceptional durability and a stunning finish for enthusiasts who demand more.",
    features: [
      "Multi-layer ceramic coating",
      "9H+ hardness rating",
      "Extreme hydrophobic properties",
      "Enhanced UV protection",
      "Deep gloss enhancement",
      "Full paint correction",
      "Wheel face coating",
      "Glass coating (front windshield)",
    ],
    ideal: "Enthusiasts, weekend cars, newer vehicles",
    popular: true,
  },
  {
    name: "Ultimate Protection",
    duration: "7+ Years",
    description: "The pinnacle of automotive protection. Multiple ceramic layers combined with comprehensive coverage for maximum defense.",
    features: [
      "Premium multi-layer system",
      "10H hardness rating",
      "Self-healing top coat",
      "Maximum UV protection",
      "Intense gloss & depth",
      "Multi-stage paint correction",
      "Full wheel & caliper coating",
      "All glass surfaces coated",
      "Plastic & trim restoration",
      "Interior leather/vinyl coating",
    ],
    ideal: "Luxury vehicles, exotics, show cars, collectors",
  },
];

const protectsAgainst = [
  "Bird droppings & bug splatter",
  "Tree sap & pollen",
  "Road salt & de-icers",
  "Industrial fallout",
  "UV oxidation & fading",
  "Light scratches & swirl marks",
  "Water spots & mineral deposits",
  "Acid rain damage",
  "Tar & road grime",
  "Chemical stains",
];

const processSteps = [
  {
    step: "1",
    title: "Thorough Wash & Decontamination",
    description: "We start with a comprehensive wash, clay bar treatment, and iron decontamination to remove all bonded surface contaminants.",
  },
  {
    step: "2",
    title: "Paint Correction",
    description: "Using professional machine polishers, we remove swirl marks, scratches, and imperfections to restore your paint's clarity.",
  },
  {
    step: "3",
    title: "Surface Preparation",
    description: "Panel wipe and IPA solution ensure the paint is perfectly clean and free of any oils or residues for optimal bonding.",
  },
  {
    step: "4",
    title: "Ceramic Coating Application",
    description: "We meticulously apply the ceramic coating panel by panel, ensuring complete and even coverage across all surfaces.",
  },
  {
    step: "5",
    title: "Curing & Quality Inspection",
    description: "The coating cures under controlled conditions. We perform a final inspection under specialized lighting to ensure perfection.",
  },
];

const vehicleTypes = [
  "Sedans & Coupes",
  "SUVs & Crossovers", 
  "Trucks & Pickups",
  "Luxury Vehicles",
  "Sports Cars & Exotics",
  "Tesla & Electric Vehicles",
  "Classic & Collector Cars",
  "Motorcycles",
];

const stats = [
  { value: "9H+", label: "Hardness rating" },
  { value: "7+", label: "Years of protection" },
  { value: "100%", label: "Hydrophobic" },
  { value: "99%", label: "UV rays blocked" },
];

const CeramicCoating = () => {
  return (
    <>
      <Helmet>
        <title>Ceramic Coating Dallas | Professional Auto Ceramic Coating | Sunmasters</title>
        <meta
          name="description"
          content="Professional ceramic coating in Dallas-Fort Worth. 9H hardness, hydrophobic protection, stunning gloss. Protect your vehicle's paint for years. Free estimates available."
        />
        <meta name="keywords" content="ceramic coating Dallas, ceramic coating near me, car ceramic coating, paint protection, hydrophobic coating, 9H ceramic coating, auto detailing Dallas, paint correction" />
        <link rel="canonical" href="https://sunmastersdfw.com/ceramic-coating" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Professional Ceramic Coating
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Ceramic Coating: The Ultimate Shield for Your Vehicle's Paint
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Transform your vehicle with a brilliant, long-lasting ceramic coating that protects 
                against the elements while delivering a stunning, hydrophobic finish. Our professional 
                ceramic coatings provide years of protection with minimal maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
                  asChild
                >
                  <a href="/#contact">
                    Get Free Estimate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
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
                src={ceramicImg}
                alt="Professional ceramic coating application on vehicle in Dallas"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">7+ Years</p>
                <p className="text-sm">Protection</p>
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

      {/* What is Ceramic Coating */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                The Science
              </span>
              <h2 className="section-title text-foreground mt-2">
                What is Ceramic Coating?
              </h2>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                Ceramic coating is a liquid polymer applied to your vehicle's exterior that 
                chemically bonds with the factory paint, creating a permanent or semi-permanent 
                protective layer. Unlike traditional wax or sealants that sit on top of the paint 
                and wash away, ceramic coatings form a <strong>covalent bond</strong> with your 
                clear coat at the molecular level.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                The coating uses <strong>nanotechnology</strong>—silica dioxide (SiO₂) nanoparticles 
                that fill in microscopic pores and imperfections in your paint, creating an incredibly 
                smooth, hard surface. This results in the signature "hydrophobic" effect where water 
                beads up and rolls off, taking dirt and contaminants with it.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Molecular Bond</h3>
                  <p className="text-muted-foreground text-sm">Chemically bonds to paint—doesn't wash or wear off like wax</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gem className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">9H Hardness</h3>
                  <p className="text-muted-foreground text-sm">Pencil scale hardness rating provides scratch resistance</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Self-Cleaning</h3>
                  <p className="text-muted-foreground text-sm">Hydrophobic surface repels water, dirt, and grime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Ceramic Coating
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Professional Ceramic Coating
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

      {/* Coating Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Packages
            </span>
            <h2 className="section-title text-foreground mt-2">
              Ceramic Coating Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Choose the level of protection that fits your needs. All packages include 
              professional paint correction to ensure a flawless foundation for your coating.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coatingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-card border rounded-lg p-8 relative ${
                  pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                } hover:border-primary/50 transition-colors`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-foreground text-2xl mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-primary font-medium text-lg">{pkg.duration}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-6 text-center">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-xs">
                    <strong className="text-foreground">Ideal for:</strong> {pkg.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
              asChild
            >
              <a href="/#contact">
                Request Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Protects Against */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Comprehensive Protection
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                What Ceramic Coating Protects Against
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your vehicle faces constant assault from the environment. Texas heat, road 
                debris, industrial fallout, and organic contaminants all attack your paint 
                daily. Ceramic coating creates a shield against these threats, keeping your 
                paint looking showroom-fresh for years.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {protectsAgainst.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Especially Important in Dallas-Fort Worth
              </h3>
              <p className="text-muted-foreground mb-6">
                The DFW metroplex presents unique challenges for your vehicle's paint:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Intense UV Exposure</strong>
                    <p className="text-muted-foreground text-sm">Texas sunshine causes oxidation and fading without protection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Highway Debris</strong>
                    <p className="text-muted-foreground text-sm">Constant construction means more road debris and rock chips</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Hard Water Spots</strong>
                    <p className="text-muted-foreground text-sm">DFW's hard water leaves mineral deposits that etch paint</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Seasonal Pollen</strong>
                    <p className="text-muted-foreground text-sm">Heavy pollen seasons coat vehicles in acidic yellow dust</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="section-title text-foreground mt-2">
              Professional Application Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Proper preparation is the key to a long-lasting ceramic coating. Our meticulous 
              5-step process ensures your vehicle receives the best possible protection.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/30 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 flex-1">
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                All Vehicles Welcome
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                We Coat Every Type of Vehicle
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From brand-new purchases to well-loved daily drivers, we have the expertise 
                to ceramic coat any vehicle. Whether you're protecting an investment or 
                reviving tired paint, we've got you covered.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {vehicleTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Schedule Your Ceramic Coating
              </h3>
              <p className="text-muted-foreground mb-6">
                Ceramic coating typically takes 1-3 days depending on the package and vehicle 
                condition. We'll provide a detailed timeline during your consultation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Free in-person consultation
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Detailed paint inspection
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Custom package recommendations
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  45+ years of experience
                </li>
              </ul>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider"
                asChild
              >
                <a href="/#contact">
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
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
              Ceramic Coating FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does ceramic coating last?
              </h3>
              <p className="text-muted-foreground">
                Professional ceramic coatings last anywhere from 2-7+ years depending on the 
                product quality, number of layers applied, and how well the vehicle is maintained. 
                Our Essential package lasts 2-3 years, Premium lasts 5+ years, and our Ultimate 
                package provides 7+ years of protection.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Is ceramic coating better than wax?
              </h3>
              <p className="text-muted-foreground">
                Yes, ceramic coating significantly outperforms wax in every category. Wax typically 
                lasts 1-3 months and sits on top of the paint. Ceramic coating chemically bonds with 
                your paint, providing years of protection with superior hardness, UV resistance, 
                and hydrophobic properties. It's a one-time investment versus constant reapplication.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can ceramic coating be applied to any vehicle?
              </h3>
              <p className="text-muted-foreground">
                Yes! Ceramic coating can be applied to new and used vehicles alike. For older vehicles, 
                we perform paint correction first to remove scratches and swirl marks—once the coating 
                is applied, it locks in that corrected finish. Even vehicles with minor imperfections 
                can benefit from ceramic coating's protection.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How do I maintain a ceramic coated car?
              </h3>
              <p className="text-muted-foreground">
                Ceramic coated vehicles are much easier to maintain than uncoated ones. Regular hand 
                washes with pH-neutral soap are recommended. Avoid automatic car washes with harsh 
                brushes. The hydrophobic properties mean dirt and grime don't bond as easily, so 
                washes are quicker and require less effort. We provide detailed care instructions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What's the difference between DIY and professional ceramic coating?
              </h3>
              <p className="text-muted-foreground">
                DIY ceramic coatings available at retail stores typically contain lower concentrations 
                of SiO₂ (10-20%) and last 6-12 months. Professional-grade coatings contain 70-90% SiO₂, 
                require specialized application techniques, and last years. Additionally, professional 
                application includes paint correction and proper surface preparation that's critical 
                for long-lasting results.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can I apply ceramic coating over Paint Protection Film (PPF)?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Many clients choose to protect high-impact areas with PPF and then apply 
                ceramic coating over the entire vehicle—including the PPF. This combination provides 
                the ultimate protection: PPF handles rock chips and major impacts, while ceramic coating 
                adds hydrophobic properties, enhanced gloss, and protection from chemical contaminants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Showroom Shine That Lasts?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Protect your investment with professional ceramic coating from Sunmasters. 
            Contact us today for your free consultation and quote. Serving Dallas-Fort Worth 
            with 45+ years of automotive protection experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-heading uppercase tracking-wider"
              asChild
            >
              <a href="/#contact">Get Free Estimate</a>
            </Button>
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

export default CeramicCoating;
