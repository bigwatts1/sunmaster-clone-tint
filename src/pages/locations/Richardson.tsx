import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const RichardsonPage = () => {
  const location = getLocationBySlug("richardson");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default RichardsonPage;
