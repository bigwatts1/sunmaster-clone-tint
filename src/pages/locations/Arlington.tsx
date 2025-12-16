import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const ArlingtonPage = () => {
  const location = getLocationBySlug("arlington");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default ArlingtonPage;
