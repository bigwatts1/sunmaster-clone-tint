import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const RockwallPage = () => {
  const location = getLocationBySlug("rockwall");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default RockwallPage;
