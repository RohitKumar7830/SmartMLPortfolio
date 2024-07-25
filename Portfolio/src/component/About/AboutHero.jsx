const AboutHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="glow-top absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#3183ff,_transparent)] opacity-[1.8]"></div>
      <div className="content single-page mt-[10vh] max-w-[900px] w-full flex flex-col items-center pb-0 md:pb-10">
        <div className="block-hero text-center flex flex-col items-center relative z-10">
          <div className=" border-2 border-[#1d2838] text-[#3183FF] uppercase text-xs font-medium px-4 py-2 rounded-xl mb-4 tracking-wider">
            About
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6 ">
            Who we are and why we&apos;re doing this
          </h1>
          <p className=" text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
            Mauris quam ac ultricies tellus. At eu et morbi molestie pharetra
            tincidunt mauris in quis. Amet et ut posuere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
