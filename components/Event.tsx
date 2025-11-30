"use client";

import React from "react";

const Event = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

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
  ];

  const cardWidth = 420; // width of a single card in px

  function scrollByAmount(amount: number) {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-[#0b0b0b] text-white flex flex-col items-center py-12">

      {/* ⭐ Decorative Images for Event Section ⭐ */}
      <img
        src="/Components for Website/Events_comp1.svg"
        className="absolute top-5 left-5 w-24 h-20 opacity-90 pointer-events-none"
        alt="Decor Top Left"
      />

<img
  src="/Components for Website/Events_comp2.svg"
  className="absolute bottom-40 right-5 w-24 h-20 opacity-90 pointer-events-none"
  alt="Decor Bottom Right"
/>

      <img
        src="/Components for Website/Projects_comp1.svg"
        className="absolute left-5 -bottom-6 w-70 h-75 opacity-90 pointer-events-none"
        alt="Decor Bottom Left"
      />

      {/* Title */}
      <div className="bg-[#d4aa2f] text-black font-extrabold text-4xl px-16 py-4 rounded-full shadow-lg mb-12">
        EVENTS
      </div>

      <div className="relative w-full flex justify-center">

        {/* Left Arrow - Positioned to the far left */}
        <button
          onClick={() => scrollByAmount(-cardWidth)}
          className="absolute left-70 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#ffffff20] hover:bg-[#ffffff40] rounded-full transition"
        >
          <span className="text-3xl">&#8249;</span>
        </button>

        {/* Right Arrow - Positioned to the far right */}
        <button
          onClick={() => scrollByAmount(cardWidth)}
          className="absolute right-70 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#ffffff20] hover:bg-[#ffffff40] rounded-full transition"
        >
          <span className="text-3xl">&#8250;</span>
        </button>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth px-6 w-full max-w-5xl justify-center"
        >
          {events.map((ev) => (
            <div
              key={ev.id}
              className="min-w-[380px] w-[420px] bg-white/10 rounded-2xl shadow-xl overflow-hidden relative border-2 border-white"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover"
                />

                {/* Learn More Button */}
                <button className="absolute bottom-3 right-3 bg-white text-black text-sm px-4 py-1 rounded-md font-semibold shadow hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>

              {/* Bottom Yellow Section */}
              <div className="bg-[#e6bb32] py-4 flex justify-center rounded-b-2xl">
                <h3 className="text-xl font-extrabold text-black">
                  {ev.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
