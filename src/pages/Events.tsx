import React from "react";

const Events = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-[#061517]"
      style={{ backgroundImage: "url('/background-images/events.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/100 backdrop-blur-md"></div>
      <div>
        <h1 className="font-playfair font-black text-[#ECCD95] text-[40px] leading-12 tracking-[24%] md:text-[64px] md:leading-[72px]">
          EVENTS
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
