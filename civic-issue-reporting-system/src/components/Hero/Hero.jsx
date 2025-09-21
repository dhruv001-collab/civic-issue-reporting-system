import React, { useContext } from "react";
import worldBackground from "../../assets/world.png";
import HeroImg from "../../assets/Hero-img.png";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
const Hero = () => {
  const { searchText, setSearchText } = useContext(AppContext);
  return (
    <div className="relative h-screen-auto min-h-screen md:min-h-[60vh] lg:min-h-[60vh] lg:pt-20 lg:pb-10 lg:mb-20 flex items-center md:items-center justify-center overflow-hidden bg-white">
      {/* bg image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-65"
        src={worldBackground}
        alt="World map background"
      />

      {/* Content*/}
      <div className="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Crowdsourced <span className="text-teal-500">Civic Issue</span>{" "}
            Reporting and Resolution System
          </h1>

          <p className="text-lg md:text-xl text-gray-700">
            See a problem like a pothole, garbage, or broken streetlight? Just
            click a photo and share it. Your report helps the right people take
            action.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Enter a nearby postcode, or street name and area"
              className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <Link to={"/reports"} className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200">
              Continue
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="Collage of civic issues"
            className="w-full max-w-md h-auto rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
