import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const CarrolltonPage = () => {
  const location = getLocationBySlug("carrollton");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default CarrolltonPage;
