"use client";
import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "",
    subTitle: "",
    description: "",
    flyer: "",
    date: "",
    details: "",
  },
  {
    id: 2,
    title: "",
    subTitle: "",
    description: "",
    flyer: "",
    date: "",
    details: "",
  },
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => {
    if (currentEvent < events.length - 1) {
      setCurrentEvent((prev) => prev + 1);
    }
  };

  const prevEvent = () => {
    if (currentEvent > 0) {
      setCurrentEvent((prev) => prev - 1);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center flex flex-col items-center justify-center text-[#061517]"
      style={{ backgroundImage: "url('/background-images/events.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h1 className="font-playfair font-black text-[#ECCD95] text-[40px] leading-12 tracking-[24%] md:text-[64px] md:leading-[72px]">
          EVENTS
        </h1>

        {/* Available events */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-8">
          {/* Events Info */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-playfair">{events[currentEvent].title}</h2>
            <h3 className="font-playfair">{events[currentEvent].subTitle}</h3>
            <p>{events[currentEvent].description}</p>
            <p className="font-baskervvilleSC">{events[currentEvent].date}</p>
            <p>{events[currentEvent].details}</p>
            <button>Learn more</button>

            {/* Arrows */}
            <div className="flex space-x-4 items-center">
              {currentEvent > 0 && <button onClick={prevEvent}>Prev</button>}
              {currentEvent < events.length - 1 && (
                <button onClick={nextEvent}>Next</button>
              )}
            </div>
          </div>

          {/* Events Flier */}
          <div className="flex items-center justify-center p-5">
            <img
              src={events[currentEvent].flyer}
              alt={events[currentEvent].title}
              className="shadow-lg max-h-fit object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
