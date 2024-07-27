import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const elements = [headingRef.current, paragraphRef.current];

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-32 px-4">
      <div className="w-full max-w-[720px]">
        <h1
          ref={headingRef}
          className="text-3xl font-bold mb-6 text-white md:text-5xl"
        >
          We are a community of passionate humans building a distributed cloud
        </h1>
        <p
          ref={paragraphRef}
          className="text-lg text-[#616d7e] leading-relaxed"
        >
          Pulvinar duis eget tellus suscipit amet neque, purus. Auctor sed
          accumsan gravida felis massa ornare in. Iaculis quis lectus convallis
          proin proin leo. Convallis pellentesque eget at ultricies amet
          scelerisque ut.
          <br />
          <br />
          Nunc proin adipiscing praesent sed accumsan. Porttitor in amet
          vulputate quisque. Lacus, nunc mi, lacus, commodo mattis. Mi in
          aliquam id sed vitae ultrices enim. Pulvinar odio varius sit sed in
          pellentesque malesuada quisque. Massa amet arcu sit pellentesque eget
          faucibus. Laoreet.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
