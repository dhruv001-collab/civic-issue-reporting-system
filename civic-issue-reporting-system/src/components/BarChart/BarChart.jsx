import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ title, data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Reports",
        data: data.map((item) => item.value),
        backgroundColor: "#f97316", 
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y", 
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: "bold",
        },
        align: "start",
      },
      tooltip: {
        callbacks: {
          label: (context) => `Reports: ${context.raw}`, 
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[350px] sm:h-[400px] lg:h-[450px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
