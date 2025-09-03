import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="p-4 w-full min-h-screen scroll-mt-2 md:pt-24 md:px-6 lg:pt-24 flex flex-col"
    >
      <h1 className="font-playfair font-black text-center uppercase text-[#061517] text-[40px] leading-12 tracking-[10px] pb-8 md:text-[64px] md:leading-[72px]">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between">
        <p>Established on August 2025</p>
        <Image
          src="/bsb-london25/london1.jpg"
          alt="alt"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default About;
