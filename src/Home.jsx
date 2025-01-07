import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Video from "./asset/VideoIntro.webm";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/main");
    }, 1000); // Match this duration to the animation time
  };

  return (
    <div className="m-0 p-0">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <video
          className="absolute top-0 left-0"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={Video}
          autoPlay
          loop
          muted
        />
        <div
          className={`relative z-20 text-white text-center p-4 ${
            clicked ? "slide-out" : "slide-in"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-full text-xl"
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
