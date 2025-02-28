import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import NavBar from "./components/Navbat";
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
    judge: useRef(null),
    faq: useRef(null),
  };

  // Routes where the footer should not appear
  const noFooterRoutes = ["/sponsor", "/events", "/gallery", "/problem-statement", "/developers"];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Pass scrollRefs to Navbar */}
      <NavBar scrollRefs={scrollRefs} />

      <Routes>
        {/* Home Route with Section Refs */}
        <Route
          path="/"
          element={
            <>
              <section ref={scrollRefs.home}><Hero /></section>
              <section ref={scrollRefs.about}><About /></section>
              <section ref={scrollRefs.timeline}><Features /></section>
              <section ref={scrollRefs.problems}><Story /></section>
              <section ref={scrollRefs.prizes}><Contact /></section>
            </>
          }
        />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/problem-statement" element={<ProblemStatement />} />
      </Routes>

      {!noFooterRoutes.includes(location.pathname) && <Footer />}
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
