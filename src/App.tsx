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
import NotFound from "./pages/NotFound";

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
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
