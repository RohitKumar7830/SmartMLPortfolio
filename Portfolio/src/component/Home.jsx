// import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const layers = document.querySelector(".layers");
  //     layers.style.transform = `rotate(-${
  //       scrollY / 20
  //     }deg) skew(25deg) scale(1)`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <section className=" bg-black min-h-screen flex flex-col items-center justify-center pt-36 md:pt-50">
      <div className="max-w-4xl mx-auto px-3 text-center mb-12">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 "
          // style={{ lineHeight: "1.3" }}
        >
          Transforming Industries with AI Innovation
        </h1>
        <p
          className="text-lg md:text-xl text-gray-200 leading-8 mb-8 px-6 md:mx-[80px] text-center opacity-45"
          style={{ lineHeight: "1.5" }}
        >
          Welcome to SmartML Labs, where we harness the power of artificial
          intelligence to revolutionize industries and improve everyday
          experiences.
        </p>
        <button className="bg-blue-500 hover:bg-[#0751BF] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transition-transform transform hover:scale-95">
          Get Started
        </button>
      </div>
      {/* <div className="layers sm:hidden md:block md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[400px] ">
        <div className="layer  mb-4" style={{ transform: "rotate(30deg)" }}>
          <div></div>
        </div>
        <div
          className="layer mb-4"
          style={{ transform: "rotate(30deg) translate(80px, -80px)" }}
        >
          <div></div>
        </div>
        <div className="layer " style={{ transform: "rotate(30deg) " }}>
          <div></div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
