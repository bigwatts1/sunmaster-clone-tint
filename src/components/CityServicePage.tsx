import { Helmet } from "react-helmet";
import { MapPin, Phone, CheckCircle2, ArrowRight, Thermometer, Sun, DollarSign, Eye, Lock, Award, Car, Home, Building2, Shield, Sparkles, Blinds, Palette, Store, ToggleRight, PanelTop, Wind, Bug, Smartphone, Zap, Sofa, Users, Layers, Droplets, Clock, Gem, AlertTriangle, School, TrendingDown, Leaf } from "lucide-react";
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
  Sofa,
  Users,
  Layers,
  Droplets,
  Clock,
  Gem,
  AlertTriangle,
  School,
  TrendingDown,
  Leaf,
};

const companyBenefits = [
  "Certified XPEL installers with factory training",
  "Lifetime warranty on all window film installations",
  "Free estimates with no obligation",
  "Same-day service available for most vehicles",
  "Mobile service options for your convenience",
  "Serving the entire DFW metroplex",
];

// Automotive Tinting specific content
const automotiveBenefits = [
  { icon: Thermometer, title: "Superior Heat Rejection", description: "XPEL PRIME XR PLUS blocks up to 98% of infrared heat, keeping your cabin up to 25°F cooler even in Texas summer heat." },
  { icon: Sun, title: "99% UV Protection", description: "Protect yourself and your passengers from harmful UV rays that cause skin damage and accelerate interior fading." },
  { icon: Eye, title: "Glare Reduction", description: "Reduce eye strain and improve visibility by cutting harsh sunlight glare while driving." },
  { icon: Shield, title: "Interior Protection", description: "Prevent cracking, fading, and deterioration of your dashboard, seats, and interior trim." },
  { icon: Lock, title: "Enhanced Privacy", description: "Keep valuables out of sight and enjoy privacy from prying eyes at stoplights and parking lots." },
  { icon: Sparkles, title: "Sleek Appearance", description: "Enhance your vehicle's aesthetics with a clean, uniform look that complements any color or style." },
];

const xpelProducts = [
  { name: "XPEL PRIME XR PLUS™", tagline: "The Ultimate Ceramic Film", specs: [{ label: "Infrared Heat Rejection", value: "Up to 98%" }, { label: "UV Rejection", value: "99%" }], features: ["Superior heat rejection", "Crystal clear clarity", "No metal layers", "Lifetime warranty"] },
  { name: "XPEL PRIME XR™", tagline: "Performance Ceramic Film", specs: [{ label: "Infrared Heat Rejection", value: "Up to 88%" }, { label: "UV Rejection", value: "99%" }], features: ["Nano-ceramic technology", "Color-stable dyes", "No fading or purpling", "Lifetime warranty"] },
  { name: "XPEL PRIME CS™", tagline: "Carbon Ceramic Film", specs: [{ label: "Infrared Heat Rejection", value: "Up to 68%" }, { label: "UV Rejection", value: "99%" }], features: ["Carbon construction", "Non-reflective finish", "Budget-friendly", "Lifetime warranty"] },
];

// Residential Tinting specific content
const residentialBenefits = [
  { icon: Thermometer, title: "Heat Reduction", description: "Block up to 85% of solar heat from entering your home. Keep rooms comfortable without overworking your AC system." },
  { icon: Sun, title: "UV Protection", description: "Block up to 99% of harmful UV rays that cause skin damage and fade your furniture, flooring, and artwork." },
  { icon: DollarSign, title: "Energy Savings", description: "Reduce cooling costs by up to 30% in Texas summers. Window film pays for itself through lower utility bills." },
  { icon: Eye, title: "Glare Reduction", description: "Eliminate harsh glare on TVs, computer screens, and workspaces while maintaining natural light." },
  { icon: Shield, title: "Added Security", description: "Security films hold glass together if broken, deterring intruders and protecting against storm damage." },
  { icon: Sofa, title: "Furniture Protection", description: "Preserve your interior investments. UV rays can fade furniture, hardwood floors, and artwork in just months." },
];

