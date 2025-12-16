import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const FortWorthPage = () => {
  const location = getLocationBySlug("fort-worth");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default FortWorthPage;
