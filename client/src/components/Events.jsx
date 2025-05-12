import React from 'react';
import image1 from "../assets/Events_comp1.svg";
import image2 from "../assets/Events_comp2.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Events = () => {
  const events = [
    {
      title: "Glitch Fix",
      image: "/path/to/vr-image.jpg",
      link: "#"
    },
    {
      title: "Byte Battle",
      image: "/path/to/byte-battle.jpg",
      link: "#"
    },
    {
      title: "Glitch Fix",
      image: "/path/to/vr-image.jpg",
      link: "#"
    },
    {
      title: "Byte Battle",
      image: "/path/to/byte-battle.jpg",
      link: "#"
    }
  ];

  return (
    <section id="events" className="w-full pt-32 px-4 md:px-16 bg-black text-white">
      <div className="flex flex-col items-center gap-12">
        {/* Heading */}
        <h2 className="bg-yel text-black text-4xl md:text-5xl font-extrabold px-10 py-3 rounded-full text-center">
          EVENTS
        </h2>

        {/* Event Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          {/* Left Decoration */}
          <img src={image1} className="w-32 lg:w-48 relative lg:top-[-100px]" alt="Left decoration" />

          {/* Swiper Carousel */}
          <div className="w-full max-w-4xl">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              style={{ width: '100%', height: '300px' }}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="overflow-hidden rounded-2xl h-64 shadow-xl">
                    <div className="h-4/6 bg-white relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-white rounded px-3 py-1">
                        <a href={event.link} className="text-sm font-medium text-black">Learn more</a>
                      </div>
                    </div>
                    <div className="h-2/6 bg-yellow-400 flex items-center justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-black">{event.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Decoration */}
          <img src={image2} className="w-32 lg:w-48 relative lg:top-[100px]" alt="Right decoration" />
        </div>
      </div>
    </section>
  );
};

export default Events;