"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction = () => (
  <motion.section
    className="bg-[#463612] py-16 px-6 text-center text-[#FDFCF9]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 className="font-playfair font-bold text-3xl md:text-5xl mb-4">
      Ready to Elevate Your Journey?
    </h2>
    <p className="max-w-2xl mx-auto mb-6 text-base md:text-lg">
      Join BSBTravels for unforgettable experiences where luxury and business
      meet.
    </p>
    <Link
      href="/contact"
      className="inline-block px-6 py-3 bg-[#F0E0BC] text-[#0A1311] font-bold rounded hover:bg-[#060C0A] hover:text-[#E9D09A] transition"
    >
      Get In Touch
    </Link>
  </motion.section>
);

export default CallToAction;
