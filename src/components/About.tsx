import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="section-title text-foreground mb-6">
              We Can Handle Any Project
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Welcome to Sunmasters Window Tinting, your trusted partner for
              premier window tinting solutions. With years of expertise and a
              passion for excellence, we have built a reputation for delivering
              customized tinting services that cater to the unique needs of
              automotive, residential, and commercial properties.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              At Sunmasters, we understand the importance of comfort, privacy,
              and energy efficiency. That's why we use cutting-edge technology
              and the highest quality films to ensure superior UV protection,
              heat reduction, and aesthetic enhancement for your windows.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking to upgrade your vehicle, protect your home,
              or enhance your commercial space, you can rely on Sunmasters for
              reliable, professional, and innovative tinting solutions.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading uppercase tracking-wider"
              asChild
            >
              <a href="#services">Learn More!</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-card rounded-sm">
              <span className="stat-number">15+</span>
              <p className="text-muted-foreground mt-2 font-heading uppercase tracking-wide">
                Years of Experience
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-sm">
              <span className="stat-number">100%</span>
              <p className="text-muted-foreground mt-2 font-heading uppercase tracking-wide">
                Customer Satisfaction Guaranteed!
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-sm">
              <span className="stat-number">5K+</span>
              <p className="text-muted-foreground mt-2 font-heading uppercase tracking-wide">
                Vehicles Tinted
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-sm">
              <span className="stat-number">500+</span>
              <p className="text-muted-foreground mt-2 font-heading uppercase tracking-wide">
                Buildings Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
