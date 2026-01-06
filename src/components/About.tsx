import { CheckCircle, Shield, Award, Users } from "lucide-react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

const About = () => {
  const [videoRef, isVideoVisible] = useLazyLoad<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats & Video */}
          <div className="relative">
            <div ref={videoRef} className="rounded-lg w-full aspect-video bg-muted">
              {isVideoVisible ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg w-full h-full object-cover"
                >
                  <source src="https://veihnijxukhoegozttym.supabase.co/storage/v1/object/public/videos//IMG_3977.mov" type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full bg-muted rounded-lg animate-pulse" />
              )}
            </div>
            
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
                <span className="text-4xl font-bold text-primary font-heading">5★</span>
                <p className="text-muted-foreground text-sm mt-1">Customer Reviews</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="section-title text-foreground mt-2 mb-6">
              Rockwall & Dallas Window Tinting Experts
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Sunmasters Window Tinting Rockwall has served homeowners, businesses, and vehicle owners across Rockwall and Dallas for over four decades. Our expert team brings decades of combined experience and certified installation training to every project. From privacy window tint in Rockwall TX to commercial window tinting near me searches—we're the local professionals who get the job done right.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We've completed thousands of installations for satisfied customers throughout North Texas. Our certified technicians are trained on all major window film brands and use only high-quality materials backed by manufacturer warranties. Whether you need automotive, residential, or commercial window film, we deliver clean, professional installations with attention to every detail.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Decades of Combined Experience</p>
                  <p className="text-muted-foreground text-sm">Expert team with thousands of installations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Certified Installation Technicians</p>
                  <p className="text-muted-foreground text-sm">Trained on all major film brands and systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Licensed, Insured & Warranty-Backed</p>
                  <p className="text-muted-foreground text-sm">Full protection and peace of mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium">Serving Rockwall & Dallas</p>
                  <p className="text-muted-foreground text-sm">Plus Plano, Garland, Mesquite, Richardson & nearby</p>
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
