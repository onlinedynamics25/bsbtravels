import React from "react";

const Events = () => {
  const events = [
    {
      title: "London BSB Travels 2025",
      description:
        "Business Supporting Business Travel Market, London Sights and Sounds",
      date: "November 3 - 10",
      location: "London",
      status: "Registration is ongoing",
      button: "Learn more",
    },
    {
      title: "Event 2",
      description: "...",
      date: "TBA",
      location: "TBA",
      status: "Upcoming",
      button: "Learn more",
    },
    {
      title: "Past Event Recap",
      description: "...",
      date: "TBA",
      location: "TBA",
      status: "Upcoming",
      button: "Learn more",
    },
  ];
  return (
    <section
      id="events"
      className="min-h-screen px-3 pt-16 scroll-mt-2 md:pt-24 md:px-6 lg:pt-24 "
    >
      <h1 className="font-playfair font-black text-center uppercase text-[40px] leading-12 tracking-[10px] pb-8 md:text-[64px] md:leading-[72px]">
        Events
      </h1>
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <h2>{event.title} </h2>
            <p>{event.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
