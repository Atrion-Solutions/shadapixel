import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { Header } from "./components/index.js";
import { Footer } from "./components/index.js";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export const App = () => {
  const location = useLocation();
  return (
    <main className="bg-background font-gilroy bg-[radial-gradient(#14353A_1px,transparent_1px)] [background-size:64px_64px]">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-use" element={<TermsOfUse />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
};
