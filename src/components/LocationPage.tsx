import { Helmet } from "react-helmet";
import { MapPin, Phone, Car, Home, Building2, Shield, Sparkles, Sun, CheckCircle2, ArrowRight, Blinds, Thermometer, DollarSign, Clock, Award, Zap, Eye, Lock, PanelTop } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { LocationData } from "@/data/locations";
import { Link } from "react-router-dom";
import locationHeroImage from "@/assets/location-hero.jpeg";

interface LocationPageProps {
  location: LocationData;
}

const services = [
  {
    icon: Car,
    title: "Automotive Window Tinting",
    description: "XPEL ceramic window film for cars, trucks, and SUVs with up to 98% heat rejection.",
    slug: "automotive-window-tint",
  },
  {
    icon: Home,
    title: "Residential Window Tinting",
    description: "Energy-saving window film for homes that reduces heat, glare, and UV damage.",
    slug: "residential-window-tint",
  },
  {
    icon: Building2,
    title: "Commercial Window Tinting",
    description: "Professional window film solutions for offices, storefronts, and commercial buildings.",
    slug: "commercial-window-tint",
  },
  {
    icon: Sparkles,
    title: "Ceramic Window Tint",
    description: "Premium ceramic technology for superior heat rejection without signal interference.",
    slug: "ceramic-window-tint",
  },
  {
    icon: Shield,
    title: "Security & Safety Film",
    description: "Protect your property with film that holds glass together when broken.",
    slug: "security-window-film",
  },
  {
    icon: Sun,
    title: "Solar Heat Rejection Film",
    description: "Combat Texas heat with advanced films that reject up to 98% of infrared heat.",
    slug: "solar-heat-rejection-film",
  },
];

const shadeTypes = [
  {
    icon: PanelTop,
    title: "Motorized Patio Screens",
    description: "Transform your outdoor living space with retractable motorized screens that provide shade, insect protection, and weather resistance.",
  },
  {
    icon: Blinds,
    title: "Motorized Blinds & Shades",
    description: "Automated window treatments with smart home integration for effortless light control and energy savings.",
  },
  {
    icon: Sun,
    title: "Solar Shades",
    description: "Block harsh sunlight while maintaining your view with UV-filtering solar shade fabrics.",
  },
  {
    icon: Lock,
    title: "Blackout Shades",
    description: "Complete light blocking for bedrooms, media rooms, and spaces requiring total darkness.",
  },
];

const tintingBenefits = [
  {
    icon: Thermometer,
    title: "Heat Reduction",
    description: "Block up to 98% of infrared heat, keeping your space significantly cooler during Texas summers.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "99% UV ray rejection protects your skin, furniture, flooring, and interior surfaces from sun damage.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Reduce cooling costs by up to 30% with professional window film that keeps heat out.",
  },
  {
    icon: Eye,
    title: "Glare Reduction",
    description: "Eliminate harsh glare on screens and surfaces for improved comfort and productivity.",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Enhanced privacy during the day while security film holds glass together if broken.",
  },
  {
    icon: Award,
    title: "Lifetime Warranty",
    description: "All XPEL window film installations backed by manufacturer lifetime warranty.",
  },
];

const companyBenefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

