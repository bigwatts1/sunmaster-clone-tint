import { CheckCircle2, Thermometer, Shield, DollarSign, Sun, Car, Home, Building2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Thermometer,
    title: "Beat the Texas Heat",
    description: "Rockwall summers are brutal, with temperatures regularly exceeding 100°F. Our premium ceramic window films block up to 98% of infrared heat, keeping your car, home, or office significantly cooler without overworking your AC."
  },
  {
    icon: Sun,
    title: "99% UV Ray Protection",
    description: "Protect your family, employees, and vehicle interiors from harmful UV radiation. Our window films block 99% of UV rays, preventing skin damage and stopping furniture, flooring, and dashboards from fading."
  },
  {
    icon: DollarSign,
    title: "Lower Energy Bills",
    description: "Rockwall homeowners and business owners see energy savings of 20-30% after professional window tinting. By reducing heat gain through windows, your HVAC system works less, saving money year-round."
  },
  {
    icon: Shield,
    title: "Enhanced Privacy & Security",
    description: "From residential privacy film to commercial security solutions, we help Rockwall properties stay protected. Security film holds shattered glass together, deterring break-ins and protecting against storm damage."
  }
];

const useCases = [
  {
    icon: Car,
    title: "Automotive Window Tinting",
    description: "Whether you drive through downtown Rockwall or commute to Dallas on I-30, our XPEL ceramic automotive tint keeps your vehicle cool and protects your interior. We tint cars, trucks, SUVs, and luxury vehicles with same-day service available."
  },
  {
    icon: Home,
    title: "Residential Window Film",
    description: "Rockwall homes face intense afternoon sun, especially properties near Lake Ray Hubbard. Our residential window tinting reduces glare, protects furniture from fading, and lowers cooling costs while maintaining your lake views."
  },
  {
    icon: Building2,
    title: "Commercial Window Solutions",
    description: "From offices on Horizon Road to retail shops in downtown Rockwall, we provide commercial window tinting that improves employee comfort, reduces glare on computer screens, and creates a more professional appearance."
  }
];

const faqs = [
  {
    question: "How much does window tinting cost in Rockwall, TX?",
    answer: "Window tinting prices in Rockwall vary based on the service type. Automotive tinting typically ranges from $199-$599 depending on vehicle size and film quality. Residential and commercial projects are quoted per square foot. Contact Sunmasters for a free, no-obligation estimate for your specific needs."
  },
  {
    question: "Is window tinting legal in Texas?",
    answer: "Yes, window tinting is legal in Texas with specific regulations. Front side windows must allow at least 25% visible light transmission (VLT). Rear side windows and the back windshield can be any darkness. Sunmasters ensures all automotive installations comply with Texas state law."
  },
  {
    question: "How long does window tinting last?",
    answer: "Professional window tinting installed by Sunmasters lasts 15-25 years or more. We use premium XPEL films backed by a manufacturer lifetime warranty. Cheap DIY films or low-quality installations may bubble, peel, or fade within 1-3 years."
  },
  {
    question: "Do you offer mobile window tinting in Rockwall?",
    answer: "Yes! Sunmasters provides mobile window tinting services throughout Rockwall and the surrounding East DFW area. We can come to your home or office for residential and commercial installations. Automotive tinting is performed at our shop for optimal results."
  },
  {
    question: "What is ceramic window tint?",
    answer: "Ceramic window tint uses nano-ceramic technology instead of metal or dye. It provides superior heat rejection (up to 98% of infrared heat), does not interfere with cell phone, GPS, or radio signals, and offers excellent clarity. It is the premium choice for Texas heat."
  },
  {
    question: "How long does window tinting take?",
    answer: "Automotive window tinting typically takes 2-4 hours depending on the vehicle. Most cars can be completed same-day. Residential projects vary based on the number of windows. Commercial installations are scheduled based on project scope to minimize business disruption."
  }
];

const HomepageSEOContent = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-4">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Window Tinting?</span>
          </div>
          <h2 className="section-title text-foreground text-center mb-4">
            Benefits of Professional Window Tinting in Rockwall
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Living in Rockwall, TX means dealing with intense summer heat, strong UV rays, and high energy costs. Professional window tinting from Sunmasters solves these problems for your vehicle, home, and business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <div className="text-center mb-4">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
          </div>
          <h2 className="section-title text-foreground text-center mb-4">
            Window Tinting Solutions for Every Need
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Sunmasters has served the Rockwall community and East DFW metroplex for over 45 years. We understand the unique challenges Texas property owners face and provide solutions tailored to your needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Trust Section */}
        <div className="mb-16 bg-card border border-border rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title text-foreground mb-6">
                Rockwall's Trusted Window Tinting Experts
              </h2>
              <p className="text-muted-foreground mb-4">
                Sunmasters Window Tinting and Shades has been the trusted choice for Rockwall, TX and the surrounding communities since 1979. As a locally owned business, we understand the specific needs of East Texas property owners dealing with intense heat, lake-effect humidity, and the desire to protect valuable investments.
              </p>
              <p className="text-muted-foreground mb-6">
                Our certified technicians are trained on the latest installation techniques and use only premium XPEL window films. We stand behind every installation with a lifetime warranty, giving you peace of mind that your investment is protected.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">45+ years serving the DFW metroplex</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Certified XPEL installation specialists</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Manufacturer lifetime warranty on all films</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Free estimates with no obligation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Same-day automotive service available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Serving Rockwall, Heath, Rowlett, and all of East DFW</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">Areas We Serve Near Rockwall</h3>
              <p className="text-muted-foreground mb-4">
                While based in Rockwall County, Sunmasters provides window tinting services throughout the entire Dallas-Fort Worth metroplex. Our service area includes:
              </p>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <span>• Rockwall</span>
                <span>• Heath</span>
                <span>• Rowlett</span>
                <span>• Wylie</span>
                <span>• Garland</span>
                <span>• Mesquite</span>
                <span>• Sachse</span>
                <span>• Murphy</span>
                <span>• Greenville</span>
                <span>• Caddo Mills</span>
                <span>• Royse City</span>
                <span>• Forney</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div>
          <div className="text-center mb-4">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Common Questions</span>
          </div>
          <h2 className="section-title text-foreground text-center mb-4">
            Window Tinting FAQs for Rockwall Residents
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Have questions about window tinting in Rockwall, TX? Here are answers to the most common questions we receive from customers in the area.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSEOContent;
