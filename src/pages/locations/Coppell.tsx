import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const CoppellPage = () => {
  const location = getLocationBySlug("coppell");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default CoppellPage;
