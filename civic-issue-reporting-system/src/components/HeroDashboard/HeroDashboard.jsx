import React from 'react'
import { userDashboardLikesCommentData } from '../../userDashboardLikesComment/userDashboardLikesCommentData'
import { DummyReportsData } from "../../DummyReportsData/DummyReportsData";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import location from "../../assets/location.png";
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const HeroDashboard = () => {
   const { user } = useUser();
  return (
    <section>
        {/* TopSection */}
      <div className="flex flex-col px-6 md:px-10 pt-10 pb-5  md:pt-10 text-center md:text-left shadow-md justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2 max-w-3xl">
          {user ? 
          <span>

          <span className="text-teal-500">Hello,</span> {user.firstName? user.firstName.charAt(0).toUpperCase() + user.firstName?.slice(1).toLowerCase() : ""} {" "} {user.lastName ? user.lastName.charAt(0).toUpperCase() + user.lastName?.slice(1).toLowerCase() : ""}
          </span> :
          "Welcome" 
          }
          
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Another day to make your country better!
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 pb-10 mt-10 lg:mt-5">
        {userDashboardLikesCommentData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col  hover:shadow-lg transition"
          >
            <span className="text-4xl font-bold text-gray-900">{item.count}</span>
            <span className="text-gray-600 text-sm mt-2">{item.title}</span>
          </div>
          
        ))}
      </div>
      <section className="mt-8 h-[90vh]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 lg:px-10">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                Latest Issues Reported
              </h1>
            </div>
            <div className="overflow-x-auto flex flex-nowrap gap-10 px-10 pt-20 scrollbar-none ">
              {DummyReportsData.map((report) => {
                return (
                  <Link
                    key={report.id}
                    to={`/reports/${report.id}`} 
                    className="bg-white shadow-md rounded-2xl overflow-hidden min-w-[280px] sm:min-w-[320px] hover:shadow-xl transition-all"
                  >
                    <div className="h-[200px] w-full ">
                      <img
                        src={report.image}
                        alt={report.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 "
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium w-fit ${
                          report.category === "Urgent"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {report.category}
                      </span>
                      <h2 className="font-semibold text-gray-800 line-clamp-2">
                        {report.title}
                      </h2>
      
                      <p className="text-sm text-gray-500 flex">
                        <span>
                          <img className="w-[20px]" src={location} />
                        </span>
                        {report.location}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaThumbsUp /> {report.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment /> {report.comments}
                          </span>
                        </div>
                        <span className="text-gray-400">{report.date}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
    </section>
  )
}

export default HeroDashboard
