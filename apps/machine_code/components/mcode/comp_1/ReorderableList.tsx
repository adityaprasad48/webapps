"use client";
import React, { useState } from "react";

const ReorderableList = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Mango"]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => setDragIndex(index);

  // norma
  const handleDrop = (dropIndex) => {
    const copy = [...items];
    const draggedItem = copy.splice(dragIndex, 1)[0];
    copy.splice(dropIndex, 0, draggedItem);
    setItems(copy);
    setDragIndex(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px",
            margin: "4px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ReorderableList;
