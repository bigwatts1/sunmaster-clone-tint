import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const SouthlakePage = () => {
  const location = getLocationBySlug("southlake");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default SouthlakePage;
