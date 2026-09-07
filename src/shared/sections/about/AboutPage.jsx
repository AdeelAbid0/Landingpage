import CoreValues from "./components/CoreValues";
import Industries from "./components/Industries";
import JoinProdoo from "./components/JoinProdoo";
import OurImpact from "./components/OurImpact";
import OurMission from "./components/OurMission";
import WhoWeServe from "./components/WhoWeServe";
import WhyTrustProdoo from "./components/WhyTrustProdoo";

export default function AboutPage() {
  return (
    <main>
      <CoreValues />
      <OurMission />
      <OurImpact />
      <WhoWeServe />
      <JoinProdoo />
      <Industries />
      <WhyTrustProdoo />
    </main>
  );
}
