import Image from "next/image";
import React from "react";

const Gallery = () => {
  const photos: any[] = [
    // { src: "/bsb-london25/bonfire.png", alt: "1" },
    // { src: "/bsb-london25/bonfire.png", alt: "2" },
    // { src: "/bsb-london25/bonfire.png", alt: "3" },
    // { src: "/bsb-london25/bonfire.png", alt: "4" },
    // { src: "/bsb-london25/bonfire.png", alt: "5" },
    // { src: "/bsb-london25/bonfire.png", alt: "6" },
    // { src: "/bsb-london25/bonfire.png", alt: "7" },
    // { src: "/bsb-london25/bonfire.png", alt: "8" },
  ];
  return (
    <section id="gallery" className="p-4 min-h-fit scroll-mt-16 ">
      <h1 className="font-playfair font-black text-center uppercase text-3xl tracking-[10px] pb-2 md:text-[64px] md:leading-[72px]">
        Gallery
      </h1>
      {photos.length === 0 ? (
        <p className="text-center text-2xl py-10">
          {" "}
          No past or recent events uploaded yet.{" "}
        </p>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 lg:grid-cols-7">
          {photos.map((photo, index) => (
            <Image
              key={index}
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
