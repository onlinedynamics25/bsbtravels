"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const EventsPreview = () => (
  <motion.section
    className="bg-[#FBFAF6] py-16 px-6 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 className="font-playfair font-bold text-3xl md:text-5xl mb-6">
      Upcoming Events
    </h2>
    <p className="max-w-2xl mx-auto text-base md:text-lg mb-8">
      Join our exclusive gatherings where business meets culture in iconic
      destinations.
    </p>
    <Link
      href="/events"
      className="px-6 py-3 bg-deepteal-100 text-golden-10 font-bold rounded hover:bg-golden-10 hover:text-deepteal-100 transition"
    >
      Explore Events
    </Link>
  </motion.section>
);

export default EventsPreview;
