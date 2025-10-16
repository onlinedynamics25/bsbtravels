import London25 from "@/components/gallery/ln25";
import Netherlands25 from "@/components/gallery/nl25";
import SouthAfrica26 from "@/components/gallery/za26";
import React from "react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="p-4 min-h-screen bg-gradient-to-b from-golden-20 to-golden-40 pt-22 md:pt-28 "
    >
      <h1 className="font-playfair font-bold text-golden-100 text-center uppercase text-5xl tracking-[10px] pb-2 md:text-[64px] md:leading-[72px]">
        Gallery
      </h1>
      <div className="max-w-7xl mx-auto mt-12">
        <Netherlands25 />
        <London25 />
        <SouthAfrica26 />
      </div>
    </section>
  );
}
