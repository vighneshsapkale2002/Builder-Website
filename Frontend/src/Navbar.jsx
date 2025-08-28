import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
                      {/* <h1 className="text-2xl font-bold text-blue-600">🏠 BuilderName</h1> */}
                      <img className="w-20" src="https://www.designmantic.com/logo-images/172851.png?company=Company%20Name&keyword=builder&slogan=&verify=1" alt="Logo"/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">
              Projects
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              Enquire Now
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Projects
          </a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Contact
          </a>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-none hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
