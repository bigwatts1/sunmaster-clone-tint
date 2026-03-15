import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

interface LocationLinksProps {
  serviceType?: "automotive" | "residential" | "commercial" | "ceramic" | "security" | "smart" | "general";
  maxLocations?: number;
  showHeading?: boolean;
  className?: string;
}

// Group locations by region
const locationsByRegion = locations.reduce((acc, loc) => {
  if (!acc[loc.region]) {
    acc[loc.region] = [];
  }
  acc[loc.region].push({ name: loc.city, slug: loc.slug });
  return acc;
}, {} as Record<string, { name: string; slug: string }[]>);

// Get anchor text based on service type
const getAnchorText = (city: string, serviceType: string): string => {
  switch (serviceType) {
    case "automotive":
      return `car window tinting in ${city}, TX`;
    case "residential":
      return `home window tinting in ${city}, TX`;
    case "commercial":
      return `commercial window tinting in ${city}, TX`;
    case "ceramic":
      return `ceramic window tint in ${city}, TX`;
    case "security":
      return `security window film in ${city}, TX`;
    case "smart":
      return `smart film installation in ${city}, TX`;
    default:
      return `window tinting in ${city}, TX`;
  }
};

// Featured locations for compact display
const featuredLocations = [
  "dallas", "plano", "frisco", "mckinney", "fort-worth", "arlington",
  "rockwall", "allen", "richardson", "irving", "garland", "mesquite"
];

const LocationLinks = ({ 
  serviceType = "general", 
  maxLocations,
  showHeading = true,
  className = ""
}: LocationLinksProps) => {
  // Get all locations or filtered set
  const allLocations = locations.map(loc => ({ name: loc.city, slug: loc.slug }));
  const displayLocations = maxLocations 
    ? allLocations.filter(loc => featuredLocations.includes(loc.slug)).slice(0, maxLocations)
    : allLocations;

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-8">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Service Areas
            </span>
            <h2 className="section-title text-foreground mt-2">
              {serviceType === "automotive" && "Automotive Window Tinting Near You"}
              {serviceType === "residential" && "Home Window Tinting Near You"}
              {serviceType === "commercial" && "Commercial Window Tinting Near You"}
              {serviceType === "ceramic" && "Ceramic Window Tint Near You"}
              {serviceType === "security" && "Security Film Installation Near You"}
              {serviceType === "smart" && "Smart Film Installation Near You"}
              {serviceType === "general" && "Window Tinting Near You"}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sunmasters proudly serves the entire Dallas-Fort Worth metroplex. Find professional window tinting services in your city.
            </p>
          </div>
        )}

        {/* Compact link list for service pages */}
        {maxLocations && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {displayLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                {getAnchorText(loc.name, serviceType)}
              </Link>
            ))}
            <Link
              to="/#areas"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              View all service areas →
            </Link>
          </div>
        )}

        {/* Full grid for homepage/dedicated pages */}
        {!maxLocations && (
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
                        {getAnchorText(city.name, serviceType)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationLinks;
