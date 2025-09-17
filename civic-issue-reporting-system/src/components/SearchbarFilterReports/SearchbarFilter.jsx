import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AppContext } from "../../Context/AppContext";

const SearchbarFilter = ({ onSearch }) => {
  const {searchText,setSearchText}=useContext(AppContext)
  const {status,setStatus}=useContext(AppContext)
  
  const handleSearch = () => {
    onSearch({ searchText, status, date });
  };
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-3 w-full bg-gray-50 p-4 rounded-xl shadow-sm">
      {/* Search Input */}
      <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-1 focus-within:ring-gray-400">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by city or area"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="relative w-full md:w-48">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="All">All Status</option>
          <option value="Potholes">Potholes</option>
          <option value="Broken Street Lights">Broken Street Lights</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Traffic Violations">Traffic Violations</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
        <MdOutlineKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Apply Button */}
      <button
        onClick={handleSearch}
        className="w-full md:w-auto border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        Apply
      </button>
    </div>
  );
};

export default SearchbarFilter;
