// src/components/OurServices.js
import React from "react";
import team from "../../assets/team.jpg";
import our from "../../assets/our.jpg";
import technology from "../../assets/technology.jpg";

const OurServices = () => {
  return (
    <div
      style={{
        backgroundColor: "#04244d",
        color: "white",
        minHeight: "120vh",
        padding: "20px",
      }}
      className="p-8 "
    >
      <div className="mb-8 mr-6 text-left mt-14 ml-16 text-lg font-light">
        <p className="mb-8 mr-8">
          A future & battle ready Finance Organisation needs a new operating
          model, with not only new Finance Talent Capabilities, but a digital
          transformation of how data is collected, recorded, validated,
          reported. At Catapult through a data & AI centric managed services
          model, we help our clients achieve Enterprise Performance Excellence
          while they can continue to focus on Revenue growth & business
          outcomes.
        </p>
        <p className="mb-8 mr-8">
          To know how we can partner, please do explore Our Services, Technology
          & Team Capabilities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 ml-20 ">
        <div className="text-left text-xl font-light ">
          <img
            src={our}
            alt="Our Services"
            className="mb-4"
            style={{ width: "86%", height: "86%" }}
          />
          <p className="font-bold">Our Services</p>
        </div>
        <div className="text-left text-xl font-light">
          <img
            src={technology}
            alt="Technology"
            className="mb-4"
            style={{ width: "86%", height: "86%" }}
          />
          <p className="font-bold">Technology</p>
        </div>
        <div className="text-left text-xl font-light ">
          <img
            src={team}
            alt="Team"
            className="mb-4"
            style={{ width: "86%", height: "86%" }}
          />
          <p className="font-bold">Team</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
