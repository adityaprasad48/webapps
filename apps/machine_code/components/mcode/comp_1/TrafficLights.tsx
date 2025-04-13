"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Light = ({ color, isActive }) => {
  return (
    <div
      className={twMerge(
        "red size-20 rounded-full ",
        color,
        isActive ? "opacity-100" : "opacity-10"
      )}
    />
  );
};

const TrafficLights = () => {
  const [count, setCount] = useState(0);

  const data: any[] = [
    {
      name: "red",
      colorClass: "bg-red-400",
      light_sequence: 1,
      display_sequence: 1,
      timeInMs: 4 * 1000,
    },
    {
      name: "green",
      colorClass: "bg-green-400",
      light_sequence: 3,
      display_sequence: 2,
      timeInMs: 5 * 1000,
    },
    {
      name: "yellow",
      colorClass: "bg-yellow-400",
      light_sequence: 2,
      display_sequence: 3,
      timeInMs: 6 * 1000,
    },
    {
      name: "purple",
      colorClass: "bg-purple-400",
      light_sequence: 4,
      display_sequence: 4,
      timeInMs: 3 * 1000,
    },
  ];

  const sortedDisplaySeq = [...data].sort(
    (a, b) => a.display_sequence - b.display_sequence
  );
  const sortedLightSeq = [...data].sort(
    (a, b) => a.light_sequence - b.light_sequence
  );

  const [activeLight, setActiveLight] = useState(sortedLightSeq[0]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const index = sortedLightSeq.findIndex(
        (item) => item.light_sequence == activeLight.light_sequence
      );
      const nextIndex = index + 1; //error_1: this index can be more than array index
      const nextLight = sortedLightSeq[nextIndex] // handled error_1
        ? sortedLightSeq[nextIndex]
        : sortedLightSeq[0];
      setActiveLight(nextLight);
    }, activeLight?.timeInMs || 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeLight]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 border px-2 py-2">
      <h1>{activeLight.name}</h1>
      {sortedDisplaySeq.map((light: any) => (
        <Light
          key={light.name}
          isActive={activeLight.name == light.name}
          color={light.colorClass}
        />
      ))}
    </div>
  );
};

export default TrafficLights;
