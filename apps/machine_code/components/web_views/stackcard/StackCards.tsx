"use client";

import { useState } from "react";

const overlapMargin = -90;
const overlapMarginHover = -70;
const noOverlapMargin = 10;

const StackCards = () => {
  const [expandedCard, setExpandedCard] = useState(-1);
  const [mTop, setMTop] = useState(overlapMargin);

  const cards = Array.from({ length: 5 });

  const cardHeight = "100px";

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCard(index);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-pink-100 w-full">
      <div className="flex flex-col items-center p-10 border-dashed border-2 border-pink-200">
        {cards.map((_, index) => (
          <div
            tabIndex={0}
            key={index}
            id={`card-${index}`}
            role="button"
            aria-label={`Card ${index + 1}`}
            className={`relative w-100 h-[${cardHeight}] bg-pink-50  border-b-4 border-pink-300 rounded select-none  transition-all duration-500 ease-in-out`}
            style={{
              marginTop:
                index === 0 ? 0 : expandedCard === -1 ? mTop : noOverlapMargin,
              zIndex: expandedCard === index ? 100 : cards.length - index,
            }}
            onClick={handleCardClick.bind(null, index)}
            onBlur={() => setExpandedCard(-1)}
            onMouseEnter={() => setMTop(overlapMarginHover)}
            onMouseLeave={() => setMTop(overlapMargin)}
          >
            <div className="relative flex flex-col p-2 h-full">
              <p className="text-md font-semibold text-pink-900">
                Universe is calling.
              </p>
              <p className="text-sm text-pink-600">This is a new message.</p>
              <button className="absolute right-2 top-2 bg-pink-500 text-white px-2 py-1 text-sm letter-spacing-1">
                Potential
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCards;
