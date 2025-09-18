// pages/index.tsx (or app/page.tsx depending on your setup)
import Hero from "@/components/Hero";
import GalleryPreview from "@/components/GalleryPreview";
import EventsPreview from "@/components/EventsPreview";
import CallToAction from "@/components/CallToAction";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main className="font-baskerville bg-[#F2DEB8] text-[#061517] md:pt-12">
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
