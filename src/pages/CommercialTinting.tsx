import { Helmet } from "react-helmet";
import { ArrowRight, Building2, DollarSign, Shield, Sun, Users, Thermometer, Eye, Lock, Palette, CheckCircle2, TrendingDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import RelatedServices from "@/components/RelatedServices";
import LocationLinks from "@/components/LocationLinks";
import commercialImg from "@/assets/rockwall-commercial-window-tinting.jpg";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Energy Costs",
    description: "Cut cooling costs by 25-35% by blocking solar heat gain. Window film delivers one of the fastest ROIs of any building upgrade.",
  },
  {
    icon: Users,
    title: "Employee Comfort",
    description: "Eliminate hot spots and temperature imbalances. Comfortable employees are more productive and satisfied.",
  },
  {
    icon: Sun,
    title: "Glare Reduction",
    description: "Reduce eye strain on computer screens and improve visibility for customer-facing displays and presentations.",
  },
  {
    icon: Shield,
    title: "UV Protection",
    description: "Block 99% of harmful UV rays that fade merchandise, furniture, flooring, and interior finishes.",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "Security films hold glass together when broken, deterring break-ins and protecting against severe weather.",
  },
  {
    icon: Palette,
    title: "Professional Appearance",
    description: "Create a uniform, polished exterior appearance while adding privacy and branding opportunities.",
  },
];

const filmTypes = [
  {
    name: "Solar Control Film",
    description: "The most popular choice for commercial buildings. Significantly reduces heat gain and glare while maintaining natural light and views.",
    bestFor: "Office buildings, retail stores, restaurants",
    features: ["Up to 80% heat rejection", "Reduces HVAC load", "Multiple tint levels", "Quick ROI"],
  },
  {
    name: "Ceramic Window Film",
    description: "Premium nano-ceramic technology offers superior heat rejection without the reflective appearance. Won't interfere with cell signals or electronics.",
    bestFor: "Tech offices, hospitals, call centers",
    features: ["No signal interference", "Non-reflective finish", "Maximum clarity", "Color neutral"],
  },
  {
    name: "Security & Safety Film",
    description: "Thick, tear-resistant film holds glass together when broken. Protects against break-ins, smash-and-grab theft, severe weather, and bomb blasts.",
    bestFor: "Storefronts, banks, government buildings",
    features: ["4-15 mil thickness", "Impact resistance", "Forced entry protection", "Storm protection"],
  },
  {
    name: "Decorative & Branding Film",
    description: "Transform plain glass into a branded asset. Frosted patterns, logos, privacy bands, and custom graphics enhance aesthetics and function.",
    bestFor: "Conference rooms, lobbies, storefronts",
    features: ["Custom logos & graphics", "Frosted privacy", "Partition solutions", "Brand reinforcement"],
  },
  {
    name: "Dual-Reflective Film",
    description: "Reflective exterior for maximum heat rejection and daytime privacy, with a neutral interior view. Professional appearance without mirror effect inside.",
    bestFor: "High-rise offices, corporate headquarters",
    features: ["Daytime privacy", "Non-mirror interior", "Uniform appearance", "Maximum solar control"],
  },
  {
    name: "Anti-Graffiti Film",
    description: "Sacrificial clear film protects glass from scratches, etching, and graffiti. When vandalized, simply replace the film—not the glass.",
    bestFor: "Retail storefronts, transit stations, public buildings",
    features: ["Scratch protection", "Easy replacement", "Cost-effective", "Invisible protection"],
  },
];

const industries = [
  {
    name: "Office Buildings",
    description: "Reduce operating costs and improve tenant comfort",
    applications: ["Lobbies & atriums", "Individual offices", "Conference rooms", "Common areas"],
  },
  {
    name: "Retail & Storefronts",
    description: "Protect merchandise and create inviting shopping environments",
    applications: ["Display windows", "Fitting rooms", "Back offices", "Security applications"],
  },
  {
    name: "Restaurants & Hospitality",
    description: "Enhance guest comfort and reduce energy costs",
    applications: ["Dining areas", "Kitchen partitions", "Patio enclosures", "Hotel rooms"],
  },
  {
    name: "Healthcare Facilities",
    description: "Create comfortable, private patient environments",
    applications: ["Patient rooms", "Waiting areas", "Operating rooms", "Privacy partitions"],
  },
  {
    name: "Educational Institutions",
    description: "Improve learning environments and protect students",
    applications: ["Classrooms", "Libraries", "Athletic facilities", "Security upgrades"],
  },
  {
    name: "Government & Municipal",
    description: "Enhance security and reduce taxpayer costs",
    applications: ["Courthouses", "City halls", "Police stations", "Public libraries"],
  },
];

