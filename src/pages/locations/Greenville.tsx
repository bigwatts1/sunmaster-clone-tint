import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const GreenvillePage = () => {
  const location = getLocationBySlug("greenville");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default GreenvillePage;
