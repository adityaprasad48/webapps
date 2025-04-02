import { useEffect, useState } from "react";

export default function ThinkGrid()  {
  
  // create a grid of 3x3 with null values
  const grid = Array.from({ length: 3 }, () => 
    Array.from({ length: 3 }, () => null)
  );
  
  console.log('grid', grid);

  const [indexPos, setIndexPos] = useState<{ row: number, col: number } | null>(null);

    // create a history of clicks
    const [history, setHistory] = useState<{ row: number, col: number }[]>([]);


  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const [row, col] = target.id.split('-').map(Number);
    console.log('row', row, 'col', col);
    setIndexPos({ row, col });
    setHistory((prev) => [...prev, { row, col }]);
    console.log('history', history);
    // set the clicked cell to the index of the click
  }

  const getBg = (row: number, col: number) => {
    if(indexPos === null) return 'white';
    if(indexPos.row === row && indexPos.col === col) {
      return 'green';
    } else {
      return 'white';
    }
  }

  const moveToPast = ([row, col]) => {
    setIndexPos({ row, col });
    // remove the clicked cell from history
    setHistory((prev) => prev.filter((item) => item.row !== row && item.col !== col));
    console.log('history', history);
  }

  console.log('indexPos', indexPos);

  // animate history on interval of 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      if(history.length == 6) {
        const { row, col } = history[0];
        setIndexPos({ row, col });
        setHistory((prev) => prev.slice(1));
      }
    }, 1000);
    return () => clearInterval(interval);    
  }
  , [history]);


  return (
   <div>
     <div className="grid-container">
      {grid.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} style={{background: getBg(rowIndex, colIndex)}} id={`${rowIndex}-${colIndex}`} onClick={handleClick} className="grid-item">
            {cell}
          </div>
        ))
      ))}
    </div>
    {/* Print history moves */}
    <div className="history">
      <h2>History</h2>
      {history.map((item, index) => (
        <div key={index}>
          {`Row: ${item.row}, Col: ${item.col}`} <button onClick={() => moveToPast([item.row, item.col])}>Move To</button>
        </div>
      ))}
   </div>
    </div>
  );
}