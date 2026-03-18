import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomepageSEOContent from "@/components/HomepageSEOContent";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunmasters Window Tinting & Shades",
  "image": "https://www.sunmasterstintandshades.com/og-image.png",
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
  "url": "https://www.sunmasterstintandshades.com",
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
  "sameAs": [
    "https://www.facebook.com/sunmastersdfw",
    "https://www.google.com/maps/place/Sunmasters+Window+Tinting"
  ]
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
        <title>Window Tinting Near Me | #1 Rated Rockwall TX | Sunmasters Tint & Shades</title>
        <meta name="description" content="45+ years experience. Ceramic window tint starting at $199. Auto, home & commercial. XPEL certified. Lifetime warranty. Same-day service. Free estimates. ★★★★★ (469) 757-4325" />
        <meta name="keywords" content="window tinting near me, window tint near me, tint near me, car tint near me, window tinting rockwall, window tint rockwall tx, ceramic tint dfw, home window tinting, commercial window tinting dallas" />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {/* Above the fold - loaded immediately */}
        <Hero />
        <Services />
        
        {/* Below the fold */}
        <About />
        <ServicesOverview />
        <WhyChooseUs />
        <HomepageSEOContent />
        <Testimonials />
        <AreasServed />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
