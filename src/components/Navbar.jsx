import { Link } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Problem Statement", path: "/problem-statement" },
  { name: "Developers", path: "/developers" },
  {
    name: "Gallery",
    path: "/gallery",
  },
  { name: "Become Sponsor", path: "/sponsor" },
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioElementRef.current;

    // Autoplay muted audio on component mount
    if (audio && isAudioPlaying) {
      audio.muted = true;
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioElementRef.current;
    if (audio) {
      if (isAudioPlaying) {
        audio.muted = false; // Unmute and play audio when toggled on
        audio.play().catch((err) => console.log("Playback error:", err));
      } else {
        audio.pause(); // Pause audio when toggled off
      }
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-0"
      style={{
        backgroundImage: "url('/img/navbar.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-4 md:px-8">
          <div className="flex items-center gap-7">
            <Link to="/">
              <img
                src="/img/logo1.png"
                alt="logo"
                className="w-10 cursor-pointer"
              />
            </Link>

            <Button
              id="product-button"
              title="Watch Past Events"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              as="a"
              href="https://www.instagram.com/bkbiet.anantam?igsh=MXB5N3RwN2w2djF1ag=="
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>

          <div className="flex items-center">
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) =>
                item.target ? (
                  <a
                    key={index}
                    href={item.path}
                    target={item.target}
                    rel="noopener noreferrer"
                    className="nav-hover-btn"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link key={index} to={item.path} className="nav-hover-btn">
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 text-2xl text-white"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt4 />}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className="ml-4 flex items-center space-x-0.5"
              aria-label="Toggle audio"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/Bg-music.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", { active: isAudioPlaying })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed justify-center flex top-full left-1/2 transform -translate-x-1/2 w-80 bg-black bg-opacity-80 backdrop-blur-md shadow-lg md:hidden rounded-lg">
            <ul className="flex flex-col items-center space-y-4 py-10">
              {navItems.map((item, index) =>
                item.target ? (
                  <li key={index}>
                    <a
                      href={item.path}
                      target={item.target}
                      rel="noopener noreferrer"
                      className="nav-hover-btn"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="nav-hover-btn"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
