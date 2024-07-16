import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed w-full z-10 ">
      <div className="container mx-auto px-4 md:px-3 lg:px-9 py-8 flex justify-between items-center">
        <div className="text-white text-3xl font-semibold transition-transform transform hover:scale-95">
          SmartML Lab
        </div>
        <div className="hidden lg:flex space-x-10">
          <a href="#home" className="text-slate-400 hover:text-white text-xl">
            Home
          </a>
          <a href="#about" className="text-slate-400 hover:text-white text-xl">
            About
          </a>
          <a
            href="#technology"
            className="text-slate-400 hover:text-white text-xl"
          >
            Technology
          </a>
          <a href="#blog" className="text-slate-400 hover:text-white text-xl">
            Blog
          </a>
          <a
            href="#contact"
            className="text-slate-400 hover:text-white text-xl"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-[#3183FF] text-lg transition-transform transform hover:scale-95">
            Get Started
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-[#1d2838] text-white p-2 rounded-lg"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-18 left-4 right-4 bg-[#1d2838] p-4 rounded-lg  opacity-[0.95]`}
        style={{ transition: "0.75s ease-out" }}
      >
        <div className="space-y-2 ">
          <a
            href="#home"
            className="block text-slate-400 hover:text-white text-xl mb-4 px-3"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            About
          </a>
          <a
            href="#technology"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            Technology
          </a>
          <a
            href="#blog"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block text-slate-400 hover:text-white text-xl py-2 px-3"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
