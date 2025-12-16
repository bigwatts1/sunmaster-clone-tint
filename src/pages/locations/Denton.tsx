import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const DentonPage = () => {
  const location = getLocationBySlug("denton");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default DentonPage;
