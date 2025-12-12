const dallasAreas = [
  "Dallas",
  "Plano", 
  "Frisco",
  "McKinney",
  "Fort Worth",
  "Arlington",
  "Irving",
  "Garland",
  "Grand Prairie",
];

const northAreas = [
  "Richardson",
  "Allen",
  "Carrollton",
  "Lewisville",
  "Denton",
  "Flower Mound",
  "The Colony",
  "Little Elm",
  "Prosper",
];

const eastWestAreas = [
  "Mesquite",
  "Rockwall",
  "Rowlett",
  "Wylie",
  "Murphy",
  "Sachse",
  "Coppell",
  "Grapevine",
  "Southlake",
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
          Professional Window Tinting Across Dallas-Fort Worth
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
                <li key={city} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">North DFW</h3>
            <ul className="space-y-2">
              {northAreas.map((city) => (
                <li key={city} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading font-bold text-foreground text-xl mb-4">East & West DFW</h3>
            <ul className="space-y-2">
              {eastWestAreas.map((city) => (
                <li key={city} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {city}
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
