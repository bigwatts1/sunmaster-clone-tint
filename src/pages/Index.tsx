import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
