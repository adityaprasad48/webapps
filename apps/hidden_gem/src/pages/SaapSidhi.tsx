import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function SaapSidhi() {
  const boxSize = 60;
  const startLeft = boxSize / 2;
  const startTop = boxSize / 2;

  const [redGotiPos, setRedGotiPos] = useState(0);
  const [redGotiTop, setRedGotiTop] = useState(startTop);
  const [redGotiLeft, setRedGotiLeft] = useState(startLeft);

  useEffect(() => {
    if (redGotiPos >= 0 && redGotiPos <= 99) {
      const row = Math.floor(redGotiPos / 10);
      const col = redGotiPos % 10;
      setRedGotiTop(row * boxSize + startTop);
      setRedGotiLeft(col * boxSize + startLeft);
    } else {
      setRedGotiTop(startTop);
      setRedGotiLeft(startLeft);
    }
  }, [redGotiPos]);

  const snakes = [
    { start: 16, end: 6, bg: "bg-red-500", head: "#", tail: "%" },
    { start: 47, end: 26, bg: "bg-orange-500", head: "#", tail: "%" },
    { start: 49, end: 11, bg: "bg-gray-500", head: "#", tail: "%" },
    { start: 56, end: 53, bg: "bg-green-500", head: "#", tail: "%" },
    { start: 62, end: 19, bg: "bg-purple-500", head: "#", tail: "%" },
    { start: 64, end: 60, bg: "bg-pink-500", head: "#", tail: "%" },
    { start: 87, end: 24, bg: "bg-stone-500", head: "#", tail: "%" },
  ];

  const ladders = [
    { start: 1, end: 38 },
    { start: 4, end: 14 },
    { start: 9, end: 31 },
    { start: 21, end: 42 },
    { start: 28, end: 84 },
    { start: 36, end: 44 },
    { start: 51, end: 67 },
  ];

  const getBoxTypeCls = () => {
    if (redGotiPos === 0) {
      return "red-goti";
    } else if (redGotiPos === 99) {
      return "green-goti";
    } else {
      return "blue-goti";
    }
  };

  // when click on RotateCcw icon it should rotate for 1 second and set the redGotiPos to 0
  const [isRotating, setIsRotating] = useState(false);
  const [diceVal, setDiceVal] = useState(0);

  const [diceDisable, setDiceDisable] = useState(false);

  const handleDiceClick = () => {
    if (diceDisable) {
      return;
    }
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setDiceDisable(true);
      const diceNum = Math.floor(Math.random() * 6) + 1;
      setDiceVal(diceNum);
      let steps = diceNum;
      const interval = setInterval(() => {
        setRedGotiPos((prev) => {
          if (prev + 1 > 99) {
            return 99;
          } else {
            return prev + 1;
          }
        });
        steps--;
        if (steps <= 0) {
          clearInterval(interval);
          if (diceNum === 6) {
            alert("You got another chance to roll the dice");
          }
          // disable the dice click while moving the red goti
          setDiceDisable(false);
        }
      }, 500);
    }, 1000);
  };
  // when click on dice_num it should rotate for 1 second and set the redGotiPos to 0

  return (
    <div>
      <div className="dice_wrapper w-[400px] h-[200px] flex justify-center items-center gap-4">
        <div
          onClick={handleDiceClick}
          className={`dice  size-40 text-8xl bg-green-300 text-white flex justify-center items-center cursor-pointer ${
            diceDisable ? "cursor-not-allowed bg-red-300" : ""
          }`}
        >
          <RotateCcw
            className={isRotating ? "spin" : ""}
            width={80}
            height={80}
          />
        </div>
        <div className="dice_num border border-1 size-40 text-8xl bg-green-300 text-white flex justify-center items-center cursor-pointer">
          <span className="dice_num_val">{diceVal ? diceVal : "?"}</span>
        </div>
      </div>
      <div className="grid_wrap">
        <div className="grid">
          {Array(100)
            .fill(0)
            .map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`grid-cell ${
                  Math.floor(cellIndex / 10) % 2 === 0
                    ? cellIndex % 2 === 0
                      ? "bg-yellow-400"
                      : "bg-green-400"
                    : cellIndex % 2 === 0
                      ? "bg-green-400"
                      : "bg-yellow-400"
                }`}
                data-pos={cellIndex}
              >
                <span>{cellIndex}</span>
                {snakes.map((snake) => {
                  if (cellIndex === snake.start) {
                    return (
                      <div key={snake.start} className={`snake ${snake.bg}`}>
                        {snake.head}
                      </div>
                    );
                  }
                  if (cellIndex === snake.end) {
                    return (
                      <div key={snake.end} className={`snake ${snake.bg}`}>
                        {snake.tail}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          <div
            className={`red_goti ${getBoxTypeCls()}`}
            style={{ top: redGotiTop, left: redGotiLeft }}
          ></div>
        </div>
        <div style={{top: '30px', left: (360 + 30) + 'px', opacity: 0.6, }} className={`absolute dummy-snake h-[100px] w-[20px] bg-red-600`}></div>

      </div>
    </div>
  );
}
