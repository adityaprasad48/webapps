'use client';
import { useState } from "react";

export default function StarRating() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleStarClick = (index: number) => {
    console.log("Selected rating:", index + 1);
    setSelectedRating(index); // Store the clicked rating
  };

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="star_wrap" onMouseLeave={handleMouseLeave}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          active={index <= (hoveredIndex !== null ? hoveredIndex : selectedRating ?? -1)}
          onStarClick={() => handleStarClick(index)}
          onMouseOver={() => handleMouseOver(index)}
        />
      ))}
      <p>Selected Rating: {selectedRating !== null ? selectedRating + 1 : "0"}</p>
    </div>
  );
}

// Star Component with TypeScript Props
type StarProps = {
  active: boolean;
  onStarClick: () => void;
  onMouseOver: () => void;
};

const Star = ({ active, onStarClick, onMouseOver }: StarProps) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        background: active ? "orange" : "gray",
        margin: "5px",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={onStarClick}
      onMouseOver={onMouseOver}
    />
  );
};
