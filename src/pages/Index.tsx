import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AreasServed from "@/components/AreasServed";
import EstimateForm from "@/components/EstimateForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <AreasServed />
        <EstimateForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
