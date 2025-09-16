import React, { useContext, useState } from "react";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AppContext } from "../../Context/AppContext";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";


const Nav = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <>
      <nav className={`bg-white shadow-md px-3 lg:px-12 `}>
        <div className="flex justify-between items-center">
          {/* Left Section*/}
          <div className="flex items-center">
            <div className="h-[100px] w-[120px] sm:h-[70px] sm:w-[160px] lg:h-[100px] lg:w-[180px] " onClick={() => navigate("/")} >
              <img 
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="hidden lg:flex gap-8 font-medium text-gray-700 text-lg">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              Stats
            </NavLink>

            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                `transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              Local Alerts
            </NavLink>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              FAQs
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex gap-4">
            <button className="px-6 py-2  bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
              Post Issue
            </button>
            <p className="flex justify-center items-center text-2xl">|</p>
            {user ? (
              <div className="flex items-center gap-4 max-sm:text-sm">
                <p className="">
                  Hi,{" "}
                  {user.firstName?.charAt(0).toUpperCase() +
                    user.firstName?.slice(1).toLowerCase()}{" "}
                  {user.lastName?.charAt(0).toUpperCase() +
                    user.lastName?.slice(1).toLowerCase()}
                </p>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <button
                onClick={(e) => openSignIn()}
                className="px-6 py-2 border border-black rounded-full hover:bg-gray-100 transition-all cursor-pointer"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Hamburger Icon */}

          <div className="lg:hidden flex items-center gap-4">
            <div className={!isOpen ? "flex" : "hidden"}>
              <button className="px-6 py-2 text-sm bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
                Post Issue
              </button>
            </div>
            <UserButton
              className={!isOpen ? "hidden" : "flex"}
              afterSignOutUrl="/"
            />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out  ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 font-medium text-gray-700 text-lg">
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              Dashboard
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
              <button className="px-6 py-2  bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
                Post Issue
              </button>
              {user ? (
                <div className="flex items-center justify-center gap-4 max-sm:text-sm">
                  <p className="font-bold">
                    Hi,{" "}
                    {user.firstName?.charAt(0).toUpperCase() +
                      user.firstName?.slice(1).toLowerCase()}{" "}
                    {user.lastName?.charAt(0).toUpperCase() +
                      user.lastName?.slice(1).toLowerCase()}
                  </p>
                </div>
              ) : (
                <button
                  onClick={(e) => openSignIn()}
                  className="px-6 py-2 border border-black rounded-full hover:bg-gray-100 transition-all cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
