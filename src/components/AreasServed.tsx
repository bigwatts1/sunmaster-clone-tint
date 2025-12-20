import { Link } from "react-router-dom";

const dallasAreas = [
  { name: "Dallas", slug: "dallas" },
  { name: "Plano", slug: "plano" },
  { name: "Frisco", slug: "frisco" },
  { name: "McKinney", slug: "mckinney" },
  { name: "Fort Worth", slug: "fort-worth" },
  { name: "Arlington", slug: "arlington" },
  { name: "Irving", slug: "irving" },
  { name: "Garland", slug: "garland" },
  { name: "Grand Prairie", slug: "grand-prairie" },
];

const northAreas = [
  { name: "Richardson", slug: "richardson" },
  { name: "Allen", slug: "allen" },
  { name: "Carrollton", slug: "carrollton" },
  { name: "Lewisville", slug: "lewisville" },
  { name: "Denton", slug: "denton" },
  { name: "Flower Mound", slug: "flower-mound" },
  { name: "The Colony", slug: "the-colony" },
  { name: "Little Elm", slug: "little-elm" },
  { name: "Prosper", slug: "prosper" },
];

const eastWestAreas = [
  { name: "Mesquite", slug: "mesquite" },
  { name: "Rockwall", slug: "rockwall" },
  { name: "Rowlett", slug: "rowlett" },
  { name: "Wylie", slug: "wylie" },
  { name: "Murphy", slug: "murphy" },
  { name: "Sachse", slug: "sachse" },
  { name: "Coppell", slug: "coppell" },
  { name: "Grapevine", slug: "grapevine" },
  { name: "Southlake", slug: "southlake" },
  { name: "Greenville", slug: "greenville" },
  { name: "Caddo Mills", slug: "caddo-mills" },
  { name: "Commerce", slug: "commerce" },
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
          Service Areas Near Rockwall TX
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Sunmasters provides expert window tinting, paint protection, and ceramic coating services throughout the Dallas-Fort Worth metropolitan area. Our certified technicians are ready to serve you.
        </p>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">Dallas Metro</h3>
            <ul className="space-y-2">
              {dallasAreas.map((city) => (
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

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">North DFW</h3>
            <ul className="space-y-2">
              {northAreas.map((city) => (
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

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">East & West DFW</h3>
            <ul className="space-y-2">
              {eastWestAreas.map((city) => (
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
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Don't see your city listed? <a href="#contact" className="text-primary hover:underline">Contact us</a> – we likely serve your area!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;
