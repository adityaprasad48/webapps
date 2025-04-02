/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useCallback, useRef } from "react";

const redShades = Array.from({ length: 10 }, (_, index) => {
  const shade = Math.min((index + 1) * 100, 900);
  return `bg-red-${shade}`;
});

export default function Time() {
  const [sec, setSec] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const [newSec, setNewSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
      setNewSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sec]);

  useEffect(() => {
    if (sec % 60 === 0 && sec !== 0) {
      setMinute((prev) => prev + 1);
      setSec(0);
    }
  }, [sec]);

  useEffect(() => {
    if (minute % 60 === 0 && minute !== 0) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
  }, [minute]);

  const hours_new = Math.floor(newSec / 3600);
  const minutes_new = Math.floor((newSec % 3600) / 60);
  const seconds_new = newSec % 60;

  const getPaddedNum = (num) => String(num).padStart(2, "0");

  
  // for tailwind
  let a = 'bg-red-100 bg-red-200 bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-red-700 bg-red-800 bg-red-900';
  console.log(a)


  return (
    <div className="flex items-center justify-center">
      <div className="relative my-10 bg-gray-200 flex flex-wrap w-[600px] h-[600px] justify-center">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`size-[200px]`}
            style={{
              filter: `blur(${(index + 1) * 2}px)`,
            }}
          ></div>
        ))}
        <img
          src={`https://picsum.photos/600`}
          className="absolute w-full h-full object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
}
