"use client";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";
import MoreLondon25 from "./MoreLondon25";

const Events = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const events = [
    {
      title: "London BSB Travels 2025",
      description:
        "Business Supporting Business Travel Market, London Sights and Sounds",
      date: "November 3 - 10",
      location: "London",
      status: "Registration is closed",
      text: "Learn More",
    },
    {
      title: "Event 2",
      description: "...",
      date: "TBA",
      location: "TBA",
      status: "Upcoming",
      text: "...",
    },
    {
      title: "Past Event Recap",
      description: "...",
      date: "TBA",
      location: "TBA",
      status: "Upcoming",
      text: "...",
    },
  ];
  return (
    <section
      id="events"
      className="min-h-screen p-3 scroll-mt-16 bg-[#6D4E16] md:px-6 "
    >
      <h1 className="font-playfair font-black text-center text-[#F6F1E6] uppercase text-3xl tracking-[10px] pb-2 md:text-[64px] md:leading-[72px]">
        Events
      </h1>
      <div className=" ">
        {events.map((event, index) => (
          <div
            key={index}
            className={` bg-[#F2DEB8] px-3 py-4 backdrop-blur-md mb-4 flex flex-col md:flex-row md:justify-between md: ${
              index % 2 === 0 ? "  " : "bg-[#F6F1E6] "
            } `}
          >
            <div className="font-semibold basis-2/3 ">
              <h2 className="uppercase font-bold text-lg md:text-2xl lg:text-3xl ">
                {event.title}{" "}
              </h2>
              <p className="md:text-lg lg:text-2xl ">{event.description} </p>
              <p className="text-red-600 font-light italic ">{event.status} </p>
            </div>
            <div className="font-semibold  text-right basis-1/3 ">
              <p className="font-baskervvilleSC md:text-lg lg:text-2xl ">
                {event.date}{" "}
              </p>
              <p className="font-baskervvilleSC mb-2 md:text-lg lg:text-2xl ">
                {event.location}{" "}
              </p>
              <button
                onClick={() => setShowRegisterModal(true)}
                className="font-baskervvilleSC font-normal bg-[#504E49] text-[#F6F1E6] px-4 py-2 lg:text-xl "
              >
                {event.text}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <MoreLondon25 />
      </Modal>
    </section>
  );
};

export default Events;
