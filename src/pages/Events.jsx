import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Events.css"; // Custom styles
import AnimatedTitle from "../components/AnimatedTitle";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Event data with details
  const events = [
    {
      name: "Anant Netrunn",
      image: "../img/1.png",
      description: "Description for Event 1",
      date: "10-12-2025",
      time: "10:00 AM",
      venue: "Venue 1",
    },
    {
      name: "Robowar",
      image: "../img/2.png",
      description: "Description for Event 2",
      date: "11-12-2025",
      time: "11:00 AM",
      venue: "Venue 2",
    },
    {
      name: "Overdose",
      image: "../img/3.png",
      description: "Description for Event 3",
      date: "12-12-2025",
      time: "12:00 PM",
      venue: "Venue 3",
    },
    {
      name: "Esports",
      image: "../img/4.png",
      description: "Description for Event 4",
      date: "13-12-2025",
      time: "01:00 PM",
      venue: "Venue 4",
    },
    {
      name: "Night Symposium",
      image: "../img/5.png",
      description: "Description for Event 5",
      date: "14-12-2025",
      time: "02:00 PM",
      venue: "Venue 5",
    },
  ];

  // Function to open modal
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-page">
      <AnimatedTitle title="<b>Events</b>" containerClass="title-container" />
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="event-slide">
            <img
              src={event.image}
              alt={event.name}
              className="event-image"
              onClick={() => openModal(event)}
            />
            <div className="event-details">
              <h2>{event.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedEvent.image} alt={selectedEvent.name} className="modal-image" />
            <div className="modal-details">
              <h2 className="modal-title">{selectedEvent.name}</h2>
              <p className="modal-description">{selectedEvent.description}</p>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>
              <p><strong>Venue:</strong> {selectedEvent.venue}</p>
              <button className="modal-button" onClick={() => alert(`Registered for ${selectedEvent.name}`)}>
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
