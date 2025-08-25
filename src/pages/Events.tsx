"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    id: 1,
    title: "London",
    subTitle: "BSB Travel 2025",
    description:
      "Business Supporting Business Travel Market, London Sights and Sounds",
    flyers: [
      "/bsb-london25/london1.jpg",
      "/bsb-london25/london2.jpg",
      "/bsb-london25/london3.jpg",
    ],
    date: "November 3 - 10",
    details: "Registration is Ongoing Now !!!",
  },
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const event = events[currentEvent];
  const flyer = event.flyers[currentFlyer];

  const nextFlyer = () => {
    if (currentFlyer < event.flyers.length - 1) {
      setCurrentFlyer((prev) => prev + 1);
    }
  };

  const prevFlyer = () => {
    if (currentFlyer > 0) {
      setCurrentFlyer((prev) => prev - 1);
    }
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFlyer((prev) =>
        prev < events[currentEvent].flyers.length - 1 ? prev + 1 : 0
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [currentEvent]);

  return (
    <section
      className="relative bg-cover bg-center flex flex-col items-center justify-center text-[#061517] py-6"
      style={{ backgroundImage: "url('/background-images/events.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="font-playfair font-black text-[#ECCD95] text-[40px] leading-12 tracking-[10px] pb-8 md:text-[64px] md:leading-[72px]">
          EVENTS
        </h1>

        {/* Available events */}
        <div className="max-w-11/12 mx-auto px-6 grid md:grid-cols-2 gap-4">
          {/* Events Info */}
          <div className="flex flex-col items-center space-y-6 text-[#2B1F09] bg-[#FAF8F3]/50 px-8 py-12">
            <AnimatePresence>
              <motion.div
                key={events[currentEvent].id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="font-playfair font-black uppercase lg:text-8xl lg:leading-28 lg:tracking-[22px]">
                  {events[currentEvent].title}
                </h2>
                <h3 className="font-playfair font-black uppercase lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.6px]">
                  {events[currentEvent].subTitle}
                </h3>
                <p className="lg:text-[40px] pb-6 lg:leading-12 lg:tracking-[-0.4px]">
                  {events[currentEvent].description}
                </p>
                <p className="font-baskervvilleSC text-[32px] leading-10 tracking-[0.06px] max-w-fit px-5 py-3 bg-[#061517] text-[#B58124]">
                  {events[currentEvent].date}
                </p>
                <p className="text-xl font-bold text-red-600 pb-32">
                  {events[currentEvent].details}
                </p>
                <button className="w-fit px-5 py-3 bg-[#061517] text-[#FAF8F3] text-xl leading-7 tracking-[0.004px]">
                  Learn more
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            {currentEvent > 0 && (
              <button
                onClick={prevEvent}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                Prev
              </button>
            )}
            {currentEvent < events.length - 1 && (
              <button
                onClick={nextEvent}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                Next
              </button>
            )}
          </div>

          {/* Events Flier */}
          <div className="flex items-center justify-center px-5">
            <AnimatePresence>
              <motion.img
                key={flyer}
                src={flyer}
                alt={event.title}
                className="shadow-lg max-h-fit object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Flyer navigation arrows */}
            {currentFlyer > 0 && (
              <button
                onClick={prevFlyer}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                prev
              </button>
            )}
            {currentFlyer < event.flyers.length - 1 && (
              <button
                onClick={prevFlyer}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
              >
                next
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
