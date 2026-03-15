import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const GrandPrairiePage = () => {
  const location = getLocationBySlug("grand-prairie");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default GrandPrairiePage;
