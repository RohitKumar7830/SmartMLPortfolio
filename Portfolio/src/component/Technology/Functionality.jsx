import { useEffect, useRef, useState } from "react";
import "./Functionality.css";
const functionalities = [
  {
    id: 1,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3dfe771fe94f3ac0af_icon%201%20large.svg",
    title: "Fast & Seamless",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
  {
    id: 2,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3d779115c7f655a8e1_icon%202%20large.svg",
    title: "Unique Functionality",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
  {
    id: 3,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3df589ed1849ab2270_icon%203%20large.svg",
    title: "Smart Contracts",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
  {
    id: 4,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3d607f8aa6a31b57a5_icon%204%20large.svg",
    title: "Build Community",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
  {
    id: 5,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3dea54196cb3cf5a9e_icon%205%20large.svg",
    title: "Secure Financial",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
  {
    id: 6,
    imgSrc:
      "https://assets-global.website-files.com/613e7a6e19fd8f65b8d29b8e/614e2c3d3c4c926b1c120ff4_icon%206%20large.svg",
    title: "API Functionality",
    description:
      "In sagittis risus, dui ac id. Dignissim fermentum tortor, fames tortor, viverra.",
  },
];

const Functionality = () => {
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
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="max-w-[1200px] p-[120px_40px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {functionalities.map((func, index) => (
          <div
            key={func.id}
            ref={(el) => (elementsRef.current[index] = el)}
            className={`flex flex-col items-center text-center p-[55px_10%_25px] rounded-xl shadow-lg transition-opacity duration-1000 ${
              visibleElements.includes(elementsRef.current[index])
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(140deg, rgba(29, 40, 56, .5), rgba(29, 40, 56, .25))",
              transitionDelay: `${index * 0.2}s`,
            }}
          >
            <img
              src={func.imgSrc}
              alt={func.title}
              className="w-[44px] h-[44px] mb-[22px]"
            />
            <h2 className="text-white text-[24px] font-semibold leading-[130%] tracking-[-0.5px] mt-0 mb-[18px]">
              {func.title}
            </h2>
            <p className="text-[#616d7e] mb-[32px]">{func.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionality;
