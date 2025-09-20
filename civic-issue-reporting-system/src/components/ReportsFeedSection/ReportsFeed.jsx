import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { DummyReportsData } from "../../DummyReportsData/DummyReportsData";
import { AppContext } from "../../Context/AppContext";

const ReportsFeed = () => {
  const { searchText, status, setAllproducts, allproducts } = useContext(AppContext);

  const fetchinfo = async () => {
    await fetch('http://localhost:5000/allIssues').then((res) => res.json()).then((data) => setAllproducts(data))
  }


  useEffect(() => {
    fetchinfo();
  }, []);

  useEffect(() => {
    console.log("Updated allproducts:", allproducts);
  }, [allproducts]);


  const filteredReports = allproducts.filter((report) => {
    const matchesLocation = report.location
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      status === "All" || report.issue.toLowerCase() === status.toLowerCase();
    return matchesLocation && matchesStatus;
  });

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-2">
      {filteredReports.length > 0 ? (
        filteredReports.map((report) => (
          <div
            key={report._id}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all min-w-[280px] sm:min-w-[320px] h-[320px] flex flex-col justify-end"
            style={{
              backgroundImage: `url(${report.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 p-4 flex flex-col gap-1 text-white">
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium w-fit ${report.category === "Urgent" ? "bg-red-500" : "bg-green-500"
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
                    <FaThumbsUp /> 25
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment /> 20
                  </span>
                </div>
                <span className="text-gray-300">{report.date}</span>
              </div>
              <Link
                to={`/reports/${report._id}`}
                className="bg-teal-500 hover:bg-teal-600 text-white text-center py-2 rounded-lg font-medium transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500 py-6">
          No reports found matching your filters.
        </p>
      )}
    </section>
  );
};

export default ReportsFeed;
