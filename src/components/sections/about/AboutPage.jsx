import CoreValues from "./components/CoreValues";
import Industries from "./components/INdustries";
import JoinProdoo from "./components/JoinProdoo";
import OurImpact from "./components/OurImpact";
import OurMission from "./components/OurMission";
import WhoWeServe from "./components/WhoWeServe";

export default function AboutPage() {
  return (
    <main>
      <CoreValues />
      <OurMission />
      <OurImpact />
      <WhoWeServe />
      <JoinProdoo />
      <Industries />
    </main>
  );
}
