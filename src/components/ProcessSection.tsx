import { Button } from "@/components/ui/button";
import privacyImg from "@/assets/rockwall-residential-window-tinting.jpg";
import commercialImg from "@/assets/rockwall-commercial-window-tinting.jpg";
import automotiveImg from "@/assets/rockwall-automotive-window-tinting.jpg";
import securityImg from "@/assets/rockwall-security-window-film.jpg";
import ceramicImg from "@/assets/rockwall-ceramic-coating.jpg";

const products = [
  {
    title: "Privacy Window Film Installation",
    description: "Let us help you transform window surfaces to create privacy yet still allow light through and maintain a pleasing environment on both sides.",
    image: privacyImg,
  },
  {
    title: "Commercial Window Tinting",
    description: "Our team can help reduce energy costs, improve comfort, and add a sleek, professional appearance to your office or storefront.",
    image: commercialImg,
  },
  {
    title: "Automotive Tinting",
    description: "We specialize in expert automotive window tinting, providing superior UV protection, heat reduction, and enhanced privacy for your vehicle.",
    image: automotiveImg,
  },
  {
    title: "Safety & Security Film",
    description: "Shatter and security solutions are a great way to secure your team and property. We can retrofit to your real estate and install the systems as well.",
    image: securityImg,
  },
  {
    title: "Ceramic Coating",
    description: "Experience the ultimate in paint protection with our ceramic coating services. Achieve a brilliant, long-lasting shine.",
    image: ceramicImg,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-foreground mb-4">
          Our Window & Wall Enhancement Process
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          We offer solutions for energy efficiency, privacy, security, and decorative needs for both residences and commercial real estate and pride ourselves on our transparent and painless selection, purchase and installation process.
        </p>

        {/* Step 1: Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading text-foreground mb-8 text-center">
            1. Get to Know Our Window & Wall Products:
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.title} className="bg-card rounded-sm overflow-hidden border border-border hover:border-primary transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-heading text-foreground text-sm mb-2">{product.title}</h4>
                  <p className="text-muted-foreground text-xs mb-3">{product.description}</p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto text-xs font-heading uppercase"
                    asChild
                  >
                    <a href="#services">Explore Our Window Tinting Services</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Estimate */}
        <div className="mb-16 bg-card p-8 rounded-sm border border-border">
          <h3 className="text-2xl font-heading text-foreground mb-4">
            2. Get Your Free Estimate
          </h3>
          <p className="text-muted-foreground mb-4">
            Our friendly team of window & surface pros looks forward to meeting you.
          </p>
          <p className="text-muted-foreground mb-4">
            We'll schedule a convenient time to speak with you at your property. We'll be happy to talk through your vision and be sure you're considering products that align with your goals.
          </p>
          <p className="text-muted-foreground mb-4">
            Don't be shy about asking questions. We're here to solve your problems, not sell you product.
          </p>
          <p className="text-muted-foreground">
            Once we're both sure we're talking about the right solution, we'll just need to take measurements to give you your non-binding estimate.
          </p>
        </div>

        {/* Step 3: Celebrate */}
        <div className="bg-card p-8 rounded-sm border border-border">
          <h3 className="text-2xl font-heading text-foreground mb-4">
            3. Celebrate!
          </h3>
          <p className="text-muted-foreground mb-4">
            Once we receive your deposit, we'll prep your materials off-site working on the timeline you received in your estimate.
          </p>
          <p className="text-muted-foreground mb-4">
            Our installation pros will then arrive on-time to install your products and walk you through the installation when completed and collect the balance of your payment.
          </p>
          <p className="text-muted-foreground">
            Then you and the other folks that use the property get to sit back and enjoy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
