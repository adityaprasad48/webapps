import { use, useEffect, useState } from "react";

export default function SaapSidhi() {

  const boxSize = 60;
  const startLeft = boxSize / 2;
  const startTop = boxSize / 2;

  const ten_cross_ten = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
  
  const [redGotiPos, setRedGotiPos] = useState(0);
  const [redGotiTop, setRedGotiTop] = useState(startTop);
  const [redGotiLeft, setRedGotiLeft] = useState(startLeft);

 useEffect(() => {
  // set the top and left position of the red goti
  // 10 cross 10 grid, each cell is 80px
  // if redGotiPos is 0, set top and left to 0
  // if redGotiPos is 10, set top to 0 and left to 80
  // if redGotiPos is 20, set top to 0 and left to 160
  // if redGotiPos is 30, set top to 80 and left to 0

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
  { start: 16, end: 6 },
  { start: 47, end: 26 },
  { start: 49, end: 11 },
  { start: 56, end: 53 },
  { start: 62, end: 19 },
  { start: 64, end: 60 },
  { start: 87, end: 24 },
 ]

  const ladders = [
    { start: 1, end: 38 },
    { start: 4, end: 14 },
    { start: 9, end: 31 },
    { start: 21, end: 42 },
    { start: 28, end: 84 },
    { start: 36, end: 44 },
    { start: 51, end: 67 },
  ]

  const getBoxTypeCls = () => {
    if(redGotiPos === 0) {
      return 'red-goti';
    } else if(redGotiPos === 99) {
      return 'green-goti';
    } else {
      return 'blue-goti';
    }
  }
 

  const handleCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const pos = parseInt(target.dataset.pos || "0");
      setRedGotiPos((prev) => {
        if(prev === 99) {
          return 0;
        } else {
          return prev + 1;
        }
      });
      console.log('boxPos', pos);
  }


  return <div>
    <h1>Saap Sidhi</h1>
    <div className="grid">
      {ten_cross_ten.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="grid-cell" data-pos={`${rowIndex * 10 + cellIndex}`} onClick={handleCellClick}>
              {cell}
            </div>
          ))}
        </div>
      ))}
      <div className={`red_goti ${getBoxTypeCls()}`} style={{top: redGotiTop, left: redGotiLeft}}></div>
    </div>
   
  </div>


}