const stats = [
  { value: "30%", label: "Average reduction in cooling costs" },
  { value: "99%", label: "UV rays blocked protecting interiors" },
  { value: "3-5 yr", label: "Typical payback period" },
  { value: "15+", label: "Years of product lifespan" },
];

const CommercialTinting = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Window Tinting Dallas | Office Building Window Film | Sunmasters</title>
        <meta
          name="description"
          content="Professional commercial window tinting in Dallas-Fort Worth. Reduce energy costs 25-35%, improve employee comfort, and enhance security. Free estimates for offices, retail, and more."
        />
        <meta name="keywords" content="commercial window tinting, office window film, Dallas commercial tinting, building window film, storefront tinting, security window film, solar control film, commercial energy savings" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/commercial-tinting" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Commercial Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Commercial Window Tinting: Cut Costs, Boost Comfort & Protect Your Business
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Transform your commercial space with professional window film installation. 
                Reduce energy costs by up to 35%, eliminate glare and hot spots, enhance 
                security, and create a more productive work environment—all without major 
                renovations or disrupting operations.
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
                src={commercialImg}
                alt="Commercial window tinting installation on Dallas office building"
                className="rounded-lg shadow-2xl w-full"
                width={600}
                height={400}
                loading="eager"
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

      {/* The Business Case */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              The Business Case
            </span>
            <h2 className="section-title text-foreground mt-2">
              Why Texas Businesses Invest in Window Film
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                In the Dallas-Fort Worth area, commercial buildings face intense solar heat for 
                much of the year. Windows—especially in modern glass-heavy designs—are responsible 
                for <strong>up to 40% of a building's cooling load</strong>. This drives up HVAC 
                costs, creates uncomfortable hot spots, and can fade valuable interior finishes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Lower OpEx</h3>
                  <p className="text-muted-foreground text-sm">Reduce monthly utility bills and extend HVAC equipment life</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Happy Tenants</h3>
                  <p className="text-muted-foreground text-sm">Fewer temperature complaints mean better retention</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">Sustainability</h3>
                  <p className="text-muted-foreground text-sm">Reduce carbon footprint and meet green building standards</p>
                </div>
              </div>

              <p className="text-muted-foreground text-center mt-8">
                Window film is one of the <strong>most cost-effective building upgrades</strong> available, 
                with typical payback periods of 3-5 years and benefits lasting 15+ years.
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
              Key Advantages
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Commercial Window Tinting
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
              Commercial Window Film Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We offer a complete range of commercial-grade window films to address every 
              business need—from energy savings to security to branding.
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

      {/* Energy Savings ROI */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Return on Investment
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Commercial Window Film ROI
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Window film delivers measurable, ongoing savings that quickly offset the 
                initial investment. For commercial properties, the numbers make a compelling case:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Immediate Savings</h4>
                    <p className="text-muted-foreground text-sm">See reduced energy costs within the first billing cycle after installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">HVAC Relief</h4>
                    <p className="text-muted-foreground text-sm">Less strain on cooling systems means fewer repairs and longer equipment life</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Property Value</h4>
                    <p className="text-muted-foreground text-sm">Energy-efficient buildings command higher rents and sale prices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Sample ROI Calculation
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                For a 10,000 sq ft office building in Dallas:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Current annual cooling cost</span>
                  <span className="font-bold text-foreground">~$15,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Estimated savings (30%)</span>
                  <span className="font-bold text-primary">$4,500/year</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Typical film investment</span>
                  <span className="font-bold text-foreground">$12,000-18,000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground">Payback period</span>
                  <span className="font-bold text-primary">3-4 years</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                *After payback, enjoy 10+ years of pure savings. Additional benefits include 
                reduced maintenance, improved comfort, and UV protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Industries We Serve
            </span>
            <h2 className="section-title text-foreground mt-2">
              Commercial Window Film Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We've served businesses across every industry in the Dallas-Fort Worth area. 
              Our experts understand the unique needs of each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              Minimal Disruption Installation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              We understand that your business can't stop for renovations. Our installation 
              process is designed to work around your schedule with minimal disruption.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Free on-site assessment and energy analysis" },
                { step: "2", title: "Proposal", desc: "Detailed quote with ROI projections" },
                { step: "3", title: "Scheduling", desc: "Work around your business hours" },
                { step: "4", title: "Installation", desc: "Clean, professional, efficient work" },
                { step: "5", title: "Warranty", desc: "Documentation and ongoing support" },
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

      {/* CTA with consultation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Get Started
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Free Commercial Property Assessment
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our commercial window film experts will evaluate your property, analyze 
                your energy costs, and provide a detailed proposal with projected savings—all 
                at no cost or obligation.
              </p>
              
              <div className="space-y-3">
                {[
                  "Comprehensive window and glass survey",
                  "Energy usage analysis",
                  "Custom film recommendations",
                  "Detailed cost and ROI projections",
                  "Flexible scheduling options",
                  "Manufacturer warranty documentation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Request Your Free Assessment
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a no-obligation consultation. We serve businesses 
                throughout the Dallas-Fort Worth metropolitan area.
              </p>
              <div className="space-y-4">
                <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                  Get Free Estimate
                </ContactLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border hover:bg-card"
                  asChild
                >
                  <a href="tel:469-757-4325">Call (469) 757-4325</a>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm text-center mt-6">
                45+ years of commercial window film experience in Texas
              </p>
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
              Commercial Window Tinting FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How much can commercial window film really save on energy costs?
              </h3>
              <p className="text-muted-foreground">
                Most commercial buildings see 25-35% reductions in cooling costs after 
                window film installation. The exact savings depend on factors like window 
                orientation, current glass type, building size, and local climate. We provide 
                detailed ROI projections based on your specific property.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Will window film make our building look dark from inside?
              </h3>
              <p className="text-muted-foreground">
                Not necessarily. We offer films ranging from nearly invisible to moderately 
                tinted. Modern ceramic films, for example, reject significant heat while 
                maintaining excellent clarity and natural light transmission. We'll recommend 
                options that balance performance with your aesthetic preferences.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does commercial installation take?
              </h3>
              <p className="text-muted-foreground">
                Installation time depends on the project size. A typical office floor can 
                be completed in one day. Larger projects are scheduled in phases to minimize 
                disruption. We can work after hours, on weekends, or in sections to 
                accommodate your operations.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Does window film interfere with cell phone or Wi-Fi signals?
              </h3>
              <p className="text-muted-foreground">
                Traditional metallic films can interfere with wireless signals, but modern 
                ceramic and non-metallic films have zero impact on cell, Wi-Fi, or radio 
                signals. We specifically recommend these films for offices, hospitals, and 
                tech-heavy environments.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What kind of warranty do commercial films carry?
              </h3>
              <p className="text-muted-foreground">
                Commercial window films typically come with 10-15 year manufacturer warranties 
                covering defects, peeling, bubbling, and color change. Security films often 
                have additional performance warranties. We provide full documentation for 
                your property records.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can window film be applied to all types of commercial glass?
              </h3>
              <p className="text-muted-foreground">
                Yes, but the right film must be matched to your glass type. We assess your 
                existing glazing (single-pane, dual-pane, tempered, laminated, Low-E, etc.) 
                and recommend compatible films that won't cause thermal stress or void 
                glass warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Reduce Costs & Improve Your Workspace?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of Dallas-Fort Worth businesses that trust Sunmasters for 
            professional commercial window film installation. Contact us today for your 
            free property assessment.
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

      <LocationLinks serviceType="commercial" maxLocations={12} />

      <RelatedServices 
        currentService="/commercial-tinting" 
        relatedSlugs={["/residential-tinting", "/security-film", "/smart-film"]} 
      />

      <Footer />
    </>
  );
};

export default CommercialTinting;