const residentialFilmTypes = [
  { name: "Solar Control Film", description: "The most popular choice for Texas homes. Blocks heat and UV rays while maintaining your view.", bestFor: "Living rooms, bedrooms, sunrooms", features: ["Up to 85% heat rejection", "99% UV protection", "Reduces glare", "Various tint levels"] },
  { name: "Ceramic Window Film", description: "Premium nano-ceramic technology provides superior heat rejection without darkening your windows.", bestFor: "Home offices, media rooms, smart homes", features: ["No signal interference", "Crystal clear appearance", "Maximum heat rejection", "Color stable technology"] },
  { name: "Dual-Reflective Film", description: "Reflective exterior for daytime privacy, neutral interior to preserve your view.", bestFor: "Street-facing windows, ground floor rooms", features: ["Daytime privacy", "Non-mirror interior", "Excellent heat control", "Professional appearance"] },
  { name: "Security Film", description: "Thick, tear-resistant film holds glass together when broken. Protects against break-ins and severe weather.", bestFor: "Entry points, sliding doors, storm-prone areas", features: ["4-14 mil thickness", "Impact resistance", "Holds shattered glass", "Deters intruders"] },
];

// Commercial Tinting specific content
const commercialBenefits = [
  { icon: DollarSign, title: "Reduce Energy Costs", description: "Cut cooling costs by 25-35% by blocking solar heat gain. Window film delivers one of the fastest ROIs of any building upgrade." },
  { icon: Users, title: "Employee Comfort", description: "Eliminate hot spots and temperature imbalances. Comfortable employees are more productive and satisfied." },
  { icon: Sun, title: "Glare Reduction", description: "Reduce eye strain on computer screens and improve visibility for customer-facing displays and presentations." },
  { icon: Shield, title: "UV Protection", description: "Block 99% of harmful UV rays that fade merchandise, furniture, flooring, and interior finishes." },
  { icon: Lock, title: "Enhanced Security", description: "Security films hold glass together when broken, deterring break-ins and protecting against severe weather." },
  { icon: Palette, title: "Professional Appearance", description: "Create a uniform, polished exterior appearance while adding privacy and branding opportunities." },
];

const commercialFilmTypes = [
  { name: "Solar Control Film", description: "The most popular choice for commercial buildings. Significantly reduces heat gain and glare.", bestFor: "Office buildings, retail stores, restaurants", features: ["Up to 80% heat rejection", "Reduces HVAC load", "Multiple tint levels", "Quick ROI"] },
  { name: "Ceramic Window Film", description: "Premium nano-ceramic technology offers superior heat rejection without the reflective appearance.", bestFor: "Tech offices, hospitals, call centers", features: ["No signal interference", "Non-reflective finish", "Maximum clarity", "Color neutral"] },
  { name: "Security & Safety Film", description: "Thick, tear-resistant film holds glass together when broken. Protects against break-ins and severe weather.", bestFor: "Storefronts, banks, government buildings", features: ["4-15 mil thickness", "Impact resistance", "Forced entry protection", "Storm protection"] },
  { name: "Decorative & Branding Film", description: "Transform plain glass into a branded asset. Frosted patterns, logos, privacy bands, and custom graphics.", bestFor: "Conference rooms, lobbies, storefronts", features: ["Custom logos & graphics", "Frosted privacy", "Partition solutions", "Brand reinforcement"] },
];

const commercialIndustries = [
  { name: "Office Buildings", description: "Reduce operating costs and improve tenant comfort", applications: ["Lobbies & atriums", "Individual offices", "Conference rooms", "Common areas"] },
  { name: "Retail & Storefronts", description: "Protect merchandise and create inviting shopping environments", applications: ["Display windows", "Fitting rooms", "Back offices", "Security applications"] },
  { name: "Restaurants & Hospitality", description: "Enhance guest comfort and reduce energy costs", applications: ["Dining areas", "Kitchen partitions", "Patio enclosures", "Hotel rooms"] },
];

// Ceramic Tint specific content
const ceramicTintBenefits = [
  { icon: Thermometer, title: "Maximum Heat Rejection", description: "Ceramic technology blocks up to 98% of infrared heat without the need for dark tint or metallic layers." },
  { icon: Car, title: "No Signal Interference", description: "Unlike metallic films, ceramic tint won't interfere with GPS, cell signals, satellite radio, or toll tags." },
  { icon: Sparkles, title: "Crystal Clear Clarity", description: "Nano-ceramic particles provide excellent visibility without the hazy or reflective appearance of other films." },
  { icon: Sun, title: "99% UV Protection", description: "Protect your skin and interior from harmful UV rays that cause fading and damage." },
  { icon: Award, title: "Color Stable", description: "Advanced ceramic technology won't turn purple or fade over time like dyed films." },
  { icon: Shield, title: "Scratch Resistant", description: "Durable construction resists scratches from normal wear and cleaning." },
];

