import React from "react";

const Hero = () => {
  return (
    <main>
      <nav></nav>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-[#061517] pt-[128px]"
        style={{ backgroundImage: "url('/bg2.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#E6BC72] opacity-75"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-3xl font-black sm:text-4xl md:text-6xl lg:text-[128px]/[136px] lg:tracking-[8%]">
            Where Business Meets Luxury Travel
          </h1>
          <p className="mt-[32px] font-baskervville text-lg sm:text-xl md:text-2xl lg:text-[36px]/[44px] max-w-3xl mx-auto">
            Join industry leaders for a unique networking and cultural
            experience
          </p>

          {/* CTA Button */}
          <button className="mt-[86px] px-[12px] py-[20px] bg-[#061517] text-[#F7EBD5] text-[20px]/[28px] tracking-[0.2%] hover:bg-[#F7EBD5] hover:text-[#061517] transition "></button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
