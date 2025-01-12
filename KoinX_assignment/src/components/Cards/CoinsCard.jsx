// CoinsCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoinsCard = ({ id, icon, name }) => {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch price and change data
        const marketRes = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`, {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        });

        const marketData = marketRes.data[0];
        setPrice(marketData.current_price);
        setChange(marketData.price_change_percentage_24h);

        // Fetch sparkline data for the graph
        const sparklineRes = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: 7,
          },
        });

        const prices = sparklineRes.data.prices.map(price => price[1]);
        const chartUrl = `https://quickchart.io/chart?c={type:'line',data:{labels:[${prices.map((_, i) => i)}],datasets:[{label:'${name}',data:[${prices}],borderColor:'blue',fill:false}]}}`;
        setGraph(chartUrl);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, name]);

  return (
    <div className="bg-white shadow-md rounded-md p-3 w-60 h-40 flex flex-col items-center space-y-1 hover:shadow-lg transition-shadow border border-gray-300 ">
      <div className="flex items-center space-x-1">
        <img src={icon} alt={name} className="w-8 h-8" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="text-lg font-bold text-gray-800">
        {price !== null ? `$${price.toFixed(2)}` : '...'}
      </div>
      <div className={`text-xs font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change !== null ? `${change.toFixed(2)}%` : '...'}
      </div>
      {graph ? (
        <img src={graph} alt={`${name} graph`} className="w-full h-10 object-contain" />
      ) : (
        <div className="text-xs text-gray-400">Loading...</div>
      )}
    </div>
  );
};

export default CoinsCard;
