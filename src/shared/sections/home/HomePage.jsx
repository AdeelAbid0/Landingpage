import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AiToolsSection from "./components/AiToolsSection";
import UserJourneySection from "./components/UserJourneySection";
import WhyProdooSection from "./components/WhyProdooSection";
import ProdooWorkflowSection from "./components/ProdooWorkflowSection";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <IndustriesSection />
      <HowItWorksSection />
      <AiToolsSection />
      <UserJourneySection />
      <WhyProdooSection />
      <ProdooWorkflowSection />
    </main>
  );
}
