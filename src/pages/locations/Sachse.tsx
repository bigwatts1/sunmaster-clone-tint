import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const SachsePage = () => {
  const location = getLocationBySlug("sachse");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default SachsePage;
