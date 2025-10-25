import Hero from "@/components/Hero";
import ScrollText from "@/components/ScrollText";
import HorizontalGallery from "@/components/HorizontalGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ScrollText />
      <HorizontalGallery />
    </main>
  );
}
