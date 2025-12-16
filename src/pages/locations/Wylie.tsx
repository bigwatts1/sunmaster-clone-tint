import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const WyliePage = () => {
  const location = getLocationBySlug("wylie");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default WyliePage;
