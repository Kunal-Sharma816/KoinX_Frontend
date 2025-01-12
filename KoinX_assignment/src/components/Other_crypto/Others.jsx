// App.js
import React from "react";
import CoinsCard from "../Cards/CoinsCard";

const coinsData = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    id: "binancecoin",
    name: "BNB",
    icon: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
  },
  {
    id: "solana",
    name: "Solana",
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
  {
    id: "ripple",
    name: "XRP",
    icon: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  },
  {
    id: "staked-ether",
    name: "stETH",
    icon: "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png",
  },
];

const Others = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">You May Also like </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {coinsData.map((coin) => (
          <CoinsCard
            key={coin.id}
            id={coin.id}
            icon={coin.icon}
            name={coin.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Others;