const LocationPage = ({ location }: LocationPageProps) => {
  const { city, state, region, county, population, nearby, description, localFacts } = location;
  
  const pageTitle = `Window Tinting & Shades ${city}, ${state} | Auto, Home & Commercial | Sunmasters`;
  const metaDescription = `Professional window tinting and motorized shades in ${city}, ${state}. Automotive, residential & commercial window film. Patio screens & blinds. XPEL certified. 99% UV protection. Free estimates.`;
  const canonicalUrl = `https://sunmasterstintandshades.com/locations/${location.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`window tinting ${city}, car tint ${city} ${state}, home window tinting ${city}, commercial window film ${city}, motorized shades ${city}, patio screens ${city}, blinds ${city}, XPEL ${city}, ceramic tint ${city}, PPF ${city}, ${county} window tinting, window shades ${city} TX`} />
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
            "@type": "LocalBusiness",
            "name": "Sunmasters Window Tinting and Shades",
            "description": `Professional window tinting and shade services in ${city}, ${state}`,
            "url": canonicalUrl,
            "telephone": "469-757-4325",
            "email": "aaron@sunmastersdfw.com",
            "areaServed": {
              "@type": "City",
              "name": city,
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "addressLocality": city,
                "addressRegion": state
              }
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Window Tinting and Shade Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automotive Window Tinting",
                    "description": "Professional car window tinting with XPEL ceramic films"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Window Tinting",
                    "description": "Home window film for energy savings and UV protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Window Tinting",
                    "description": "Window film solutions for businesses and commercial buildings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Motorized Shades and Blinds",
                    "description": "Automated window treatments with smart home integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Motorized Patio Screens",
                    "description": "Retractable outdoor screens for patios and porches"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How much does window tinting cost in ${city}, TX?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Window tinting prices in ${city} vary based on the type of service. Automotive tinting typically ranges from $199-$599 depending on vehicle size and film quality. Residential and commercial projects are quoted based on square footage. Contact Sunmasters for a free estimate.`
                }
              },
              {
                "@type": "Question",
                "name": `Is window tinting legal in ${city}, Texas?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, window tinting is legal in Texas with specific regulations. Front side windows must allow at least 25% light transmission. Rear windows and back windshield can be any darkness. Sunmasters ensures all installations comply with Texas state laws."
                }
              },
              {
                "@type": "Question",
                "name": `How long does window tinting take in ${city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Automotive window tinting typically takes 2-4 hours depending on the vehicle. Residential projects vary based on the number of windows. Sunmasters offers same-day service for most automotive tinting jobs."
                }
              },
              {
                "@type": "Question",
                "name": `Do you offer motorized shades installation in ${city}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes, Sunmasters provides professional motorized shade and blind installation throughout ${city} and the ${region} area. We offer motorized patio screens, solar shades, blackout shades, and smart home integrated window treatments.`
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={locationHeroImage} 
            alt={`Professional window tinting services in ${city}, ${state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {region} Service Area
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Window Tinting & Shades in {city}, {state}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              {description}
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

      {/* Location Info Bar */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-primary-foreground/80 text-sm">City</p>
              <p className="text-primary-foreground font-bold text-lg">{city}, {state}</p>
            </div>
            {county && (
              <div>
                <p className="text-primary-foreground/80 text-sm">County</p>
                <p className="text-primary-foreground font-bold text-lg">{county}</p>
              </div>
            )}
            {population && (
              <div>
                <p className="text-primary-foreground/80 text-sm">Population</p>
                <p className="text-primary-foreground font-bold text-lg">{population}</p>
              </div>
            )}
            <div>
              <p className="text-primary-foreground/80 text-sm">Service Type</p>
              <p className="text-primary-foreground font-bold text-lg">Full Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                About {city}
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Window Tinting & Shade Services for {city} Residents & Businesses
              </h2>
              <p className="text-muted-foreground mb-6">
                Sunmasters Window Tinting and Shades proudly serves {city}, {state} and the surrounding {region} area. Our certified technicians bring professional-grade window tinting and shade installation services directly to your location, ensuring convenience without compromising quality.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you need automotive window tinting for your daily driver, residential film to reduce energy costs and protect your home, commercial solutions for your business, or motorized shades for effortless light control, Sunmasters delivers exceptional results with industry-leading products.
              </p>
              <p className="text-muted-foreground mb-6">
                The intense Texas sun can fade furniture, increase energy bills, and make interiors uncomfortable. Our professional window films and shades provide year-round comfort, blocking up to 98% of heat-causing infrared rays while maintaining your views and natural light.
              </p>
              
              {localFacts.length > 0 && (
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                    Why {city} Chooses Sunmasters
                  </h3>
                  <ul className="space-y-3">
                    {localFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-heading font-bold text-foreground text-xl mb-6">
                  Why Choose Sunmasters in {city}?
                </h3>
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
                    Ready to get started? Contact us today for a free estimate.
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

      {/* Benefits of Window Tinting */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Window Tinting
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Professional Window Tinting in {city}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              {city} residents and businesses face intense Texas heat and sun exposure year-round. Professional window tinting provides multiple benefits that improve comfort, save money, and protect your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tintingBenefits.map((benefit) => (
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
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Tinting Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Window Tinting Services
            </span>
            <h2 className="section-title text-foreground mt-2">
              Professional Window Film Installation in {city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              From automotive to residential and commercial applications, we offer comprehensive window tinting solutions for {city} and the surrounding {region} area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={`/${location.slug}-tx/${service.slug}`}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title} in {city}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shades Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Shades & Blinds
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Motorized Shades & Patio Screens in {city}
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete your home or business with our professional shade and blind installation services. Sunmasters offers a full range of motorized window treatments and outdoor screens designed for the {city} climate.
              </p>
              <p className="text-muted-foreground mb-6">
                Our motorized shades integrate seamlessly with smart home systems like Amazon Alexa, Google Home, and Apple HomeKit. Control your window treatments with voice commands, smartphone apps, or automated schedules for ultimate convenience and energy efficiency.
              </p>
              <p className="text-muted-foreground mb-8">
                For outdoor living spaces, our motorized patio screens transform your porch, deck, or pergola into a comfortable year-round retreat. Block the sun, keep out insects, and enjoy your outdoor space in any weather.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/motorized-patio-screens"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  Explore Patio Screens <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactLink className="border border-border hover:bg-card">
                  Get Shade Quote
                </ContactLink>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shadeTypes.map((shade) => (
                <div
                  key={shade.title}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                    <shade.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                    {shade.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{shade.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-foreground text-center mb-8">
              Your Trusted Window Tinting Experts in {city}, Texas
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                When it comes to professional window tinting and shade installation in {city}, {state}, Sunmasters Window Tinting and Shades stands apart as the premier choice for homeowners, vehicle owners, and business operators throughout {county || region}. Our commitment to quality craftsmanship, premium materials, and exceptional customer service has made us the go-to provider for window solutions across the Dallas-Fort Worth metroplex.
              </p>
              
              <h3 className="font-heading font-bold text-foreground text-xl mt-8 mb-4">
                Automotive Window Tinting in {city}
              </h3>
              <p className="mb-6">
                {city} drivers know the challenges of Texas heat. Summer temperatures regularly exceed 100°F, turning your vehicle into an oven. Our XPEL ceramic window films block up to 98% of infrared heat, keeping your cabin cool and comfortable. Unlike cheap dyed films that fade and bubble, XPEL's nano-ceramic technology maintains its performance and appearance for the lifetime of your vehicle.
              </p>
              <p className="mb-6">
                Every automotive tinting installation at Sunmasters is performed by certified XPEL technicians using precision computer-cut patterns. This ensures a perfect fit with no gaps, bubbles, or peeling edges. We offer multiple shade options to match your style while staying compliant with Texas tint laws.
              </p>
              
              <h3 className="font-heading font-bold text-foreground text-xl mt-8 mb-4">
                Residential Window Tinting for {city} Homes
              </h3>
              <p className="mb-6">
                Protect your {city} home from the relentless Texas sun with professional residential window tinting. Our window films reject solar heat, reduce glare, and block 99% of harmful UV rays that cause furniture fading, hardwood floor damage, and artwork deterioration. Many {city} homeowners see energy savings of 20-30% on cooling costs after installation.
              </p>
              <p className="mb-6">
                We offer a variety of residential film options including solar control films, decorative films, privacy films, and security films. Our team works with you to find the perfect solution that enhances your home's comfort, efficiency, and appearance.
              </p>
              
              <h3 className="font-heading font-bold text-foreground text-xl mt-8 mb-4">
                Commercial Window Film Solutions
              </h3>
              <p className="mb-6">
                {city} businesses trust Sunmasters for commercial window tinting that reduces operating costs and improves tenant comfort. From small storefronts to large office buildings, we provide custom solutions that address glare, heat, privacy, and security concerns. Our commercial films can reduce HVAC costs, extend equipment life, and create a more productive work environment.
              </p>
              
              <h3 className="font-heading font-bold text-foreground text-xl mt-8 mb-4">
                Motorized Shades for Modern {city} Living
              </h3>
              <p className="mb-6">
                Upgrade your window treatments with motorized shades and blinds that offer effortless control at the touch of a button. Perfect for hard-to-reach windows, large glass walls, or anyone who values convenience, our motorized solutions integrate with popular smart home platforms for voice control and automated scheduling.
              </p>
              <p className="mb-6">
                Our motorized patio screens are ideal for {city}'s outdoor lifestyle. Transform your patio, porch, or pergola into a comfortable living space protected from sun, wind, and insects. With the touch of a button, enjoy your outdoor area year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="section-title text-foreground mt-2">
              Frequently Asked Questions About Window Tinting in {city}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How much does window tinting cost in {city}, TX?
              </h3>
              <p className="text-muted-foreground">
                Window tinting prices in {city} vary based on the type of service. Automotive tinting typically ranges from $199-$599 depending on vehicle size and film quality. Residential and commercial projects are quoted based on square footage and film type. Contact Sunmasters for a free, no-obligation estimate.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Is window tinting legal in {city}, Texas?
              </h3>
              <p className="text-muted-foreground">
                Yes, window tinting is legal in Texas with specific regulations. Front side windows must allow at least 25% visible light transmission (VLT). Rear side windows and the back windshield can be any darkness. Windshield tinting is allowed above the AS-1 line. Sunmasters ensures all installations comply with Texas state laws.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does window tinting take?
              </h3>
              <p className="text-muted-foreground">
                Automotive window tinting typically takes 2-4 hours depending on the vehicle type and number of windows. Most vehicles can be completed same-day. Residential and commercial projects vary based on the number of windows and complexity. We provide accurate time estimates during your free consultation.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Do you offer motorized shade installation in {city}?
              </h3>
              <p className="text-muted-foreground">
                Yes! Sunmasters provides professional motorized shade and blind installation throughout {city} and the {region} area. We offer motorized patio screens, solar shades, blackout shades, roller shades, and smart home integrated window treatments. All installations include professional programming and setup.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What warranty do you offer on window tinting?
              </h3>
              <p className="text-muted-foreground">
                All XPEL window film installations are backed by a lifetime manufacturer warranty covering bubbling, peeling, cracking, and color change. This warranty is transferable and covers both materials and our professional installation. We stand behind every job we complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby && nearby.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-foreground text-2xl">
                Also Serving Nearby Communities
              </h2>
              <p className="text-muted-foreground mt-2">
                In addition to {city}, we provide window tinting and shade services throughout the {region} area.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((area) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={area}
                    to={`/locations/${slug}`}
                    className="px-4 py-2 bg-secondary border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {area}, TX
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started in {city}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Sunmasters today for a free estimate on window tinting, motorized shades, paint protection, or ceramic coating services in {city} and the surrounding area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider">
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:469-757-4325">
                <Phone className="w-4 h-4 mr-2" />
                (469) 757-4325
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationPage;
