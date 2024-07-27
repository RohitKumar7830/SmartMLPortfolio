const ContactSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start py-32 px-10 bg-black overflow-hidden">
      <div className="absolute inset-0 top-[-70px] w-full h-[500px] bg-[radial-gradient(circle_farthest-side_at_50%_-170%,_transparent,_black),linear-gradient(to_bottom,_#aa55f4,_transparent)] opacity-[0.8]"></div>
      <div className="mt-[10vh] max-w-[1200px] w-full flex flex-col items-center">
        <div className="text-center flex flex-col items-center relative z-10">
          <div className="border-2 border-[#aa55f4] text-[#aa55f4] uppercase text-xs font-medium px-4 py-2 rounded-xl mb-4 tracking-wider">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-6">
            Get in touch
          </h1>
          <p className="text-[#616d7e] text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
            Mauris quam ac ultricies tellus. At eu et morbi molestie pharetra
            tincidunt mauris in quis. Amet et ut posuere.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[650px] mb-[60px] pt-8 md:pt-2">
        <form
          id="email-form"
          name="email-form"
          method="get"
          aria-label="Email Form"
          className="grid gap-4 "
        >
          <input
            className="h-14 bg-[#0A0E14] text-white rounded-lg px-4 text-lg border border-[#182233] focus:border-[#aa55f4] outline-none"
            maxLength="256"
            name="First-Name"
            placeholder="First Name"
            type="text"
            id="First-Name"
          />
          <input
            className="h-14 bg-[#0A0E14] text-white rounded-lg px-4 text-lg border border-[#182233] focus:border-[#aa55f4] outline-none"
            maxLength="256"
            name="Last-Name"
            placeholder="Last Name"
            type="text"
            id="Last-Name"
          />
          <input
            className="h-14 bg-[#0A0E14] text-white rounded-lg px-4 text-lg border border-[#182233] focus:border-[#aa55f4] outline-none"
            maxLength="256"
            name="Email-Address"
            placeholder="Email Address"
            type="email"
            id="Email-Address"
            required
          />
          <textarea
            className="h-auto max-h-[350px] min-h-[200px] w-full bg-[#0A0E14] text-white border border-[#182233] rounded-lg px-4 py-4 text-lg focus:border-[#aa55f4] outline-none"
            placeholder="Your Message"
            maxLength="5000"
            id="Message"
            name="Message"
          ></textarea>
          <div className="flex justify-center">
            <input
              type="submit"
              className="bg-[#aa55f4] bg-gradient-to-r from-[#aa55f4] to-[#6a1bf0] text-white text-2xl py-3 px-6 rounded-xl shadow-lg duration-300 transform transition-transform hover:bg-[#6a1bf0] hover:scale-95 cursor-pointer"
              value="Submit"
            />
          </div>
        </form>
        <div className="hidden text-center bg-[#0A0E14] p-5">
          <div className="text-green-500">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div className="hidden bg-red-200 mt-4 p-5">
          <div className="text-red-600">
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
