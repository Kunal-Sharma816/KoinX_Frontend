import React from "react";

function PersonIntroCard({ imageSrc, name, about }) {
  return (
    <div className="bg-gray-400 shadow-lg rounded-lg p-6 flex items-center space-x-6">
      {/* Left Section - Image and Name */}
      <div className="w-1/3">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-32 object-cover rounded-lg" // Ensuring image is well-sized and properly fitted
        />
        <p className="text-center mt-2 text-lg font-semibold text-black">{name}</p>
        <p className = "text-center mt-2 text-me ">Designation here</p>
      </div>

      {/* Right Section - About */}
      <div className="w-2/3">
        <p className="text-black leading-relaxed">{about}</p>
      </div>
    </div>
  );
}

export default PersonIntroCard;
