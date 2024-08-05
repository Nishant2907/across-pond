import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-8 w-8 mr-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6 "
          >
            WORK
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6"
          >
            WHAT WE DO
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6"
          >
            TEAM
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6"
          >
            INSIGHTS
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-gray-800 font-bold px-6"
          >
            LET'S TALK
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
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
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            WORK
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            TEAM
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            ABOUT
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            INSIGHTS
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            LET'S TALK
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-800 ">
            WHAT WE DO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
