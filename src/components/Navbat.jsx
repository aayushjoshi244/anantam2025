import React, { useState, useEffect, useRef } from "react";
import { RiMoneyRupeeCircleFill, RiTeamFill } from "react-icons/ri";
import { FaGripLines, FaPenToSquare, FaQuestion, FaRegClock } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

const Navbat = ({ scrollRefs }) => {
  const [selectedSection, setSelectedSection] = useState("#home");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (["judge", "LeadOrganizers", "sponsors"].includes(sectionId)) {
            setSelectedSection("#judge");
          } else {
            setSelectedSection(`#${sectionId}`);
          }
        }
      });
    }, options);

    Object.values(scrollRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(scrollRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [scrollRefs]);

  const handleNavClick = (hash, ref, navItemRef) => {
    window.location.hash = hash;
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    navItemRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="fixed md:left-[1rem] xl:left-[3rem] z-50 md:top-1/2 md:transform md:-translate-y-1/2 bottom-[5rem] md:bottom-auto right-[1rem] w-11/12 md:w-16 bg-[#151a20] text-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
      <div className="flex md:flex-col md:items-center h-auto gap-0.5 overflow-x-auto">
        <NavItem hash="#home" icon={<HiHome />} label="Home" isFirst selected={selectedSection === "#home"} scrollTo={scrollRefs.home} onClick={handleNavClick} />
        <NavItem hash="#about" icon={<FaGripLines />} label="About" selected={selectedSection === "#about"} scrollTo={scrollRefs.about} onClick={handleNavClick} />
        <NavItem hash="#timeline" icon={<FaPenToSquare />} label="TimeLine" selected={selectedSection === "#timeline"} scrollTo={scrollRefs.timeline} onClick={handleNavClick} />
        <NavItem hash="#problems" icon={<FaRegClock />} label="Problems" selected={selectedSection === "#problems"} scrollTo={scrollRefs.problems} onClick={handleNavClick} />
        <NavItem hash="#prizes" icon={<RiTeamFill />} label="Prizes" selected={selectedSection === "#prizes"} scrollTo={scrollRefs.prizes} onClick={handleNavClick} />
        {/* <NavItem hash="#judge" icon={<RiTeamFill />} label="Team" selected={selectedSection === "#judge"} scrollTo={scrollRefs.judge} onClick={handleNavClick} />
        <NavItem hash="#faq" icon={<FaQuestion />} label="Don't Know" isLast selected={selectedSection === "#faq"} scrollTo={scrollRefs.faq} onClick={handleNavClick} /> */}
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, hash, isFirst, isLast, selected, scrollTo, onClick }) => {
  const navItemRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleMouseOver = () => isDesktop && setIsHovered(true);
  const handleMouseOut = () => isDesktop && setIsHovered(false);

  return (
    <div className="flex-1 md:flex-none">
      <button
        ref={navItemRef}
        className={`w-full md:w-16 py-2 h-[4rem] flex items-center justify-center transition-colors 
          ${selected ? "bg-[#f2be22] text-[#151a20]" : ""}
          ${isHovered ? "bg-[#f2be22] text-[#151a20]" : ""}
          ${isFirst ? "rounded-l-full md:rounded-t-full" : ""}
          ${isLast ? "rounded-r-full md:rounded-b-full" : ""}
        `}
        onClick={() => onClick(hash, scrollTo, navItemRef)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        aria-label={label}
      >
        <span className="font-bold">{icon}</span>
      </button>
    </div>
  );
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (event) => setMatches(event.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

export default Navbat;
