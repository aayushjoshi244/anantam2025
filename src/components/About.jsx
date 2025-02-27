import React, { useState } from "react";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const About = () => {
  const events = [
    {
      id: 1,
      name: "Hackathon",
      image: "/img/s1.png",
      image2: "/img/wolf.png",
      text: "The Coding Marathon",
      description:
        "Join a thrilling 48-hour hackathon where your creativity and problem-solving skills will be put to the ultimate test. Collaborate with like-minded individuals, tackle real-world challenges, and build innovative projects from scratch. Whether you're a beginner or an experienced developer, this event offers an excellent opportunity to learn, grow, and showcase your technical expertise. Prizes, networking opportunities, and a sense of accomplishment await!",
    },
    {
      id: 2,
      name: "Robowar",
      image: "/img/s2.png",
      image2: "",
      text: "The Legend of ROBOTs",
      description:
        "Step into the world of robotics and engineering with Robowar, an electrifying competition where teams design and build their own robots to battle in an intense arena. From strategic planning to flawless execution, this event is all about testing your technical prowess and creativity. Witness robots clashing in an adrenaline-pumping spectacle and feel the excitement as innovation meets competition.",
    },
    {
      id: 3,
      name: "Blind Date",
      image: "/img/s3.png",
      image2: "",
      text: "Blinded Coding EvE",
      description:
        "Take on the ultimate coding challenge with a twist – you're paired with a random partner! Blind Date puts your communication, teamwork, and technical skills to the test as you collaborate to solve coding problems without prior preparation. It’s an exciting way to meet new people, think on your feet, and have fun while coding under pressure. Can you sync up with your partner and emerge victorious?",
    },
    {
      id: 4,
      name: "Bid Boundaries",
      image: "/img/s4.png",
      image2: "/img/Layer_0_copy.png",
      text: "Auctioning your Bids",
      description:
        "Get ready for a fast-paced, high-stakes auction where strategy is just as important as luck. In Bid Boundaries, participants compete to win resources, tools, or opportunities, all while managing limited budgets and analyzing their opponents' moves. It’s a thrilling game of wits and decision-making, perfect for those who thrive under pressure and love a good challenge.",
    },
    {
      id: 5,
      name: "Anime Quiz",
      image: "/img/s5.png",
      image2: "",
      text: "Anime memory Backup",
      description:
        "Are you an anime enthusiast? Test your knowledge and memory in our exciting Anime Quiz! From classic favorites to modern hits, this event will challenge your expertise in characters, storylines, and iconic moments. Whether you're a casual viewer or a hardcore fan, come and prove your love for anime in this fun, engaging, and nostalgia-filled quiz competition.",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleNextEvent = () => {
    setAnimationClass("next");
    setTimeout(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("");
    }, 500);
  };

  const handlePrevEvent = () => {
    setAnimationClass("prev");
    setTimeout(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
      setAnimationClass("");
    }, 500);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const navigate = useNavigate(); // React Router hook

  const handleNavigate = () => {
    navigate("/events"); // Navigate to the Events page
  };

  return (
    <div className="about-container">
      <div className="content">
        <div className="event-container">
          {/* Event Details */}
          <div
            className={`pexy ${animationClass === "next" ? "dexy-slide-in-left" : "dexy-slide-in-right"}`}
          >
            {events[currentEventIndex].text}
          </div>

          <div
            className="event-display"
            onAnimationEnd={() => setAnimationClass("")}
          >
            <div
              className={`dexy ${animationClass === "next" ? "dexy-slide-in-right" : "dexy-slide-in-left"}`}
            >
              {events[currentEventIndex].name}
            </div>
            <div
              className={`sexy ${animationClass === "next" ? "sexy-slide-in-right" : "sexy-slide-in-left"}`}
            >
              {events[currentEventIndex].name}
            </div>
            <div
              className={`sexy-no ${animationClass === "next" ? "sexy-no-slide-in-right" : "sexy-no-slide-in-left"}`}
            >
              0{events[currentEventIndex].id}
            </div>
            <div className="more-btn" onClick={toggleModal}>
              View More {">"}
            </div>
          </div>

          {/* Event Image */}
          <img
            style={{ width: "900px", height: "auto", maxWidth: "none" }}
            className={`event-image ${animationClass === "next" ? "slide-in-right" : "slide-in-left"}`}
            src={events[currentEventIndex].image}
            key={events[currentEventIndex].id}
            alt={events[currentEventIndex].name}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={handlePrevEvent}>&lt;</button>
          <button onClick={handleNextEvent}>&gt;</button>
        </div>
      </div>

      {isModalVisible && (
        <div className="docker">
          <div className="socker bg-gray-800 p-6 rounded-lg max-w-sm w-full text-white relative">
            {/* Close Button */}
            <button
              className="close-btn absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500"
              onClick={toggleModal} // Function to close the modal
            >
              ✖
            </button>

            <h3 className="poker text-xl font-bold mb-4">
              {events[currentEventIndex].name}
            </h3>
            <div className="descript">
              {events[currentEventIndex].description}
            </div>
            <div className="flex justify-end">
              <button
                className="sexa bg-red-500 px-4 py-1.5 rounded-lg text-white font-semibold hover:bg-red-600 mt-16"
                onClick={handleNavigate} // Navigate on click
              >
                Explore Events
              </button>
                
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
