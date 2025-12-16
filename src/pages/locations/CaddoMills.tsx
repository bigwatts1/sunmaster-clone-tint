import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const CaddoMillsPage = () => {
  const location = getLocationBySlug("caddo-mills");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default CaddoMillsPage;
