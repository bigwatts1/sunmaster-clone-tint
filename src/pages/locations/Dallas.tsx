import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const DallasPage = () => {
  const location = getLocationBySlug("dallas");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default DallasPage;
