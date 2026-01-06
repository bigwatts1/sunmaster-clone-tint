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
          Window Tinting Service Areas
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Sunmasters Window Tinting proudly serves the entire Dallas-Fort Worth metroplex with professional window film installation for homes, businesses, and vehicles.
        </p>

        {/* Areas Grid - All 30 locations with proper internal links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(locationsByRegion).map(([region, cities]) => (
            <div key={region} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-foreground text-lg">{region}</h3>
              </div>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link 
                      to={`/locations/${city.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Window Tinting {city.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Don't see your city listed? <a href="#estimate" className="text-primary hover:underline">Contact us</a> – we serve the entire North Texas region!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;