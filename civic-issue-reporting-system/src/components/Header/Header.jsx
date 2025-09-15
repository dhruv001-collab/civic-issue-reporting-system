import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AppContext } from "../../Context/AppContext";

const Nav = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <nav className="bg-white shadow-md px-3 lg:px-12">
      <div className="flex justify-between items-center">
        {/* Left Section*/}
        <div className="flex items-center">
          <div className="h-[100px] w-[120px] sm:h-[70px] sm:w-[160px] lg:h-[100px] lg:w-[180px]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:flex gap-8 font-medium text-gray-700 text-lg">
          <Link to="/reports" className="hover:text-blue-500 transition-all">
            Reports
          </Link>
          <Link to="/stats" className="hover:text-blue-500 transition-all">
            Stats
          </Link>
          <Link to="/alerts" className="hover:text-blue-500 transition-all">
            Local Alerts
          </Link>
          <Link to="/faqs" className="hover:text-blue-500 transition-all">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition-all">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex gap-4">
          <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-100 transition-all">
            Sign up
          </button>
          <button className="px-6 py-2  bg-teal-500 text-white rounded-full hove:bg-teal-600 transition-all">
            Post Issue
          </button>
        </div>

        {/* Hamburger Icon */}

        <div className="lg:hidden flex items-center gap-4">
          <div className={!isOpen?'flex':'hidden'}>
            <button className="px-6 py-2  bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
              Post Issue
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 font-medium text-gray-700 text-lg">
          <Link to="/reports" onClick={() => setIsOpen(false)}>
            Reports
          </Link>
          <Link to="/stats" onClick={() => setIsOpen(false)}>
            Stats
          </Link>
          <Link to="/alerts" onClick={() => setIsOpen(false)}>
            Local Alerts
          </Link>
          <Link to="/faqs" onClick={() => setIsOpen(false)}>
            FAQs
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="flex flex-col gap-3 mt-3">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-100 transition-all">
              Sign up
            </button>
            <button className="px-6 py-2  bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
              Post Issue
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
