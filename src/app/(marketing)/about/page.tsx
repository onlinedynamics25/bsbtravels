import React from "react";

export default function MoreAbout() {
  return (
    <section className="p-4 bg-gradient-to-b from-golden-20 to-golden-40 min-h-screen pt-22 md:pt-32 ">
      <div className="max-w-3xl mx-auto md:max-w-6xl text-lg md:text-xl text-justify">
        {/* Who We Are */}
        <div className="mb-8 text-deepteal-100  ">
          <h1 className="font-playfair font-black text-center uppercase text-2xl tracking-wide pb-2 md:text-5xl ">
            Who We Are
          </h1>
          <p className="my-6">
            BSB Travel Concepts is a dynamic travel and migration solutions
            company, dedicated to helping individuals, families, professionals,
            and businesses explore the world with ease. We specialise in
            Business Supporting Business (BSB) Travel, ensuring that travel is
            not only an enjoyable experience but also a gateway to
            opportunities, growth, and prosperity.
          </p>
          <p>
            As a sister company of On-Line Dynamics Limited, we bring years of
            expertise in migration, travels, and tours, with a track record of
            trusted partnerships and successful journeys across continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4 ">
          {/* Mission */}
          <div className="mb-8 text-deepteal-100 text-xl bg-linen-50 p-8 rounded-lg shadow-md">
            <h2 className="font-playfair font-black text-center uppercase text-2xl tracking-wide pb-2 md:text-5xl ">
              Our Mission
            </h2>
            <p>
              To make global travel and migration accessible, reliable, and
              rewarding by delivering innovative travel concepts, professional
              guidance, and safe solutions that inspire confidence and open
              doors to opportunities.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-8 text-deepteal-100 text-xl bg-linen-50 p-8 rounded-lg shadow-md">
            <h2 className="font-playfair font-black text-center uppercase text-2xl tracking-wide pb-2 md:text-5xl ">
              Our Vision
            </h2>
            <p>
              To be Africa’s leading travel partner — recognized for excellence,
              integrity, and creativity in connecting people with destinations
              and possibilities worldwide.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-8 bg-deepteal-20 text-golden-100 shadow-md text-center ">
          <h2 className="font-playfair font-black text-center uppercase text-2xl tracking-wide md:text-5xl py-8 ">
            What We Offer
          </h2>
          <ul className="list-none">
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Business & Corporate Travel Support – Conferences, exhibitions,
              summits, and professional events worldwide.
            </li>
            <li className=" text-deepteal-100 p-6">
              Study Abroad Programmes – Guidance on schools, admissions, and
              student visas across Canada, the UK, USA, Europe, Asia, and
              beyond.
            </li>
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Migration Pathways – Professional assistance for skilled workers,
              teachers, entrepreneurs, and families.
            </li>
            <li className=" text-deepteal-100 p-6">
              Leisure & Tourism Packages – Group tours, cultural experiences,
              and curated holiday escapes.
            </li>
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Specialized Travel Experiences – From world festivals and city
              tours to trade missions and professional exchanges.
            </li>
          </ul>
        </div>

        {/* Values */}
        <div className="mb-8 bg-golden-90 text-linen-20 shadow-md text-center ">
          <h2 className="font-playfair font-black text-center uppercase text-2xl tracking-wide md:text-5xl py-8 ">
            Our Values
          </h2>
          <ul className="list-none">
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Excellence – We go the extra mile to deliver quality and memorable
              experiences.
            </li>
            <li className=" text-linen-20 p-6">
              Integrity – Transparent, honest, and reliable in all our dealings.
            </li>
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Innovation – Fresh travel concepts that blend business, education,
              and leisure.
            </li>
            <li className=" text-linen-20 p-6">
              Relationships – We believe increased network is increased
              net-worth.
            </li>
            <li className="bg-linen-20 text-deepteal-100 p-6">
              Prosperity for All – True to our motto: “…that all may prosper…”
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8 bg-linen-20 text-golden-100 shadow-md text-center ">
          <h2 className="font-playfair font-black text-center uppercase text-2xl tracking-wide md:text-5xl py-8 ">
            Why Choose Us?
          </h2>
          <ul className="list-none">
            <li className="bg-golden-60 text-linen-20 p-6">
              A trusted name backed by On-Line Dynamics Ltd.
            </li>
            <li className=" text-deepteal-100 p-6">
              A network of global partners and institutions.
            </li>
            <li className="bg-golden-60 text-linen-20 p-6">
              Tailor-made packages to suit your goals and budget.
            </li>
            <li className=" text-deepteal-100 p-6">
              A team of legal and travel experts ensuring compliance and peace
              of mind.
            </li>
            <li className="bg-golden-60 text-linen-20 p-6">
              A commitment to empowering individuals, businesses, and
              communities through travel.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
