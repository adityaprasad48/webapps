"use client";

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";  // Add html2canvas for rendering the editor to an image

type Element = {
  id: string;
  type: "text" | "image";
  content: string; // For text, it's the string; for image, it's the URL
  x: number;
  y: number;
  rotation: number;
  fontSize?: number;
  fontColor?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontFamily?: string;
};

const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];

export default function TextImageEditor() {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [editingId, setEditingId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const addText = () => {
    const newText: Element = {
      id: `${Date.now()}`,
      type: "text",
      content: "New Text",
      x: 100,
      y: 100,
      rotation: 0,
      fontSize: 24,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "Arial",
    };
    setElements([...elements, newText]);
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    const newImage: Element = {
      id: `${Date.now()}`,
      type: "image",
      content: imageUrl,
      x: 150,
      y: 150,
      rotation: 0,
    };
    setElements([...elements, newImage]);
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    const el = elements.find(el => el.id === id);
    if (!el) return;
    setDraggingId(id);
    setSelectedId(id);
    setOffset({ x: e.clientX - el.x, y: e.clientY - el.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingId) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    setElements(prev =>
      prev.map(el => (el.id === draggingId ? { ...el, x: newX, y: newY } : el))
    );
  };

  const handleMouseUp = () => setDraggingId(null);

  const updateStyle = (style: Partial<Element>) => {
    if (!selectedId) return;
    setElements(prev =>
      prev.map(el => (el.id === selectedId ? { ...el, ...style } : el))
    );
  };

  const selected = elements.find(el => el.id === selectedId);

  const handleDoubleClick = (id: string) => {
    const el = elements.find(e => e.id === id);
    if (el?.type === "text") {
      setEditingId(id);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElements(prev =>
      prev.map(el =>
        el.id === editingId ? { ...el, content: e.target.value } : el
      )
    );
  };

  const handleBlur = () => setEditingId(null);

  // Function to convert the editor to an image
  const handleConvertToImage = () => {
    if (!editorRef.current) return;

    html2canvas(editorRef.current).then((canvas) => {
      const imgUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgUrl;
      link.download = "editor-image.png";
      link.click();
    });
  };

  return (
    <div className="relative h-screen bg-gray-100" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={editorRef}>
      <div className="p-4 flex gap-4">
        <button onClick={addText} className="bg-blue-500 text-white px-4 py-2 rounded">
          ➕ Add Text
        </button>
        <label className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded">
          📷 Add Image
          <input type="file" accept="image/*" onChange={addImage} className="hidden" />
        </label>
        <button
          onClick={handleConvertToImage}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          🖼️ Convert to Image
        </button>
      </div>

      {elements.map(el => (
        <div
          key={el.id}
          onMouseDown={e => handleMouseDown(e, el.id)}
          onDoubleClick={() => handleDoubleClick(el.id)}
          className={`absolute select-none ${selectedId === el.id ? "ring-2 ring-blue-400" : ""}`}
          style={{
            left: el.x,
            top: el.y,
            transform: `rotate(${el.rotation}deg)`,
            fontSize: el.fontSize,
            color: el.fontColor,
            fontWeight: el.fontWeight,
            fontStyle: el.fontStyle,
            fontFamily: el.fontFamily,
          }}
        >
          {editingId === el.id ? (
            <input
              ref={inputRef}
              value={el.content}
              onChange={handleTextChange}
              onBlur={handleBlur}
              className="border px-1"
            />
          ) : el.type === "text" ? (
            el.content
          ) : (
            <img src={el.content} alt="uploaded" className="w-32 h-auto" />
          )}
        </div>
      ))}

      {selected && selected.type === "text" && (
        <div
          className="absolute z-50 bg-white shadow-md rounded px-4 py-2 flex flex-wrap gap-2 items-center"
          style={{ left: selected.x, top: selected.y - 60 }}
        >
          <button onClick={() => updateStyle({ fontWeight: selected.fontWeight === "bold" ? "normal" : "bold" })}>
            B
          </button>
          <button onClick={() => updateStyle({ fontStyle: selected.fontStyle === "italic" ? "normal" : "italic" })}>
            I
          </button>
          <input type="color" value={selected.fontColor} onChange={e => updateStyle({ fontColor: e.target.value })} />
          <input
            type="number"
            value={selected.fontSize}
            onChange={e => updateStyle({ fontSize: +e.target.value })}
            className="w-16"
          />
          <select
            value={selected.fontFamily}
            onChange={e => updateStyle({ fontFamily: e.target.value })}
          >
            {fonts.map(f => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <input
            type="range"
            min={-180}
            max={180}
            value={selected.rotation}
            onChange={e => updateStyle({ rotation: +e.target.value })}
          />
        </div>
      )}
    </div>
  );
}
