import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const IrvingPage = () => {
  const location = getLocationBySlug("irving");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default IrvingPage;
