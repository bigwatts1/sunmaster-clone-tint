import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SmartFilm from "./pages/SmartFilm";
import PaintProtection from "./pages/PaintProtection";
import ResidentialTinting from "./pages/ResidentialTinting";
import CommercialTinting from "./pages/CommercialTinting";
import AutomotiveTinting from "./pages/AutomotiveTinting";
import CeramicCoating from "./pages/CeramicCoating";
import SecurityFilm from "./pages/SecurityFilm";
import MotorizedPatioScreens from "./pages/MotorizedPatioScreens";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

// Location Pages
import Dallas from "./pages/locations/Dallas";
import Plano from "./pages/locations/Plano";
import Frisco from "./pages/locations/Frisco";
import McKinney from "./pages/locations/McKinney";
import FortWorth from "./pages/locations/FortWorth";
import Arlington from "./pages/locations/Arlington";
import Irving from "./pages/locations/Irving";
import Garland from "./pages/locations/Garland";
import GrandPrairie from "./pages/locations/GrandPrairie";
import Richardson from "./pages/locations/Richardson";
import Allen from "./pages/locations/Allen";
import Carrollton from "./pages/locations/Carrollton";
import Lewisville from "./pages/locations/Lewisville";
import Denton from "./pages/locations/Denton";
import FlowerMound from "./pages/locations/FlowerMound";
import TheColony from "./pages/locations/TheColony";
import LittleElm from "./pages/locations/LittleElm";
import Prosper from "./pages/locations/Prosper";
import Mesquite from "./pages/locations/Mesquite";
import Rockwall from "./pages/locations/Rockwall";
import Rowlett from "./pages/locations/Rowlett";
import Wylie from "./pages/locations/Wylie";
import Murphy from "./pages/locations/Murphy";
import Sachse from "./pages/locations/Sachse";
import Coppell from "./pages/locations/Coppell";
import Grapevine from "./pages/locations/Grapevine";
import Southlake from "./pages/locations/Southlake";
import Greenville from "./pages/locations/Greenville";
import CaddoMills from "./pages/locations/CaddoMills";
import Commerce from "./pages/locations/Commerce";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
