import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../components/AnimatedTitle";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Innovators = () => {
  const gridRef = useRef(null);

  // Extended list of innovators
  const innovators = [
     {
      name: "Aayush Joshi",
      role: "Machine Learning Engineer",
      avatar: "/img/gallery-3.webp",
      socialLink: "https://linkedin.com/in/emilydavis",
    },
    {
      name: "Harshvardhan Singh Shekhawat",
      role: "Full-Stack Developer",
      avatar: "/img/harsh.jpg",
      socialLink: "https://instagram.com/_shekhawat4u_",
    },
    {
      name: "Sumit Singh Rathore",
      role: "Software Engineer",
      avatar: "/img/gallery-3.webp",
      socialLink: "https://instagram.com/sumit_banns",
    },
    {
      name: "Rishi",
      role: "AI Specialist",
      avatar: "/img/gallery-2.webp",
      socialLink: "https://linkedin.com/in/janedoe",
    },
    {
      name: "Nitin",
      role: "Full Stack Developer",
      avatar: "/img/gallery-4.webp",
      socialLink: "https://github.com/johnsmith",
    },
    {
      name: "Ravi Saini",
      role: "Cybersecurity Analyst",
      avatar: "/img/gallery-2.webp",
      socialLink: "https://twitter.com/alicejohnson",
    },
    {
      name: "Chetna",
      role: "Blockchain Developer",
      avatar: "/img/gallery-2.webp",
      socialLink: "https://linkedin.com/in/sophiamartinez",
    },
    {
      name: "Aditya",
      role: "UI/UX Designer",
      avatar: "/img/gallery-5.webp",
      socialLink: "https://behance.net/jameswilson",
    },
  ];

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll(".card");

    // Resetting initial styles to prevent unintended flicker
    gsap.set(cards, { opacity: 0, y: 50 });

    // Animation
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
    <section className="min-h-screen py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container pt-10 mx-auto px-6 lg:px-20">

      <div className="absolute inset-0">
            <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-yellow-400 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-500 opacity-20 blur-3xl"></div>
          </div>
        {/* Page Header */}
        <AnimatedTitle
          title="<b>Developers</b>"
          containerClass="mt-10 mb-10 !text-gold-300 text-center"
        />
        <p className="text-lg text-center text-gray-300 mb-12">
          Discover the minds behind groundbreaking projects, passionate about
          transforming ideas into reality.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {innovators.map((innovator, index) => (
            <div
              key={index}
              className="card p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={innovator.avatar}
                alt={innovator.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-gold-300"
              />
              <h2 className="text-xl font-semibold text-center text-gold-300">
                {innovator.name}
              </h2>
              <p className="text-sm text-center text-gray-300">
                {innovator.role}
              </p>
              <div className="text-center mt-4">
                <a
                  href={innovator.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 hover:text-gold-400 hover:underline"
                >
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer isProblemStatement={true} />
    </>
  );
};

export default Innovators;
