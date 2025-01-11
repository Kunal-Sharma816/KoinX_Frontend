import React, { useEffect, useState } from "react";
import axios from "axios";

const Insights = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin`
        );
        const marketData = response.data.market_data;

        setData({
          currentPrice: marketData.current_price.usd,
          todaysLow: marketData.low_24h.usd,
          todaysHigh: marketData.high_24h.usd,
          low52W: marketData.atl.usd,
          high52W: marketData.ath.usd,
          tradingVolume: marketData.total_volume.usd,
          marketCap: marketData.market_cap.usd,
          marketCapDominance: marketData.market_cap_change_percentage_24h,
          allTimeHigh: marketData.ath.usd,
          allTimeLow: marketData.atl.usd,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading insights...</p>;
  }

  return (
    <div className="bg-white text-black p-4 rounded-lg">
      {/* Performance Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Performance</h2>
        <div className="mt-4">
          {/* Today's Low & High */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium">Today's Low</p>
            <p className="text-sm font-medium">Today's High</p>
          </div>
          <div className="relative bg-gray-300 h-2 rounded-lg">
            <div
              className="absolute bg-green-500 h-2 rounded-lg"
              style={{
                width: `${((data.currentPrice - data.todaysLow) /
                  (data.todaysHigh - data.todaysLow)) *
                  100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <p>${data.todaysLow}</p>
            <p>${data.todaysHigh}</p>
          </div>

          {/* 52 Week Low & High */}
          <div className="flex justify-between items-center mt-6 mb-4">
            <p className="text-sm font-medium">52W Low</p>
            <p className="text-sm font-medium">52W High</p>
          </div>
          <div className="relative bg-gray-300 h-2 rounded-lg">
            <div
              className="absolute bg-blue-500 h-2 rounded-lg"
              style={{
                width: `${((data.currentPrice - data.low52W) /
                  (data.high52W - data.low52W)) *
                  100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <p>${data.low52W}</p>
            <p>${data.high52W}</p>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <h2 className="text-xl font-bold">Fundamentals</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm font-medium">Bitcoin Price:</p>
            <p>${data.currentPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium">Trading Volume:</p>
            <p>${data.tradingVolume.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium">Market Cap:</p>
            <p>${data.marketCap.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium">Market Cap Dominance:</p>
            <p>{data.marketCapDominance}%</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium">All-Time High:</p>
            <p>${data.allTimeHigh}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium">All-Time Low:</p>
            <p>${data.allTimeLow}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
