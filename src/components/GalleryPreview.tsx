"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery/event1.jpg", alt: "Networking Event" },
  { src: "/gallery/luxury.jpg", alt: "Luxury Travel" },
  { src: "/gallery/culture.jpg", alt: "Cultural Experience" },
];

const GalleryPreview = () => (
  <section className="bg-[#2A200B] py-16 px-6 text-center text-[#F5F2E8]">
    <h2 className="font-playfair font-bold text-3xl md:text-5xl mb-10 text-[#E9D09A]">
      A Glimpse of Our World
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </motion.div>
      ))}
    </div>
    <Link
      href="/gallery"
      className="inline-block mt-8 px-6 py-3 bg-[#E9D09A] text-[#0A1311] font-bold rounded hover:bg-[#060C0A] hover:text-[#E9D09A] transition"
    >
      View Full Gallery
    </Link>
  </section>
);

export default GalleryPreview;
