import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
