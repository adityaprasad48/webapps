"use client";
import React, { useEffect, useRef, useState } from "react";

const lights = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 1],
];

const getKey = (rowIndex, colIndex) => {
  return `${rowIndex}-${colIndex}`;
};

const RedGreenLight = () => {
  const [lightOrder, setLightOrder] = useState(new Map());
  const lightCount = lights.flat().reduce((item, acc) => acc + item, 0);

  console.log("count", lightCount);

  const handleLight = (key: string, val: number) => {
    const isDisable = val == 0;
    if (!isDisable) {
      const lightOrderClone = new Map(lightOrder);
      lightOrderClone.set(key, true);
      setLightOrder(lightOrderClone);
    }
  };

  console.log("lightOrder", lightOrder);

  const getBackground = (key: string, val: number) => {
    const isDisable = val === 0;
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

  function resetLightOrder() {
    const intervalId = setInterval(() => {
      if (lightOrder.size == 0) {
        clearInterval(intervalId);
      }

      //* did not work
      //* It uses stale state. If React batches state updates (like in concurrent mode), lightOrder might not be the most recent value.
      //* It can lead to race conditions if multiple state updates are queued.
      // const newLightOrder = new Map(lightOrder);
      // const lastKey = Array.from(newLightOrder.keys()).pop();
      // newLightOrder.delete(lastKey);
      // setLightOrder(newLightOrder)

      // prefer this if multiple state update is queue
      setLightOrder((preLightOrder) => {
        const newLightOrder = new Map(preLightOrder);
        const lastKey = Array.from(newLightOrder.keys()).pop();
        newLightOrder.delete(lastKey);
        return newLightOrder;
      });
    }, 1000);
  }

  useEffect(() => {
    if (lightOrder.size == lightCount) {
      resetLightOrder();
    }
  }, [lightOrder.size]);

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
          ></div>
        ))
      )}
    </div>
  );
};

export default RedGreenLight;
