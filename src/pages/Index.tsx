import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesOverview from "@/components/ServicesOverview";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomepageSEOContent from "@/components/HomepageSEOContent";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunmasters Window Tinting Rockwall",
  "image": "https://sunmastersdfw.com/og-image.png",
  "telephone": "(469) 757-4325",
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
  "url": "https://sunmastersdfw.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Rockwall" },
    { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Plano" },
    { "@type": "City", "name": "Garland" },
    { "@type": "City", "name": "Mesquite" },
    { "@type": "City", "name": "Richardson" }
  ],
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
        <title>Window Tinting Rockwall TX | Dallas Window Film | Sunmasters</title>
        <meta name="description" content="Professional window tinting in Rockwall TX & Dallas. Automotive, residential & commercial window film installation. Free quotes. Call (469) 757-4325." />
        <link rel="canonical" href="https://sunmastersdfw.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ServicesOverview />
        <WhyChooseUs />
        <HomepageSEOContent />
        <Testimonials />
        <AreasServed />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
