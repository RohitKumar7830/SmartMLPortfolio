import { useEffect, useRef } from "react";
import "./Stats.css";

const Stats = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const currentElements = elementsRef.current;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    currentElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      currentElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="section bg-black pt-[150px] pb-5 sm:px-11 px-8">
      <div className="content max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="w-full grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-[125px]">
          <div className="flex flex-col justify-center items-start text-white mt-6 order-1 lg:order-2">
            <div
              ref={(el) => (elementsRef.current[0] = el)}
              className="subtitle border-2 border-gray-800 text-blue-500 tracking-wider uppercase rounded-md mb-4 py-2 px-4 text-sm font-medium"
            >
              Stats
            </div>
            <h2
              ref={(el) => (elementsRef.current[1] = el)}
              className="heading text-5xl lg:text-7xl mb-8 font-semibold"
            >
              Trusted by millions
            </h2>
            <p
              ref={(el) => (elementsRef.current[2] = el)}
              className="paragraph-large text-lg lg:text-xl mb-8 text-[#616d7e]"
            >
              Our platform&apos;s success is measured by the trust and
              satisfaction of our users. With over 1.8 million wallet installs,
              a marketplace volume of 58.3 million, and 2.4 billion created
              assets, we are proud to partner with over 120 organizations
              worldwide.
            </p>
            <div
              ref={(el) => (elementsRef.current[3] = el)}
              className="grid-button grid gap-3"
            >
              <a
                href="#"
                className="bg-[#2196F3] bg-gradient-to-r from-[#2196F3] to-[#0D3269] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#0751BF] hover:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="block-left w-full grid gap-6 text-white order-2 lg:order-1 px-[25px] py-4">
            <div
              ref={(el) => (elementsRef.current[4] = el)}
              className="stats text-center lg:text-left"
              id="stats-1"
            >
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5">
                1.8M+
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Wallet Installs
              </div>
            </div>
            <div
              ref={(el) => (elementsRef.current[5] = el)}
              className="stats text-center lg:text-left"
              id="stats-2"
            >
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5">
                58.3M
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Marketplace Volume
              </div>
            </div>
            <div
              ref={(el) => (elementsRef.current[6] = el)}
              className="stats lighter text-center lg:text-left"
              id="stats-3"
            >
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5">
                2.4B
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Created Assets
              </div>
            </div>
            <div
              ref={(el) => (elementsRef.current[7] = el)}
              className="stats lighter text-center lg:text-left"
              id="stats-4"
            >
              <h3 className="heading-stats text-4xl lg:text-[52px] mb-5">
                120+
              </h3>
              <div className="text-stats text-xl text-[#616d7e]">
                Partners Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
