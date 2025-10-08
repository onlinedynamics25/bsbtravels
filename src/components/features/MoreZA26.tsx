// app/components/MoreZA2026.tsx
"use client";
import React, { useState } from "react";
import Modal from "@/components/layout/Modal";
import Image from "next/image";

const activities = [
  {
    title: "Arrival in Durban – May 10",
    image: "/za26/durban.png",
    items: ["Welcome Reception and cultural orientation"],
  },
  {
    title: "Africa’s Travel Indaba – May 11–13",
    image: "/za26/indaba.png",
    items: [
      "Africa’s biggest tourism trade show",
      "BOND Day – Business Opportunity Networking Day",
      "Pre-scheduled B2B meetings and industry insights",
    ],
  },
  {
    title: "Exhibition & Networking – May 14",
    image: "/za26/exhibition.png",
    items: ["Exhibition sessions", "Networking with global tourism leaders"],
  },
  {
    title: "Durban City & Cultural Tour – May 15",
    image: "/za26/zulu.png",
    items: [
      "Zulu Cultural Immersion – dance, crafts, and cuisine",
      "Guided city exploration of Durban",
    ],
  },
  {
    title: "Safari Adventure – May 16",
    image: "/za26/safari.png",
    items: ["Hluhluwe–Imfolozi Park Safari", "Wildlife encounters"],
  },
  {
    title: "Beach & Marine Adventures – May 17",
    image: "/za26/beach.png",
    items: ["Golden Mile & Indian Ocean experience", "Farewell Cocktail"],
  },
];

const benefits = [
  "Business exposure – brand visibility in Africa’s growing tourism market",
  "Global networking – connect with decision-makers and trade partners",
  "Leisure value – unique African culture, safari & ocean experiences",
  "Access to Africa’s biggest tourism trade show",
];

const inclusions = [""];

const attendees = [
  "Tourism and hospitality professionals",
  "Business executives & entrepreneurs",
  "Investors exploring African markets",
  "Students and researchers in business/tourism",
  "Anyone seeking global networking & leisure value",
];

const MoreZA26 = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isRegistrationOpen = false;

  return (
    <section id="moreZA26" className="pt-8 lg:py-6 lg:px-20 ">
      <h1 className="font-playfair uppercase font-black text-center text-lg mb-2 lg:text-5xl lg:mb-4">
        Overview of South Africa 2026 Experience
      </h1>
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <p className="lg:mb-6 lg:text-2xl">
        From <span className="font-bold">May 10–17, 2026</span>, participants
        will experience a unique blend of{" "}
        <span className="font-bold">
          business networking, cultural immersion,
        </span>{" "}
        and <span className="font-bold">leisure adventures</span> in Durban,
        South Africa. Africa’s Travel Indaba provides unmatched access to
        tourism leaders, while curated tours showcase the vibrant culture,
        wildlife, and coastline of KwaZulu-Natal.
      </p>

      <hr className=" border-linen-60 my-2 lg:my-6 " />

      {/* Activities */}
      <h2 className="font-bold text-xl text-center lg:text-2xl lg:mb-2">
        Activities & Itinerary Highlights
      </h2>
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <ol className="list-decimal mb-6 space-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`flex flex-col-reverse md:justify-between lg:flex-row-reverse items-center gap-8 ${index % 2 === 0 ? " md:flex-row-reverse " : " md:flex-row "
              } `}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={1920}
              height={1080}
              priority={false} // false enables lazy loading
              quality={85} // Compresses image automatically
              className="object-contain"
            />
            <div>
              <span className="font-semibold text-base pb-4 lg:text-xl ">
                {activity.title}
              </span>
              <ul className="list-disc ml-6 text-sm space-y-2">
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
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {benefits.map((benefit, i) => (
          <li key={i}>{benefit}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Package Inclusions */}
      <h2 className="text-2xl font-bold mb-2">Package Inclusions</h2>
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {inclusions.map((inc, i) => (
          <li key={i}>{inc}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Attendees */}
      <h2 className="text-2xl font-bold mb-2">Who Should Attend?</h2>
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-8 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
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
          Registration Coming Soon
        </button>
      )}
      <Modal
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        {/* Replace with RegisterZA26 if you create one */}
        <div className="p-4">Registration form goes here</div>
      </Modal>
    </section>
  );
};

export default MoreZA26;
