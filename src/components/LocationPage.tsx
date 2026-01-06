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

// Generate unique SEO meta title (50-60 chars) optimized for CTR
const getUniqueMetaTitle = (location: LocationData): string => {
  const { city, slug, population } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  
  // Title variations based on city characteristics (all 50-60 chars)
  const titleVariations: Record<string, string> = {
    'dallas': `Window Tinting Dallas TX | Auto, Home & Office Film`,
    'plano': `Window Tinting Plano TX | Car, Home & Business Tint`,
    'frisco': `Window Tinting Frisco TX | Auto & Home Film Experts`,
    'mckinney': `Window Tinting McKinney TX | Car & Residential Film`,
    'fort-worth': `Window Tinting Fort Worth TX | Auto, Home & Commercial`,
    'arlington': `Window Tinting Arlington TX | Automotive & Home Film`,
    'irving': `Window Tinting Irving TX | Car, Home & Office Tint`,
    'garland': `Window Tinting Garland TX | Auto & Residential Film`,
    'grand-prairie': `Window Tinting Grand Prairie TX | Auto & Home Tint`,
    'richardson': `Window Tinting Richardson TX | Car & Home Film`,
    'allen': `Window Tinting Allen TX | Auto, Home & Commercial`,
    'carrollton': `Window Tinting Carrollton TX | Car & Home Experts`,
    'lewisville': `Window Tinting Lewisville TX | Auto & Home Film`,
    'denton': `Window Tinting Denton TX | Car, Home & Office Tint`,
    'flower-mound': `Window Tinting Flower Mound TX | Auto & Home Film`,
    'the-colony': `Window Tinting The Colony TX | Car & Home Experts`,
    'little-elm': `Window Tinting Little Elm TX | Auto & Residential`,
    'prosper': `Window Tinting Prosper TX | Luxury Auto & Home Film`,
    'mesquite': `Window Tinting Mesquite TX | Car, Home & Business`,
    'rockwall': `Window Tinting Rockwall TX | Auto, Home & Commercial`,
    'rowlett': `Window Tinting Rowlett TX | Car & Residential Film`,
    'wylie': `Window Tinting Wylie TX | Auto & Home Film Experts`,
    'murphy': `Window Tinting Murphy TX | Car & Residential Tint`,
    'sachse': `Window Tinting Sachse TX | Auto & Home Film Service`,
    'coppell': `Window Tinting Coppell TX | Car & Home Film Pros`,
    'grapevine': `Window Tinting Grapevine TX | Auto, Home & Office`,
    'southlake': `Window Tinting Southlake TX | Luxury Auto & Home`,
    'greenville': `Window Tinting Greenville TX | Auto & Home Experts`,
    'caddo-mills': `Window Tinting Caddo Mills TX | Car & Home Film`,
    'commerce': `Window Tinting Commerce TX | Auto & Residential Film`,
  };
  
  return titleVariations[slug] || `Window Tinting ${city} TX | Auto, Home & Commercial`;
};

// Generate JSON-LD structured data for LocalBusiness schema
const getLocalBusinessSchema = (location: LocationData): object => {
  const { city, state, county, slug } = location;
  const websiteUrl = "https://www.sunmasterstintandshades.com";
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${websiteUrl}/window-tinting-${slug}#localbusiness`,
    "name": "Sunmasters Window Tinting & Shades",
    "description": `Professional window tinting services in ${city}, ${state}. Automotive, residential, and commercial window film installation with lifetime warranty.`,
    "url": `${websiteUrl}/window-tinting-${slug}`,
    "telephone": "(214) 865-8882",
    "email": "info@sunmasterstintandshades.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": state
    },
    "priceRange": "$$",
    "image": `${websiteUrl}/og-image.png`,
    "logo": `${websiteUrl}/og-image.png`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sunmasterswindowtinting",
      "https://www.instagram.com/sunmasters_tint"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Tinting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Window Tinting",
            "description": `Professional car, truck, and SUV window tinting in ${city}, TX with XPEL ceramic film and lifetime warranty.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Window Tinting",
            "description": `Home window film installation in ${city}, TX for heat rejection, UV protection, and energy savings.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Window Tinting",
            "description": `Office and business window tinting in ${city}, TX for storefronts, buildings, and commercial properties.`
          }
        }
      ]
    }
  };
};

