"use client";

import React, { useState } from "react";

type TextBlock = {
  id: number;
  content: string;
  fontSize: number;
  isEditing: boolean;
};

const initialBlocks: TextBlock[] = [
  { id: 1, content: "Ready to deploy?", fontSize: 18, isEditing: false },
  {
    id: 2,
    content: "Start Building with free account.",
    fontSize: 18,
    isEditing: false,
  },
  {
    id: 3,
    content: "Speak to an expert for your Pro or Enterprise needs",
    fontSize: 18,
    isEditing: false,
  },
];

const GoodText = () => {
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>(initialBlocks);

  const handleFontSizeChange = (id: number, size: number) => {
    setTextBlocks((blocks) =>
      blocks.map((block) =>
        block.id === id ? { ...block, fontSize: size } : block
      )
    );
  };

  const toggleEdit = (id: number) => {
    setTextBlocks((blocks) =>
      blocks.map((block) =>
        block.id === id ? { ...block, isEditing: !block.isEditing } : block
      )
    );
  };

  const handleTextChange = (id: number, value: string) => {
    setTextBlocks((blocks) =>
      blocks.map((block) =>
        block.id === id ? { ...block, content: value } : block
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
      <h2 className="text-xl font-bold">Editable & Resizable Text Blocks</h2>

      {textBlocks.map((block) => (
        <div
          key={block.id}
          className="border p-4 rounded w-full max-w-xl bg-white shadow space-y-2"
        >
          /* Editable/Display */
          {block.isEditing ? (
            <textarea
              value={block.content}
              onChange={(e) => handleTextChange(block.id, e.target.value)}
              className="w-full p-2 border rounded text-gray-800"
              style={{ fontSize: `${block.fontSize}px` }}
              rows={2}
              onBlur={() => toggleEdit(block.id)}
            />
          ) : (
            <p
              className="cursor-pointer selectable-text"
              style={{ fontSize: `${block.fontSize}px` }}
              onClick={() => toggleEdit(block.id)}
            >
              {block.content}
            </p>
          )}
          {/* Font Size Slider */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Font size:
            </label>
            <input
              type="range"
              min="14"
              max="40"
              value={block.fontSize}
              onChange={(e) =>
                handleFontSizeChange(block.id, parseInt(e.target.value, 10))
              }
            />
            <span className="text-gray-500">{block.fontSize}px</span>
          </div>
        </div>
      ))}

      {/* Text Selection Styling */}
      <style jsx>{`
        .selectable-text::selection {
          background-color: #facc15;
          color: #1f2937;
        }
        .selectable-text::-moz-selection {
          background-color: #facc15;
          color: #1f2937;
        }
      `}</style>
    </div>
  );
};

export default GoodText;
