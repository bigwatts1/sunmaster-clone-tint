import { Helmet } from "react-helmet";
import { MapPin, Phone, CheckCircle2, ArrowRight, Thermometer, Sun, DollarSign, Eye, Lock, Award, Car, Home, Building2, Shield, Sparkles, Blinds, Palette, Store, ToggleRight, PanelTop, Wind, Bug, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { LocationData } from "@/data/locations";
import { ServiceData } from "@/data/services";
import { Link } from "react-router-dom";
import locationHeroImage from "@/assets/dfw-window-tinting-service.jpeg";
import securityFilmImg from "@/assets/rockwall-security-window-film.jpg";

interface CityServicePageProps {
  location: LocationData;
  service: ServiceData;
}

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  slug: string;
  video?: string;
  image?: string;
}

const allServices: ServiceItem[] = [
  {
    icon: Car,
    title: "Automotive",
    slug: "automotive-window-tint",
    video: "/videos/automotive-bg.mp4",
  },
  {
    icon: Home,
    title: "Residential",
    slug: "residential-window-tint",
    video: "/videos/residential-bg.mp4",
  },
  {
    icon: Building2,
    title: "Commercial",
    slug: "commercial-window-tint",
    video: "/videos/commercial-bg.mp4",
  },
  {
    icon: Sparkles,
    title: "Ceramic Tint",
    slug: "ceramic-window-tint",
    video: "/videos/ceramic-bg.mov",
  },
  {
    icon: Shield,
    title: "Security Film",
    slug: "security-window-film",
    image: securityFilmImg,
  },
  {
    icon: ToggleRight,
    title: "Smart Film",
    slug: "smart-film",
    video: "/videos/smartfilm-bg.mp4",
  },
  {
    icon: PanelTop,
    title: "Patio Screens",
    slug: "motorized-patio-screens",
    video: "https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//copy_DF98BC66-AF50-462F-AE4A-29E0ECEA82E5.mov",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Car,
  Home,
  Building2,
  Shield,
  Sparkles,
  Sun,
  Eye,
  Lock,
  Blinds,
  Palette,
  Store,
  Thermometer,
  DollarSign,
  Award,
  PanelTop,
  Zap,
  Wind,
  Bug,
  Smartphone,
};

const companyBenefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

// Motorized Patio Screens specific content
const patioScreenBenefits = [
  {
    icon: Sun,
    title: "UV & Heat Protection",
    description: "Block up to 99% of harmful UV rays while reducing temperatures by up to 15°F, making your outdoor space comfortable even in Texas summers.",
  },
  {
    icon: Bug,
    title: "Insect Protection",
    description: "Keep mosquitoes, flies, and other pests out while still enjoying fresh air and natural ventilation in your outdoor living area.",
  },
  {
    icon: Wind,
    title: "Wind & Weather Shield",
    description: "Durable screens withstand wind gusts up to 60+ MPH and protect your patio furniture from rain, dust, and debris.",
  },
  {
    icon: Eye,
    title: "Privacy On Demand",
    description: "Transform your open patio into a private retreat at the touch of a button without sacrificing views or airflow.",
  },
  {
    icon: Smartphone,
    title: "Smart Home Integration",
    description: "Control your screens via remote, wall switch, or smartphone app. Integrate with smart home systems for automated operation.",
  },
  {
    icon: Home,
    title: "Increased Home Value",
    description: "Motorized patio screens add functional outdoor living space, increasing your home's appeal and resale value.",
  },
];

const patioScreenTypes = [
  {
    name: "Solar Mesh Screens",
    description: "Block UV rays and reduce heat while maintaining outward visibility. Perfect for Texas sun protection.",
    features: ["Up to 90% UV block", "Heat reduction", "Maintains views", "Energy savings"],
  },
  {
    name: "Insect Mesh Screens",
    description: "Fine mesh keeps even the smallest insects out while allowing maximum airflow and visibility.",
    features: ["No-see-um protection", "Maximum airflow", "Crystal clear views", "Durable fiberglass mesh"],
  },
  {
    name: "Privacy Screens",
    description: "Opaque or semi-opaque options for complete privacy from neighbors and street view.",
    features: ["100% privacy", "Wind protection", "Multiple opacity levels", "Various colors available"],
  },
  {
    name: "Clear Vinyl Screens",
    description: "Transparent panels that block wind and rain while maintaining full visibility. Ideal for cooler months.",
    features: ["Rain protection", "Wind barrier", "Full visibility", "Extend patio season"],
  },
];

const patioApplications = [
  {
    title: "Patios & Porches",
    description: "Enclose open patios and porches to create comfortable, bug-free outdoor living rooms.",
  },
  {
    title: "Pergolas & Gazebos",
    description: "Add motorized screens to pergolas for shade and protection without losing the open-air feel.",
  },
  {
    title: "Outdoor Kitchens",
    description: "Protect your outdoor cooking and dining area from insects and debris while entertaining.",
  },
  {
    title: "Pool Enclosures",
    description: "Screen in pool areas to keep out bugs and debris while maintaining visibility and airflow.",
  },
  {
    title: "Restaurants & Bars",
    description: "Commercial-grade screens for outdoor dining areas that can be deployed based on weather conditions.",
  },
  {
    title: "Garages & Workshops",
    description: "Keep your workspace ventilated and bug-free while working with the garage door open.",
  },
];

const CityServicePage = ({ location, service }: CityServicePageProps) => {
  const { city, state, region, county, nearby, businessName, address, phone } = location;
  const { title, description, benefits, products, faqs, icon } = service;
  
  // Get service-specific hero background
  const currentServiceData = allServices.find(s => s.slug === service.slug);
  const IconComponent = iconMap[icon] || Sun;
  
  const isAutomotive = service.slug === 'automotive-window-tint';
  const pageTitle = isAutomotive 
    ? `Window Tinting ${city}, TX | Auto, Home & Commercial | SunMasters`
    : `${title} ${city}, TX | SunMasters Window Tinting & Shades`;
  const metaDescription = isAutomotive
    ? `Professional window tinting in ${city}, Texas. Automotive, residential & commercial window film. XPEL certified. 99% UV protection. Free estimates. Call (469) 757-4325.`
    : `Professional ${title.toLowerCase()} in ${city}, Texas. ${description.slice(0, 100)}... Free estimates. Call (469) 757-4325.`;
  const canonicalUrl = `https://sunmasterstintandshades.com/${location.slug}-tx/${service.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${title.toLowerCase()} ${city}, window tinting ${city} TX, ${service.slug} ${city}, ${title.toLowerCase()} near me, ${county} window tinting`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${title} in ${city}, TX`,
            "description": description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "SunMasters Window Tinting & Shades",
              "telephone": "469-757-4325",
              "email": "aaron@sunmastersdfw.com",
              "areaServed": {
                "@type": "City",
                "name": city,
                "containedInPlace": {
                  "@type": "State",
                  "name": "Texas"
                }
              }
            },
            "areaServed": {
              "@type": "City",
              "name": city,
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question.replace(/\[CITY\]/g, city),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/\[CITY\]/g, city)
              }
            }))
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {currentServiceData?.video ? (
            <video
              key={service.slug}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={currentServiceData.video} type={currentServiceData.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
            </video>
          ) : currentServiceData?.image ? (
            <img 
              src={currentServiceData.image} 
              alt={`${title} services in ${city}, ${state}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={locationHeroImage} 
              alt={`${title} services in ${city}, ${state}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {city}, TX • {region}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {service.slug === 'automotive-window-tint' ? `Window Tinting ${city}, Texas` : `${title} ${city}, Texas`}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              SunMasters Window Tinting & Shades provides professional {title.toLowerCase()} services to {city} and the surrounding {region} area. {description}
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
                <a href="tel:469-757-4325">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (469) 757-4325
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Motorized Patio Screens Specific Content */}
      {service.slug === 'motorized-patio-screens' && (
        <>
          {/* What Are Motorized Patio Screens */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  The Technology
                </span>
                <h2 className="section-title text-foreground mt-2">
                  What Are Motorized Patio Screens?
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    Motorized patio screens are retractable screen systems powered by quiet, 
                    tubular motors that deploy at the touch of a button. When not in use, 
                    they retract into a sleek housing unit that blends seamlessly with your 
                    home's architecture. These screens offer the perfect balance of indoor 
                    comfort with outdoor ambiance for {city} homeowners.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Motorized Operation</h3>
                      <p className="text-muted-foreground text-sm">Quiet tubular motors deploy screens smoothly in seconds</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Smart Control</h3>
                      <p className="text-muted-foreground text-sm">Remote, wall switch, or app control options</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Weather Resistant</h3>
                      <p className="text-muted-foreground text-sm">Built to withstand wind, rain, and Texas weather</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen Types */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  Screen Options
                </span>
                <h2 className="section-title text-foreground mt-2">
                  Types of Motorized Screens in {city}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                  Choose from a variety of screen materials to match your specific needs, 
                  from solar protection to complete privacy.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {patioScreenTypes.map((screen) => (
                  <div
                    key={screen.name}
                    className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading font-bold text-foreground text-2xl mb-3">
                      {screen.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">{screen.description}</p>
                    <ul className="space-y-2">
                      {screen.features.map((feature) => (
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

          {/* Patio Screen Benefits */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  Why Choose Motorized Screens
                </span>
                <h2 className="section-title text-foreground mt-2">
                  Benefits of Motorized Patio Screens in {city}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patioScreenBenefits.map((benefit) => (
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

          {/* Applications */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  Applications
                </span>
                <h2 className="section-title text-foreground mt-2">
                  Where Can You Install Motorized Screens in {city}?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                  Motorized screens are versatile solutions that can transform virtually any 
                  outdoor or semi-outdoor space in your {city} home or business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patioApplications.map((app) => (
                  <div
                    key={app.title}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why DFW Needs This */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-medium uppercase tracking-wider text-sm">
                    Perfect for {city}
                  </span>
                  <h2 className="section-title text-foreground mt-2 mb-6">
                    Why {city} Homeowners Love Motorized Patio Screens
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    The {city} area presents unique challenges for outdoor living. 
                    Our motorized screens are designed to address every one of them:
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "Texas Heat", desc: "Solar mesh screens block UV rays and reduce temperatures by up to 15°F" },
                      { title: "Mosquitoes & Bugs", desc: "Fine mesh keeps insects out while you enjoy evening cookouts" },
                      { title: "Spring Storms", desc: "Quick-deploy screens protect furniture from sudden weather changes" },
                      { title: "Privacy from Neighbors", desc: "Growing neighborhoods mean closer homes—screens add instant privacy" },
                      { title: "Year-Round Use", desc: "Extend your outdoor season from 6 months to 12 months" },
                      { title: "Home Value", desc: "Outdoor living additions are top priorities for homebuyers" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-foreground">{item.title}:</span>{" "}
                          <span className="text-muted-foreground">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                    Ready to Transform Your Outdoor Space in {city}?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    With 45+ years of experience in window and screen solutions, we provide 
                    expert consultation and professional installation for motorized patio screens 
                    throughout {city} and the {region} area.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Free on-site consultation
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Custom measurements & design
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Professional installation
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Manufacturer warranties
                    </li>
                  </ul>
                  <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                    Schedule Your Free Consultation
                  </ContactLink>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Service Navigation Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Services in {city}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allServices.map((svc) => (
              <Link
                key={svc.slug}
                to={`/${location.slug}-tx/${svc.slug}`}
                className={`relative bg-card border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                  service.slug === svc.slug ? 'border-primary ring-2 ring-primary' : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  {svc.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={svc.video} type={svc.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    </video>
                  ) : svc.image ? (
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <svc.icon className="w-10 h-10 text-primary/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h3 className="font-heading font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-primary-foreground/80 text-sm">Service</p>
              <p className="text-primary-foreground font-bold text-lg">{service.shortTitle}</p>
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Location</p>
              <p className="text-primary-foreground font-bold text-lg">{city}, TX</p>
            </div>
            {county && (
              <div>
                <p className="text-primary-foreground/80 text-sm">County</p>
                <p className="text-primary-foreground font-bold text-lg">{county}</p>
              </div>
            )}
            <div>
              <p className="text-primary-foreground/80 text-sm">Warranty</p>
              <p className="text-primary-foreground font-bold text-lg">Lifetime</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                About This Service
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Why {city} Residents Choose SunMasters for {title}
              </h2>
              <p className="text-muted-foreground mb-6">
                Living in {city}, Texas means dealing with intense summer heat, glaring sun, and high energy costs. Our professional {title.toLowerCase()} services help {city} homeowners, businesses, and vehicle owners combat these challenges while protecting their investments.
              </p>
              <p className="text-muted-foreground mb-6">
                The Texas sun can fade interiors, increase cooling costs by 30% or more, and make spaces uncomfortable. SunMasters brings certified expertise and premium products to {city}, ensuring you get the best protection available.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're in downtown {city} or the surrounding {region} area, our team provides professional installation with industry-leading warranties. We've served thousands of satisfied customers across the DFW metroplex.
              </p>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.slice(0, 5).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-xl">
                    Why Choose SunMasters in {city}?
                  </h3>
                </div>
                <ul className="space-y-4">
                  {companyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to get started? Contact us today for a free estimate in {city}.
                  </p>
                  <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Your Free Estimate
                  </ContactLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Products & Films
            </span>
            <h2 className="section-title text-foreground mt-2">
              {title} Products Available in {city}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              {title} FAQs for {city} Customers
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Service Areas
            </span>
            <h2 className="section-title text-foreground mt-2">
              {title} Near {city}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              In addition to {city}, we proudly serve the entire {region} area including:
            </p>
          </div>
          
          {nearby && nearby.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((area, index) => (
                <span 
                  key={index}
                  className="bg-card border border-border rounded-full px-4 py-2 text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link 
              to={`/locations/${location.slug}`}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2"
            >
              View all {city} services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready for Professional {title} in {city}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact SunMasters today for a free estimate. We offer fast scheduling and professional installation throughout {city} and the {region} area.
          </p>
          
          {/* Location-specific contact info */}
          {(businessName || address || phone) && (
            <div className="bg-primary-foreground/10 rounded-lg p-6 max-w-md mx-auto mb-8">
              {businessName && (
                <p className="text-primary-foreground font-heading font-bold text-lg mb-2">
                  {businessName}
                </p>
              )}
              {address && (
                <p className="text-primary-foreground/80 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {address}
                </p>
              )}
              {phone && (
                <p className="text-primary-foreground/80">
                  <Phone className="w-4 h-4 inline mr-2" />
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary-foreground transition-colors">
                    {phone}
                  </a>
                </p>
              )}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading uppercase tracking-wider">
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={`tel:${phone ? phone.replace(/\D/g, '') : '4697574325'}`}>
                <Phone className="w-4 h-4 mr-2" />
                {phone || "(469) 757-4325"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CityServicePage;
