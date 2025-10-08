// pages/index.tsx (or app/page.tsx depending on your setup)
import Hero from "@/components/sections/Hero";
import GalleryPreview from "@/components/sections/GalleryPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import CallToAction from "@/components/sections/CallToAction";
import Highlights from "@/components/sections/Highlights";

export default function Home() {
  return (
    <main className="font-baskerville bg-golden-20 text-deepteal-100 md:pt-12">
      {/* Hero Section */}
      <Hero />

      {/* Highlights / Features */}
      <Highlights />

      {/* Gallery / Preview Images */}
      <GalleryPreview />

      {/* Events / Upcoming Preview */}
      <EventsPreview />

      {/* Final CTA */}
      <CallToAction />
    </main>
  );
}
