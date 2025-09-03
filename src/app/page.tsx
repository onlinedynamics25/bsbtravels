import Events from "@/components/Events";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col bg-[#F2DEB8] text-[#061517]">
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/background-images/hero-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#E6BC72]/45"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-3 pt-16 md:pt-24 md:px-6 lg:pt-24">
          <h1 className="font-playfair font-black text-3xl leading-9 -tracking-[2px] md:text-7xl md:leading-20 lg:text-9xl lg:leading-32 ">
            Where Business Meets Luxury Travel
          </h1>
          <p className="text-sm leading-5 font-medium md:text-xl md:pt-4 lg:text-4xl lg:pt-10 ">
            Join industry leaders for a unique networking and cultural
            experience
          </p>

          {/* CTA Button */}
          <button className="mt-14 px-5 py-3 md:px-6 md:py-4 lg:px-12 lg:py-6 cursor-pointer bg-[#061517] font-baskervvilleSC text-[#F7EBD5] text-sm lg:text-2xl hover:bg-[#F7EBD5] hover:text-[#061517] hover:font-bold transition ">
            <Link href="#events">Join an event now</Link>
          </button>
        </div>
      </div>
      <Gallery />
      <Events />
      <About />
      <Contact />
    </section>
  );
}
