import React from "react";
import ProfitCard from "../Cards/ProfitCard"; // Assuming ProfitCard is in the same directory

function About_Crypto() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About Bitcoin</h1>
        <p className="text-gray-600 text-lg">
          Dive into the world of cryptocurrency and learn more about Bitcoin.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Bitcoin?</h2>
        <p className="text-gray-600 leading-relaxed">
          Bitcoin is a decentralized digital currency, often referred to as a cryptocurrency.
          It operates without the need for a central authority like a government or bank and is
          instead powered by a peer-to-peer network. Here’s a detailed breakdown of Bitcoin.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lorem Ipsum Dolor Sit Amet</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni, ipsa tempore,
          adipisci nostrum hic cumque corporis vero, doloremque delectus blanditiis est non ipsam
          sed explicabo dignissimos. Nostrum, libero. Dignissimos consectetur ex rerum autem consequuntur
          id quae dolorem. Natus modi ipsam laboriosam eius amet alias ea explicabo, cum repellat blanditiis
          temporibus autem, fugit deserunt consequuntur reprehenderit, assumenda recusandae porro molestiae
          impedit placeat pariatur similique eaque.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Already Holding Crypto?
        </h3>
        <div className="space-y-6">
          <ProfitCard
            imageSrc="https://tse1.mm.bing.net/th?id=OIP.kh3Iqccu86_YUVeC-wb4zgHaEc&pid=Api&P=0&h=180"
            titleText="Calculate your Profits"
            buttonText="Check Now"
          />
          <ProfitCard
            imageSrc="https://tse2.mm.bing.net/th?id=OIP.oloHt-Wuc8YdcryNZa9RcQHaE8&pid=Api&P=0&h=180"
            titleText="Calculate your Tax Liability"
            buttonText="Check Now"
          />
        </div>
      </div>
    </div>
  );
}

export default About_Crypto;
