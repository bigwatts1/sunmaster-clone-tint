import { Helmet } from "react-helmet";
import { MapPin, Phone, Car, Home, Building2, Shield, Sparkles, Sun, CheckCircle2, ArrowRight, Blinds, Thermometer, DollarSign, Clock, Award, Zap, Eye, Lock, PanelTop, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { LocationData } from "@/data/locations";
import { Link } from "react-router-dom";
import locationHeroImage from "@/assets/dfw-window-tinting-service.jpeg";
import securityFilmImg from "@/assets/rockwall-security-window-film.jpg";

interface LocationPageProps {
  location: LocationData;
}

interface ServiceNavItem {
  icon: React.ElementType;
  title: string;
  slug: string;
  video?: string;
  image?: string;
}

const getServiceNavItems = (city: string): ServiceNavItem[] => [
  { icon: Car, title: `Automotive Tinting ${city} TX`, slug: "automotive-window-tint", video: "/videos/automotive-bg.mp4" },
  { icon: Home, title: `Residential Tinting ${city} TX`, slug: "residential-window-tint", video: "/videos/residential-bg.mp4" },
  { icon: Building2, title: `Commercial Tinting ${city} TX`, slug: "commercial-window-tint", video: "/videos/commercial-bg.mp4" },
  { icon: Sparkles, title: `Ceramic Tint ${city} TX`, slug: "ceramic-window-tint", video: "/videos/ceramic-bg.mov" },
  { icon: Shield, title: `Security Film ${city} TX`, slug: "security-window-film", image: securityFilmImg },
  { icon: ToggleRight, title: `Smart Film ${city} TX`, slug: "smart-film", video: "/videos/smartfilm-bg.mp4" },
  { icon: PanelTop, title: `Patio Screens ${city} TX`, slug: "motorized-patio-screens", video: "https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//copy_DF98BC66-AF50-462F-AE4A-29E0ECEA82E5.mov" },
];

const getServices = (city: string) => [
  {
    icon: Car,
    title: `Automotive Window Tinting ${city} TX`,
    description: `XPEL ceramic window film for cars, trucks, and SUVs in ${city} with up to 98% heat rejection.`,
    slug: "automotive-window-tint",
    video: "/videos/automotive-bg.mp4",
  },
  {
    icon: Home,
    title: `Residential Window Tinting ${city} TX`,
    description: `Energy-saving window film for ${city} homes that reduces heat, glare, and UV damage.`,
    slug: "residential-window-tint",
    video: "/videos/residential-bg.mp4",
  },
  {
    icon: Building2,
    title: `Commercial Window Tinting ${city} TX`,
    description: `Professional window film solutions for ${city} offices, storefronts, and commercial buildings.`,
    slug: "commercial-window-tint",
    video: "/videos/commercial-bg.mp4",
  },
  {
    icon: Sparkles,
    title: `Ceramic Window Tint ${city} TX`,
    description: `Premium ceramic technology for ${city} vehicles - superior heat rejection without signal interference.`,
    slug: "ceramic-window-tint",
    video: "/videos/ceramic-bg.mov",
  },
  {
    icon: Shield,
    title: `Security & Safety Film ${city} TX`,
    description: `Protect your ${city} property with film that holds glass together when broken.`,
    slug: "security-window-film",
  },
  {
    icon: Sun,
    title: `Solar Heat Rejection Film ${city} TX`,
    description: `Combat ${city} Texas heat with advanced films that reject up to 98% of infrared heat.`,
    slug: "solar-heat-rejection-film",
  },
  {
    icon: ToggleRight,
    title: `Smart Film ${city} TX`,
    description: `Switchable privacy glass for ${city} homes and businesses - transitions from clear to opaque instantly.`,
    slug: "smart-film",
    video: "/videos/smartfilm-bg.mp4",
  },
];

const getShadeTypes = (city: string) => [
  {
    icon: PanelTop,
    title: `Motorized Patio Screens ${city} TX`,
    description: `Transform your ${city} outdoor living space with retractable motorized screens that provide shade, insect protection, and weather resistance.`,
    slug: "motorized-patio-screens",
  },
  {
    icon: Blinds,
    title: `Motorized Blinds & Shades ${city} TX`,
    description: `Automated window treatments for ${city} homes with smart home integration for effortless light control and energy savings.`,
    slug: "motorized-window-shades",
  },
  {
    icon: Sun,
    title: `Solar Shades ${city} TX`,
    description: `Block harsh ${city} sunlight while maintaining your view with UV-filtering solar shade fabrics.`,
    slug: "motorized-window-shades",
  },
  {
    icon: Lock,
    title: `Blackout Shades ${city} TX`,
    description: `Complete light blocking for ${city} bedrooms, media rooms, and spaces requiring total darkness.`,
    slug: "motorized-window-shades",
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

// Generate unique intro content based on location characteristics
const getUniqueIntroContent = (location: LocationData): { heroIntro: string; aboutIntro: string; servicesIntro: string } => {
  const { city, region, county, population, description } = location;
  
  // Population-based variations
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  const isLargeCity = popNum > 200000;
  const isMediumCity = popNum > 50000 && popNum <= 200000;
  const isSmallCity = popNum <= 50000;
  
  // Region-based variations
  const isDallasMet = region === "Dallas Metro";
  const isNorthDFW = region === "North DFW";
  const isEastDFW = region === "East DFW";
  const isWestDFW = region === "West DFW";
  
  let heroIntro = "";
  let aboutIntro = "";
  let servicesIntro = "";
  
  if (isLargeCity) {
    heroIntro = `As one of the largest cities in Texas, ${city} demands top-tier window tinting solutions. Sunmasters delivers professional automotive, residential, and commercial window film installation to ${city}'s diverse neighborhoods and thriving business districts.`;
    aboutIntro = `${city}'s size and diversity create unique challenges for vehicle owners, homeowners, and businesses. From downtown high-rises to suburban developments, Sunmasters provides tailored window tinting solutions that address the specific needs of ${city} properties.`;
    servicesIntro = `With a population of ${population}, ${city} is a major hub for window tinting services. Our team handles everything from fleet vehicles and commercial buildings to luxury homes and daily drivers.`;
  } else if (isMediumCity) {
    heroIntro = `${city}'s growing community of ${population} residents deserves exceptional window tinting services. Sunmasters brings certified expertise and premium materials to ${city} homes, businesses, and vehicles throughout ${county || region}.`;
    aboutIntro = `${description} Our experienced installers understand the unique character of ${city} and provide customized solutions for every property type, from new construction to established neighborhoods.`;
    servicesIntro = `${city} homeowners and vehicle owners throughout ${county || region} trust Sunmasters for quality window film installation. We tailor our services to meet the specific needs of the ${city} community.`;
  } else {
    heroIntro = `${city}'s close-knit community values quality craftsmanship and personalized service. Sunmasters brings big-city expertise with small-town care to every window tinting project in ${city} and surrounding areas.`;
    aboutIntro = `${description} Whether you are protecting a family vehicle, reducing energy costs at home, or enhancing your business storefront, our team delivers exceptional results that ${city} residents can count on.`;
    servicesIntro = `Even in smaller communities like ${city}, Texas heat demands professional window tinting solutions. Sunmasters provides the same premium service and XPEL products to ${city} that we deliver throughout the DFW metroplex.`;
  }
  
  // Add region-specific context
  if (isEastDFW) {
    aboutIntro += ` Located in ${region}, ${city} enjoys a more relaxed pace while still facing the intense Texas sun that makes window tinting essential.`;
  } else if (isNorthDFW) {
    aboutIntro += ` As part of the rapidly growing ${region} corridor, ${city} represents the future of North Texas living, and our window solutions match that forward-thinking approach.`;
  } else if (isWestDFW) {
    aboutIntro += ` ${city}'s position in ${region} offers convenient access to both Dallas and Fort Worth, and our mobile service makes getting professional window tinting even easier.`;
  }
  
  return { heroIntro, aboutIntro, servicesIntro };
};

// Generate unique benefits content per city
const getUniqueBenefitsContent = (city: string, region: string): string => {
  const variations = [
    `Living in ${city} means dealing with Texas weather extremes—scorching summers that push air conditioning to its limits and intense UV exposure that damages interiors. Professional window tinting addresses these challenges while adding value to your property.`,
    `${city} residents face unique environmental challenges from the Texas climate. With summer temperatures regularly exceeding 100°F, quality window film is not a luxury but a necessity for comfort and protection.`,
    `The ${region} area experiences some of the most intense sun exposure in the country. For ${city} homeowners and vehicle owners, professional window tinting provides year-round protection and comfort.`,
    `From protecting your vehicle's interior to reducing home energy costs, ${city} residents discover that window tinting pays for itself through comfort, protection, and savings.`
  ];
  
  // Use city name hash to pick a consistent variation
  const hash = city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return variations[hash % variations.length];
};

const LocationPage = ({ location }: LocationPageProps) => {
  const { city, state, region, county, population, nearby, description, localFacts, businessName, address, phone, heroVideo } = location;
  
  // Generate location-specific data
  const serviceNavItems = getServiceNavItems(city);
  const services = getServices(city);
  const shadeTypes = getShadeTypes(city);
  const uniqueContent = getUniqueIntroContent(location);
  const uniqueBenefits = getUniqueBenefitsContent(city, region);
  
  const pageTitle = `Window Tinting ${city}, TX | Automotive, Residential & Commercial | Sunmasters`;
  const metaDescription = `Professional window tinting in ${city}, TX. Sunmasters offers automotive, residential & commercial window film installation. XPEL certified. 99% UV protection. Lifetime warranty. Free estimates in ${county || region}.`;
  const canonicalUrl = `https://www.sunmasterstintandshades.com/locations/${location.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`window tinting ${city} TX, automotive window tinting ${city}, car tint ${city} Texas, home window tinting ${city} TX, residential window tinting ${city}, commercial window film ${city} TX, ceramic tint ${city}, security film ${city} TX, smart film ${city}, motorized shades ${city} TX, patio screens ${city}, XPEL installer ${city}, ${county} window tinting, window tinting near me ${city}`} />
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
            "name": `Sunmasters Window Tinting ${city} TX`,
            "description": `Professional window tinting in ${city}, ${state}. Automotive, residential & commercial window film. XPEL certified installers serving ${county || region}.`,
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
              "name": `Window Tinting Services ${city} TX`,
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Automotive Window Tinting ${city} TX`,
                    "description": `Professional car window tinting in ${city}, Texas with XPEL ceramic films. 98% heat rejection, 99% UV protection.`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Residential Window Tinting ${city} TX`,
                    "description": `Home window tinting in ${city}, TX for energy savings, UV protection, and reduced glare.`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Commercial Window Tinting ${city} TX`,
                    "description": `Commercial window film in ${city} for offices, storefronts, and commercial buildings.`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Ceramic Window Tint ${city} TX`,
                    "description": `Premium ceramic tint in ${city} with superior heat rejection and no signal interference.`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Security Film ${city} TX`,
                    "description": `Security window film in ${city} for break-in protection and storm safety.`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Motorized Patio Screens ${city} TX`,
                    "description": `Motorized patio screens in ${city} for outdoor living with insect and sun protection.`
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

      {/* Hero Section - Single H1 */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0">
          {heroVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={locationHeroImage} 
              alt={`Professional window tinting services in ${city}, ${state}`}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
              loading="eager"
            />
          )}
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
              Window Tinting {city}, TX
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              {uniqueContent.heroIntro}
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

      {/* Service Navigation Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Services in {city}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceNavItems.map((svc) => (
              <Link
                key={svc.slug}
                to={`/${location.slug}-tx/${svc.slug}`}
                className="relative bg-card border border-border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50"
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

      {/* H2: Professional Window Tinting Services in {City}, Texas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Window Tinting {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Professional Window Tinting Services in {city}, Texas
              </h2>
              <p className="text-muted-foreground mb-6">
                {uniqueContent.aboutIntro}
              </p>
              <p className="text-muted-foreground mb-6">
                Our certified XPEL installers bring decades of combined experience to every project in {city}. Whether you need heat-rejecting ceramic film for your vehicle, energy-saving residential tint for your home, or privacy film for your office, we deliver precision installation with a lifetime warranty.
              </p>
              <p className="text-muted-foreground mb-6">
                {uniqueContent.servicesIntro}
              </p>
              
              {localFacts.length > 0 && (
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">
                    About {city}, TX
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
                  Sunmasters Advantage
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

      {/* H2: Automotive, Residential & Commercial Window Tinting in {City} */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Complete Tinting Solutions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Automotive, Residential & Commercial Window Tinting in {city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              From vehicles to homes to businesses, Sunmasters provides comprehensive window film solutions throughout {city} and {county || region}. Each installation is backed by our lifetime warranty and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={`/${location.slug}-tx/${service.slug}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={service.video} type={service.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-primary/50" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Benefits of Window Tinting in {City}, TX */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Window Tinting
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Window Tinting in {city}, TX
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              {uniqueBenefits}
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

      {/* H2: Why Choose Sunmasters in {City}, TX */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                The Sunmasters Difference
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Why Choose Sunmasters in {city}, TX
              </h2>
              <p className="text-muted-foreground mb-6">
                Since 1979, Sunmasters has been the trusted name in window tinting throughout the Dallas-Fort Worth metroplex. Our reputation is built on quality materials, expert installation, and customer satisfaction that speaks for itself.
              </p>
              <p className="text-muted-foreground mb-6">
                When you choose Sunmasters for your {city} window tinting project, you get more than just film on glass. You get certified XPEL installers who take pride in their craft, premium materials that perform year after year, and a lifetime warranty that protects your investment.
              </p>
              <p className="text-muted-foreground mb-8">
                We understand that {city} residents and business owners have high standards. That is why we deliver the same exceptional quality to every project, whether it is a single vehicle or an entire commercial building.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactLink className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                  Get Free {city} Estimate
                </ContactLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-card"
                  asChild
                >
                  <a href="tel:469-757-4325">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">45+ Years</h3>
                <p className="text-muted-foreground text-sm">Serving DFW since 1979</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Lifetime</h3>
                <p className="text-muted-foreground text-sm">Warranty on all work</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">XPEL</h3>
                <p className="text-muted-foreground text-sm">Certified installers</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Same Day</h3>
                <p className="text-muted-foreground text-sm">Service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shades Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Motorized Shades {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Motorized Shades & Patio Screens in {city}
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete your {city} home or business with professional motorized shade installation. Sunmasters offers motorized blinds, patio screens, and solar shades designed for the Texas climate.
              </p>
              <p className="text-muted-foreground mb-6">
                Our motorized shades integrate seamlessly with smart home systems like Amazon Alexa, Google Home, and Apple HomeKit. Control your window treatments with voice commands, smartphone apps, or automated schedules.
              </p>
              <p className="text-muted-foreground mb-8">
                For outdoor living spaces, our motorized patio screens transform your porch, deck, or pergola into a comfortable year-round retreat. Block the sun, keep out insects, and enjoy outdoor living in any weather.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/${location.slug}-tx/motorized-patio-screens`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  Patio Screens {city} <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactLink className="border border-border hover:bg-card">
                  Get Shade Quote
                </ContactLink>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shadeTypes.map((shade) => (
                <Link
                  key={shade.title}
                  to={`/${location.slug}-tx/${shade.slug}`}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                    <shade.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {shade.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{shade.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Film Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Smart Film {city} TX
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Smart Film in {city} - Switchable Privacy Glass
              </h2>
              <p className="text-muted-foreground mb-6">
                Experience the future of privacy with smart film in {city}. Transform any glass surface from completely clear to frosted white in milliseconds with the flip of a switch or tap of your phone.
              </p>
              <p className="text-muted-foreground mb-6">
                Smart film is perfect for homes, offices, conference rooms, medical facilities, and retail spaces. Create instant privacy when needed while maintaining an open, bright atmosphere when desired. Our PDLC technology is energy-efficient and easy to install.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Instant privacy on demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Retrofit to existing glass</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Smart home integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">99% UV protection</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/${location.slug}-tx/smart-film`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  Smart Film {city} <ArrowRight className="w-4 h-4" />
                </Link>
                <ContactLink className="border border-border hover:bg-card">
                  Get Smart Film Quote
                </ContactLink>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <ToggleRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                Smart Film Applications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Conference Rooms</span>
                    <p className="text-muted-foreground text-sm">Instant privacy for meetings at the touch of a button</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Healthcare Facilities</span>
                    <p className="text-muted-foreground text-sm">Patient privacy without sacrificing natural light</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Bathroom Windows</span>
                    <p className="text-muted-foreground text-sm">Natural light when desired, complete privacy when needed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-medium">Retail Storefronts</span>
                    <p className="text-muted-foreground text-sm">After-hours privacy for security and visual merchandising</p>
                  </div>
                </li>
              </ul>
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
              Window Tinting FAQs for {city}
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

      {/* H2: Service Areas Near {City} */}
      {nearby && nearby.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-foreground text-2xl">
                Service Areas Near {city}
              </h2>
              <p className="text-muted-foreground mt-2">
                In addition to {city}, we provide window tinting and shade services throughout {county || region} and surrounding communities.
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
            <ContactLink className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider">
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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

export default LocationPage;