import { useParams, Navigate } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import { getLocationBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";

const CityService = () => {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug: string }>();
  
  // Extract city slug from citySlug (remove -tx suffix)
  const cleanCitySlug = citySlug?.replace(/-tx$/, "") || "";
  
  const location = getLocationBySlug(cleanCitySlug);
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  
  // Redirect to 404 if location or service not found
  if (!location || !service) {
    return <Navigate to="/404" replace />;
  }
  
  return <CityServicePage location={location} service={service} />;
};

export default CityService;
