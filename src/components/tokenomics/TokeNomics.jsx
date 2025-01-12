// App.js
import React from 'react';
import InitialDistribution from './InitialDistribution';

const TokeNomics = () => {
  return (
    <div className="p-8 space-y-6">
        <h2 className="text-lg font-semibold mb-2">Initial Distribution</h2>
      {/* Donut Chart with Bullet Points */}
      <InitialDistribution/>

      {/* Random Text Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim. Proin ac
          nunc quis tortor efficitur placerat. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
};

export default TokeNomics;
