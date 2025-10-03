import React from "react";
import { DummyReportsData } from "../../DummyReportsData/DummyReportsData";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import location from "../../assets/location.png";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import moment from 'moment';

const RecentlyReported = () => {
   const {  setAllproducts, allproducts } = useContext(AppContext);

   const fetchinfo = async () => {
       await fetch('https://backend-i7id.onrender.com/allIssues').then((res) => res.json()).then((data) => setAllproducts(data))
     }
   
   
     useEffect(() => {
       fetchinfo();
     }, []);
   
     useEffect(() => {
       console.log("Updated allproducts:", allproducts);
     }, [allproducts]);


  return (
    <section className="h-screen-auto min-h-[65vh] md:min-h-[50vh] lg:min-h-[40vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 lg:px-10">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
          Recently Reported Problems
        </h1>
        < Link to={'/reports'} className="text-blue-600 border border-blue-600 px-5 sm:px-6 lg:px-8 py-2 rounded-full hover:bg-blue-50 transition-all">
          SEE MORE &gt;
        </Link>
      </div>
      <div className="overflow-x-auto flex flex-nowrap gap-10 px-6 pt-10 scrollbar-none ">
        {allproducts.map((report) => {
        return (
          <Link
            key={report._id}
            to={`/reports/${report._id}`} 
            className="bg-white shadow-md rounded-2xl overflow-hidden min-w-[280px] sm:min-w-[320px] hover:shadow-xl transition-all"
          >
            <div className="h-[200px] w-full">
              <img
                src={report.image}
                alt={report.Issue_title}
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
                {report.Issue_title}
              </h2>

              <p className="text-sm text-gray-500 flex">
                <span>
                  <img className="w-[20px]" src={location} alt="location" />
                </span>
                {report.location}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <FaThumbsUp /> 5
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment />20
                  </span>
                </div>
                <span className="text-gray-400">{moment(report.date).format('DD/MM/YYYY')}</span>
              </div>
            </div>
          </Link>
        );
      })}
      </div>
    </section>
  );
};

export default RecentlyReported;
