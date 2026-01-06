import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

// Consolidated lazy load - single chunk for below-the-fold content
const BelowTheFold = lazy(() => 
  Promise.all([
    import("@/components/About"),
    import("@/components/ServicesOverview"),
    import("@/components/WhyChooseUs"),
    import("@/components/HomepageSEOContent"),
    import("@/components/Testimonials"),
    import("@/components/AreasServed"),
    import("@/components/ContactSection"),
    import("@/components/Footer"),
  ]).then(([About, ServicesOverview, WhyChooseUs, HomepageSEOContent, Testimonials, AreasServed, ContactSection, Footer]) => ({
    default: () => (
      <>
        <About.default />
        <ServicesOverview.default />
        <WhyChooseUs.default />
        <HomepageSEOContent.default />
        <Testimonials.default />
        <AreasServed.default />
        <ContactSection.default />
        <Footer.default />
      </>
    )
  }))
);

// Simple loading placeholder
const SectionPlaceholder = () => (
  <div className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
    </div>
  </div>
);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunmasters Window Tinting & Shades",
  "image": "https://sunmastersautoandshades.com/og-image.png",
  "telephone": "+1-469-757-4325",
  "email": "aaron@sunmastersdfw.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4480 E Interstate 30, Ste 200",
    "addressLocality": "Rockwall",
    "addressRegion": "TX",
    "postalCode": "75087",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.9290,
    "longitude": -96.4594
  },
  "url": "https://sunmastersautoandshades.com",
  "priceRange": "$$",
  "description": "Professional window tinting in Rockwall TX. Automotive, residential & commercial window film installation. Certified XPEL installers with lifetime warranty.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Rockwall TX" },
    { "@type": "City", "name": "Heath TX" },
    { "@type": "City", "name": "Rowlett TX" },
    { "@type": "City", "name": "Royse City TX" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Window Tinting Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Window Tinting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Window Tinting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Window Tinting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Film" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paint Protection Film" }}
    ]
  },
  "sameAs": []
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo === "contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("estimate");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>#1 Window Tinting Rockwall TX | Auto, Home & Commercial | Sunmasters</title>
        <meta name="description" content="Sunmasters is Rockwall TX's #1 window tinting company. Professional automotive, residential & commercial window film installation. Certified XPEL installers. Free quotes. Call (469) 757-4325." />
        <meta name="keywords" content="window tinting Rockwall TX, automotive window tinting Rockwall, residential window tinting Rockwall TX, commercial window tinting Rockwall, car tint Rockwall Texas" />
        <link rel="canonical" href="https://sunmastersautoandshades.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {/* Above the fold - loaded immediately */}
        <Hero />
        <Services />
        
        {/* Below the fold - single consolidated chunk */}
        <Suspense fallback={<SectionPlaceholder />}>
          <BelowTheFold />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
