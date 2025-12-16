import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const LewisvillePage = () => {
  const location = getLocationBySlug("lewisville");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default LewisvillePage;
