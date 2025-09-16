import React from "react";
import { DummyReportsData } from "../../DummyReportsData/DummyReportsData";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import location from "../../assets/location.png";
const RecentlyReported = () => {
  return (
    <section className="mt-8 h-[80vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 lg:px-10">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
          Recently Reported Problems
        </h1>
        <button className="text-blue-600 border border-blue-600 px-5 sm:px-6 lg:px-8 py-2 rounded-full hover:bg-blue-50 transition-all">
          SEE MORE &gt;
        </button>
      </div>
      <div className="overflow-x-auto flex flex-nowrap gap-10 px-10 pt-20 scrollbar-none ">
        {DummyReportsData.map((report) => {
          return (
            <div
              key={report.id}
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyReported;
