
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerOnboarding from "./pages/onboarding/BuyerOnboarding";
import SellerOnboarding from "./pages/onboarding/SellerOnboarding";
import BuyerDashboard from "./pages/buyer/Dashboard";
import SellerDashboard from "./pages/seller/Dashboard";
import CreateRequest from "./pages/buyer/CreateRequest";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import JoinUs from "./pages/JoinUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding/buyer" element={<BuyerOnboarding />} />
          <Route path="/onboarding/seller" element={<SellerOnboarding />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/create-request" element={<CreateRequest />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
