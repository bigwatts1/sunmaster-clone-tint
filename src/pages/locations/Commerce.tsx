import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const CommercePage = () => {
  const location = getLocationBySlug("commerce");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default CommercePage;
