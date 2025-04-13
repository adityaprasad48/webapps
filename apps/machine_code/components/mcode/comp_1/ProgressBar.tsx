"use client";

import React from "react";

const Progress = ({ value }: { value: number }) => {
  const safeValue = Math.min(100, Math.max(0, value));
  const translateXVal = -(100 - safeValue); // -100 to 0

  return (
    <div className="relative w-full overflow-hidden h-[20px] border-2 border-amber-400 rounded-xl bg-white">
      {/* Sliding fill bar */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full bg-amber-400 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${translateXVal}%)` }}
        />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
        {safeValue}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="w-full flex flex-col gap-3 p-4">
      {[10, 30, 60, 90].map((item, idx) => (
        <Progress key={idx} value={item} />
      ))}
    </div>
  );
};

export default ProgressBar;
