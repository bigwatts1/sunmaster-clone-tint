import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const MurphyPage = () => {
  const location = getLocationBySlug("murphy");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default MurphyPage;
