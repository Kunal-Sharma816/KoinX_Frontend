import React from "react";
import PropTypes from "prop-types";

const ProfitCard = ({ imageSrc, titleText, buttonText }) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-green-300 to-blue-500 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      {/* Left Section: Image */}
      <div className="w-1/3">
        <img
          src={imageSrc}
          alt="Card Image"
          className="rounded-lg"
        />
      </div>

      {/* Right Section: Text and Button */}
      <div className="ml-4 w-2/3 flex flex-col justify-between">
        <h2 className="text-white text-xl font-bold">{titleText}</h2>
        <button className="mt-4 flex items-center bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
          {buttonText}
          <span className="ml-2">➔</span>
        </button>
      </div>
    </div>
  );
};

// Default Props
ProfitCard.defaultProps = {
  imageSrc: "https://via.placeholder.com/150",
  titleText: "Default Title",
  buttonText: "Check Now",
};

// Prop Types
ProfitCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ProfitCard;
