'use client';
import React, { useState } from "react";
import "./RangeSlider.css"; // we'll style it separately

export default function RangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="value-display">{value}</div>
    </div>
  );
}