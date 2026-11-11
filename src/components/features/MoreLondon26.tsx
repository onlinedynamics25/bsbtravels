"use client";
import React, { useState } from "react";
import Modal from "@/components/layout/Modal";
import RegisterLondon2026 from "@/components/features/RegisterLondon2026";
import Image from "next/image";

const activities = [
  {
    title: "World Travel Market (WTM) 2026, ExCeL London – Nov. 4–5",
    image: "/bsb-london26/world.png",
    items: [
      "Engage with global tourism stakeholders and travel professionals at ExCeL London",
      "Network at the Nigeria Pavilion to explore cross-border business partnerships",
      "Identify new international markets and commercial opportunities",
    ],
  },
  {
    title: "London Family Escape & City Exploration – Nov. 5",
    image: "/bsb-london26/london-escape.png",
    items: [
      "Explore iconic London landmarks and rich British cultural heritage",
      "Enjoy group bonding, shopping in Shepherd’s Bush, and dining in Woolwich",
      "Experience London’s vibrant atmosphere beyond the boardroom",
    ],
  },
  {
    title: "Nottingham Cultural Exchange with YONN – Nov. 6–8",
    image: "/bsb-london26/nottingham.png",
    items: [
      "Special cultural encounter with the Yorubas of Nottingham, Nottinghamshire (YONN)",
      "Celebrate Yoruba heritage, strengthen diaspora ties, and promote Nigerian culture",
      "Connect with Nigerian community leaders and entrepreneurs outside London",
    ],
  },
  {
    title: "Cardiff Heritage & Friendship Tour, Wales – Nov. 8–9",
    image: "/bsb-london26/cardiff.png",
    items: [
      "Discover the historic capital of Wales and its distinctive Celtic heritage",
      "Tour the 2,000-year-old Cardiff Castle and the Cardiff Upside Down House",
      "Reconnect with family and friends across borders while exploring Cardiff City Centre",
    ],
  },
];

const benefits = [
  "International business exposure at World Travel Market (Nigeria Pavilion)",
  "Meaningful cultural exchange and diaspora networking with YONN in Nottingham",
  "Multi-city exploration spanning London, Nottingham, and Cardiff, Wales",
  "Dedicated time for family bonding and reconnecting with friends abroad",
  "Personal enrichment through exposure to global industries and heritage sites",
];

const inclusions = [
  "Return international airfare and airport/inter-city transfers",
  "7 nights quality accommodation (including serviced apartments & boutique hotels)",
  "Full delegate access to World Travel Market at ExCeL London",
  "Hosted cultural reception with the Yoruba community in Nottinghamshire",
  "Guided London Family Escape & Cardiff historical landmark tours",
  "Comprehensive travel support and coordination by BSB International / Online Dynamics Ltd",
];

const attendees = [
  "Business owners & entrepreneurs seeking global markets",
  "Corporate executives & professionals pursuing international exposure",
  "Investors & tourism enthusiasts exploring cross-border partnerships",
  "Families looking for an enriching, well-coordinated UK holiday",
  "Diaspora connectors & cultural ambassadors",
];

const MoreLondon2026 = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isRegistrationOpen = false;

  return (
    <section id="moreLon26" className="pt-8 lg:py-6 lg:px-20">
      <h1 className="font-playfair uppercase font-black text-center text-lg mb-2 lg:text-5xl lg:mb-4">
        Overview of Come To London 2026 Experience
      </h1>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <p className="lg:mb-6 lg:text-2xl">
        From <span className="font-bold">November 3–10, 2026</span>, delegates
        experienced the UK through BSB International’s signature Business
        Mobility platform—blending international trade at ExCeL London, cultural
        heritage in Nottingham, historic discovery in Cardiff, and lifelong
        family and friendship connections.{" "}
        <span className="italic font-semibold">
          Move. Connect. Explore. Experience.
        </span>
      </p>

      <hr className="border-linen-60 my-2 lg:my-6" />

      {/* Activities */}
      <h2 className="font-bold text-xl text-center lg:text-2xl lg:mb-2">
        Activities &amp; Itinerary Highlights
      </h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ol className="mb-6 space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`flex flex-col-reverse md:justify-between lg:flex-row-reverse items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-1/2 shrink-0">
              <Image
                src={activity.image}
                alt={activity.title}
                width={1920}
                height={1080}
                priority={false}
                quality={85}
                className="w-full h-auto rounded object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="block font-semibold text-base pb-3 lg:text-xl">
                {index + 1}. {activity.title}
              </span>
              <ul className="list-disc ml-5 text-sm space-y-2">
                {activity.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <hr className="my-6 border-linen-60" />

      {/* Benefits */}
      <h2 className="text-2xl font-bold mb-2">Benefits for Participants</h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ul className="list-disc ml-6 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {benefits.map((benefit, i) => (
          <li key={i}>{benefit}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Package Inclusions */}
      <h2 className="text-2xl font-bold mb-2">Package Inclusions</h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ul className="list-disc ml-6 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {inclusions.map((inc, i) => (
          <li key={i}>{inc}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Attendees */}
      <h2 className="text-2xl font-bold mb-2">Who Should Attend?</h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ul className="list-disc ml-6 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {attendees.map((person, i) => (
          <li key={i}>{person}</li>
        ))}
      </ul>

      {isRegistrationOpen ? (
        <button
          onClick={() => setShowRegisterModal(true)}
          className="font-baskervvilleSC bg-deepteal-100 text-golden-10 px-8 py-3 rounded text-xl hover:bg-[#91671D] hover:text-golden-10 transition-all duration-300 ease-in-out"
        >
          Register Now
        </button>
      ) : (
        <button
          disabled
          className="font-baskervvilleSC bg-gray-400 text-gray-200 cursor-not-allowed px-8 py-3 rounded text-xl"
        >
          Registration Closed (2026 Completed)
        </button>
      )}
      <Modal
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <RegisterLondon2026 />
      </Modal>
    </section>
  );
};

export default MoreLondon2026;
