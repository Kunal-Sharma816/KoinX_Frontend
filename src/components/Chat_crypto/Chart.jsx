import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Chart_crypto = () => {
  const [chartData, setChartData] = useState(null);
  const [range, setRange] = useState("1"); // Default to 1D
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);

  const ranges = [
    { label: "1H", value: "0.04" },
    { label: "1D", value: "1" },
    { label: "7D", value: "7" },
    { label: "1M", value: "30" },
    { label: "3M", value: "90" },
    { label: "6M", value: "180" },
    { label: "1Y", value: "365" },
    { label: "ALL", value: "max" },
  ];

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: range,
            },
          }
        );
        const { prices } = response.data;

        // Prepare data for chart
        const labels = prices.map((price) => {
          const date = new Date(price[0]);
          return range === "1" || range === "0.04"
            ? date.toLocaleTimeString()
            : date.toLocaleDateString();
        });

        const dataPoints = prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: dataPoints,
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
              fill: true,
              tension: 0.3,
            },
          ],
        });

        // Update current price and price change
        const latestPrice = prices[prices.length - 1][1];
        const firstPrice = prices[0][1];
        setCurrentPrice(latestPrice.toFixed(2));
        setPriceChange(((latestPrice - firstPrice) / firstPrice) * 100);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [range]);

  return (
    <div className="bg-white text-black p-4 rounded-lg">
      <div className="flex items-center">
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" // Replace with a suitable Bitcoin image URL
          alt="Bitcoin Logo"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-2xl font-bold">Bitcoin (BTC)</h1>
      </div>
      {currentPrice && (
        <p className="text-3xl mt-2">
          ${currentPrice}{" "}
          <span
            className={`text-sm ${
              priceChange >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ({priceChange >= 0 ? "+" : ""}
            {priceChange.toFixed(2)}%)
          </span>
        </p>
      )}
      <div className="flex justify-end space-x-2 mt-4">
        {ranges.map((r) => (
          <button
            key={r.value}
            onClick={() => setRange(r.value)}
            className={`px-4 py-2 rounded-lg ${
              range === r.value ? "bg-gray-300" : "bg-gray-200"
            } hover:bg-gray-400`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {chartData ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                  },
                  ticks: {
                    color: "black",
                  },
                },
                y: {
                  grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                  },
                  ticks: {
                    color: "black",
                  },
                },
              },
            }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default Chart_crypto;
