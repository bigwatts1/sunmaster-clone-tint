import { Helmet } from "react-helmet";
import { ArrowRight, Car, Sun, Thermometer, Shield, Eye, Lock, Sparkles, CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactLink from "@/components/ContactLink";
import RelatedServices from "@/components/RelatedServices";
import LocationLinks from "@/components/LocationLinks";
import automotiveImg from "@/assets/rockwall-car-window-tinting.jpeg";
import automotivePricing from "@/assets/automotive-pricing.jpeg";

const benefits = [
  {
    icon: Thermometer,
    title: "Superior Heat Rejection",
    description: "XPEL PRIME XR PLUS blocks up to 98% of infrared heat, keeping your cabin up to 25°F cooler even in Texas summer heat.",
  },
  {
    icon: Sun,
    title: "99% UV Protection",
    description: "Protect yourself and your passengers from harmful UV rays that cause skin damage and accelerate interior fading.",
  },
  {
    icon: Eye,
    title: "Glare Reduction",
    description: "Reduce eye strain and improve visibility by cutting harsh sunlight glare while driving.",
  },
  {
    icon: Shield,
    title: "Interior Protection",
    description: "Prevent cracking, fading, and deterioration of your dashboard, seats, and interior trim.",
  },
  {
    icon: Lock,
    title: "Enhanced Privacy",
    description: "Keep valuables out of sight and enjoy privacy from prying eyes at stoplights and parking lots.",
  },
  {
    icon: Sparkles,
    title: "Sleek Appearance",
    description: "Enhance your vehicle's aesthetics with a clean, uniform look that complements any color or style.",
  },
];

const xpelProducts = [
  {
    name: "XPEL PRIME XR PLUS™",
    tagline: "The Ultimate Ceramic Film",
    description: "The pinnacle of automotive window film technology. Multi-layer nano-ceramic construction delivers maximum heat rejection without signal interference.",
    specs: [
      { label: "Infrared Heat Rejection", value: "Up to 98%" },
      { label: "UV Rejection", value: "99%" },
      { label: "Total Solar Energy Rejected", value: "Up to 88%" },
      { label: "Signal Interference", value: "None" },
    ],
    features: ["Superior heat rejection", "Crystal clear clarity", "No metal layers", "Lifetime warranty"],
  },
  {
    name: "XPEL PRIME XR™",
    tagline: "Performance Ceramic Film",
    description: "High-performance ceramic film that delivers excellent heat rejection at an accessible price point. Perfect balance of performance and value.",
    specs: [
      { label: "Infrared Heat Rejection", value: "Up to 88%" },
      { label: "UV Rejection", value: "99%" },
      { label: "Total Solar Energy Rejected", value: "Up to 67%" },
      { label: "Signal Interference", value: "None" },
    ],
    features: ["Nano-ceramic technology", "Color-stable dyes", "No fading or purpling", "Lifetime warranty"],
  },
  {
    name: "XPEL PRIME CS™",
    tagline: "Carbon Ceramic Film",
    description: "Color-stable carbon film with ceramic technology. Delivers reliable performance and classic appearance at an affordable price.",
    specs: [
      { label: "Infrared Heat Rejection", value: "Up to 68%" },
      { label: "UV Rejection", value: "99%" },
      { label: "Total Solar Energy Rejected", value: "Up to 57%" },
      { label: "Signal Interference", value: "None" },
    ],
    features: ["Carbon construction", "Non-reflective finish", "Budget-friendly", "Lifetime warranty"],
  },
];

const tintLevels = [
  {
    vlt: "70%",
    description: "Nearly clear—maximum heat rejection with minimal appearance change. Popular for windshields.",
    legal: "Legal for windshield (above AS-1 line) and all windows",
  },
  {
    vlt: "50%",
    description: "Light tint that reduces glare and heat while maintaining high visibility. Factory-level appearance.",
    legal: "Legal for all windows in Texas",
  },
  {
    vlt: "35%",
    description: "Medium tint offering good privacy and heat rejection. The most popular choice for front windows.",
    legal: "Legal for front side windows (minimum 25% required)",
  },
  {
    vlt: "20%",
    description: "Dark tint providing excellent privacy and heat rejection. Popular 'limousine' look for rear windows.",
    legal: "Legal for rear side and back windows only",
  },
  {
    vlt: "5%",
    description: "Maximum privacy tint. Extremely dark—difficult to see inside even up close.",
    legal: "Legal for rear side and back windows only",
  },
];

const vehicleTypes = [
  "Sedans & Coupes",
  "SUVs & Crossovers",
  "Trucks & Pickups",
  "Luxury Vehicles",
  "Sports Cars & Exotics",
  "Tesla & Electric Vehicles",
  "Minivans & Family Vehicles",
  "Classic & Collector Cars",
];

const stats = [
  { value: "98%", label: "Infrared heat rejection with XR PLUS" },
  { value: "99%", label: "Harmful UV rays blocked" },
  { value: "25°F", label: "Cooler cabin temperature" },
  { value: "Lifetime", label: "Manufacturer warranty" },
];

const AutomotiveTinting = () => {
  return (
    <>
      <Helmet>
        <title>Automotive Window Tinting Dallas | XPEL Car Tint | Sunmasters</title>
        <meta
          name="description"
          content="Professional XPEL automotive window tinting in Dallas-Fort Worth. Ceramic tint blocks 98% heat & 99% UV rays. Texas legal tint. Lifetime warranty. Free estimates."
        />
        <meta name="keywords" content="automotive window tinting, car window tint Dallas, XPEL window film, ceramic tint, Texas legal tint, heat rejection tint, UV protection, vehicle window tinting" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/automotive-tinting" />
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
                Automotive Window Tinting: Beat the Texas Heat in Style
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Keep your vehicle cool, protect your interior, and enhance your privacy with 
                professional XPEL window tint installation. Our certified technicians use only 
                premium XPEL ceramic films backed by a lifetime warranty.
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
                src={automotiveImg}
                alt="Professional automotive window tinting on vehicle in Dallas"
                className="rounded-lg shadow-2xl w-full"
                width={600}
                height={400}
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">Lifetime</p>
                <p className="text-sm">Warranty</p>
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

      {/* Why XPEL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why XPEL
            </span>
            <h2 className="section-title text-foreground mt-2">
              The Industry Leader in Window Film
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                We exclusively install XPEL window films—the same brand trusted by luxury 
                dealerships, exotic car collectors, and professional detailers worldwide. 
                XPEL's <strong>nano-ceramic technology</strong> outperforms traditional dyed 
                or metallic films in every category:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">No Hot Spots</h3>
                  <p className="text-muted-foreground text-sm">Ceramic particles block infrared heat across the entire spectrum</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">No Interference</h3>
                  <p className="text-muted-foreground text-sm">Zero impact on GPS, cell signals, satellite radio, or toll tags</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">No Fading</h3>
                  <p className="text-muted-foreground text-sm">Color-stable technology won't turn purple or fade over time</p>
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
              Why Tint Your Vehicle
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Automotive Window Tinting
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

      {/* XPEL Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Products
            </span>
            <h2 className="section-title text-foreground mt-2">
              XPEL PRIME Window Film Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Choose from XPEL's complete lineup of ceramic window films. All options provide 
              99% UV protection and carry a lifetime manufacturer warranty.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {xpelProducts.map((product) => (
              <div
                key={product.name}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-foreground text-2xl mb-1">
                  {product.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">{product.tagline}</p>
                <p className="text-muted-foreground text-sm mb-6">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground text-sm">{spec.label}</span>
                      <span className="font-bold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Transparent Pricing
            </span>
            <h2 className="section-title text-foreground mt-2">
              Automotive Tinting Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Clear, upfront pricing for all vehicle types. Choose from our XPEL PRIME film lineup 
              with Good, Better, and Best options to fit your needs and budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src={automotivePricing}
              alt="Automotive window tinting pricing chart - XPEL PRIME CS, PRIME XR, and PRIME XR PLUS options for all vehicle types"
              className="rounded-lg shadow-2xl w-full"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Texas Tint Laws */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Know the Law
            </span>
            <h2 className="section-title text-foreground mt-2">
              Texas Window Tint Laws
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Texas has specific regulations for window tint darkness. We ensure your 
              installation is legal and provide documentation for your records.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                    Texas VLT (Visible Light Transmission) Requirements
                  </h3>
                  <p className="text-muted-foreground">
                    VLT measures the percentage of light that passes through the window. 
                    Lower numbers mean darker tint. Here's what Texas law allows:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-heading font-bold text-foreground mb-3">Sedans & Coupes</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Windshield</span>
                      <span className="text-foreground">25% VLT (above AS-1 line)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Front Side Windows</span>
                      <span className="text-foreground">25% VLT minimum</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Rear Side Windows</span>
                      <span className="text-foreground">Any darkness</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Rear Window</span>
                      <span className="text-foreground">Any darkness</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-heading font-bold text-foreground mb-3">SUVs, Trucks & Vans</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Windshield</span>
                      <span className="text-foreground">25% VLT (above AS-1 line)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Front Side Windows</span>
                      <span className="text-foreground">25% VLT minimum</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Rear Side Windows</span>
                      <span className="text-foreground">Any darkness</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Rear Window</span>
                      <span className="text-foreground">Any darkness</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground text-sm">
                  <strong>Note:</strong> Medical exemptions are available for individuals who require 
                  darker tint for health reasons. We can help you understand the exemption process.
                </p>
              </div>
            </div>

            {/* Tint Levels */}
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">Popular Tint Shades</h3>
            <div className="space-y-4">
              {tintLevels.map((level) => (
                <div key={level.vlt} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center font-heading font-bold text-xl"
                      style={{ 
                        backgroundColor: `rgba(0,0,0,${1 - parseInt(level.vlt) / 100})`,
                        color: parseInt(level.vlt) > 40 ? '#1a1a1a' : '#ffffff'
                      }}
                    >
                      {level.vlt}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{level.description}</p>
                      <p className="text-primary text-sm mt-1">{level.legal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                All Vehicles Welcome
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                We Tint Every Type of Vehicle
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From daily drivers to exotic supercars, our certified technicians have the 
                experience to tint any vehicle. We use computer-cut patterns for precision 
                fitment on every make and model.
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
                Schedule Your Tint Appointment
              </h3>
              <p className="text-muted-foreground mb-6">
                Most vehicles can be completed in 2-4 hours. We'll have you back on the 
                road with a cooler, more comfortable ride the same day.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Free estimate and consultation
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Same-day service available
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  XPEL lifetime warranty
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  45+ years of experience
                </li>
              </ul>
              <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Get Your Free Estimate
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
              Automotive Window Tinting FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does automotive tint installation take?
              </h3>
              <p className="text-muted-foreground">
                Most vehicles can be completed in 2-4 hours depending on the number of 
                windows and complexity. Full vehicle tinting (all windows) typically takes 
                3-4 hours. We recommend allowing the full time window for best results.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long before I can roll down my windows?
              </h3>
              <p className="text-muted-foreground">
                We recommend waiting 3-5 days before rolling down your windows to allow 
                the adhesive to fully cure. In Texas summer heat, the cure time may be 
                shorter, but it's best to err on the side of caution.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will ceramic tint interfere with my electronics?
              </h3>
              <p className="text-muted-foreground">
                No! Unlike metallic films, XPEL ceramic films contain no metal layers. 
                They won't interfere with cell phones, GPS, Bluetooth, satellite radio, 
                key fobs, toll tags, or any other electronic devices in your vehicle.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What's the difference between ceramic and regular tint?
              </h3>
              <p className="text-muted-foreground">
                Traditional dyed films primarily reduce visible light but don't block 
                much heat. Ceramic films use nano-ceramic particles to reject infrared 
                heat (the heat you feel), providing significantly better cooling performance. 
                Ceramic films also won't fade, bubble, or turn purple over time.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can you tint my windshield?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer clear and lightly tinted ceramic films for windshields that 
                provide heat and UV rejection while meeting Texas legal requirements 
                (25% VLT above the AS-1 line). Windshield tint makes a dramatic difference 
                in cabin comfort.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What if I already have factory tint?
              </h3>
              <p className="text-muted-foreground">
                Factory "privacy glass" is typically just dyed glass that provides minimal 
                heat rejection. We can apply ceramic film over factory tint to significantly 
                improve heat rejection and UV protection. Just note that the combined VLT 
                will be darker than the film alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Beat the Texas Heat?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Sunmasters for professional 
            XPEL window tint installation. Contact us today for your free estimate. 
            Serving Dallas-Fort Worth with 45+ years of experience.
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

      <LocationLinks serviceType="automotive" maxLocations={12} />

      <RelatedServices 
        currentService="/automotive-tinting" 
        relatedSlugs={["/ceramic-coating", "/paint-protection", "/residential-tinting"]}
      />

      <ContactSection />
      <Footer />
    </>
  );
};

export default AutomotiveTinting;
