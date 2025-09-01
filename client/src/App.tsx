import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import ChatButton from "@/components/chat/ChatButton";
import ChatSidebar from "@/components/chat/ChatSidebar";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import PricingPage from "@/pages/PricingPage";
import CareersPage from "@/pages/CareersPage";
import ContactPage from "@/pages/ContactPage";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatButton onClick={() => setIsChatOpen(true)} />
        <ChatSidebar 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
