import React from "react";

const Hero = () => {
  return (
    <main>
      <nav></nav>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div>
          <div className="text-center max-w-5xl">
            <h1 className="font-playfair text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
              Where Business Meets Luxury Travel
            </h1>
            <p className="mt-4 font-baskervville text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Join industry leaders for a unique networking and cultural
              experience
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
