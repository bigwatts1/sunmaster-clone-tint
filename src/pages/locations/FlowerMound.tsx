import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const FlowerMoundPage = () => {
  const location = getLocationBySlug("flower-mound");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default FlowerMoundPage;
