import React, { useState, useEffect } from "react";
import axios from "axios";

const LowerSection = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from CoinGecko API
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 5,
            page: 1,
            sparkline: false,
          },
        }
      )
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>Trending Coins (24h)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "10px" }}>
          {coins.map((coin) => (
            <div
              key={coin.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "30px", height: "30px" }}
                />
                <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
              </div>
              <span
                style={{
                  color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LowerSection;
