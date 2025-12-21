import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const primaryAreas = [
  { name: "Rockwall", slug: "rockwall" },
  { name: "Dallas", slug: "dallas" },
];

const secondaryAreas = [
  { name: "Plano", slug: "plano" },
  { name: "Garland", slug: "garland" },
  { name: "Mesquite", slug: "mesquite" },
  { name: "Richardson", slug: "richardson" },
];

const nearbyAreas = [
  { name: "Rowlett", slug: "rowlett" },
  { name: "Wylie", slug: "wylie" },
  { name: "Murphy", slug: "murphy" },
  { name: "Sachse", slug: "sachse" },
  { name: "Allen", slug: "allen" },
  { name: "McKinney", slug: "mckinney" },
  { name: "Frisco", slug: "frisco" },
  { name: "Greenville", slug: "greenville" },
  { name: "Caddo Mills", slug: "caddo-mills" },
  { name: "Heath", slug: "rockwall" },
  { name: "Royse City", slug: "rockwall" },
  { name: "Forney", slug: "mesquite" },
];

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
          Sunmasters Window Tinting Rockwall proudly serves Rockwall, Dallas, and surrounding North Texas communities with professional window film installation for homes, businesses, and vehicles.
        </p>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary Areas */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-foreground text-xl">Primary Service Areas</h3>
            </div>
            <ul className="space-y-2">
              {primaryAreas.map((city) => (
                <li key={city.slug}>
                  <Link 
                    to={`/locations/${city.slug}`}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Window Tinting {city.name} TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Areas */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-foreground text-xl">Also Serving</h3>
            </div>
            <ul className="space-y-2">
              {secondaryAreas.map((city) => (
                <li key={city.slug}>
                  <Link 
                    to={`/locations/${city.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Areas */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-foreground text-xl">Nearby Communities</h3>
            </div>
            <ul className="space-y-2">
              {nearbyAreas.map((city, index) => (
                <li key={`${city.slug}-${index}`}>
                  <Link 
                    to={`/locations/${city.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Don't see your city listed? <a href="#estimate" className="text-primary hover:underline">Contact us</a> – we likely serve your area throughout North Texas!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;
