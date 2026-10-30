import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/section/Navbar";
import Hero from "./Components/section/Hero";
import About from "./Components/section/About";
import ChefWord from "./Components/section/ChefWord";
import ImagesGallery from "./Components/ImagesGallery";
import Services from "./Components/section/Services";
import Info from "./Components/section/Info";
import GalleryPhoto from "./Components/section/GalleryPhoto";
import Contact from "./Components/section/Contact";
import Footer from "./Components/section/Footer";
import LegalNotice from "./Components/cnil/LegalNotice";
import PrivacyPolicy from "./Components/cnil/PrivacyPolicy";

import { liensImg1 } from "../constant/constant";

const appStyles = `
  .app-main {
    min-height: 100vh;
    background-color: var(--secondary);
  }
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ChefWord />
      <ImagesGallery images={liensImg1} />
      <Services />
      <Info />
      <GalleryPhoto />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <style>{appStyles}</style>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/confidentialite" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;