import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const McKinneyPage = () => {
  const location = getLocationBySlug("mckinney");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default McKinneyPage;
