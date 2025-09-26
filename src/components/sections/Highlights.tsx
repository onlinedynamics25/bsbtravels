"use client";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Elite Networking",
    text: "Connect with business leaders worldwide.",
  },
  {
    title: "Luxury Experiences",
    text: "Travel in style with curated journeys.",
  },
  {
    title: "Cultural Immersion",
    text: "Exclusive access to global cultural events.",
  },
  { title: "Business Growth", text: "Expand your influence while you travel." },
];

const Highlight = () => (
  <section className="bg-[#FBFAF6] py-16 px-6 text-center">
    <h2 className="font-playfair font-bold text-3xl md:text-5xl mb-10">
      Why Choose BSBTravels?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {highlights.map((item, idx) => (
        <motion.div
          key={idx}
          className="p-6 bg-[#F0E0BC] rounded-lg shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-sm md:text-base">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Highlight;
