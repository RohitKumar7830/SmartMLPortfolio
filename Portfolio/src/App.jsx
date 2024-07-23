import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";
import Contact from "./pages/Contact/Contact";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
