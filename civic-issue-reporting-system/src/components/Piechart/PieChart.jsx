
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ title, data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: [
          "#e74c3c", 
          "#3498db", 
          "#27ae60", 
          "#f1c40f", 
          "#8e44ad", 
          "#e67e22", 
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
