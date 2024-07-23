import Hero from "../../component/Home/Hero";
import Features from "../../component/Home/Features";
import SmartContracts from "../../component/Home/SmartContracts";
import Stats from "../../component/Home/Stats";
import Collab from "../../component/Home/Collab";
import Developer from "../../component/Home/Developer";
import Banner from "../../component/Home/Banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <SmartContracts />
      <Stats />
      <Collab />
      <Developer />
      <Banner />
    </div>
  );
}
