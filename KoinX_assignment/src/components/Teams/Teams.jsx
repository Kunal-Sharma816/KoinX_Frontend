import React from "react";
import PersonIntroCard from "../Cards/PersonIntroCard";

function Teams() {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Teams</h2>
        <p className="text-black mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident dicta nam excepturi dolor sunt quae tenetur blanditiis beatae fugit.
        </p>
      </div>

      <div className="white shadow-lg rounded-lg p-6 mb-6 space-y-6">
        {/* Person Cards */}
        <PersonIntroCard
          imageSrc="https://tse1.mm.bing.net/th?id=OIP.mkA8HAQ8-Z2C5AIyFMpJ1wEsEs&pid=Api&P=0&h=180"
          name="John Smith"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit, Numquam obcaecati ullam quis doloribus praesentium perspiciatis veniam maxime ex inventore eos."
        />
        <PersonIntroCard
          imageSrc="https://tse4.mm.bing.net/th?id=OIP.XQViCA_5pWO5m0GpgKOF4wHaHa&pid=Api&P=0&h=180"
          name="Elina Williams"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati ullam quis doloribus praesentium perspiciatis veniam maxime ex inventore eos."
        />
        <PersonIntroCard
          imageSrc="https://tse2.mm.bing.net/th?id=OIP.FBGLi77e5GKIhHM2p_AAwQAAAA&pid=Api&P=0&h=180"
          name="John Smith"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati ullam quis doloribus praesentium perspiciatis veniam maxime ex inventore eos."
        />
      </div>
    </div>
  );
}

export default Teams;
