import { CheckCircle, Shield, Award } from "lucide-react";
import automotiveImg from "@/assets/service-automotive.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats & Image */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg w-full"
            >
              <source src="https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//IMG_3977.mov" type="video/mp4" />
            </video>
            
            {/* Stats Overlay */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="text-4xl font-bold text-primary font-heading">45+</span>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="text-4xl font-bold text-primary font-heading">10K+</span>
                <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="text-4xl font-bold text-primary font-heading">100%</span>
                <p className="text-muted-foreground text-sm mt-1">Satisfaction</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="text-4xl font-bold text-primary font-heading">24/7</span>
                <p className="text-muted-foreground text-sm mt-1">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="section-title text-foreground mt-2 mb-6">
              Your Trusted Local Window Tinting Experts
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For over 45 years, Sunmasters Window Tinting and Shades has been the go-to choice for homeowners and businesses seeking reliable, professional window tinting services throughout Dallas and the surrounding area. We're not just technicians – we're your neighbors who take pride in keeping our community comfortable and protected.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team of certified professionals brings expertise in all major window film brands and systems. Whether you need automotive tinting for your vehicle, residential film for your home, or commercial solutions for your business, we approach every job with the same dedication to quality and customer satisfaction.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Same-Day Service Available</p>
                  <p className="text-muted-foreground text-sm">Fast, efficient installations when you need them</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Licensed & Insured</p>
                  <p className="text-muted-foreground text-sm">Full protection and peace of mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Certified Technicians</p>
                  <p className="text-muted-foreground text-sm">Trained experts in all major brands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
