import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const ProsperPage = () => {
  const location = getLocationBySlug("prosper");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default ProsperPage;