// Generate JSON-LD Service schema for all services
const getServiceSchema = (location: LocationData): object[] => {
  const { city, state, slug } = location;
  const websiteUrl = "https://www.sunmasterstintandshades.com";
  
  const services = [
    {
      name: "Automotive Window Tinting",
      description: `Professional automotive window tinting in ${city}, ${state}. XPEL ceramic film with 99% UV protection and lifetime warranty.`,
      slug: "automotive-window-tint"
    },
    {
      name: "Residential Window Tinting",
      description: `Home window tinting in ${city}, ${state}. Energy-saving film that blocks heat, UV rays, and glare.`,
      slug: "residential-window-tint"
    },
    {
      name: "Commercial Window Tinting",
      description: `Commercial window film installation in ${city}, ${state}. Professional solutions for offices, storefronts, and buildings.`,
      slug: "commercial-window-tint"
    },
    {
      name: "Ceramic Window Tint",
      description: `Premium ceramic window tinting in ${city}, ${state}. Superior heat rejection without signal interference.`,
      slug: "ceramic-window-tint"
    },
    {
      name: "Security Film",
      description: `Safety and security window film in ${city}, ${state}. Holds glass together when broken for protection.`,
      slug: "security-window-film"
    },
    {
      name: "Smart Film",
      description: `Switchable smart film installation in ${city}, ${state}. Transitions from clear to opaque instantly.`,
      slug: "smart-film"
    }
  ];
  
  return services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sunmasters Window Tinting & Shades",
      "telephone": "(214) 865-8882"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": state
    },
    "url": `${websiteUrl}/${service.slug}`
  }));
};

// Generate unique city-specific FAQs (5-7 per city)
interface FAQ {
  question: string;
  answer: string;
}

