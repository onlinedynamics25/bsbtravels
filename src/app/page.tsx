import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Events from "@/pages/Events";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      {/* <Events />
      <Gallery />
      <About />
      <Contact /> */}
      <Footer />
    </div>
  );
}
