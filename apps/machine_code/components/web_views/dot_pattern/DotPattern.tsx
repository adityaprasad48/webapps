"use client";
import React, { useState } from "react";
import "./DotPattern.css";
import { twMerge } from "tailwind-merge";

export default function DotPattern() {
  const getKey = (rowIndex: number, colIndex: number) => {
    return `${rowIndex}-${colIndex}`;
  };

  const [clickedIndexes, setClickIndexes] = useState<string[]>([]);
  const [patterns, setPatterns] = useState<any[]>([]);

  const savePattern = () => {
    setPatterns((prev) => [...prev, clickedIndexes]);
    resetPattern();
  };

  const resetPattern = () => {
    setClickIndexes([]);
  };

  const handleClick = (key: string) => {
    if (clickedIndexes.includes(key)) {
      setClickIndexes((prev) => prev.filter((item) => item != key));
    } else {
      setClickIndexes((prev) => [...prev, key]);
    }
  };

  const handleTabPattern = (index: number) => {
    setClickIndexes(patterns[index]);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className="w-[230px] grid grid-cols-7 gap-1 border bg-black p-2">
          {Array.from({ length: 7 }).map((_, rIndex) =>
            Array.from({ length: 9 }).map((_, cIndex) => {
              const key = getKey(rIndex, cIndex);
              const handleMouseEnter = () => {
                if (!clickedIndexes.includes(key)) {
                  setClickIndexes((prev) => [...prev, key]);
                }
              };
              return (
                <div
                  onClick={() => handleClick(key)}
                  onMouseEnter={handleMouseEnter}
                  key={key}
                  className={twMerge(
                    "rounded-full w-6 h-6 transition-colors",
                    clickedIndexes.includes(key)
                      ? "bg-green-700"
                      : "bg-gray-600",
                    "hover:bg-green-500"
                  )}
                />
              );
            })
          )}
        </div>
        <div>
          <button
            className="bg-amber-400 px-4 py-2 mt-2 rounded text-gray-700"
            onClick={savePattern}
          >
            Save Pattern
          </button>
          <button
            className="bg-red-400 px-4 py-2 mt-2 ml-2 rounded text-gray-800"
            onClick={resetPattern}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="border-dashed border-2 min-w-[300px]">
        {patterns.map((p, pIndex) => (
          <div
            className={twMerge(
              "px-4 py-2 border-b-2 border-b-amber-300 focus:outline-none",
              clickedIndexes === patterns[pIndex] ? "bg-amber-300" : ""
            )}
            key={pIndex}
            tabIndex={0}
            onClick={handleTabPattern.bind(null, pIndex)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp" && pIndex > 0) {
                handleTabPattern(pIndex - 1);
                e.currentTarget.previousSibling?.focus();
              } else if (
                e.key === "ArrowDown" &&
                pIndex < patterns.length - 1
              ) {
                handleTabPattern(pIndex + 1);
                e.currentTarget.nextSibling?.focus();
              }
            }}
          >
            Pattern {pIndex}
          </div>
        ))}
      </div>
    </div>
  );
}
