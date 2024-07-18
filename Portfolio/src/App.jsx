import Features from "./component/Features";
import Header from "./component/Header";
import Home from "./component/Home";
import SmartContracts from "./component/SmartContracts";
import Stats from "./component/Stats";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <SmartContracts />
      <Stats />
    </div>
  );
}
