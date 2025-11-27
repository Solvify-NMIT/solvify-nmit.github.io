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
    <section id="events" className='w-full max-w-7xl mx-auto px-4 mt-40'>
      <div className='flex justify-around items-center gap-10'>
        <img src={image1} className="relative top-[-200px] z-1" alt="Left decoration" />

        <div className="flex flex-col gap-20 w-full max-w-3xl">
          <div className="flex justify-center">
            <h2 className="bg-yel text-center px-32 pt-3 pb-4 text-4xl md:text-5xl font-extrabold text-black rounded-full whitespace-nowrap">EVENTS</h2>
          </div>

          <div className="w-full ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              centeredSlides={false}
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
                  <div className="overflow-hidden rounded-2xl h-64">
                    <div className="h-4/6 bg-white  relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover text-black"
                      />
                      <div className="absolute bottom-2 right-2 bg-white rounded px-3 py-1">
                        <a href={event.link} className="text-sm font-medium text-black">Learn more</a>
                      </div>
                    </div>
                    
                    <div className="h-2/6 bg-yellow-400 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-black">{event.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <img src={image2} className="relative top-[250px] " alt="Right decoration" />
      </div>
    </section>
  );
};

export default Events;