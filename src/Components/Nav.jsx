import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 right-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center m-6 md:m-12 relative">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 lg:h-12 mr-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white font-normal">
            WORK
          </a>
          <a href="#" className="text-white px-6 font-normal">
            WHAT WE DO
          </a>
          <a href="#" className="text-white px-6 font-normal">
            TEAM
          </a>
          <a href="#" className="text-white px-6 font-normal">
            ABOUT
          </a>
          <a href="#" className="text-white px-6 font-normal">
            INSIGHTS
          </a>
          <a href="#" className="text-white px-6 font-normal">
            LET'S TALK
          </a>
        </div>
        <div className="md:hidden">
          {!isOpen && (
            <button
              className="text-white hover:text-gray-200 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          )}
          {isOpen && (
            <div className="absolute top-full left-0 w-full text-right">
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>WORK</a>
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>WHAT WE DO</a>
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>TEAM</a>
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>ABOUT</a>
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>INSIGHTS</a>
              <a href="#" className="block text-white py-2 px-4" onClick={() => setIsOpen(false)}>LET'S TALK</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;