const getCityFAQs = (location: LocationData): FAQ[] => {
  const { city, slug, region, county, population, nearby } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  const nearbyText = nearby && nearby.length > 0 ? nearby.slice(0, 3).join(', ') : region;
  
  // Base FAQs that all cities get (customized per city)
  const baseFAQs: FAQ[] = [
    {
      question: `How much does window tinting cost in ${city}, TX?`,
      answer: `Window tinting prices in ${city} depend on the service type. Automotive tinting ranges from $199-$599 based on vehicle size and film quality. Residential projects typically cost $6-$15 per square foot. Commercial tinting is quoted per project. Sunmasters offers free estimates for all ${city} customers.`
    },
    {
      question: `How long does window tint installation take in ${city}?`,
      answer: `Most automotive window tinting in ${city} takes 2-4 hours and can be completed same-day. Residential tinting for an average home takes 4-6 hours. Commercial projects vary based on scope. We work efficiently to minimize disruption to ${city} businesses and homeowners.`
    },
    {
      question: `Is window tint legal in ${city}, Texas?`,
      answer: `Yes, window tinting is legal in ${city} and throughout Texas. State law requires front side windows to allow at least 25% visible light transmission (VLT). Rear side windows and back windshield can be any darkness. Windshield tinting above the AS-1 line is permitted. Sunmasters ensures all ${city} installations meet Texas regulations.`
    },
    {
      question: `Do you offer residential window tinting in ${city}?`,
      answer: `Absolutely! Sunmasters provides comprehensive residential window tinting throughout ${city} and ${county || region}. Our home window films reduce heat by up to 98%, block 99% of UV rays, lower energy bills, and protect furniture from fading. We offer free in-home consultations for ${city} homeowners.`
    },
    {
      question: `What areas near ${city} do you serve?`,
      answer: `In addition to ${city}, Sunmasters provides window tinting services throughout the ${region} area including ${nearbyText}, and surrounding communities. We offer mobile service for automotive tinting and on-site installation for residential and commercial projects across the DFW metroplex.`
    }
  ];
  
  // City-specific additional FAQs based on characteristics
  const citySpecificFAQs: Record<string, FAQ[]> = {
    'dallas': [
      {
        question: "What types of commercial window tinting do you offer for Dallas businesses?",
        answer: "Sunmasters provides commercial window tinting for Dallas high-rises, office buildings, storefronts, and retail spaces. Our commercial solutions include solar control film, security film, decorative film, and privacy film. We serve Fortune 500 headquarters and small businesses alike throughout Dallas County."
      },
      {
        question: "Do you offer ceramic window tint for vehicles in Dallas?",
        answer: "Yes, we specialize in XPEL ceramic window tinting for Dallas vehicles. Ceramic tint provides superior heat rejection (up to 98%), 99% UV protection, and zero signal interference for GPS, phones, and radio. It's the premium choice for Dallas drivers seeking maximum comfort."
      }
    ],
    'plano': [
      {
        question: "Why choose ceramic window tint for my Plano vehicle?",
        answer: "Plano's hot Texas summers demand superior heat protection. XPEL ceramic tint blocks up to 98% of infrared heat while maintaining excellent visibility. Unlike metallic films, ceramic won't interfere with electronics—perfect for Plano's tech-savvy drivers."
      },
      {
        question: "Can window tinting help reduce energy costs for Plano homes?",
        answer: "Yes! Residential window tinting can reduce Plano home cooling costs by up to 30%. Our solar control films reject heat before it enters your home, reducing AC workload. Many Plano homeowners see ROI within 2-3 years through energy savings."
      }
    ],
    'frisco': [
      {
        question: "Do you provide window tinting for luxury vehicles in Frisco?",
        answer: "Absolutely! Sunmasters specializes in premium window tinting for Frisco's luxury vehicles including Tesla, Mercedes, BMW, Porsche, and exotic cars. Our XPEL ceramic film and meticulous installation protects your investment while enhancing appearance and comfort."
      },
      {
        question: "Can you install window tint on new construction homes in Frisco?",
        answer: "Yes, we work with Frisco homebuilders and new homeowners to install window film during or after construction. Early installation protects flooring and furniture from day one and can be coordinated with your builder's timeline."
      }
    ],
    'mckinney': [
      {
        question: "Do you offer window tinting for historic downtown McKinney buildings?",
        answer: "Yes! We provide specialized window film solutions for McKinney's historic downtown buildings that preserve architectural character while adding modern comfort and UV protection. Our films can match existing aesthetics while meeting energy efficiency goals."
      },
      {
        question: "What warranty comes with window tinting in McKinney?",
        answer: "All XPEL window film installations in McKinney include a lifetime manufacturer warranty covering bubbling, peeling, cracking, and color change. This transferable warranty covers both materials and Sunmasters' professional installation."
      }
    ],
    'fort-worth': [
      {
        question: "Do you provide commercial window tinting in downtown Fort Worth?",
        answer: "Yes, Sunmasters serves Fort Worth's growing downtown with commercial window tinting for office buildings, mixed-use developments, and cultural venues. We've installed films in various Fort Worth commercial properties and understand the unique needs of urban buildings."
      },
      {
        question: "Can window film protect my Fort Worth home from break-ins?",
        answer: "Our security window film helps deter Fort Worth break-ins by holding glass together when impacted. While it won't make glass unbreakable, it significantly slows intruder entry time—often enough to deter theft and protect occupants."
      }
    ],
    'rockwall': [
      {
        question: "Do you offer window tinting for lakefront homes in Rockwall?",
        answer: "Yes! Rockwall's Lake Ray Hubbard properties face intense sun exposure and glare. Our residential window films reduce heat, eliminate lake glare, protect interiors, and maintain your beautiful water views. We serve Heath, Rowlett, and all lakeside Rockwall communities."
      },
      {
        question: "Can you tint boat windows and marine vessels in Rockwall?",
        answer: "We specialize in automotive and architectural tinting. For Rockwall boat owners, we recommend consulting marine specialists for vessel-specific applications due to unique material and installation requirements."
      }
    ],
    'southlake': [
      {
        question: "Do you work with Southlake's luxury home builders?",
        answer: "Yes, Sunmasters partners with Southlake custom home builders to integrate window film into new construction. We can coordinate with your builder for seamless installation that protects your investment from day one."
      },
      {
        question: "What's the best window tint for high-end vehicles in Southlake?",
        answer: "For Southlake's luxury and exotic vehicles, we recommend XPEL Prime XR Plus ceramic film. It offers maximum heat rejection, crystal-clear visibility, and zero electronic interference—ideal for vehicles with advanced technology systems."
      }
    ],
    'prosper': [
      {
        question: "Do you service new home developments in Prosper?",
        answer: "Absolutely! We work throughout Prosper's new developments including Windsong Ranch, Star Trail, and Artesia. Early window film installation protects new home interiors before furniture even arrives and qualifies for our lifetime warranty."
      },
      {
        question: "What's the best window tint option for Prosper families?",
        answer: "Prosper families benefit from our ceramic window films that block 99% of harmful UV rays—protecting children's skin and eyes in vehicles and homes. The superior heat rejection also keeps car seats and interiors cooler for passenger comfort."
      }
    ],
    'greenville': [
      {
        question: "What's included in your Greenville window tinting warranty?",
        answer: "Our Greenville location offers the same lifetime XPEL warranty as all Sunmasters installations. This covers bubbling, peeling, fading, and cracking for as long as you own the vehicle or property. We stand behind every Greenville installation."
      },
      {
        question: "Do you offer same-day window tinting in Greenville?",
        answer: "Yes! Our Greenville location at 2700 Mockingbird Ln offers same-day automotive window tinting for most vehicles. Call (903) 453-1965 to check availability and schedule your appointment."
      }
    ]
  };
  
  // Default additional FAQs for cities without specific content
  const defaultAdditionalFAQs: FAQ[] = [
    {
      question: `What warranty do you offer on ${city} window tinting?`,
      answer: `All window film installations in ${city} include XPEL's lifetime manufacturer warranty covering bubbling, peeling, cracking, and color change. This transferable warranty provides peace of mind and covers both materials and our professional installation workmanship.`
    },
    {
      question: `Do you offer mobile window tinting service in ${city}?`,
      answer: `Yes! Sunmasters offers mobile automotive window tinting service throughout ${city} and ${region}. We can come to your home or workplace for added convenience. Contact us to schedule mobile service in ${city}.`
    }
  ];
  
  // Combine base FAQs with city-specific or default additional FAQs
  const additionalFAQs = citySpecificFAQs[slug] || defaultAdditionalFAQs;
  
  // Return 5-7 FAQs based on what's available
  return [...baseFAQs, ...additionalFAQs].slice(0, 7);
};

