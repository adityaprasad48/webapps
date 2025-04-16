'use client'
import React, { useState } from "react";


const DragToFolder = () => {
  const [folderContent, setFolderContent] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <div
        draggable
        onDragStart={(e) => e.dataTransfer.setData("file", "📄 Report.pdf")}
        style={{ fontSize: 24, marginBottom: 20, cursor: "grab" }}
      >
        📄 Report.pdf
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const file = e.dataTransfer.getData("file");
          if (file) setFolderContent((prev) => [...prev, file]);
        }}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#eee",
          border: "2px solid #666",
          borderRadius: 8,
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        📁 Folder
        <div style={{ marginTop: 10, fontSize: 14 }}>
          {folderContent.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragToFolder;
