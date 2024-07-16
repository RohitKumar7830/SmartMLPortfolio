import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [rotation, setRotation] = useState(30);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const maxRotation = 0;
    const minRotation = 30;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const newRotation =
      minRotation - (scrollTop / maxScroll) * (minRotation - maxRotation);
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className=" min-h-screen flex flex-col items-center justify-center pt-36 md:pt-[240px] "
      style={{
        background:
          "radial-gradient(circle at -11% -34%, rgba(7, 81, 191, 0.6) 0%, rgba(7, 81, 191, 1) 0%, rgba(0, 0, 0, 1) 28%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-3 text-center ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 ">
          Transforming Industries with AI Innovation
        </h1>
        <p
          className="text-lg md:text-xl text-[#616d7e] leading-8 mb-8 px-6 md:mx-[80px] text-center opacity-90"
          style={{ lineHeight: "1.5" }}
        >
          Welcome to SmartML Labs, where we harness the power of artificial
          intelligence to revolutionize industries and improve everyday
          experiences.
        </p>
        <button className="bg-[#2196F3] bg-gradient-to-r from-[#2196F3] to-[#0D3269] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#0751BF] hover:scale-95">
          Get Started
        </button>
      </div>
      {/* Figure code */}
      <div
        className="figure-a-hero"
        data-w-id="297673ad-47a4-b4b1-8938-0ca16b3d6b41"
      >
        <div
          className="figure-block-a-hero"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <div className="figure-a1"></div>
          <div className="figure-a2"></div>
          <div className="figure-a3"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
