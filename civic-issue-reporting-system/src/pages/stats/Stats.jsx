import React from "react";
import Nav from "../../components/Header/Header";
import { ReportsStatsData } from "../../ReportsStatsData/ReportsStatsData";
import PieChart from "../../components/Piechart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import Footer from "../../components/Footer/Footer";

const Stats = () => {
  const categoryData = [
    { label: "Potholes", value: 15 },
    { label: "Street Lights", value: 10 },
    { label: "Sanitation", value: 12 },
    { label: "Traffic", value: 8 },
    { label: "Water", value: 6 },
    { label: "Electricity", value: 9 },
  ];

  const locationData = [
    { label: "Pasonda", value: 115 },
    { label: "Shalimar Garden", value: 155 },
    { label: "Sahibabad", value: 170 },
    { label: "Kaushambi", value: 85 },
    { label: "Laxmi Nagar", value: 110 },
  ];


  const monthlyData = [
  { label: 'Jan', value: 277 },
  { label: 'Feb', value: 169 },
  { label: 'Mar', value: 238 },
  { label: 'Apr', value: 235 },
  { label: 'May ', value: 237 },
  { label: 'Jun', value: 161 },
  { label: 'Jul', value: 277 },
];
  
  const convertToChartData = (data, label) => ({
  labels: data.map((item) => item.label),
  datasets: [
    {
      label,
      data: data.map((item) => item.value),
      fill: false,
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgb(59, 130, 246)',
      tension: 0.4,
    },
  ],
});


  return (
    <>
      <Nav />
      <section className="px-6 md:px-10 pb-10 mt-10 lg:mt-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {ReportsStatsData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col hover:shadow-lg transition"
            >
              <span className="text-gray-600 text-sm mt-2">{item.title}</span>
              <span className="text-4xl font-bold text-gray-900">
                {item.count}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:flex-row gap-4 mb-10">
          <div className="bg-white shadow-md rounded-xl p-6 lg:w-[45vw]">
            <PieChart title="Category Distribution" data={categoryData} />
             
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 lg:w-[45vw]">
            <BarChart title="Top Locations Reported" data={locationData} />
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 lg:w-[45vw]">
            <LineChart title="Trend Over Time" data={convertToChartData(monthlyData, 'Monthly Issues')} />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Stats;
