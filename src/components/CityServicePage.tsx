import { Helmet } from "react-helmet";
import { MapPin, Phone, CheckCircle2, ArrowRight, Thermometer, Sun, DollarSign, Eye, Lock, Award, Car, Home, Building2, Shield, Sparkles, Blinds, Palette, Store, ToggleRight } from "lucide-react";
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

const allServices = [
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
};

const companyBenefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

const CityServicePage = ({ location, service }: CityServicePageProps) => {
  const { city, state, region, county, nearby } = location;
  const { title, description, benefits, products, faqs, icon } = service;
  
  const IconComponent = iconMap[icon] || Sun;
  
  const pageTitle = `${title} in ${city}, TX | SunMasters Window Tinting & Shades`;
  const metaDescription = `Professional ${title.toLowerCase()} services in ${city}, Texas. ${description.slice(0, 100)}... Free estimates. Call (469) 757-4325.`;
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
          {service.slug === 'smart-film' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/smartfilm-bg.mp4" type="video/mp4" />
            </video>
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
              {title} in {city}, TX
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

export default CityServicePage;
