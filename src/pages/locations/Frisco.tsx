import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const FriscoPage = () => {
  const location = getLocationBySlug("frisco");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default FriscoPage;
