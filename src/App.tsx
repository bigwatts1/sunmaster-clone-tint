import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Only import the homepage statically (most common entry point)
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const SmartFilm = lazy(() => import("./pages/SmartFilm"));
const PaintProtection = lazy(() => import("./pages/PaintProtection"));
const ResidentialTinting = lazy(() => import("./pages/ResidentialTinting"));
const CommercialTinting = lazy(() => import("./pages/CommercialTinting"));
const AutomotiveTinting = lazy(() => import("./pages/AutomotiveTinting"));
const CeramicCoating = lazy(() => import("./pages/CeramicCoating"));
const SecurityFilm = lazy(() => import("./pages/SecurityFilm"));
const MotorizedPatioScreens = lazy(() => import("./pages/MotorizedPatioScreens"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CityService = lazy(() => import("./pages/CityService"));
const LandingAutoTint = lazy(() => import("./pages/LandingAutoTint"));
const LandingHomeTint = lazy(() => import("./pages/LandingHomeTint"));
const LandingCommercialTint = lazy(() => import("./pages/LandingCommercialTint"));
const LandingPPF = lazy(() => import("./pages/LandingPPF"));
const LandingCeramicCoating = lazy(() => import("./pages/LandingCeramicCoating"));
const LandingSmartFilm = lazy(() => import("./pages/LandingSmartFilm"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Location Pages
const Dallas = lazy(() => import("./pages/locations/Dallas"));
const Plano = lazy(() => import("./pages/locations/Plano"));
const Frisco = lazy(() => import("./pages/locations/Frisco"));
const McKinney = lazy(() => import("./pages/locations/McKinney"));
const FortWorth = lazy(() => import("./pages/locations/FortWorth"));
const Arlington = lazy(() => import("./pages/locations/Arlington"));
const Irving = lazy(() => import("./pages/locations/Irving"));
const Garland = lazy(() => import("./pages/locations/Garland"));
const GrandPrairie = lazy(() => import("./pages/locations/GrandPrairie"));
const Richardson = lazy(() => import("./pages/locations/Richardson"));
const Allen = lazy(() => import("./pages/locations/Allen"));
const Carrollton = lazy(() => import("./pages/locations/Carrollton"));
const Lewisville = lazy(() => import("./pages/locations/Lewisville"));
const Denton = lazy(() => import("./pages/locations/Denton"));
const FlowerMound = lazy(() => import("./pages/locations/FlowerMound"));
const TheColony = lazy(() => import("./pages/locations/TheColony"));
const LittleElm = lazy(() => import("./pages/locations/LittleElm"));
const Prosper = lazy(() => import("./pages/locations/Prosper"));
const Mesquite = lazy(() => import("./pages/locations/Mesquite"));
const Rockwall = lazy(() => import("./pages/locations/Rockwall"));
const Rowlett = lazy(() => import("./pages/locations/Rowlett"));
const Wylie = lazy(() => import("./pages/locations/Wylie"));
const Murphy = lazy(() => import("./pages/locations/Murphy"));
const Sachse = lazy(() => import("./pages/locations/Sachse"));
const Coppell = lazy(() => import("./pages/locations/Coppell"));
const Grapevine = lazy(() => import("./pages/locations/Grapevine"));
const Southlake = lazy(() => import("./pages/locations/Southlake"));
const Greenville = lazy(() => import("./pages/locations/Greenville"));
const CaddoMills = lazy(() => import("./pages/locations/CaddoMills"));
const Commerce = lazy(() => import("./pages/locations/Commerce"));

const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/smart-film" element={<SmartFilm />} />
          <Route path="/paint-protection" element={<PaintProtection />} />
          <Route path="/residential-tinting" element={<ResidentialTinting />} />
          <Route path="/commercial-tinting" element={<CommercialTinting />} />
          <Route path="/automotive-tinting" element={<AutomotiveTinting />} />
          <Route path="/ceramic-coating" element={<CeramicCoating />} />
          <Route path="/security-film" element={<SecurityFilm />} />
          <Route path="/motorized-patio-screens" element={<MotorizedPatioScreens />} />

          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Landing Pages */}
          <Route path="/auto-tinting-special" element={<LandingAutoTint />} />
          <Route path="/home-tinting-special" element={<LandingHomeTint />} />
          <Route path="/commercial-tinting-special" element={<LandingCommercialTint />} />
          <Route path="/ppf-special" element={<LandingPPF />} />
          <Route path="/ceramic-coating-special" element={<LandingCeramicCoating />} />
          <Route path="/smart-film-special" element={<LandingSmartFilm />} />

          {/* City-Service Pages (dynamic) */}
          <Route path="/:citySlug/:serviceSlug" element={<CityService />} />

          {/* Location Pages */}
          <Route path="/locations/dallas" element={<Dallas />} />
          <Route path="/locations/plano" element={<Plano />} />
          <Route path="/locations/frisco" element={<Frisco />} />
          <Route path="/locations/mckinney" element={<McKinney />} />
          <Route path="/locations/fort-worth" element={<FortWorth />} />
          <Route path="/locations/arlington" element={<Arlington />} />
          <Route path="/locations/irving" element={<Irving />} />
          <Route path="/locations/garland" element={<Garland />} />
          <Route path="/locations/grand-prairie" element={<GrandPrairie />} />
          <Route path="/locations/richardson" element={<Richardson />} />
          <Route path="/locations/allen" element={<Allen />} />
          <Route path="/locations/carrollton" element={<Carrollton />} />
          <Route path="/locations/lewisville" element={<Lewisville />} />
          <Route path="/locations/denton" element={<Denton />} />
          <Route path="/locations/flower-mound" element={<FlowerMound />} />
          <Route path="/locations/the-colony" element={<TheColony />} />
          <Route path="/locations/little-elm" element={<LittleElm />} />
          <Route path="/locations/prosper" element={<Prosper />} />
          <Route path="/locations/mesquite" element={<Mesquite />} />
          <Route path="/locations/rockwall" element={<Rockwall />} />
          <Route path="/locations/rowlett" element={<Rowlett />} />
          <Route path="/locations/wylie" element={<Wylie />} />
          <Route path="/locations/murphy" element={<Murphy />} />
          <Route path="/locations/sachse" element={<Sachse />} />
          <Route path="/locations/coppell" element={<Coppell />} />
          <Route path="/locations/grapevine" element={<Grapevine />} />
          <Route path="/locations/southlake" element={<Southlake />} />
          <Route path="/locations/greenville" element={<Greenville />} />
          <Route path="/locations/caddo-mills" element={<CaddoMills />} />
          <Route path="/locations/commerce" element={<Commerce />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
