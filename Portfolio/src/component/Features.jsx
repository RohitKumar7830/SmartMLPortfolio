import { useEffect, useRef, useState } from "react";
import MoneyImg from "../assets/Money.svg";
import SecurityImg from "../assets/security.svg";
import GovernanceImg from "../assets/Governance.svg";
import AgencyImg from "../assets/Agency.svg";
import ReliabilityImg from "../assets/Reliability.svg";
import InteroperabilityImg from "../assets/Interoperability.svg";

const icons = [
  {
    img: MoneyImg,
    title: "Money",
    description:
      "Advanced financial analytics for informed decision-making and management.",
  },
  {
    img: SecurityImg,
    title: "Security",
    description:
      "AI-powered solutions ensuring robust data security and privacy.",
  },
  {
    img: GovernanceImg,
    title: "Governance",
    description:
      "Streamlined governance processes with automated tools for efficiency.",
  },
  {
    img: AgencyImg,
    title: "Agency",
    description:
      "Enhanced operational efficiency and client service through AI innovations.",
  },
  {
    img: ReliabilityImg,
    title: "Reliability",
    description: "AI-driven quality assurance for dependable operations.",
  },
  {
    img: InteroperabilityImg,
    title: "Interopability",
    description:
      "Seamless integration across systems with AI-enabled solutions.",
  },
];

const Features = () => {
  const [visibleElements, setVisibleElements] = useState([]);
  const elementsRef = useRef([]);

  useEffect(() => {
    const currentElements = elementsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...prev, entry.target]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-[1200px]">
        <div
          className={`text-blue-500 font-thin py-2 px-4 rounded-xl mb-4 border border-[#0751BF] border-opacity-35 tracking-[2px] text-[13px] transition-opacity duration-1000 ${
            visibleElements.includes(elementsRef.current[0])
              ? "opacity-100"
              : "opacity-0"
          }`}
          ref={(el) => (elementsRef.current[0] = el)}
        >
          SOLVING
        </div>
        <div className="max-w-5xl md:max-w-7xl lg:max-w-5xl mx-auto text-center mb-14">
          <h1
            className={`text-4xl  md:text-6xl lg:text-[66px] font-medium text-white transition-opacity duration-1000 ${
              visibleElements.includes(elementsRef.current[1])
                ? "opacity-100"
                : "opacity-0"
            }`}
            ref={(el) => (elementsRef.current[1] = el)}
            style={{
              lineHeight: "1.1",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Powerful new features for solving challenges
          </h1>
        </div>
        <div className="flex items-center justify-center bg-black pb-8 lg:px-[140px]">
          <div className="grid gap-6 p-4 w-full max-w-7xl grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 ">
            {icons.map(({ img, title, description }, index) => (
              <div
                key={index}
                ref={(el) => (elementsRef.current[index + 2] = el)}
                className={`flex flex-col items-center justify-center p-8 bg-black rounded-md shadow-md text-white transition-opacity duration-1000 ${
                  visibleElements.includes(elementsRef.current[index + 2])
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div
                  className="rounded-xl p-6 mb-5 flex items-center justify-center w-20 h-20 "
                  style={{
                    background:
                      "rgb(21,30,42) linear-gradient(174deg, rgba(21,30,42,1) 45%, rgba(0,10,0,1) 100%)",
                  }}
                >
                  <img src={img} alt={title} className="h-20 w-20 mb-2" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-5">
                  {title}
                </h2>
                <p
                  className="text-center text-[#616d7e] opacity-95"
                  style={{ lineHeight: 1.4 }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
