"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import events from "@/lib/data/events.json";

const Event = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    beforeChange: (_: any, next: any) => {
      setSlideIndex(next);
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#050505] text-white py-12 md:py-0">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-[5vh] z-10 w-full"
      >
        <h1 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] text-center px-4">
          Events
        </h1>
        <div className="mx-auto mt-4 h-[3px] w-[100px] bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
      </motion.div>

      {/* Carousel Container */}
      <div className="flex flex-col w-[90%] lg:w-[85%] max-w-[1400px] mx-auto">
        {/* Slider Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full mx-auto mt-[5vh] p-4 pb-3 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#FFD700] rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.3)]"
        >
          <Slider ref={sliderRef} {...settings}>
            {events.map((event, i) => {
              return event.photos.map((pic, j) => {
                return (
                  <div
                    key={`event${i}pic${j}`}
                    className="px-2"
                  >
                    <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-[1.02]">
                      <Image
                        src={pic.img}
                        alt={`${event.name} - Photo ${j + 1}`}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              });
            })}
          </Slider>
        </motion.div>

        {/* Event Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full mx-auto mb-10 text-white mt-10 font-montserrat"
        >
          <hr className="absolute top-[50%] left-0 w-full border-[#FFD700]/50 border-2" />
          <div className="relative flex flex-row justify-evenly items-center pt-2">
            {events.map((event, i) => {
              const isActive = Math.floor(slideIndex / 3) === i;
              return (
                <div
                  key={`eventname${i}`}
                  onClick={() => sliderRef.current?.slickGoTo(i * 3)}
                  className="flex flex-col items-center cursor-pointer group transition-all duration-300"
                >
                  <div
                    className={`${isActive ? "w-8 h-8" : "w-4 h-4"
                      } transition-all duration-300 rounded-md bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.6)] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] ${isActive ? "scale-110" : "scale-100"
                      }`}
                  ></div>
                  <p className="mt-3 text-center text-sm md:text-base font-medium text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] min-w-max px-2">
                    {event.name}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Event;
