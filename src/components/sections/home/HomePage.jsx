import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <IndustriesSection />
    </main>
  );
}
