import NavBar from "@/components/Navbar";
import Hero from "../pages/Hero";
import Events from "@/pages/Events";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Events />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
