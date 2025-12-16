import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const GarlandPage = () => {
  const location = getLocationBySlug("garland");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default GarlandPage;
