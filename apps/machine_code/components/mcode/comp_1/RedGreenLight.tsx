"use client";
import React, { useEffect, useRef, useState } from "react";

const lights = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];

const getZeroLightCount = (lights: any) => {
  let count = 0;
  for (let i = 0; i < lights.length; i++) {
    for (let j = 0; j < lights[i]?.length; j++) {
      const item = lights[i][j];
      if (item == 0) {
        count = count + 1;
      }
    }
  }
  return count;
};

const getKey = (rowIndex, colIndex) => {
  return `${rowIndex}-${colIndex}`;
};

const RedGreenLight = () => {
  const [lightOrder, setLightOrder] = useState(new Map());
  const count = getZeroLightCount(lights);

  console.log("count", getZeroLightCount(lights));

  const handleLight = (key: string, val: number) => {
    const isDisable = val == 1;
    if (!isDisable) {
      const lightOrderClone = new Map(lightOrder);
      lightOrderClone.set(key, true);
      setLightOrder(lightOrderClone);
    }
  };

  console.log("lightOrder", lightOrder);

  const getBackground = (key: string, val: number) => {
    const isDisable = val === 1;
    if (isDisable) {
      return "gray";
    } else {
      if (lightOrder.get(key) == true) {
        return "red";
      } else {
        return "white";
      }
    }
  };

  // const intervalRef = useRef(null); // Create a ref to store the interval ID

  // useEffect(() => {

  //   if (lightOrder.size === count) {
  //     // Clear any existing interval
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }

  //     // Set a new interval
  //     intervalRef.current = setInterval(() => {
  //       const lightOrderClone = new Map(lightOrder);
  //       const firstKey = lightOrderClone.keys().next().value;
  //       lightOrderClone.delete(firstKey);
  //       setLightOrder(lightOrderClone);
  //     }, 1000);
  //   }

  //   // Clear the interval if lightOrder.size becomes 0
  //   if (lightOrder.size === 0) {
  //     clearInterval(intervalRef.current);
  //   }

  //   // Cleanup interval when the component unmounts or lightOrder.size changes
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [lightOrder.size, count]);

  return (
    <div className="w-[240px] flex flex-wrap border">
      {lights.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <div
            key={getKey(rowIndex, colIndex)}
            style={{
              background: getBackground(getKey(rowIndex, colIndex), col),
            }}
            className="h-[80px] basis-1/3 flex items-center justify-center border border-gray-300"
            onClick={handleLight.bind(null, getKey(rowIndex, colIndex), col)}
          >
            {colIndex}
          </div>
        ))
      )}
    </div>
  );
};

export default RedGreenLight;
