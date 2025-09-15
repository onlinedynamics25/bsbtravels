"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import RegisterLon25 from "@/components/RegisterLon25";
import Image from "next/image";

const activities = [
  {
    title: "World Travel Market, ExCeL London – Nov. 5",
    image: "/bsb-london25/world.png",
    items: [
      "The world’s leading global travel exhibition",
      "Connect with travel and hospitality industry leaders",
      "Discover partnerships and B2B networking opportunities",
    ],
  },
  {
    title: "Bonfire Night & Fireworks – Nov. 5",
    image: "/bsb-london25/bonfire.png",
    items: [
      "Celebrate Guy Fawkes Night in the UK",
      "Enjoy a dazzling evening of bonfires, fireworks, and entertainment",
    ],
  },
  {
    title: "Lord Mayor’s Show – Nov. 8",
    image: "/bsb-london25/lord-mayor.png",
    items: [
      "Historic parade with floats, marching bands, and royal pageantry",
      "An 800-year-old London tradition",
    ],
  },
  {
    title: "Remembrance Day Ceremony – Nov. 9",
    image: "/bsb-london25/remembrance.png",
    items: [
      "National tribute to the armed forces",
      "Wreath-laying ceremony with military bands and dignitaries",
    ],
  },
];

const benefits = [
  "Exposure to the global travel industry at World Travel Market",
  "First-hand experience of British heritage and culture",
  "Networking with entrepreneurs and executives under the B3B platform",
  "Cultural immersion through iconic UK events",
  "Guided city tours with opportunities for shopping and exploration",
];

const inclusions = [
  "Return airfare from Abuja to London (7 nights stay)",
  "Airport transfers in London",
  "Access to World Travel Market",
  "Tickets for Bonfire Night & Lord Mayor’s Show",
  "Guided attendance at Remembrance Day Ceremony",
  "Comprehensive travel insurance",
];

const attendees = [
  "Business executives & entrepreneurs",
  "Professionals seeking international exposure",
  "Investors exploring global opportunities",
  "Young leaders & innovators",
  "Anyone seeking a rich blend of business and cultural exploration",
];

const MoreLondon25 = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isRegistrationOpen = false; // Change to false to close registration
  return (
    <section id="moreLon25" className="pt-8 lg:py-6 lg:px-20 ">
      <h1 className="font-playfair uppercase font-black text-center text-lg mb-2 lg:text-5xl lg:mb-4">
        Overview of London 2025 Experience
      </h1>
      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />
      <p className="lg:mb-6 lg:text-2xl">
        From <span className="font-bold">November 3–10, 2025</span>,
        participants will explore London in a unique way—combining trade,
        networking, and cultural immersion. This is more than tourism; it is a
        platform for business growth, personal development, and exposure to the
        world stage.
      </p>

      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />

      {/* Activities */}
      <h2 className="font-bold text-xl text-center lg:text-2xl lg:mb-2">
        Activities & Itinerary Highlights
      </h2>
      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />
      <ol className="list-decimal mb-6 space-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`flex flex-col-reverse md:justify-between lg:flex-row-reverse items-center gap-8 ${
              index % 2 === 0 ? " md:flex-row-reverse " : " md:flex-row "
            } `}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={200}
              height={150}
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

      <hr className="my-6 border-[#C9C3B6]" />

      {/* Benefits */}
      <h2 className="text-2xl font-bold mb-2">Benefits for Participants</h2>
      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {benefits.map((benefit, i) => (
          <li key={i}>{benefit}</li>
        ))}
      </ul>

      <hr className="my-6 border-[#C9C3B6]" />

      {/* Package Inclusions */}
      <h2 className="text-2xl font-bold mb-2">Package Inclusions</h2>
      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {inclusions.map((inc, i) => (
          <li key={i}>{inc}</li>
        ))}
      </ul>

      <hr className="my-6 border-[#C9C3B6]" />

      {/* Attendees */}
      <h2 className="text-2xl font-bold mb-2">Who Should Attend?</h2>
      <hr className=" border-[#C9C3B6] my-2 lg:my-6 " />
      <ul className="list-disc ml-6 mb-8 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {attendees.map((person, i) => (
          <li key={i}>{person}</li>
        ))}
      </ul>

      {isRegistrationOpen ? (
        <button
          onClick={() => setShowRegisterModal(true)}
          className="font-baskervvilleSC bg-[#061517] text-[#F7EBD5] px-8 py-3 rounded text-xl hover:bg-[#91671D] hover:text-[#F7EBD5] transition-all duration-300 ease-in-out"
        >
          Register Now
        </button>
      ) : (
        <button
          disabled
          className="font-baskervvilleSC bg-gray-400 text-gray-200 cursor-not-allowed px-8 py-3 rounded text-xl"
        >
          Registration Closed
        </button>
      )}
    </section>
  );
};

export default MoreLondon25;
