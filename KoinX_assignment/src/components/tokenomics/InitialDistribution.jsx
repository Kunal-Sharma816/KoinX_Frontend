// Tokenomics.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const InitialDistribution = () => {
  const data = {
    labels: ["Crowdsale Investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#0057FF", "#FFA500"],
        hoverBackgroundColor: ["#FFB347", "#3A7BFF"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Makes it a donut chart
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="flex items-center bg-white p-6 rounded-lg shadow-md space-x-6">
      {/* Donut Chart */}
      <div className="w-40 h-40">
        <Doughnut data={data} options={options} />
      </div>

      {/* Bullet Points */}
      <div>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <ul className="pl-5 space-y-1 text-gray-700">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#0057FF] before:rounded-full">
              <span className="font-medium">Crowdsale Investors:</span> 80%
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#FFA500] before:rounded-full">
              <span className="font-medium">Foundation:</span> 20%
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default InitialDistribution;
