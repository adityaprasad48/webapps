"use client";
import React, { useState } from "react";

const colors = ["red", "green", "blue", "orange"];

const DragColorTheme = () => {
  const [bgColor, setBgColor] = useState("#fff");

  return (
    <div style={{ padding: "20px" }}>
      <p>
        Note: "onDragOver=(e) => e.preventDefault()" 🔥 It enables dropping an
        item into a target element.
        By default, most DOM elements do not allow drops. The browser's default behavior blocks dropping unless you explicitly say:
        Without e.preventDefault(), the onDrop handler will NEVER fire.
      </p>
      <h3>Drag a color to the box</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color) => (
          <div
            key={color}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("color", color)}
            style={{
              width: 40,
              height: 40,
              backgroundColor: color,
              borderRadius: "50%",
              cursor: "grab",
            }}
          />
        ))}
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const color = e.dataTransfer.getData("color");
          setBgColor(color);
        }}
        style={{
          marginTop: 20,
          width: 200,
          height: 200,
          backgroundColor: bgColor,
          border: "2px dashed #aaa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Drop here
      </div>
    </div>
  );
};

export default DragColorTheme;
