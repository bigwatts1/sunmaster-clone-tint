import { Helmet } from "react-helmet";
import { MapPin, Phone, Car, Home, Building2, Shield, Sparkles, Sun, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import { LocationData } from "@/data/locations";
import { Link } from "react-router-dom";

interface LocationPageProps {
  location: LocationData;
}

const services = [
  {
    icon: Car,
    title: "Automotive Window Tinting",
    description: "XPEL ceramic window film for cars, trucks, and SUVs with up to 98% heat rejection.",
    link: "/automotive-tinting",
  },
  {
    icon: Home,
    title: "Residential Window Tinting",
    description: "Energy-saving window film for homes that reduces heat, glare, and UV damage.",
    link: "/residential-tinting",
  },
  {
    icon: Building2,
    title: "Commercial Window Tinting",
    description: "Professional window film solutions for offices, storefronts, and commercial buildings.",
    link: "/commercial-tinting",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "XPEL PPF protects your vehicle's paint from rock chips, scratches, and road debris.",
    link: "/paint-protection",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Professional-grade ceramic coating for long-lasting paint protection and shine.",
    link: "/ceramic-coating",
  },
  {
    icon: Sun,
    title: "Smart Film",
    description: "Switchable privacy glass that transforms from clear to opaque with the touch of a button.",
    link: "/smart-film",
  },
];

const benefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

const LocationPage = ({ location }: LocationPageProps) => {
  const { city, state, region, county, population, nearby, description, localFacts } = location;
  
  const pageTitle = `Window Tinting ${city}, ${state} | Auto, Home & Commercial Tint | Sunmasters`;
  const metaDescription = `Professional window tinting in ${city}, ${state}. Automotive, residential & commercial window film. XPEL certified. 99% UV protection. Free estimates. Serving ${city} and ${region}.`;
  const canonicalUrl = `https://sunmastersdfw.com/locations/${location.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`window tinting ${city}, car tint ${city} ${state}, home window tinting ${city}, commercial window film ${city}, XPEL ${city}, ceramic tint ${city}, PPF ${city}, ${county} window tinting`} />
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
            "description": `Professional window tinting services in ${city}, ${state}`,
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
            }
          })}
        </script>
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {region} Service Area
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Window Tinting in {city}, {state}
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
                Window Tinting Services for {city} Residents & Businesses
              </h2>
              <p className="text-muted-foreground mb-6">
                Sunmasters Window Tinting and Shades proudly serves {city}, {state} and the surrounding 
                {region} area. Our certified technicians bring professional-grade window tinting services 
                directly to your location, ensuring convenience without compromising quality.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you need automotive window tinting for your daily driver, residential film to 
                reduce energy costs and protect your home, or commercial solutions for your business, 
                Sunmasters delivers exceptional results with industry-leading XPEL products.
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
                  {benefits.map((benefit, index) => (
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

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="section-title text-foreground mt-2">
              Window Tinting Services Available in {city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              From automotive to residential and commercial applications, we offer comprehensive 
              window tinting solutions for {city} and the surrounding {region} area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
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

      {/* Nearby Areas */}
      {nearby && nearby.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-foreground text-2xl">
                Also Serving Nearby Communities
              </h2>
              <p className="text-muted-foreground mt-2">
                In addition to {city}, we provide window tinting services throughout the {region} area.
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
            Contact Sunmasters today for a free estimate on window tinting, paint protection, 
            or ceramic coating services in {city} and the surrounding area.
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
