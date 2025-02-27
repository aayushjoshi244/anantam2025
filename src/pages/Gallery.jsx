import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Events.css"; // Custom styles
import AnimatedTitle from "../components/AnimatedTitle";

const Gallery = () => {
  // Event data with details
  const events = [
    { image: "../img/1.png" },
    { image: "../img/2.png" },
    { image: "../img/3.png" },
    { image: "../img/4.png" },
    { image: "../img/5.png" },
    { image: "../img/6.png" },
    { image: "../img/7.png" },
    { image: "../img/8.png" },
    { image: "../img/9.png" },
    { image: "../img/10.png" },
    { image: "../img/11.png" },
    { image: "../img/12.png" },
    { image: "../img/13.png" },
  ];

  return (
    <div className="events-page bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-opacity-50">
        <div className="absolute -top-10 -left-10 h-96 w-96 rounded-full bg-gold-300 opacity-20 blur-3xl"></div>
      </div>

      <AnimatedTitle
        title="<b>Gallery</b>"
        containerClass="mt-20 !text-white text-center"
      />
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="event-slide">
            <img
              src={event.image}
              alt={`Event ${index + 1}`}
              className="event-image rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
