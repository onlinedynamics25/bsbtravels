"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex items-center justify-center px-6"
    style={{ backgroundImage: "url('/images/background/hero-bg.jpg')" }}
  >
    <div className="absolute inset-0 bg-[#E6BC72]/50"></div>
    <motion.div
      className="relative z-10 text-center max-w-4xl md:max-w-5xl text-[#061517]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-playfair font-black text-4xl md:text-7xl lg:text-8xl leading-tight">
        Where Business Meets Luxury Travel
      </h1>
      <p className="mt-4 text-base md:text-xl lg:text-2xl font-medium">
        Connect with industry leaders and experience culture like never before.
      </p>
      <Button
        href="/events"
        className="mt-10 px-8 py-4 bg-[#061517] text-[#F7EBD5] font-baskervvilleSC text-lg lg:text-2xl rounded hover:bg-[#F7EBD5] hover:text-[#061517] transition-colors"
      >
        Join an Event
      </Button>
    </motion.div>
  </section>
);

export default Hero;
