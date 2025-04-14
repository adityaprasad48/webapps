"use client";
import React, { useState } from "react";

const InventoryGrid = () => {
  const [slots, setSlots] = useState([null, null, null, null]);
  const items = ["🧪", "🗡️", "🛡️"];

  const handleDrop = (index, item) => {
    setSlots((prev) => {
      if (prev[index]) return prev; // prevent overwrite
      const updated = [...prev];
      updated[index] = item;
      return updated;
    });
  };

  return (
    <div>
      <h3>Drag items into the grid</h3>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {items.map((item) => (
          <div
            key={item}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("item", item)}
            style={{ fontSize: 30, cursor: "grab" }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        {slots.map((slot, i) => (
          <div
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const item = e.dataTransfer.getData("item");
              handleDrop(i, item);
            }}
            style={{
              width: 60,
              height: 60,
              border: "2px dashed #aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              backgroundColor: "#f8f8f8",
            }}
          >
            {slot || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryGrid;
