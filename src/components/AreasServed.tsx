const dallasAreas = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Irving",
  "Garland",
  "Grand Prairie",
  "McKinney",
  "Frisco",
  "Mesquite",
  "Carrollton",
  "Denton",
  "Richardson",
  "Lewisville",
  "Allen",
  "Flower Mound",
  "Rowlett",
  "Euless",
  "Grapevine",
  "Bedford",
  "Cedar Hill",
  "Wylie",
  "Keller",
  "Coppell",
  "Rockwall",
  "Mansfield",
  "Southlake",
  "Burleson",
  "DeSoto",
  "Duncanville",
  "Lancaster",
  "The Colony",
  "Hurst",
  "Little Elm",
  "Prosper",
  "Sachse",
  "Farmers Branch",
  "Addison",
  "Highland Park",
  "University Park",
];

const AreasServed = () => {
  return (
    <section id="areas" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-foreground mb-4">
          Our Dallas Window & Wall Team Services the Following Areas of Texas:
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We proudly serve the greater Dallas-Fort Worth metroplex and surrounding communities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {dallasAreas.map((area) => (
            <div
              key={area}
              className="bg-card border border-border rounded-sm px-4 py-3 text-center hover:border-primary hover:bg-card/80 transition-colors cursor-default"
            >
              <span className="text-foreground text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-center mt-8 text-sm">
          Don't see your city listed? Contact us – we likely service your area too!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;
