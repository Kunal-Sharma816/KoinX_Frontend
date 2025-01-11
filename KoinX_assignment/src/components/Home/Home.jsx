import React from "react";
import Chart from "../Chat_crypto/Chart";
import Tabs from "../Tabbed_Navigation/Tabs";
import Insights from "../Insights/Insights";
import About_Crypto from "../About_crypto/About_Crypto";
import Teams from "../Teams/Teams";
// import CryptoSection from "../Crypto_data/CryptoSection";

function Home() {
  return (
    <>
      <div
        style={{ backgroundColor: "gray", minHeight: "100vh", padding: "20px" }}
      >
        {/* first Child Div with Chart */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h2>Bitcoin Price Chart</h2>
          <Chart />
        </div>

        {/* Second Child Div with some content */}
        <div
          style={{
            backgroundColor: "grey",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <Tabs />
        </div>

        {/* fourth Child Div with other content */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Another Section</h2>
          <p>This is a section with some more content.</p>
          <Insights />
        </div>

        {/* third Child Div with other content */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <About_Crypto />
        </div>

        {/* fifth Child Div with other content */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Teams/>
        </div>
      </div>

      {/* six Child Div with other content */}
      {/* <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <CryptoSection />
        </div> */}
      



    </>
  );
}

export default Home;