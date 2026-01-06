"use client";

import React from "react";

const Event = () => {
  const [showFirstSet, setShowFirstSet] = React.useState(true);

  const events = [
    {
      id: 1,
      title: "Glitch Fix",
      image: "/Components for Website/event_card1.jpg",
    },
    {
      id: 2,
      title: "Byte Battle",
      image: "/Components for Website/event_card2.jpg",
    },
    {
      id: 3,
      title: "Bot Build",
      image: "/Components for Website/Events_comp3.jpg",
    },
    {
      id: 4,
      title: "Cyber Sprint",
      image: "/Components for Website/Events_comp4.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#111] to-[#0b0b0b] text-white flex flex-col items-center py-12 overflow-hidden">

      {/* Decorations */}
      <img
        src="/Components for Website/Events_comp1.svg"
        className="absolute top-5 left-5 w-24 h-20 opacity-90 animate-float pointer-events-none"
        alt="Decor"
      />

      <img
        src="/Components for Website/Events_comp2.svg"
        className="absolute bottom-40 right-5 w-24 h-20 opacity-90 animate-float-delayed pointer-events-none"
        alt="Decor"
      />

      
      <img
        src="/Components for Website/Projects_comp1.svg"
        className="absolute left-5 -bottom-6 w-70 h-75 opacity-90 animate-slide-up pointer-events-none"
        alt="Decor"
      />

      {/* Heading */}
      <div className="bg-[#d4aa2f] text-black font-extrabold text-5xl px-20 py-4 rounded-full shadow-2xl tracking-wider mb-16 border-4 border-white/20">
        EVENTS
      </div>

      {/* Cards + Arrows */}
      <div className="relative w-full flex justify-center">

        {/* LEFT ARROW */}
<button
  onClick={() => setShowFirstSet(true)}
  className="absolute left-[12%] top-1/3 -translate-y-1/2 z-20 p-3
             bg-[#ffffff20] hover:bg-[#ffffff40] rounded-full transition backdrop-blur-md"
>
  <span className="text-3xl">&#8249;</span>
</button>

<button
  onClick={() => setShowFirstSet(false)}
  className="absolute right-[12%] top-1/3 -translate-y-1/2 z-20 p-3
             bg-[#ffffff20] hover:bg-[#ffffff40] rounded-full transition backdrop-blur-md"
>
  <span className="text-3xl">&#8250;</span>
</button>


        {/* CARD SLIDER CONTAINER.*/}
        <div className="relative w-full max-w-6xl overflow-hidden h-[520px]">

          {/* FIRST 2 CARDS */}
          <div
            className={`
              absolute top-0 left-0 w-full flex gap-12 justify-center
              transition-transform duration-700
              ${showFirstSet ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {events.slice(0, 2).map((ev) => (
             <div
  key={ev.id}
  className="
    w-[85%]
    sm:w-[300px]
    md:w-[350px]
    lg:w-[400px]
    bg-white/10 
    rounded-3xl 
    shadow-2xl 
    overflow-hidden 
    border border-white/30 
    backdrop-blur-lg 
    hover:scale-105 
    transition-all
  "
>
  <div
    className="
      relative 
      h-[180px]
      sm:h-[220px]
      md:h-[260px]
      lg:h-[280px]
      group
    "
  >
    <img
      src={ev.image}
      className="w-full h-full object-cover"
      alt={ev.title}
    />

    <button className="absolute bottom-3 right-3 bg-white text-black text-sm px-4 py-1 rounded-md font-semibold shadow transition">
      Learn More
    </button>
  </div>

  <div className="bg-[#e6bb32] py-4 flex justify-center rounded-b-3xl border-t-2 border-black/10">
    <h3 className="text-2xl font-extrabold text-black tracking-wide">
      {ev.title}
    </h3>
  </div>
</div>

            ))}
          </div>

          {/* LAST 2 CARDS */}
          <div
            className={`
              absolute top-0 left-0 w-full flex gap-12 justify-center
              transition-transform duration-700
              ${showFirstSet ? "translate-x-full" : "translate-x-0"}
            `}
          >
            {events.slice(2, 4).map((ev) => (
              <div
                key={ev.id}
                className="min-w-[380px] w-[420px] bg-white/10 rounded-3xl shadow-2xl overflow-hidden 
                           border border-white/30 backdrop-blur-lg hover:scale-105 transition-all"
              >
                <div className="relative h-64 group">
                  <img
                    src={ev.image}
                    className="w-full h-full object-cover"
                    alt={ev.title}
                  />

                  <button className="absolute bottom-3 right-3 bg-white text-black text-sm px-4 py-1 rounded-md font-semibold shadow transition">
                    Learn More
                  </button>
                </div>

                <div className="bg-[#e6bb32] py-4 flex justify-center rounded-b-3xl border-t-2 border-black/10">
                  <h3 className="text-2xl font-extrabold text-black tracking-wide">
                    {ev.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Event;
