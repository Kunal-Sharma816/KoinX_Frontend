import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function CryptoCard({ cryptoId }) {
  const [cryptoData, setCryptoData] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from CoinGecko API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false`
        );
        const priceData = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=7`
        );

        setCryptoData(data.data);
        setPriceHistory(priceData.data.prices);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from CoinGecko:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [cryptoId]);

  // Formatting the price history for the chart
  const chartData = {
    labels: priceHistory.map((item) => new Date(item[0]).toLocaleTimeString()),
    datasets: [
      {
        label: "Price (USD)",
        data: priceHistory.map((item) => item[1]),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 h-80">
      <div className="flex flex-col items-center">
        {/* Cryptocurrency Image */}
        <img
          src={cryptoData.image.small}
          alt={cryptoData.name}
          className="w-16 h-16 object-contain"
        />
        {/* Cryptocurrency Name */}
        <h3 className="text-xl font-semibold mt-2 text-gray-800">{cryptoData.name}</h3>
        {/* Current Price */}
        <p className="text-lg text-gray-600 mt-1">
          ${cryptoData.market_data.current_price.usd.toLocaleString()}
        </p>
      </div>
      <div className="mt-4">
        {/* Price Chart */}
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default CryptoCard;
