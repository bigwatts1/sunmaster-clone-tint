import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const AllenPage = () => {
  const location = getLocationBySlug("allen");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default AllenPage;