// Generate FAQ Schema for JSON-LD
const getFAQSchema = (location: LocationData): object => {
  const faqs = getCityFAQs(location);
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate unique SEO meta description (150-160 chars) optimized for CTR
const getUniqueMetaDescription = (location: LocationData): string => {
  const { city, slug, county, region, population } = location;
  const popNum = population ? parseInt(population.replace(/,/g, '')) : 0;
  
  // Description variations based on city characteristics (all 150-160 chars)
  const descVariations: Record<string, string> = {
    'dallas': `Professional window tinting in Dallas, TX for cars, homes & businesses. XPEL certified. 99% UV block & lifetime warranty. Free estimates. Call today!`,
    'plano': `Expert window tinting in Plano, TX. Automotive, residential & commercial tint with 99% UV protection. XPEL certified installer. Free quotes available.`,
    'frisco': `Premium window tinting in Frisco, TX. Car, home & office tint with lifetime warranty. 98% heat rejection & 99% UV block. Get your free estimate now!`,
    'mckinney': `Window tinting services in McKinney, TX. Auto, home & commercial film with 99% UV protection. XPEL certified. Lifetime warranty. Free quotes today!`,
    'fort-worth': `Professional window tint in Fort Worth, TX. Automotive, residential & commercial film. 98% heat rejection & lifetime warranty. Get a free estimate!`,
    'arlington': `Window tinting in Arlington, TX for vehicles, homes & offices. XPEL ceramic film with 99% UV block. Lifetime warranty included. Free estimates today!`,
    'irving': `Expert window tinting services in Irving, TX. Auto, home & commercial tint with lifetime warranty. 99% UV protection. Call for your free quote now!`,
    'garland': `Professional window tinting in Garland, TX. Car & home film with 98% heat rejection. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'grand-prairie': `Window tinting in Grand Prairie, TX for cars, homes & businesses. 99% UV protection & lifetime warranty. XPEL certified. Free quotes available!`,
    'richardson': `Expert window tinting in Richardson, TX. Auto, home & office film with 99% UV block. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'allen': `Professional window tinting in Allen, TX. Automotive, home & commercial tint. 98% heat rejection & lifetime warranty. XPEL certified. Free quotes!`,
    'carrollton': `Window tinting services in Carrollton, TX. Car & home film with 99% UV protection. XPEL certified installer. Lifetime warranty. Free estimates!`,
    'lewisville': `Expert window tinting in Lewisville, TX for autos & homes. 98% heat rejection & 99% UV block. XPEL certified. Lifetime warranty. Free quotes today!`,
    'denton': `Professional window tinting in Denton, TX. Car, home & office tint with lifetime warranty. 99% UV protection. XPEL certified. Free estimates now!`,
    'flower-mound': `Premium window tinting in Flower Mound, TX. Auto & residential film with 99% UV block. XPEL certified installer. Lifetime warranty. Free quotes!`,
    'the-colony': `Window tinting in The Colony, TX for cars & homes. 98% heat rejection & lifetime warranty. XPEL certified installer. Get your free estimate today!`,
    'little-elm': `Expert window tinting services in Little Elm, TX. Auto & home film with 99% UV protection. XPEL certified. Lifetime warranty. Free quotes now!`,
    'prosper': `Luxury window tinting in Prosper, TX for high-end vehicles & homes. XPEL ceramic film with lifetime warranty. 99% UV block. Free estimates today!`,
    'mesquite': `Professional window tinting in Mesquite, TX. Car, home & business film with 98% heat rejection. XPEL certified. Lifetime warranty. Free quotes!`,
    'rockwall': `Expert window tinting in Rockwall, TX. Automotive, home & commercial tint. 99% UV block & lifetime warranty. XPEL certified. Free estimates today!`,
    'rowlett': `Window tinting services in Rowlett, TX for cars & homes. 98% heat rejection & 99% UV protection. XPEL certified. Lifetime warranty. Free quotes!`,
    'wylie': `Professional window tinting in Wylie, TX. Auto & residential film with lifetime warranty. XPEL certified installer. 99% UV block. Free estimates!`,
    'murphy': `Expert window tinting in Murphy, TX for vehicles & homes. 99% UV protection & 98% heat rejection. XPEL certified. Lifetime warranty. Free quotes!`,
    'sachse': `Window tinting services in Sachse, TX. Auto & home film with 99% UV block. XPEL certified installer. Lifetime warranty included. Free estimates today!`,
    'coppell': `Premium window tinting in Coppell, TX for cars & homes. 98% heat rejection & lifetime warranty. XPEL certified installer. Get your free quote now!`,
    'grapevine': `Professional window tinting in Grapevine, TX. Auto, home & office film. 99% UV protection & lifetime warranty. XPEL certified. Free estimates!`,
    'southlake': `Luxury window tinting in Southlake, TX. Premium auto & home film with 99% UV block. XPEL certified installer. Lifetime warranty. Free quotes now!`,
    'greenville': `Expert window tinting in Greenville, TX for cars & homes. 98% heat rejection & 99% UV protection. XPEL certified. Lifetime warranty. Free quotes!`,
    'caddo-mills': `Window tinting in Caddo Mills, TX for vehicles & homes. XPEL ceramic film with 99% UV block. Lifetime warranty included. Get a free estimate today!`,
    'commerce': `Professional window tinting in Commerce, TX. Auto & residential film with 98% heat rejection. XPEL certified. Lifetime warranty. Free estimates!`,
  };
  
  return descVariations[slug] || `Professional window tinting in ${city}, TX for vehicles, homes & businesses. 99% UV protection & lifetime warranty. Free quotes!`;
};

const LocationPage = ({ location }: LocationPageProps) => {
  const { city, state, region, county, population, nearby, description, localFacts, businessName, address, phone, heroVideo } = location;
  
  // Generate location-specific data
  const serviceNavItems = getServiceNavItems(city);
  const services = getServices(city);
  const shadeTypes = getShadeTypes(city);
  const uniqueContent = getUniqueIntroContent(location);
  const uniqueBenefits = getUniqueBenefitsContent(city, region);
  
  const pageTitle = getUniqueMetaTitle(location);
  const metaDescription = getUniqueMetaDescription(location);
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
        
        {/* LocalBusiness Schema - Comprehensive structured data for Google */}
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema(location))}
        </script>
        
        {/* Service Schemas - Individual service structured data */}
        {getServiceSchema(location).map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(getFAQSchema(location))}
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
              Frequently Asked Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Window Tinting FAQs for {city}, TX
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Find answers to common questions about window tinting services in {city} and the {region} area.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {getCityFAQs(location).map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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