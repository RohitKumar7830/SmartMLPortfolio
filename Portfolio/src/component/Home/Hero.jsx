import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
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
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="glow-top absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#3183ff,_transparent)] opacity-80"></div>
      <div className="max-w-5xl mx-auto px-3 text-center pt-32 pb-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6">
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
          Explore
        </button>
      </div>
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

export default Hero;
