import React from "react";
import Nav from "../../components/Header/Header";
import { userDashboardLikesCommentData } from "../../userDashboardLikesComment/userDashboardLikesCommentData";
import SearchbarFilter from "../../components/SearchbarFilterReports/SearchbarFilter";
import ReportsFeed from "../../components/ReportsFeedSection/ReportsFeed";

const Reports = () => {
  return (
    <>
      <Nav />
      <div className="px-6 md:px-10 pb-10 mt-10 lg:mt-5">
        <div className="bg-gradient-to-r from-blue-400 to-green-400 p-4 rounded-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {userDashboardLikesCommentData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col hover:shadow-lg transition"
              >
                <span className="text-4xl font-bold text-gray-900">
                  {item.count}
                </span>
                <span className="text-gray-600 text-sm mt-2">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SearchbarFilter/>
      <section>
        <ReportsFeed/>
      </section>
    </>
  );
};

export default Reports;
