import React from "react";

const RedGreenLight = () => {
  const lights = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ];
  return (
    <div className="flex flex-wrap gap-2 w-[156px]">
      {lights.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{ background: col === 0 ? "white" : "gray" }}
            className="h-[50px] w-[50px] flex items-center justify-center border border-gray-300"
          >
            {colIndex}
          </div>
        ))
      )}
    </div>
  );
};

export default RedGreenLight;
