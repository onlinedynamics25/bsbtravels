"use client";
import Modal from "@/components/Modal";
import MoreAbout from "@/components/MoreAbout";
import React, { useState } from "react";

const About = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <section
      id="about"
      className="p-4 w-full min-h-fit scroll-mt-2 md:pt-24 md:px-6 lg:pt-24 flex flex-col"
    >
      <h1 className="font-playfair font-black text-center uppercase text-[#061517] text-[40px] leading-12 tracking-[10px] pb-8 md:text-[64px] md:leading-[72px]">
        About Us
      </h1>

      {/* Who We Are */}
      <div className="mb-8 text-2xl">
        <p className="mb-4">
          BSB Travel Concepts is a dynamic travel and migration solutions
          company, dedicated to helping individuals, families, professionals,
          and businesses explore the world with ease. We specialise in Business
          Supporting Business (BSB) Travel, ensuring that travel is not only an
          enjoyable experience but also a gateway to opportunities, growth, and
          prosperity.
        </p>
        <p>
          As a sister company of On-Line Dynamics Limited, we bring years of
          expertise in migration, travels, and tours, with a track record of
          trusted partnerships and successful journeys across continents.
        </p>
        <button
          onClick={() => setShowRegisterModal(true)}
          className="cursor-pointer font-semibold "
        >
          Know More
        </button>
      </div>

      <Modal
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <MoreAbout />
      </Modal>
    </section>
  );
};

export default About;
