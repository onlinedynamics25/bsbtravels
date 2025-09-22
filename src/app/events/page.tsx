"use client";
import Modal from "@/components/Modal";
import MoreLondon25 from "@/components/MoreLondon25";
import React, { useState } from "react";
import Button from "@/components/Button";
import MoreZA2026 from "@/components/MoreZA2026";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const events = [
    {
      id: "london25",
      title: "London BSB Travels 2025",
      description:
        "The historic first BSB Travels event — a week of networking, business insights, and cultural exploration across London’s iconic sights and sounds.",
      date: "November 3 – 10, 2025",
      location: "London, UK",
      status: "Registration Closed",
    },
    {
      id: "za26",
      title: "BSB in ZA – South Africa 2026",
      description:
        "From Cape Town’s coastline to Johannesburg’s bustling business hubs, join leaders for our first South African edition.",
      date: "May 10 – 17, 2026",
      location: "South Africa",
      status: "Coming Soon",
    },
  ];

  const renderModalContent = () => {
    switch (activeEvent) {
      case "london25":
        return <MoreLondon25 />;
      case "za26":
        return <MoreZA2026 />;
      default:
        return null;
    }
  };

  return (
    <section
      id="events"
      className="relative min-h-screen px-4 py-16 bg-gradient-to-b from-[#F2DEB8] to-[#E6BC72] md:px-8 md:pt-26"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="font-playfair font-black uppercase text-[#061517] text-4xl tracking-wide md:text-6xl">
          Upcoming Journeys
        </h1>
        <p className="mt-3 text-[#2B1F09] text-lg md:text-xl max-w-2xl mx-auto">
          Be part of the movement where business meets luxury travel. Our first
          journey in London has closed, but the adventure continues in 2026.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F6F1E6] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Card Body */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="uppercase font-bold text-2xl text-[#061517] mb-2">
                  {event.title}
                </h2>
                <p className="text-[#2B1F09] mb-4 text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="mt-4 text-sm text-[#6D4E16]">
                <p className="font-semibold">{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-[#061517] p-4 flex justify-between items-center">
              <span className="text-[#E6BC72] italic text-sm">
                {event.status}
              </span>
              <Button
                type="button"
                onClick={() => setActiveEvent(event.id)}
                className="px-4 py-2 rounded font-semibold transition bg-[#E6BC72] text-[#061517] hover:bg-[#91671D] hover:text-[#F6F1E6]"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal open={!!activeEvent} onClose={() => setActiveEvent(null)}>
        {renderModalContent()}
      </Modal>
    </section>
  );
};

export default Events;
