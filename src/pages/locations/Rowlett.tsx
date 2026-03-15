import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/data/locations";

const RowlettPage = () => {
  const location = getLocationBySlug("rowlett");
  if (!location) return null;
  return <LocationPage location={location} />;
};

export default RowlettPage;
