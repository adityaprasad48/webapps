"use client";
import React, { useState, useEffect } from "react";

type Circle = {
  id: number;
  x: number;
  y: number;
};

const boxSize = 500;
const circleSize = 50;

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * (boxSize - circleSize));
  const y = Math.floor(Math.random() * (boxSize - circleSize));
  return { x, y };
};

const DraggableCircles = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addCircle = () => {
    const { x, y } = getRandomPosition();
    setCircles((prev) => [
      ...prev,
      {
        id: Date.now(),
        x,
        y,
      },
    ]);
  };

  // when you start dragging or you press mouse click
  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggingIndex(index);
    console.log("mouse down");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    console.log("move");
    if (draggingIndex === null) return;

    const containerRect = document
      .getElementById("drag-box")
      ?.getBoundingClientRect();
    if (!containerRect) return;

    console.log("offsetX", offset.x, "offsetY", offset.y);

    const newX = e.clientX - containerRect.left - offset.x;
    const newY = e.clientY - containerRect.top - offset.y;

    console.log("newX", newX, "newY", newY);

    // const boundedX = Math.max(0, Math.min(newX, boxSize - circleSize));
    // const boundedY = Math.max(0, Math.min(newY, boxSize - circleSize));

    let boundedX = newX,
      boundedY = newY;

    if (newX < 0) {
      boundedX = 0;
    } else if (newX > boxSize - circleSize) {
      boundedX = boxSize - circleSize;
    }

    if (newY < 0) {
      boundedY = 0;
    } else if (newY > boxSize - circleSize) {
      boundedY = boxSize - circleSize;
    }

    console.log("boundX", boundedX, "boundedY", boundedY);

    setCircles((prev) =>
      prev.map((circle, i) =>
        i === draggingIndex ? { ...circle, x: boundedX, y: boundedY } : circle
      )
    );
  };

  const handleMouseUp = () => {
    console.log("mouse up");
    setDraggingIndex(null);
  };

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("circles", JSON.stringify(circles));
    }
  }, [circles]);

  // Load once
  useEffect(() => {
    const stored = localStorage.getItem("circles");
    try {
      const parsed = stored ? JSON.parse(stored) : [];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setCircles(parsed);
      }
    } catch (err) {
      console.error("Failed to parse stored circles:", err);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingIndex, offset]);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={addCircle} style={{ marginBottom: "10px" }}>
        ➕ Add Circle
      </button>
      <div
        id="drag-box"
        style={{
          width: boxSize,
          height: boxSize,
          border: "2px solid #ccc",
          position: "relative",
          margin: "0 auto",
          userSelect: "none",
        }}
      >
        {circles.map((circle, index) => (
          <div
            key={circle.id}
            onMouseDown={(e) => handleMouseDown(e, index)}
            style={{
              width: circleSize,
              height: circleSize,
              borderRadius: "50%",
              background: "skyblue",
              position: "absolute",
              left: circle.x,
              top: circle.y,
              cursor: "grab",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableCircles;
