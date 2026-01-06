import { Helmet } from "react-helmet";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Photo Gallery | SunMasters Window Tinting DFW</title>
        <meta 
          name="description" 
          content="View our photo gallery showcasing professional window tinting, ceramic coating, paint protection film, and more from SunMasters in the DFW area."
        />
        <link rel="canonical" href="https://sunmastersautoandshades.com/gallery" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of professional window tinting, ceramic coating, and paint protection film installations.
          </p>
        </div>
      </section>

      <Gallery />

      <Footer />
    </>
  );
};

export default GalleryPage;