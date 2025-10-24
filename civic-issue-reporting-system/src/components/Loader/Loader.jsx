import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-teal-500  rounded-full animate-spin mb-4"></div>
      <p className="text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loader;
