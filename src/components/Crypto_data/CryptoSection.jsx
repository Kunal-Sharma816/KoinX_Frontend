import React from "react";
import CryptoCard from "../Cards/CryptoCard";

function CryptoSection() {
  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      <CryptoCard cryptoId="bitcoin" />
      <CryptoCard cryptoId="ethereum" />
      <CryptoCard cryptoId="dogecoin" />
      {/* You can add more CryptoCards with different IDs */}
    </div>
  );
}

export default CryptoSection;
