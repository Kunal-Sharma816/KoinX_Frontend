import React from "react";

const UpperSection = () => {
  return (
    <div
      style={{
        background: "#007bff",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20211009/original/pngtree-trader-online-trading-in-flat-concept-png-image_6847817.png"
        alt="Illustration"
        style={{
          marginBottom: "15px",
          width: "200px",
          display: "block",
          margin: "0 auto",
        }}
      />

      <h2 style={{ color: "white", fontSize: "24px" }}>
        Get Started with KoinX for FREE
      </h2>
      <p style={{ color: "white", marginTop: "5px" }}>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <button
        style={{
          background: "#ffff",
          marginTop: "10px",
          color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Get Started for FREE →
      </button>
    </div>
  );
};

export default UpperSection;
