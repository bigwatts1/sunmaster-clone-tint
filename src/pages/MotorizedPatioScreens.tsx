import { Helmet } from "react-helmet";
import { ArrowRight, Shield, Sun, Wind, Eye, Zap, Home, CheckCircle2, Smartphone, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import LocationLinks from "@/components/LocationLinks";

const benefits = [
  {
    icon: Sun,
    title: "UV & Heat Protection",
    description: "Block up to 99% of harmful UV rays while reducing temperatures by up to 15°F, making your outdoor space comfortable even in Texas summers.",
  },
  {
    icon: Bug,
    title: "Insect Protection",
    description: "Keep mosquitoes, flies, and other pests out while still enjoying fresh air and natural ventilation in your outdoor living area.",
  },
  {
    icon: Wind,
    title: "Wind & Weather Shield",
    description: "Durable screens withstand wind gusts up to 60+ MPH and protect your patio furniture from rain, dust, and debris.",
  },
  {
    icon: Eye,
    title: "Privacy On Demand",
    description: "Transform your open patio into a private retreat at the touch of a button without sacrificing views or airflow.",
  },
  {
    icon: Smartphone,
    title: "Smart Home Integration",
    description: "Control your screens via remote, wall switch, or smartphone app. Integrate with smart home systems for automated operation.",
  },
  {
    icon: Home,
    title: "Increased Home Value",
    description: "Motorized patio screens add functional outdoor living space, increasing your home's appeal and resale value.",
  },
];

const applications = [
  {
    title: "Patios & Porches",
    description: "Enclose open patios and porches to create comfortable, bug-free outdoor living rooms.",
  },
  {
    title: "Pergolas & Gazebos",
    description: "Add motorized screens to pergolas for shade and protection without losing the open-air feel.",
  },
  {
    title: "Outdoor Kitchens",
    description: "Protect your outdoor cooking and dining area from insects and debris while entertaining.",
  },
  {
    title: "Pool Enclosures",
    description: "Screen in pool areas to keep out bugs and debris while maintaining visibility and airflow.",
  },
  {
    title: "Restaurants & Bars",
    description: "Commercial-grade screens for outdoor dining areas that can be deployed based on weather conditions.",
  },
  {
    title: "Garages & Workshops",
    description: "Keep your workspace ventilated and bug-free while working with the garage door open.",
  },
];

const screenTypes = [
  {
    name: "Solar Mesh Screens",
    description: "Block UV rays and reduce heat while maintaining outward visibility. Perfect for Texas sun protection.",
    features: ["Up to 90% UV block", "Heat reduction", "Maintains views", "Energy savings"],
  },
  {
    name: "Insect Mesh Screens",
    description: "Fine mesh keeps even the smallest insects out while allowing maximum airflow and visibility.",
    features: ["No-see-um protection", "Maximum airflow", "Crystal clear views", "Durable fiberglass mesh"],
  },
  {
    name: "Privacy Screens",
    description: "Opaque or semi-opaque options for complete privacy from neighbors and street view.",
    features: ["100% privacy", "Wind protection", "Multiple opacity levels", "Various colors available"],
  },
  {
    name: "Clear Vinyl Screens",
    description: "Transparent panels that block wind and rain while maintaining full visibility. Ideal for cooler months.",
    features: ["Rain protection", "Wind barrier", "Full visibility", "Extend patio season"],
  },
];

const MotorizedPatioScreens = () => {
  return (
    <>
      <Helmet>
        <title>Motorized Patio Screens Dallas | Retractable Outdoor Screens | Sunmasters</title>
        <meta
          name="description"
          content="Professional motorized patio screen installation in Dallas-Fort Worth. Retractable screens for patios, pergolas & outdoor living spaces. UV protection, bug control & smart home integration. Free estimates."
        />
        <link rel="canonical" href="https://sunmastersautoandshades.com/motorized-patio-screens" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Outdoor Living Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Motorized Patio Screens: Transform Your Outdoor Living Space
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Enjoy your outdoor spaces year-round with motorized retractable screens. 
                Block UV rays, keep insects out, and add privacy at the touch of a button. 
                Perfect for Dallas-area patios, pergolas, and outdoor living areas.
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
                  <a href="tel:469-757-4325">Call (469) 757-4325</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full"
              >
                <source src="https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//copy_DF98BC66-AF50-462F-AE4A-29E0ECEA82E5.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">Year-Round</p>
                <p className="text-sm">Outdoor Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                comfort with outdoor ambiance.
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
              Types of Motorized Screens
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Choose from a variety of screen materials to match your specific needs, 
              from solar protection to complete privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {screenTypes.map((screen) => (
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

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Choose Motorized Screens
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Motorized Patio Screens
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
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
              Where Can You Install Motorized Screens?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Motorized screens are versatile solutions that can transform virtually any 
              outdoor or semi-outdoor space in your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
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
                Perfect for Dallas-Fort Worth
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Why DFW Homeowners Love Motorized Patio Screens
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The Dallas-Fort Worth area presents unique challenges for outdoor living. 
                Our motorized screens are designed to address every one of them:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Texas Heat", desc: "Solar mesh screens block UV rays and reduce temperatures by up to 15°F" },
                  { title: "Mosquitoes & Bugs", desc: "Fine mesh keeps insects out while you enjoy evening cookouts" },
                  { title: "Spring Storms", desc: "Quick-deploy screens protect furniture from sudden weather changes" },
                  { title: "Privacy from Neighbors", desc: "Growing neighborhoods mean closer homes—screens add instant privacy" },
                  { title: "Year-Round Use", desc: "Extend your outdoor season from 6 months to 12 months" },
                  { title: "Home Value", desc: "Outdoor living additions are top priorities for DFW homebuyers" },
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
                Ready to Transform Your Outdoor Space?
              </h3>
              <p className="text-muted-foreground mb-6">
                With 45+ years of experience in window and screen solutions, we provide 
                expert consultation and professional installation for motorized patio screens 
                throughout the Dallas-Fort Worth metropolitan area.
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

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="section-title text-foreground mt-2">
              Motorized Patio Screen FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How much do motorized patio screens cost?
              </h3>
              <p className="text-muted-foreground">
                Motorized patio screen costs vary based on size, screen type, and features. 
                A single screen unit typically ranges from $1,500 to $5,000+ installed. 
                Larger openings and premium features increase cost. We provide free, 
                detailed quotes for your specific project.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does installation take?
              </h3>
              <p className="text-muted-foreground">
                Most residential installations are completed in one day. Larger projects 
                with multiple screens may take 2-3 days. We schedule installations at 
                your convenience and ensure minimal disruption to your daily routine.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can motorized screens withstand Texas storms?
              </h3>
              <p className="text-muted-foreground">
                Yes! Our motorized screens are engineered to withstand wind gusts up to 
                60+ MPH. Many systems include wind sensors that automatically retract 
                screens during severe weather to prevent damage.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Do motorized screens require maintenance?
              </h3>
              <p className="text-muted-foreground">
                Motorized screens require minimal maintenance. Periodic cleaning of the 
                mesh with mild soap and water keeps them looking great. The motorized 
                components are designed for years of trouble-free operation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can I integrate screens with my smart home system?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Many motorized screen systems are compatible with popular 
                smart home platforms like Google Home, Amazon Alexa, and Apple HomeKit. 
                You can also set schedules, create scenes, and control screens remotely 
                via smartphone apps.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                What warranty comes with motorized patio screens?
              </h3>
              <p className="text-muted-foreground">
                Warranty coverage varies by manufacturer but typically includes 5-10 years 
                on motors and components, and 5-7 years on screen fabric. We only install 
                products backed by strong manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Extend Your Outdoor Living Season
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Stop letting heat, bugs, and weather limit your enjoyment of your outdoor spaces. 
            Contact us today for a free consultation and discover how motorized patio screens 
            can transform your Dallas-area home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="bg-background text-foreground hover:bg-background/90 font-heading uppercase tracking-wider">
              Get Your Free Quote
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:469-757-4325">Call (469) 757-4325</a>
            </Button>
          </div>
        </div>
      </section>

      <LocationLinks serviceType="residential" maxLocations={12} />

      <Footer />
    </>
  );
};

export default MotorizedPatioScreens;
