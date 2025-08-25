import React, { useState } from "react";
import Modal from "./Modal";
import RegisterLon25 from "./RegisterLon25";

const MoreLon25 = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <section id="moreLon25" className="py-6 px-20 text-xl">
      <h1 className="text-5xl font-playfair uppercase font-black mb-4 text-center">
        Overview of London 2025 Experience
      </h1>
      <p className="mb-6 text-2xl">
        From <span className="font-bold">November 3–10, 2025</span>,
        participants will explore London in a unique way—combining trade,
        networking, and cultural immersion. This is more than tourism; it is a
        platform for business growth, personal development, and exposure to the
        world stage.
      </p>

      <hr className="my-6 border-[#C9C3B6]" />

      <h2 className="text-2xl font-bold mb-2">
        Activities &amp; Itinerary Highlights
      </h2>
      <ol className="list-decimal mb-6 space-y-4 grid grid-cols-2 gap-8">
        <li className="flex flex-row items-center gap-8">
          <img src="/bsb-london25/world.png" alt="world" />
          <div>
            <span className="font-semibold">
              World Travel Market, ExCeL London – Nov. 5
            </span>
            <ul className="list-disc ml-6 text-base">
              <li>The world’s leading global travel exhibition</li>
              <li>Connect with travel and hospitality industry leaders</li>
              <li>Discover partnerships and B2B networking opportunities</li>
            </ul>
          </div>
        </li>
        <li className="flex flex-row items-center gap-8">
          <img src="/bsb-london25/bonfire.png" alt="bonfire" />
          <div>
            <span className="font-semibold">
              Bonfire Night &amp; Fireworks – Nov. 5
            </span>
            <ul className="list-disc ml-6 text-base">
              <li>Celebrate Guy Fawkes Night in the UK</li>
              <li>
                Enjoy a dazzling evening of bonfires, fireworks, and
                entertainment
              </li>
            </ul>
          </div>
        </li>
        <li className="flex flex-row items-center gap-8">
          <img src="/bsb-london25/lord-mayor.png" alt="lord-mayor" />
          <div>
            <span className="font-semibold">Lord Mayor’s Show – Nov. 8</span>
            <ul className="list-disc ml-6 text-base">
              <li>
                Historic parade with floats, marching bands, and royal pageantry
              </li>
              <li>An 800-year-old London tradition</li>
            </ul>
          </div>
        </li>
        <li className="flex flex-row items-center gap-8">
          <img src="/bsb-london25/remembrance.png" alt="remembrance" />
          <div>
            <span className="font-semibold">
              Remembrance Day Ceremony – Nov. 9
            </span>
            <ul className="list-disc ml-6 text-base">
              <li>National tribute to the armed forces</li>
              <li>
                Wreath-laying ceremony with military bands and dignitaries
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <hr className="my-6 border-[#C9C3B6]" />

      <h2 className="text-2xl font-bold mb-2">Benefits for Participants</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2 grid grid-cols-2 gap-2">
        <li>Exposure to the global travel industry at World Travel Market</li>
        <li>First-hand experience of British heritage and culture</li>
        <li>
          Networking with entrepreneurs and executives under the B3B platform
        </li>
        <li>Cultural immersion through iconic UK events</li>
        <li>
          Guided city tours with opportunities for shopping and exploration
        </li>
      </ul>

      <hr className="my-6 border-[#C9C3B6]" />

      <h2 className="text-2xl font-bold mb-2">Package Inclusions</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2 grid grid-cols-2 gap-2">
        <li>Return airfare from Abuja to London (7 nights stay)</li>
        <li>Airport transfers in London</li>
        <li>Access to World Travel Market</li>
        <li>Tickets for Bonfire Night &amp; Lord Mayor’s Show</li>
        <li>Guided attendance at Remembrance Day Ceremony</li>
        <li>Comprehensive travel insurance</li>
      </ul>

      <hr className="my-6 border-[#C9C3B6]" />

      <h2 className="text-2xl font-bold mb-2">Who Should Attend?</h2>
      <ul className="list-disc ml-6 mb-8 space-y-2 grid grid-cols-2 gap-2">
        <li>Business executives &amp; entrepreneurs</li>
        <li>Professionals seeking international exposure</li>
        <li>Investors exploring global opportunities</li>
        <li>Young leaders &amp; innovators</li>
        <li>
          Anyone seeking a rich blend of business and cultural exploration
        </li>
      </ul>

      <button
        onClick={() => setShowRegisterModal(true)}
        className="font-baskervvilleSC bg-[#061517] text-[#F7EBD5] px-8 py-3 rounded text-xl hover:bg-[#91671D] hover:text-[#F7EBD5] transition-all duration-300 ease-in-out"
      >
        Register Now
      </button>
      <Modal
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <RegisterLon25 />
      </Modal>
    </section>
  );
};

export default MoreLon25;
