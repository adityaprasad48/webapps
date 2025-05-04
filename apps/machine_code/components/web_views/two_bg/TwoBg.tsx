"use client";

import React, { useState } from "react";
import "./TwoBg.css"; // Ensure this file exists and contains the required styles

export const TwoBg = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(event.target.value));
  };

  return (
    <div className="container">
     
      <div
        className="imageContainer"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      ></div>
      <div
        className="imageContainer"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};
