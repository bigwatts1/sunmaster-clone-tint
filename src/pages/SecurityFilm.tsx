import { Helmet } from "react-helmet";
import { ArrowRight, Shield, Home, Building2, School, AlertTriangle, Wind, Hammer, Sun, CheckCircle2, Lock, Eye, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import securityImg from "@/assets/service-security.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Break-In Deterrent",
    description: "Security film holds glass together when struck, slowing intruders and giving you precious time to react or escape. Most burglars abandon attempts after 60 seconds.",
  },
  {
    icon: Wind,
    title: "Storm Protection",
    description: "Protects against flying debris from Texas storms, tornadoes, and high winds. Keeps shattered glass intact to prevent injuries and interior damage.",
  },
  {
    icon: AlertTriangle,
    title: "Accident Safety",
    description: "Prevents dangerous glass shards from scattering during accidental impacts—essential for homes with children, pets, or high-traffic commercial areas.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Blocks up to 99% of harmful UV rays, protecting occupants from skin damage and preventing fading of furniture, flooring, and merchandise.",
  },
  {
    icon: Lock,
    title: "Smash & Grab Prevention",
    description: "Deters quick theft attempts at retail locations. Even if glass cracks, the film barrier prevents easy access to valuables and inventory.",
  },
  {
    icon: Eye,
    title: "Invisible Protection",
    description: "Crystal-clear film provides maximum security without changing the appearance of your windows. Protection that works 24/7 without being noticed.",
  },
];

const filmOptions = [
  {
    name: "4 Mil Clear Safety Film",
    thickness: "4 mil",
    description: "Entry-level protection ideal for residential applications. Holds glass together during accidents and provides basic fragment retention.",
    applications: ["Residential windows", "Interior glass doors", "Glass partitions", "Bathroom glass"],
    features: ["Fragment retention", "99% UV protection", "Optically clear", "Scratch-resistant coating"],
  },
  {
    name: "8 Mil Security Film",
    thickness: "8 mil",
    description: "Enhanced protection for homes and businesses. Provides significant resistance against impacts and forced entry attempts.",
    applications: ["Ground-floor windows", "Sliding glass doors", "Storefronts", "Office buildings"],
    features: ["Impact resistance", "Forced entry delay", "99% UV protection", "Solar heat rejection options"],
    popular: true,
  },
  {
    name: "12-14 Mil Heavy Duty Film",
    thickness: "12-14 mil",
    description: "Maximum protection for high-security applications. Designed to withstand severe impacts and prolonged attack attempts.",
    applications: ["Schools & government buildings", "Banks & financial institutions", "Jewelry stores", "High-value retail"],
    features: ["Maximum impact resistance", "Extended forced entry delay", "Bomb blast mitigation", "GSA & ASTM certified options"],
  },
];

const applications = [
  {
    icon: Home,
    title: "Residential Security",
    description: "Protect your family and home from break-ins, accidents, and severe weather. Ground-floor windows and glass doors are common entry points for intruders.",
    points: ["Entry point reinforcement", "Child & pet safety", "Storm debris protection", "Sliding door security"],
  },
  {
    icon: Building2,
    title: "Commercial Protection",
    description: "Safeguard your business, employees, and assets. Security film protects storefronts, offices, and warehouses from smash-and-grab theft and vandalism.",
    points: ["Storefront protection", "Smash & grab deterrent", "Employee safety", "Liability reduction"],
  },
  {
    icon: School,
    title: "Schools & Institutions",
    description: "Enhance safety in educational facilities and government buildings. Security film can delay forced entry, providing critical response time during emergencies.",
    points: ["Active threat protection", "Classroom safety", "Fragment retention", "Emergency response time"],
  },
];

const protectsAgainst = [
  "Burglary & forced entry",
  "Smash & grab theft",
  "Tornado & high wind debris",
  "Hail damage",
  "Accidental impacts",
  "Earthquake shaking",
  "Bomb blast fragments",
  "Vandalism attempts",
  "UV damage & fading",
  "Flying glass injuries",
];

