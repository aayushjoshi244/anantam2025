import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header";
import NavBat from "./components/Navbat";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Developers from "./pages/Developers";
import Events from "./pages/Events";
import Sponsor from "./pages/Sponsor";
import Gallery from "./pages/Gallery";
import ProblemStatement from "./pages/ProblemStatement";
import 'swiper/swiper-bundle.css';

function App() {
  const location = useLocation();

  // Define refs for each section
  const scrollRefs = {
    home: useRef(null),
    about: useRef(null),
    timeline: useRef(null),
    problems: useRef(null),
    prizes: useRef(null),
  };

  const noFooterRoutes = ["/sponsor", "/events", "/gallery", "/problem-statement", "/developers"];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Header />
      <NavBat scrollRefs={scrollRefs} className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 shadow-lg" />

      <div className="pt-[80px]"> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section ref={scrollRefs.home} className="w-full"><Hero /></section>
                <section ref={scrollRefs.about} className="w-full"><About /></section>
                <section ref={scrollRefs.timeline} className="w-full"><Features /></section>
                <section ref={scrollRefs.problems} className="w-full"><Story /></section>
                <section ref={scrollRefs.prizes} className="w-full"><Contact /></section>
              </>
            }
          />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/problem-statement" element={<ProblemStatement />} />
        </Routes>
      </div>

      {!noFooterRoutes.includes(location.pathname) && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </main>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
