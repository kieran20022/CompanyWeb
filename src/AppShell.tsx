import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import ScrollToTop from "./components/ScrollToTop";

export default function AppShell() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="min-h-screen antialiased overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