// Security Film specific content
const securityFilmBenefits = [
  { icon: Shield, title: "Break-In Deterrent", description: "Security film holds glass together when struck, slowing intruders and giving you precious time to react or escape." },
  { icon: Wind, title: "Storm Protection", description: "Protects against flying debris from Texas storms, tornadoes, and high winds. Keeps shattered glass intact." },
  { icon: AlertTriangle, title: "Accident Safety", description: "Prevents dangerous glass shards from scattering during accidental impacts—essential for homes with children and pets." },
  { icon: Sun, title: "UV Protection", description: "Blocks up to 99% of harmful UV rays, protecting occupants from skin damage and preventing fading." },
  { icon: Lock, title: "Smash & Grab Prevention", description: "Deters quick theft attempts at retail locations. Even if glass cracks, the film barrier prevents easy access." },
  { icon: Eye, title: "Invisible Protection", description: "Crystal-clear film provides maximum security without changing the appearance of your windows." },
];

const securityFilmOptions = [
  { name: "4 Mil Clear Safety Film", thickness: "4 mil", description: "Entry-level protection ideal for residential applications.", applications: ["Residential windows", "Interior glass doors", "Glass partitions", "Bathroom glass"], features: ["Fragment retention", "99% UV protection", "Optically clear", "Scratch-resistant coating"] },
  { name: "8 Mil Security Film", thickness: "8 mil", description: "Enhanced protection for homes and businesses. Provides significant resistance against impacts.", applications: ["Ground-floor windows", "Sliding glass doors", "Storefronts", "Office buildings"], features: ["Impact resistance", "Forced entry delay", "99% UV protection", "Solar heat rejection options"], popular: true },
  { name: "12-14 Mil Heavy Duty Film", thickness: "12-14 mil", description: "Maximum protection for high-security applications.", applications: ["Schools & government buildings", "Banks & financial institutions", "Jewelry stores", "High-value retail"], features: ["Maximum impact resistance", "Extended forced entry delay", "Bomb blast mitigation", "GSA & ASTM certified options"] },
];

const securityApplications = [
  { icon: Home, title: "Residential Security", description: "Protect your family and home from break-ins, accidents, and severe weather.", points: ["Entry point reinforcement", "Child & pet safety", "Storm debris protection", "Sliding door security"] },
  { icon: Building2, title: "Commercial Protection", description: "Safeguard your business, employees, and assets from smash-and-grab theft and vandalism.", points: ["Storefront protection", "Smash & grab deterrent", "Employee safety", "Liability reduction"] },
  { icon: School, title: "Schools & Institutions", description: "Enhance safety in educational facilities and government buildings.", points: ["Active threat protection", "Classroom safety", "Fragment retention", "Emergency response time"] },
];

// Smart Film specific content
const smartFilmBenefits = [
  { icon: Eye, title: "Instant Privacy", description: "Switch from transparent to opaque in milliseconds. Perfect for conference rooms, bathrooms, and private offices." },
  { icon: Zap, title: "Energy Efficient", description: "Reduce cooling costs by blocking solar heat when frosted. Smart film can cut energy consumption by up to 30%." },
  { icon: Sun, title: "UV Protection", description: "Blocks up to 99% of harmful UV rays in both clear and frosted states, protecting furnishings and skin." },
  { icon: Thermometer, title: "Climate Control", description: "Helps regulate indoor temperature by controlling solar heat gain through windows." },
  { icon: Shield, title: "Glare Reduction", description: "Eliminate harsh glare on screens and workspaces while maintaining natural light." },
  { icon: Lock, title: "Security & Safety", description: "The film layer adds shatter resistance to glass, providing an extra layer of protection." },
];

const smartFilmApplications = [
  "Office conference rooms & meeting spaces",
  "Medical facilities & patient rooms",
  "Residential bathrooms & bedrooms",
  "Retail storefronts & display windows",
  "Restaurant private dining areas",
  "Bank teller windows & secure areas",
  "Hotel room partitions & bathrooms",
  "Residential skylights & sunrooms",
];

