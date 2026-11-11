"use client";
import React, { useState } from "react";
import Modal from "@/components/layout/Modal";
import RegisterLondon2026 from "@/components/features/RegisterLondon2026";
import Image from "next/image";

const activities = [
  {
    title: "World Travel Market, ExCeL London – Nov. 5",
    image: "/bsb-london26/world.png",
    items: [
      "The world’s leading global travel exhibition",
      "Connect with travel and hospitality industry leaders",
      "Discover partnerships and B2B networking opportunities",
    ],
  },
  {
    title: "Bonfire Night & Fireworks – Nov. 5",
    image: "/bsb-london26/bonfire.png",
    items: [
      "Celebrate Guy Fawkes Night in the UK",
      "Enjoy a dazzling evening of bonfires, fireworks, and entertainment",
    ],
  },
  {
    title: "Lord Mayor’s Show – Nov. 8",
    image: "/bsb-london26/lord-mayor.png", // Updated from 25 to 26 (verify folder name)
    items: [
      "Historic parade with floats, marching bands, and royal pageantry",
      "An 800-year-old London tradition",
    ],
  },
  {
    title: "Remembrance Day Ceremony – Nov. 9",
    image: "/bsb-london26/remembrance.png", // Updated from 25 to 26 (verify folder name)
    items: [
      "National tribute to the armed forces",
      "Wreath-laying ceremony with military bands and dignitaries",
    ],
  },
];

const benefits = [
  "Exposure to the global travel industry at World Travel Market",
  "First-hand experience of British heritage and culture",
  "Networking with entrepreneurs and executives under the BSB platform",
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

const MoreLondon26 = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isRegistrationOpen = false; // Set to 'true' when registration opens

  return (
    <section id="moreLon26" className="pt-8 lg:py-6 lg:px-20">
      <h1 className="font-playfair uppercase font-black text-center text-lg mb-2 lg:text-5xl lg:mb-4">
        Overview of London 2026 Experience
      </h1>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <p className="lg:mb-6 lg:text-2xl">
        From <span className="font-bold">November 3–10, 2026</span>,
        participants will explore London in a unique way—combining trade,
        networking, and cultural immersion. This is more than tourism; it is a
        platform for business growth, personal development, and exposure to the
        world stage.
      </p>

      <hr className="border-linen-60 my-2 lg:my-6" />

      {/* Activities */}
      <h2 className="font-bold text-xl text-center lg:text-2xl lg:mb-2">
        Activities & Itinerary Highlights
      </h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ol className="list-decimal mb-6 space-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
        {activities.map((activity, index) => (
          <li
            key={index}
            className={`flex flex-col-reverse md:justify-between lg:flex-row-reverse items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={1920}
              height={1080}
              priority={false}
              quality={85}
              className="object-contain"
            />
            <div>
              <span className="font-semibold text-base pb-4 lg:text-xl">
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
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {benefits.map((benefit, i) => (
          <li key={i}>{benefit}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Package Inclusions */}
      <h2 className="text-2xl font-bold mb-2">Package Inclusions</h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
      <ul className="list-disc ml-6 mb-6 space-y-2 flex flex-col lg:grid lg:grid-cols-2 gap-2">
        {inclusions.map((inc, i) => (
          <li key={i}>{inc}</li>
        ))}
      </ul>

      <hr className="my-6 border-linen-60" />

      {/* Attendees */}
      <h2 className="text-2xl font-bold mb-2">Who Should Attend?</h2>
      <hr className="border-linen-60 my-2 lg:my-6" />
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
          Registration Closed
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

export default MoreLondon26; // Fixed from MoreLondon25
