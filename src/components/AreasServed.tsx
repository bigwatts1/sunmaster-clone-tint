import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

// Group locations by region for better organization
const locationsByRegion = locations.reduce((acc, loc) => {
  if (!acc[loc.region]) {
    acc[loc.region] = [];
  }
  acc[loc.region].push({ name: loc.city, slug: loc.slug });
  return acc;
}, {} as Record<string, { name: string; slug: string }[]>);

const AreasServed = () => {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Service Areas</span>
        </div>
        <h2 className="section-title text-foreground text-center mb-4">
          Window Tinting Service Areas in Dallas-Fort Worth
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Sunmasters Window Tinting proudly serves the entire Dallas-Fort Worth metroplex with professional window film installation for homes, businesses, and vehicles. Click your city below for local service information.
        </p>

        {/* Areas Grid - All 30 locations with keyword-rich anchor text */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(locationsByRegion).map(([region, cities]) => (
            <div key={region} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-foreground text-lg">{region}</h3>
              </div>
              <ul className="space-y-3">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link 
                      to={`/locations/${city.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                      title={`Professional window tinting services in ${city.name}, Texas`}
                    >
                      window tinting in {city.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional SEO-friendly location links */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-heading font-bold text-foreground text-center text-lg mb-6">
            Popular Window Tinting Locations
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/locations/dallas" className="text-muted-foreground hover:text-primary transition-colors">
              auto window tinting Dallas TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/plano" className="text-muted-foreground hover:text-primary transition-colors">
              car tint Plano TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/frisco" className="text-muted-foreground hover:text-primary transition-colors">
              window tint Frisco TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/mckinney" className="text-muted-foreground hover:text-primary transition-colors">
              home window tinting McKinney TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/rockwall" className="text-muted-foreground hover:text-primary transition-colors">
              window tinting near me Rockwall TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/fort-worth" className="text-muted-foreground hover:text-primary transition-colors">
              commercial window tinting Fort Worth TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/allen" className="text-muted-foreground hover:text-primary transition-colors">
              residential tinting Allen TX
            </Link>
            <span className="text-border">|</span>
            <Link to="/locations/arlington" className="text-muted-foreground hover:text-primary transition-colors">
              ceramic window tint Arlington TX
            </Link>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Don't see your city listed? <a href="#estimate" className="text-primary hover:underline">Contact us</a> – we serve the entire North Texas region!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;