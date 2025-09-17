import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { DummyReportsData } from "../../DummyReportsData/DummyReportsData";

const ReportsFeed = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-2">
      {DummyReportsData.map((report) => {
        return (
          <div
            key={report.id}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all min-w-[280px] sm:min-w-[320px] h-[320px] flex flex-col justify-end"
            style={{
              backgroundImage: `url(${report.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content on Image */}
            <div className="relative z-10 p-4 flex flex-col gap-1 text-white">
              {/* Category Badge */}
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium w-fit ${
                  report.category === "Urgent"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {report.category}
              </span>
              <h2 className="font-semibold text-white line-clamp-2">
                {report.title}
              </h2>
              <div className="flex justify-between items-center text-sm mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <FaThumbsUp /> {report.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment /> {report.comments}
                  </span>
                </div>
                <span className="text-gray-300">{report.date}</span>
              </div>
              <Link
                to={`/reports/${report.id}`}
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-2 rounded-lg font-medium transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ReportsFeed;
