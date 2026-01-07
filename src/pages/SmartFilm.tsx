import { Helmet } from "react-helmet";
import { ArrowRight, Zap, Eye, Shield, Sun, Thermometer, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLink from "@/components/ContactLink";
import RelatedServices from "@/components/RelatedServices";
import LocationLinks from "@/components/LocationLinks";
import smartfilmImg from "@/assets/rockwall-smart-film-installation.jpg";

const benefits = [
  {
    icon: Eye,
    title: "Instant Privacy",
    description: "Switch from transparent to opaque in milliseconds. Perfect for conference rooms, bathrooms, and private offices.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Reduce cooling costs by blocking solar heat when frosted. Smart film can cut energy consumption by up to 30%.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Blocks up to 99% of harmful UV rays in both clear and frosted states, protecting furnishings and skin.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Helps regulate indoor temperature by controlling solar heat gain through windows.",
  },
  {
    icon: Shield,
    title: "Glare Reduction",
    description: "Eliminate harsh glare on screens and workspaces while maintaining natural light.",
  },
  {
    icon: Lock,
    title: "Security & Safety",
    description: "The film layer adds shatter resistance to glass, providing an extra layer of protection.",
  },
];

const applications = [
  "Office conference rooms & meeting spaces",
  "Medical facilities & patient rooms",
  "Residential bathrooms & bedrooms",
  "Retail storefronts & display windows",
  "Restaurant private dining areas",
  "Bank teller windows & secure areas",
  "Hotel room partitions & bathrooms",
  "Residential skylights & sunrooms",
];

const SmartFilm = () => {
  return (
    <>
      <Helmet>
        <title>Smart Film Installation Dallas | Switchable Privacy Glass | Sunmasters</title>
        <meta
          name="description"
          content="Professional smart film installation in Dallas-Fort Worth. Instantly switch windows from clear to frosted for privacy on demand. Free estimates available."
        />
        <link rel="canonical" href="https://www.sunmasterstintandshades.com/smart-film" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Advanced Technology
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Smart Film: Privacy at the Touch of a Button
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Transform any glass surface from transparent to opaque instantly with our 
                professional smart film installation. Also known as switchable film, PDLC film, 
                or electric privacy glass—this cutting-edge technology gives you complete 
                control over your privacy and light.
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
            <div className="relative max-w-lg lg:max-w-xl mx-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full h-auto max-h-[400px] object-cover"
              >
                <source src="/videos/smartfilm-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-2xl">45+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              The Technology
            </span>
            <h2 className="section-title text-foreground mt-2">
              How Smart Film Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground text-lg mb-6">
                Smart film uses <strong>PDLC (Polymer Dispersed Liquid Crystal)</strong> technology. 
                When electricity is applied, the liquid crystals align to allow light through, making 
                the glass transparent. When power is off, the crystals scatter randomly, creating 
                an opaque, frosted appearance.
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

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Choose Smart Film
            </span>
            <h2 className="section-title text-foreground mt-2">
              Benefits of Smart Film Technology
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Versatile Solutions
              </span>
              <h2 className="section-title text-foreground mt-2 mb-6">
                Popular Applications
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Smart film can be applied to virtually any smooth glass surface, making it 
                perfect for both new construction and retrofitting existing windows.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                Ready to Upgrade Your Glass?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our certified technicians will assess your space and provide a custom solution 
                tailored to your needs. Installation is clean, fast, and minimally invasive.
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
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  45+ years of industry experience
                </li>
              </ul>
              <ContactLink className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider">
                Schedule Your Free Estimate
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
              Smart Film FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                How long does smart film last?
              </h3>
              <p className="text-muted-foreground">
                Quality smart film can last 10+ years with proper care. The film is rated for 
                over 1 million switching cycles, meaning you can switch it on and off thousands 
                of times per day without degradation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Does smart film use a lot of electricity?
              </h3>
              <p className="text-muted-foreground">
                No! Smart film is very energy efficient, using only about 5-7 watts per square 
                meter when in the transparent state. Many installations actually reduce overall 
                energy costs through improved climate control.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can smart film be controlled remotely?
              </h3>
              <p className="text-muted-foreground">
                Yes! Smart film can be integrated with home automation systems, controlled via 
                smartphone apps, voice assistants, wall switches, or even motion sensors for 
                hands-free operation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Can you apply smart film to existing windows?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Smart film can be retrofitted to most existing glass surfaces. It 
                adheres to the inside of the glass and requires only a small electrical connection. 
                No need to replace your windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience Smart Film?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact Sunmasters today for a free consultation and estimate. Serving Dallas-Fort Worth 
            and surrounding areas with 45+ years of window film expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink variant="secondary" className="font-heading uppercase tracking-wider" showArrow={false}>
              Get Free Estimate
            </ContactLink>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading uppercase tracking-wider"
              asChild
            >
              <a href="tel:469-757-4325">Call (469) 757-4325</a>
            </Button>
          </div>
        </div>
      </section>

      <LocationLinks serviceType="smart" maxLocations={12} />

      <RelatedServices 
        currentService="/smart-film" 
        relatedSlugs={["/commercial-tinting", "/residential-tinting", "/security-film"]} 
      />

      <Footer />
    </>
  );
};

export default SmartFilm;
