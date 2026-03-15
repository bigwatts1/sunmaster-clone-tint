import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const TheColonyPage = () => {
  const location = getLocationBySlug("the-colony");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default TheColonyPage;