const stats = [
  { value: "99%", label: "UV rays blocked" },
  { value: "60+", label: "Seconds of delay vs intruders" },
  { value: "14 mil", label: "Maximum film thickness" },
  { value: "24/7", label: "Invisible protection" },
];

const SecurityFilm = () => {
  return (
    <>
      <Helmet>
        <title>Security Window Film Dallas | Safety Film Installation | Sunmasters</title>
        <meta
          name="description"
          content="Professional security window film in Dallas-Fort Worth. Protect against break-ins, storms & accidents. Holds glass together when shattered. Free estimates for homes & businesses."
        />
        <meta name="keywords" content="security window film Dallas, safety film, break-in protection, storm protection, shatterproof glass, security glass film, commercial security film, residential safety film" />
        <link rel="canonical" href="https://sunmastersdfw.com/security-film" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Safety & Security Film
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Security Window Film: Invisible Protection for What Matters Most
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Strengthen your windows against break-ins, severe weather, and accidents with 
                professional security film installation. Our safety films hold shattered glass 
                together, protecting your family, employees, and property when it matters most.
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
                src={securityImg}
                alt="Security window film installation protecting home in Dallas"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">24/7</p>
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

      {/* What is Security Film */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                How It Works
              </span>
              <h2 className="section-title text-foreground mt-2">
                What is Security Window Film?
              </h2>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                Security window film is a high-performance, multi-layered polyester film that 
                bonds directly to your existing glass. Unlike regular glass that shatters into 
                dangerous shards upon impact, security film <strong>holds the glass together</strong> even 
                when broken—creating a barrier that protects against injuries, intrusion, and 
                storm damage.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                The film works by absorbing and redistributing impact energy across a larger 
                surface area. When glass breaks, the fragments remain adhered to the film, 
                preventing them from scattering and maintaining the integrity of the window 
                opening. This technology is used in schools, government buildings, retail 
                stores, and homes across the country.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Multi-Layer Construction</h3>
                  <p className="text-muted-foreground text-sm">Multiple polyester layers bonded together for maximum strength and tear resistance</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Fragment Retention</h3>
                  <p className="text-muted-foreground text-sm">Holds broken glass in place, preventing dangerous shards from scattering</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Optically Clear</h3>
                  <p className="text-muted-foreground text-sm">Crystal-clear appearance maintains your view without visible distortion</p>
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
              Why Security Film
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Security Window Film
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

      {/* Film Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Products
            </span>
            <h2 className="section-title text-foreground mt-2">
              Security Film Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Choose the level of protection that matches your security needs. From basic 
              safety to maximum security, we have solutions for every application.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filmOptions.map((film) => (
              <div
                key={film.name}
                className={`bg-card border rounded-lg p-8 relative ${
                  film.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                } hover:border-primary/50 transition-colors`}
              >
                {film.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-foreground text-2xl mb-1">
                    {film.name}
                  </h3>
                  <p className="text-primary font-medium text-lg">{film.thickness} thickness</p>
                </div>
                <p className="text-muted-foreground text-sm mb-6 text-center">{film.description}</p>
                
                <div className="mb-6">
                  <p className="text-foreground font-medium text-sm mb-3">Best For:</p>
                  <ul className="space-y-2">
                    {film.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground font-medium text-sm mb-3">Features:</p>
                  <ul className="space-y-2">
                    {film.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
              Request Security Assessment
            </ContactLink>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Applications
            </span>
            <h2 className="section-title text-foreground mt-2">
              Who Needs Security Film?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div
                key={app.title}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-2xl mb-3">
                  {app.title}
                </h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dallas-Specific Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Comprehensive Protection
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                What Security Film Protects Against
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From intentional attacks to natural disasters, security window film provides 
                a critical layer of protection for your property and the people inside. In 
                the Dallas-Fort Worth area, these threats are real and present.
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
                Why Dallas Properties Need Security Film
              </h3>
              <p className="text-muted-foreground mb-6">
                The DFW metroplex faces unique security and weather challenges:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Severe Storm Season</strong>
                    <p className="text-muted-foreground text-sm">Texas tornado season brings high winds and flying debris that can shatter unprotected windows</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Hail Damage</strong>
                    <p className="text-muted-foreground text-sm">DFW is in prime hail territory—security film helps protect windows from impact damage</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Property Crime</strong>
                    <p className="text-muted-foreground text-sm">Metro areas face higher break-in rates—security film is proven to deter intruders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Retail Smash & Grab</strong>
                    <p className="text-muted-foreground text-sm">Storefronts and retail locations are targets for quick theft attempts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Get Protected
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Professional Installation Process
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our certified technicians ensure your security film is installed correctly 
                for maximum protection. Proper installation is critical—the film must be 
                precisely applied and bonded to the glass to perform as designed.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">Security Assessment</h4>
                    <p className="text-muted-foreground text-sm">We evaluate your property and recommend the right film thickness for each window</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">Surface Preparation</h4>
                    <p className="text-muted-foreground text-sm">Glass is thoroughly cleaned to ensure optimal adhesion and clarity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">Precision Application</h4>
                    <p className="text-muted-foreground text-sm">Film is carefully applied edge-to-edge for complete protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">Quality Inspection</h4>
                    <p className="text-muted-foreground text-sm">Every window is inspected to ensure bubble-free, flawless installation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Schedule Your Security Assessment
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us evaluate your property and recommend the right security solution. 
                We provide free on-site assessments for homes and businesses throughout DFW.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Free on-site security assessment
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Custom recommendations per window
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Certified professional installation
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

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Security Film FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can security film really stop a break-in?
              </h3>
              <p className="text-muted-foreground">
                Security film significantly delays forced entry but is not impenetrable. Studies show 
                that most burglars abandon break-in attempts after 60 seconds. Security film can keep 
                glass intact for multiple impacts, buying you valuable time to call for help or escape. 
                It transforms a quick smash-and-grab into a prolonged, noisy, and difficult entry attempt.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will security film make my windows look different?
              </h3>
              <p className="text-muted-foreground">
                No. Our security films are optically clear and virtually invisible once installed. 
                You maintain your natural view and light transmission. Tinted security film options 
                are available if you also want solar heat rejection or privacy benefits, but the 
                standard product is crystal clear.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How does security film protect against storms?
              </h3>
              <p className="text-muted-foreground">
                During severe weather, flying debris can shatter windows, allowing wind and rain 
                inside while creating dangerous glass projectiles. Security film holds shattered 
                glass in place, maintaining the envelope of your building and preventing injuries 
                from flying shards. This is especially important in tornado-prone areas like Dallas.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What thickness of security film do I need?
              </h3>
              <p className="text-muted-foreground">
                The right thickness depends on your security goals. 4 mil film provides basic safety 
                and fragment retention—ideal for accident protection. 8 mil offers significant forced 
                entry resistance for most homes and businesses. 12-14 mil provides maximum protection 
                for high-security applications. We assess your property and recommend the appropriate 
                level for each window.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can security film be applied to any window?
              </h3>
              <p className="text-muted-foreground">
                Yes, security film can be applied to most glass surfaces including windows, doors, 
                skylights, and glass partitions. It works on single-pane and double-pane windows. 
                For maximum effectiveness, the film should extend to the window frame edge. We may 
                also recommend anchoring systems for high-security applications.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does security film last?
              </h3>
              <p className="text-muted-foreground">
                Professional-grade security film typically lasts 10-15+ years when properly installed 
                and maintained. The film is designed to withstand UV exposure and temperature 
                fluctuations without degrading. Most manufacturers offer warranties ranging from 
                10 years to lifetime coverage for material defects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Do not wait for an incident to wish you had better protection. Contact Sunmasters 
            today for a free security assessment. Serving Dallas-Fort Worth homes and 
            businesses with 45+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink variant="secondary" className="font-heading uppercase tracking-wider" showArrow={false}>
              Get Free Assessment
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

export default SecurityFilm;
