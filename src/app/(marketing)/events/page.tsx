"use client";
import Modal from "@/components/layout/Modal";
import MoreLondon25 from "@/components/features/MoreLondon25";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import MoreZA2026 from "@/components/features/MoreZA26";
import MoreNether25 from "@/components/features/MoreNether25";
import Image from "next/image";

const Events = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const events = [
    {
      id: "netherlands25",
      title: "Let's Go to Netherlands! 2025",
      description:
        "Access Schengen | Explore Agribusiness Opportunities. Join global leaders in agribusiness for an immersive summit in the Netherlands.",
      date: "September 23 – 27, 2025",
      location: "Netherlands",
      status: "Ongoing",
      src: "/mascots/netherlands.png", // temporary placeholder image
      alt: "netherland-mascot",
    },
    {
      id: "london25",
      title: "London BSB Travels 2025",
      description:
        "The historic first BSB Travels event — a week of networking, business insights, and cultural exploration across London’s iconic sights and sounds.",
      date: "November 3 – 10, 2025",
      location: "London, UK",
      status: "Registration Closed",
      src: "/mascots/london.png", // temporary placeholder image
      alt: "london-mascot",
    },
    {
      id: "za26",
      title: "BSB in ZA – South Africa 2026",
      description:
        "From Cape Town’s coastline to Johannesburg’s bustling business hubs, join leaders for our first South African edition.",
      date: "May 10 – 17, 2026",
      location: "South Africa",
      status: "Coming Soon",
      src: "/images/events/za26/mascot.jpg",
      alt: "za-mascot",
    },
    {
      id: "netherlands26",
      title: "Let's Go to Netherlands! 2026",
      description: "Details coming soon.",
      date: "2026 (Exact dates to be announced)",
      location: "Netherlands",
      status: "Coming Soon",
      src: "/mascots/netherlands.png", // temporary placeholder image
      alt: "nl-mascot",
    },
  ];

  const renderModalContent = () => {
    switch (activeEvent) {
      case "netherlands25":
        return <MoreNether25 />;
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
      className="relative min-h-screen px-4 py-22 bg-gradient-to-b from-golden-20 to-[#E6BC72] md:px-8 md:pt-26"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="font-playfair font-black uppercase text-deepteal-100 text-4xl tracking-wide md:text-6xl">
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
            <div className="flex-1 p-6 flex flex-row justify-between">
              <div className="basis-2/3">
                <div>
                  <h2 className="uppercase font-bold text-2xl text-deepteal-100">
                    {event.title}
                  </h2>
                  <p className="text-[#2B1F09] text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="basis-1/3 py-2 px-4">
                <Image
                  src={event.src}
                  alt={event.alt}
                  width={200}
                  height={100}
                  className="max-w-full object-contain"
                />
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-deepteal-100 p-4 flex justify-between items-center">
              <span className="text-[#E6BC72] italic text-sm">
                {event.status}
              </span>
              <Button
                type="button"
                onClick={() => setActiveEvent(event.id)}
                className="px-4 py-2 rounded font-semibold transition bg-[#E6BC72] text-deepteal-100 hover:bg-[#91671D] hover:text-[#F6F1E6]"
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
