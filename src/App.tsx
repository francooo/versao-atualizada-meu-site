import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Consultoria from './pages/Consultoria';
import Desenvolvimento from './pages/Desenvolvimento';
import Nuvemshop from './pages/Nuvemshop';
import IA from './pages/IA';
import BI from './pages/BI';
import Automacao from './pages/Automacao';
import Sites from './pages/Sites';
import Trafego from './pages/Trafego';
import ERP from './pages/ERP';
import Integracao from './pages/Integracao';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/consultoria" element={<Consultoria />} />
          <Route path="/servicos/desenvolvimento" element={<Desenvolvimento />} />
          <Route path="/servicos/desenvolvimento/nuvemshop" element={<Nuvemshop />} />
          <Route path="/servicos/ia" element={<IA />} />
          <Route path="/servicos/bi" element={<BI />} />
          <Route path="/servicos/automacao" element={<Automacao />} />
          <Route path="/servicos/sites" element={<Sites />} />
          <Route path="/servicos/trafego" element={<Trafego />} />
          <Route path="/servicos/erp" element={<ERP />} />
          <Route path="/servicos/integracao" element={<Integracao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