// Motorized Patio Screens specific content
const patioScreenBenefits = [
  { icon: Sun, title: "UV & Heat Protection", description: "Block up to 99% of harmful UV rays while reducing temperatures by up to 15°F, making your outdoor space comfortable even in Texas summers." },
  { icon: Bug, title: "Insect Protection", description: "Keep mosquitoes, flies, and other pests out while still enjoying fresh air and natural ventilation in your outdoor living area." },
  { icon: Wind, title: "Wind & Weather Shield", description: "Durable screens withstand wind gusts up to 60+ MPH and protect your patio furniture from rain, dust, and debris." },
  { icon: Eye, title: "Privacy On Demand", description: "Transform your open patio into a private retreat at the touch of a button without sacrificing views or airflow." },
  { icon: Smartphone, title: "Smart Home Integration", description: "Control your screens via remote, wall switch, or smartphone app. Integrate with smart home systems for automated operation." },
  { icon: Home, title: "Increased Home Value", description: "Motorized patio screens add functional outdoor living space, increasing your home's appeal and resale value." },
];

const patioScreenTypes = [
  { name: "Solar Mesh Screens", description: "Block UV rays and reduce heat while maintaining outward visibility. Perfect for Texas sun protection.", features: ["Up to 90% UV block", "Heat reduction", "Maintains views", "Energy savings"] },
  { name: "Insect Mesh Screens", description: "Fine mesh keeps even the smallest insects out while allowing maximum airflow and visibility.", features: ["No-see-um protection", "Maximum airflow", "Crystal clear views", "Durable fiberglass mesh"] },
  { name: "Privacy Screens", description: "Opaque or semi-opaque options for complete privacy from neighbors and street view.", features: ["100% privacy", "Wind protection", "Multiple opacity levels", "Various colors available"] },
  { name: "Clear Vinyl Screens", description: "Transparent panels that block wind and rain while maintaining full visibility. Ideal for cooler months.", features: ["Rain protection", "Wind barrier", "Full visibility", "Extend patio season"] },
];

const patioApplications = [
  { title: "Patios & Porches", description: "Enclose open patios and porches to create comfortable, bug-free outdoor living rooms." },
  { title: "Pergolas & Gazebos", description: "Add motorized screens to pergolas for shade and protection without losing the open-air feel." },
  { title: "Outdoor Kitchens", description: "Protect your outdoor cooking and dining area from insects and debris while entertaining." },
  { title: "Pool Enclosures", description: "Screen in pool areas to keep out bugs and debris while maintaining visibility and airflow." },
  { title: "Restaurants & Bars", description: "Commercial-grade screens for outdoor dining areas that can be deployed based on weather conditions." },
  { title: "Garages & Workshops", description: "Keep your workspace ventilated and bug-free while working with the garage door open." },
];

