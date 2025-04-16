'use client'
import React, { useState } from "react";

const parts = [
  { type: "👀", label: "eyes" },
  { type: "👃", label: "nose" },
  { type: "👄", label: "mouth" },
];

const FaceBuilder = () => {
  const [face, setFace] = useState({ eyes: "", nose: "", mouth: "" });

  return (
    <div>
      <h3>Drag features onto the face</h3>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {parts.map(({ type, label }) => (
          <div
            key={label}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("part", JSON.stringify({ type, label }))}
            style={{ fontSize: 30, cursor: "grab" }}
          >
            {type}
          </div>
        ))}
      </div>

      <div
        style={{
          width: 200,
          height: 200,
          border: "2px dashed #999",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          gap: 10,
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const part = JSON.parse(e.dataTransfer.getData("part"));
          setFace((prev) => ({ ...prev, [part.label]: part.type }));
        }}
      >
        <div>{face.eyes}</div>
        <div>{face.nose}</div>
        <div>{face.mouth}</div>
      </div>
    </div>
  );
};

export default FaceBuilder;
