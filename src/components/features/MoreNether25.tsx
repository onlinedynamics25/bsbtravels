// app/components/MoreNetherlands25.tsx
"use client";
import React, { useState } from "react";
import Modal from "@/components/layout/Modal";

const benefits = [
  "Learn from top industry experts",
  "Network with potential partners",
  "Collaborate with global researchers",
  "Explore Dutch agricultural innovations",
  "Access investment opportunities",
];

const inclusions = [
  "Nights in the Netherlands",
  "Access into Schengen area",
  "Enhanced business network",
  "Knowledge upscale",
  "Innovative investment insights",
  "Exposure to European markets",
];

const attendees = [
  "Agric enthusiasts",
  "Investors",
  "Traders",
  "Academics & researchers",
  "Students",
  "Entrepreneurs",
];

const MoreNether25 = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <section id="moreNL25" className="pt-8 lg:py-6 lg:px-20 ">
      <h1 className="font-playfair uppercase font-black text-center text-lg mb-2 lg:text-5xl lg:mb-4">
        Overview of Netherlands 2025 Experience
      </h1>
      <hr className=" border-linen-60 my-2 lg:my-6 " />
      <p className="lg:mb-6 lg:text-2xl">
        From <span className="font-bold">September 23–27, 2025</span>,
        participants will explore opportunities in{" "}
        <span className="font-bold">
          agribusiness, investment, and networking
        </span>{" "}
        while gaining access to the wider Schengen area. This journey blends
        agriculture, innovation, and international business growth in the heart
        of Europe.
      </p>

      <hr className=" border-linen-60 my-2 lg:my-6 " />

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
      <h2 className="text-2xl font-bold mb-2">What You Get</h2>
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

      {/* Register Button */}
      <button
        onClick={() => setShowInfoModal(true)}
        className="font-baskervvilleSC bg-deepteal-100 text-golden-10 px-8 py-3 rounded text-xl hover:bg-[#91671D] hover:text-golden-10 transition-all duration-300 ease-in-out"
      >
        Register
      </button>

      {/* Modal Message */}
      <Modal open={showInfoModal} onClose={() => setShowInfoModal(false)}>
        <div className="p-6 text-center space-y-4">
          <h2 className="text-xl font-bold">Registration Closed</h2>
          <p className="text-lg">
            Registration for{" "}
            <span className="font-semibold">Netherlands 2025</span> is now
            closed.
          </p>
          <p className="text-md italic">
            Stay tuned for our upcoming{" "}
            <span className="font-semibold">Netherlands 2026</span> journey —
            details will be announced soon!
          </p>
          <button
            onClick={() => setShowInfoModal(false)}
            className="mt-4 bg-golden-40 text-deepteal-100 px-6 py-2 rounded hover:bg-[#91671D] hover:text-linen-40 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default MoreNether25;
