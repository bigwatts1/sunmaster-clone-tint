import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const LittleElmPage = () => {
  const location = getLocationBySlug("little-elm");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default LittleElmPage;
