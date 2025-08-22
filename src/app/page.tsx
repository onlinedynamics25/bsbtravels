import Events from "@/pages/Events";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Events />
      {/* <Gallery />
      <About />
      <Contact /> */}
    </div>
  );
}
