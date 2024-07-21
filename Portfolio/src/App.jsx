import Header from "./component/Header";
import Banner from "./component/HomePage/Banner";
import Collab from "./component/HomePage/Collab";
import Developer from "./component/HomePage/Developer";
import Features from "./component/HomePage/Features";
import Home from "./component/HomePage/Home";
import SmartContracts from "./component/HomePage/SmartContracts";
import Stats from "./component/HomePage/Stats";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <SmartContracts />
      <Stats />
      <Collab />
      <Developer />
      <Banner />
    </div>
  );
}
