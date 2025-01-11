import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className="flex-row flex gap-10 items-center border-b-gray-100 border-gray-200 text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-4 text-sm font-white ${
            activeTab === tab
              ? "text-white border-b-2 border-blue-500"
              : "text-black hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
