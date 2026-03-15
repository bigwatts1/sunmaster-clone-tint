import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const GrapevinePage = () => {
  const location = getLocationBySlug("grapevine");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default GrapevinePage;
