import Netherlands25 from "@/components/gallery/nl25";
import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="p-4 min-h-screen bg-gradient-to-b from-golden-20 to-[#E6BC72] pt-22 md:pt-28 "
    >
      <h1 className="font-playfair font-black text-center uppercase text-5xl tracking-[10px] pb-2 md:text-[64px] md:leading-[72px]">
        Gallery
      </h1>
      <Netherlands25 />
    </section>
  );
}
