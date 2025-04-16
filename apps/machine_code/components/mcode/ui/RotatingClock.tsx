'use client'

// components/RotatingClock.js
import React from 'react';

export default function RotatingClock() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-40 h-40 border-4 border-gray-300 rounded-full">
        {/* Clock center dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* Rotating hand */}
        <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-red-500 origin-bottom animate-spin-slow transform -translate-x-1/2 -translate-y-full" />
      </div>
    </div>
  );
}
