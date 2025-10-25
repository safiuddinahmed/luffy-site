import Hero from "@/components/Hero";
import ScrollText from "@/components/ScrollText";
import HorizontalGallery from "@/components/HorizontalGallery";
import BlobBackground from "@/components/BlobBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <BlobBackground />
      <div className="relative" style={{ zIndex: 2 }}>
        <Hero />
        <ScrollText />
        <HorizontalGallery />
      </div>
    </main>
  );
}
