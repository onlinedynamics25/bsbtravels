import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative h-[80vh] flex items-center justify-center text-[#061517] font-baskervville pt-[128px]"
    >
      {/* Overlay */}
      <div
        className=" absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-images/bg2.png')" }}
      ></div>
      <div className="absolute h-screen inset-0 bg-[#E6BC72] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-playfair text-3xl font-black sm:text-4xl md:text-6xl lg:text-[136px] lg:leading-40 lg:tracking-[-8px]">
          Where Business Meets Luxury Travel
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl lg:leading-11">
          Join industry leaders for a unique networking and cultural experience
        </p>

        {/* CTA Button */}
        <button className="mt-[86px] px-5 py-3 bg-[#061517] text-[#F7EBD5] text-xl leading-7 -tracking-tight hover:bg-[#F7EBD5] hover:text-[#061517] transition ">
          Register For An Event Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
