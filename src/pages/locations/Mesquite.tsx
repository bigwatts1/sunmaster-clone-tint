import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const MesquitePage = () => {
  const location = getLocationBySlug("mesquite");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default MesquitePage;
