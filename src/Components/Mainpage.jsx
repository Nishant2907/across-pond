// src/MainPage.js
import React from "react";
import video from "../assets/Catapult.mp4";
import Navbar from "./Nav";

const MainPage = () => {
  return (
    <div className="relative w-full text-white h-40 sm:h-72 md:h-80 lg:h-88 xl:h-[40rem] flex items-center justify-center">
      <div className="absolute inset-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <p className="tracking-widest text-white text-xl sm:text-2xl md:text-4xl lg:text-8xl xl:text-8xl font-bold">
           
          </p> */}
        </div>
      </div>
      
    </div>
  );
};

export default MainPage;