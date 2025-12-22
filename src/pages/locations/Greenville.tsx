import { Helmet } from "react-helmet";
import { MapPin, Phone, Car, Home, Building2, Shield, Sparkles, Sun, CheckCircle2, Thermometer, DollarSign, Award, Eye, Lock, ToggleRight, Blinds, PanelTop } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { getLocationBySlug } from "@/data/locations";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Car,
    title: "Automotive Tinting",
    slug: "automotive-window-tint",
  },
  {
    icon: Home,
    title: "Residential Tinting",
    slug: "residential-window-tint",
  },
  {
    icon: Building2,
    title: "Commercial Tinting",
    slug: "commercial-window-tint",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    slug: "ceramic-coating",
  },
  {
    icon: Shield,
    title: "Security Film",
    slug: "security-window-film",
  },
  {
    icon: ToggleRight,
    title: "Smart Film",
    slug: "smart-film",
  },
  {
    icon: PanelTop,
    title: "Patio Screens",
    slug: "motorized-patio-screens",
  },
  {
    icon: Blinds,
    title: "Motorized Shades",
    slug: "motorized-window-shades",
  },
];

const tintingBenefits = [
  {
    icon: Thermometer,
    title: "Heat Reduction",
    description: "Block up to 98% of infrared heat, keeping your vehicle significantly cooler during Texas summers.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "99% UV ray rejection protects your skin and prevents interior fading and cracking.",
  },
  {
    icon: DollarSign,
    title: "Fuel Savings",
    description: "Reduce AC usage and improve fuel efficiency with professional heat-rejecting window film.",
  },
  {
    icon: Eye,
    title: "Glare Reduction",
    description: "Eliminate harsh glare for safer, more comfortable driving in bright conditions.",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Enhanced privacy for your vehicle while security film holds glass together if broken.",
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
  "Serving Greenville and Hunt County",
];

const GreenvillePage = () => {
  const location = getLocationBySlug("greenville");
  if (!location) return null;
  
  const { city, state, region, county, population, nearby, localFacts } = location;
  
  const pageTitle = `Automotive Window Tinting ${city}, ${state} | Car Tint & Ceramic Coating | Sunmasters`;
  const metaDescription = `Professional automotive window tinting in ${city}, ${state}. Car window tint, ceramic coating, paint protection film. XPEL certified installers. 99% UV protection. Free estimates.`;
  const canonicalUrl = `https://sunmasterstintandshades.com/locations/${location.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`automotive window tinting ${city}, car tint ${city} ${state}, ceramic coating ${city}, paint protection film ${city}, XPEL ${city}, ceramic tint ${city}, ${county} window tinting, car window tint near me`} />
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
            "name": "Sunmasters Window Tinting Greenville",
            "description": `Professional automotive window tinting in ${city}, ${state}`,
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
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Automotive Window Tinting Services",
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
                    "name": "Ceramic Coating",
                    "description": "Premium ceramic protection for vehicle paint"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paint Protection Film",
                    "description": "Clear bra protection against rock chips and scratches"
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
                "name": `How much does car window tinting cost in ${city}, TX?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Automotive window tinting prices in ${city} typically range from $199-$599 depending on vehicle size and film quality. Ceramic tint and XPEL films are at the higher end. Contact Sunmasters for a free estimate.`
                }
              },
              {
                "@type": "Question",
                "name": `Is window tinting legal in ${city}, Texas?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, window tinting is legal in Texas. Front side windows must allow at least 25% light transmission. Rear windows and back windshield can be any darkness. Sunmasters ensures all installations comply with Texas state laws."
                }
              },
              {
                "@type": "Question",
                "name": `How long does automotive window tinting take?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Automotive window tinting typically takes 2-4 hours depending on the vehicle. Sunmasters offers same-day service for most automotive tinting jobs in Greenville."
                }
              },
              {
                "@type": "Question",
                "name": `What is ceramic window tint?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ceramic window tint uses nano-ceramic technology to reject up to 98% of infrared heat without interfering with GPS, cell phones, or radio signals. It's the premium choice for Texas heat."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/ppf-homepage.mov" type="video/mp4" />
          </video>
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
              Automotive Window Tinting in {city}, {state}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              Looking for professional car window tinting in {city}? Sunmasters provides expert automotive window tinting, ceramic coating, and paint protection film services throughout {city} and {county}. Certified XPEL installers with 99% UV protection and lifetime warranty.
            </p>
            
            {/* Service Buttons - Right Below H1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/${service.slug}`}
                  className="flex flex-col items-center gap-2 p-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:bg-card hover:border-primary transition-all group"
                >
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-xs font-medium text-center">{service.title}</span>
                </Link>
              ))}
            </div>
            
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
              <p className="text-primary-foreground/80 text-sm">Specialty</p>
              <p className="text-primary-foreground font-bold text-lg">Automotive</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                About {city}
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Professional Automotive Window Tinting & Vehicle Protection
              </h2>
              <p className="text-muted-foreground mb-6">
                Sunmasters Window Tinting proudly serves {city}, {state} and the surrounding {county} area. Our certified technicians specialize in automotive window tinting, ceramic coating, and paint protection film services, bringing professional-grade vehicle protection directly to your location.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you're looking to protect your daily driver, enhance your truck or SUV, or preserve a luxury vehicle, Sunmasters delivers exceptional results with industry-leading XPEL products and certified installation techniques.
              </p>
              <p className="text-muted-foreground mb-6">
                The intense Texas sun can damage your vehicle's interior, increase cabin temperatures, and cause premature wear. Our professional automotive window films provide year-round protection, blocking up to 98% of heat-causing infrared rays while keeping your vehicle cooler and more comfortable.
              </p>
              
              {localFacts.length > 0 && (
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                    Why {city} Vehicle Owners Choose Sunmasters
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
                    Ready to protect your vehicle? Contact us today for a free estimate.
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Benefits
            </span>
            <h2 className="section-title text-foreground mt-2">
              Why Tint Your Vehicle in {city}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tintingBenefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby && nearby.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Also Serving Nearby Areas
              </h2>
              <p className="text-muted-foreground mt-2">
                We provide automotive window tinting throughout {county} and surrounding communities
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm"
                >
                  {area}, TX
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Protect Your Vehicle in {city}?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote on automotive window tinting, ceramic coating, or paint protection film. Same-day service available for most vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading uppercase tracking-wider">
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
                Call (469) 757-4325
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GreenvillePage;
