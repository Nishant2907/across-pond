import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center m-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>
        <div className="hidden md:flex space-x-4 px-6 bg-blue">
          <a href="#" className="text-white  font-weight-400 ">
            WORK
          </a>
          <a href="#" className="text-white  px-6 font-weight-400">
            WHAT WE DO
          </a>
          <a href="#" className="text-white  px-6 font-weight-400">
            TEAM
          </a>
          <a href="#" className="text-white  px-6 font-weight-400">
            ABOUT
          </a>
          <a href="#" className="text-white   px-6 font-weight-400 ">
            INSIGHTS
          </a>
          <a href="#" className="text-white px-6 font-weight-400">
            LET'S TALK
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white hover:text-gray-200 focus:outline-none">
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
    </nav>
  );
};

export default Navbar;