const CityServicePage = ({ location, service }: CityServicePageProps) => {
  const { city, state, region, county, nearby, businessName, address, phone } = location;
  const { title, description, benefits, products, faqs, icon } = service;
  
  // Get service-specific hero background
  const currentServiceData = allServices.find(s => s.slug === service.slug);
  const IconComponent = iconMap[icon] || Sun;
  
  // Service-specific SEO title patterns
  const getPageTitle = () => {
    switch(service.slug) {
      case 'automotive-window-tint':
        return `#1 Automotive Window Tinting ${city}, TX | Car Tint ${city} Texas | Sunmasters`;
      case 'residential-window-tint':
        return `Residential Window Tinting ${city}, TX | Home Tinting ${city} Texas | Sunmasters`;
      case 'commercial-window-tint':
        return `Commercial Window Tinting ${city}, TX | Office Tint ${city} Texas | Sunmasters`;
      case 'ceramic-window-tint':
        return `Ceramic Window Tint ${city}, TX | Premium Ceramic Tinting ${city} Texas | Sunmasters`;
      case 'security-window-film':
        return `Security Window Film ${city}, TX | Safety Film ${city} Texas | Sunmasters`;
      case 'smart-film':
        return `Smart Film ${city}, TX | Switchable Privacy Glass ${city} Texas | Sunmasters`;
      case 'motorized-patio-screens':
        return `Motorized Patio Screens ${city}, TX | Outdoor Shades ${city} Texas | Sunmasters`;
      default:
        return `${title} ${city}, TX | Sunmasters Window Tinting`;
    }
  };

  const getMetaDescription = () => {
    switch(service.slug) {
      case 'automotive-window-tint':
        return `Looking for automotive window tinting ${city}, TX? Sunmasters offers professional car window tinting ${city} Texas with XPEL ceramic film. 98% heat rejection, 99% UV protection. Free estimates in ${county || region}.`;
      case 'residential-window-tint':
        return `Professional residential window tinting ${city}, TX. Home window tinting ${city} Texas reduces energy costs up to 30%, blocks 99% UV rays. Free estimates from Sunmasters in ${county || region}.`;
      case 'commercial-window-tint':
        return `Commercial window tinting ${city}, TX for offices, storefronts & buildings. Professional window film ${city} Texas reduces cooling costs. XPEL certified. Free estimates in ${county || region}.`;
      case 'ceramic-window-tint':
        return `Premium ceramic window tint ${city}, TX. XPEL ceramic tinting ${city} Texas with 98% infrared heat rejection, no signal interference. Lifetime warranty. Free estimates in ${county || region}.`;
      case 'security-window-film':
        return `Security window film ${city}, TX protects against break-ins & storms. Safety film ${city} Texas holds glass together. 4-14 mil options. Free estimates from Sunmasters in ${county || region}.`;
      case 'smart-film':
        return `Smart film installation ${city}, TX. Switchable privacy glass ${city} Texas - clear to frosted instantly. Perfect for offices & homes. Free estimates in ${county || region}.`;
      case 'motorized-patio-screens':
        return `Motorized patio screens ${city}, TX. Retractable outdoor screens ${city} Texas for bug protection, shade & privacy. Smart home ready. Free estimates in ${county || region}.`;
      default:
        return `Professional ${title.toLowerCase()} ${city}, Texas. ${description.slice(0, 80)}... Free estimates from Sunmasters. Call (469) 757-4325.`;
    }
  };

  const getKeywords = () => {
    const baseKeywords = `${title.toLowerCase()} ${city} TX, ${title.toLowerCase()} ${city} Texas, ${service.slug.replace(/-/g, ' ')} ${city}`;
    switch(service.slug) {
      case 'automotive-window-tint':
        return `automotive window tinting ${city} TX, car window tinting ${city} Texas, auto tint ${city}, vehicle window tinting ${city} TX, XPEL tint ${city}, ceramic car tint ${city} TX, ${county} car tinting, window tinting near me ${city}`;
      case 'residential-window-tint':
        return `residential window tinting ${city} TX, home window tinting ${city} Texas, house window film ${city}, energy saving window film ${city} TX, UV protection windows ${city}, ${county} home tinting, window tinting near me ${city}`;
      case 'commercial-window-tint':
        return `commercial window tinting ${city} TX, office window tinting ${city} Texas, storefront window film ${city}, business window tinting ${city} TX, ${county} commercial tinting, building window film ${city}`;
      case 'ceramic-window-tint':
        return `ceramic window tint ${city} TX, ceramic tinting ${city} Texas, XPEL ceramic ${city}, nano ceramic tint ${city} TX, premium window tinting ${city}, ${county} ceramic tint`;
      case 'security-window-film':
        return `security window film ${city} TX, safety film ${city} Texas, break-in protection ${city}, storm protection windows ${city} TX, shatter resistant film ${city}, ${county} security film`;
      case 'smart-film':
        return `smart film ${city} TX, switchable glass ${city} Texas, privacy glass ${city}, PDLC film ${city} TX, electric privacy film ${city}, ${county} smart film`;
      case 'motorized-patio-screens':
        return `motorized patio screens ${city} TX, retractable screens ${city} Texas, outdoor shades ${city}, patio enclosures ${city} TX, bug screens ${city}, ${county} patio screens`;
      default:
        return baseKeywords + `, ${county} window tinting, window tinting near me ${city}`;
    }
  };

  const pageTitle = getPageTitle();
  const metaDescription = getMetaDescription();
  const canonicalUrl = `https://www.sunmasterstintandshades.com/${location.slug}-tx/${service.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={getKeywords()} />
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
            "name": `${title} ${city}, TX`,
            "description": `Professional ${title.toLowerCase()} in ${city}, Texas. ${description}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": `Sunmasters Window Tinting ${city} TX`,
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
            },
            "serviceType": `${title} ${city} TX`,
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": {
                "@type": "City",
                "name": city
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
              width={1200}
              height={600}
            />
          ) : (
            <img
              src={locationHeroImage}
              alt={`${title} services in ${city}, ${state}`}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
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
              {title} {city}, TX
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              Looking for {title.toLowerCase()} in {city}, Texas? Sunmasters provides professional {title.toLowerCase()} {city} TX throughout the {region} area. Certified XPEL installers serving {county || region} with 99% UV protection and lifetime warranty.
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

      {/* Automotive Tinting Specific Content */}
      {service.slug === 'automotive-window-tint' && (
        <>
          {/* Why XPEL */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why XPEL</span>
                <h2 className="section-title text-foreground mt-2">The Industry Leader in Window Film</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    We exclusively install XPEL window films—the same brand trusted by luxury dealerships, exotic car collectors, and professional detailers worldwide. XPEL's <strong>nano-ceramic technology</strong> outperforms traditional dyed or metallic films in every category for {city} drivers.
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

          {/* Automotive Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Tint Your Vehicle</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Automotive Window Tinting in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automotiveBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
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
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
                <h2 className="section-title text-foreground mt-2">XPEL PRIME Window Film Options in {city}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Choose from XPEL's complete lineup of ceramic window films. All options provide 99% UV protection and carry a lifetime manufacturer warranty.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {xpelProducts.map((product) => (
                  <div key={product.name} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <h3 className="font-heading font-bold text-foreground text-2xl mb-1">{product.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{product.tagline}</p>
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
        </>
      )}

      {/* Residential Tinting Specific Content */}
      {service.slug === 'residential-window-tint' && (
        <>
          {/* Why Texas Homes Need Window Film */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">The Texas Heat Challenge</span>
                <h2 className="section-title text-foreground mt-2">Why {city} Homes Need Window Tinting</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    With summer temperatures regularly exceeding 100°F in the {city} area, your home's windows become a major source of unwanted heat gain. In fact, <strong>up to 40% of your home's cooling energy is lost through windows</strong>. This forces your HVAC system to work overtime, driving up energy bills and reducing comfort.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Thermometer className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Hot Spots</h3>
                      <p className="text-muted-foreground text-sm">Untreated windows create uncomfortable hot zones in rooms</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">High Bills</h3>
                      <p className="text-muted-foreground text-sm">Texas homeowners pay some of the highest summer electric bills</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sofa className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Fading</h3>
                      <p className="text-muted-foreground text-sm">Intense sunlight fades furniture, floors, and artwork quickly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Residential Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Window Film</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Home Window Tinting in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {residentialBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
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
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
                <h2 className="section-title text-foreground mt-2">Types of Residential Window Film in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {residentialFilmTypes.map((film) => (
                  <div key={film.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{film.name}</h3>
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
        </>
      )}

      {/* Commercial Tinting Specific Content */}
      {service.slug === 'commercial-window-tint' && (
        <>
          {/* The Business Case */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">The Business Case</span>
                <h2 className="section-title text-foreground mt-2">Why {city} Businesses Invest in Window Film</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    In the {city} area, commercial buildings face intense solar heat for much of the year. Windows—especially in modern glass-heavy designs—are responsible for <strong>up to 40% of a building's cooling load</strong>. This drives up HVAC costs, creates uncomfortable hot spots, and can fade valuable interior finishes.
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
                </div>
              </div>
            </div>
          </section>

          {/* Commercial Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Key Advantages</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Commercial Window Tinting in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commercial Film Types */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
                <h2 className="section-title text-foreground mt-2">Commercial Window Film Solutions in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {commercialFilmTypes.map((film) => (
                  <div key={film.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{film.name}</h3>
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

          {/* Industries We Serve */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Industries We Serve</span>
                <h2 className="section-title text-foreground mt-2">Commercial Clients in {city}</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {commercialIndustries.map((industry) => (
                  <div key={industry.name} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{industry.description}</p>
                    <ul className="space-y-2">
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
        </>
      )}

      {/* Ceramic Tint Specific Content */}
      {service.slug === 'ceramic-window-tint' && (
        <>
          {/* What is Ceramic Tint */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">The Technology</span>
                <h2 className="section-title text-foreground mt-2">What is Ceramic Window Tint?</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    Ceramic window tint uses advanced nano-ceramic technology to block infrared heat without relying on metal layers or dark dyes. This makes it the premium choice for {city} drivers who want maximum performance without compromising aesthetics or electronics.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Nano-Ceramic</h3>
                      <p className="text-muted-foreground text-sm">Microscopic ceramic particles embedded in multiple layers</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gem className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Crystal Clear</h3>
                      <p className="text-muted-foreground text-sm">Excellent optical clarity without haze or distortion</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Car className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Signal-Friendly</h3>
                      <p className="text-muted-foreground text-sm">No interference with GPS, phones, or toll tags</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ceramic Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Ceramic</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Ceramic Tint in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ceramicTintBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Security Film Specific Content */}
      {service.slug === 'security-window-film' && (
        <>
          {/* What is Security Film */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">How It Works</span>
                <h2 className="section-title text-foreground mt-2">What is Security Window Film?</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    Security window film is a high-performance, multi-layered polyester film that bonds directly to your existing glass. Unlike regular glass that shatters into dangerous shards upon impact, security film <strong>holds the glass together</strong> even when broken—creating a barrier that protects {city} homes and businesses.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Multi-Layer Construction</h3>
                      <p className="text-muted-foreground text-sm">Multiple polyester layers bonded together for maximum strength</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Fragment Retention</h3>
                      <p className="text-muted-foreground text-sm">Holds broken glass in place, preventing dangerous shards</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-lg mb-2">Optically Clear</h3>
                      <p className="text-muted-foreground text-sm">Crystal-clear appearance maintains your view</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Security Film</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Security Window Film in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFilmBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Security Film Options */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
                <h2 className="section-title text-foreground mt-2">Security Film Options in {city}</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {securityFilmOptions.map((film) => (
                  <div key={film.name} className={`bg-card border rounded-lg p-8 relative ${film.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'} hover:border-primary/50 transition-colors`}>
                    {film.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="font-heading font-bold text-foreground text-2xl mb-1">{film.name}</h3>
                      <p className="text-primary font-medium text-lg">{film.thickness} thickness</p>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 text-center">{film.description}</p>
                    <ul className="space-y-2">
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

          {/* Security Applications */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Applications</span>
                <h2 className="section-title text-foreground mt-2">Who Needs Security Film in {city}?</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {securityApplications.map((app) => (
                  <div key={app.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                      <app.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-2xl mb-3">{app.title}</h3>
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
        </>
      )}

      {/* Smart Film Specific Content */}
      {service.slug === 'smart-film' && (
        <>
          {/* How It Works */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">The Technology</span>
                <h2 className="section-title text-foreground mt-2">How Smart Film Works</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-muted-foreground text-lg mb-6">
                    Smart film uses <strong>PDLC (Polymer Dispersed Liquid Crystal)</strong> technology. When electricity is applied, the liquid crystals align to allow light through, making the glass transparent. When power is off, the crystals scatter randomly, creating an opaque, frosted appearance—perfect for {city} homes and businesses.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-xl mb-2">Power ON</h3>
                      <p className="text-muted-foreground">Crystals align → Glass is clear and transparent</p>
                    </div>
                    <div className="text-center p-6 bg-background rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground text-xl mb-2">Power OFF</h3>
                      <p className="text-muted-foreground">Crystals scatter → Glass is frosted and private</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center mt-8">
                    The transition happens in <strong>less than 100 milliseconds</strong>—faster than the blink of an eye.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Film Benefits */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Smart Film</span>
                <h2 className="section-title text-foreground mt-2">Benefits of Smart Film Technology in {city}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smartFilmBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Smart Film Applications */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-medium uppercase tracking-wider text-sm">Versatile Solutions</span>
                  <h2 className="section-title text-foreground mt-2 mb-6">Popular Applications in {city}</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Smart film can be applied to virtually any smooth glass surface, making it perfect for both new construction and retrofitting existing windows.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {smartFilmApplications.map((app) => (
                      <div key={app} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-heading font-bold text-foreground text-2xl mb-4">Ready to Upgrade Your Glass in {city}?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our certified technicians will assess your space and provide a custom solution tailored to your needs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Free on-site consultation
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Professional installation included
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Warranty on materials & labor
                    </li>
                  </ul>
                  <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                    Schedule Your Free Estimate
                  </ContactLink>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

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
                      loading="lazy"
                      width={400}
                      height={300}
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
