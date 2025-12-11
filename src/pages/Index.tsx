import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import ProcessSection from "@/components/ProcessSection";
import EstimateForm from "@/components/EstimateForm";
import Services from "@/components/Services";
import AreasServed from "@/components/AreasServed";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <TeamSection />
        <ProcessSection />
        <EstimateForm />
        <Services />
        <About />
        <Gallery />
        <AreasServed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
