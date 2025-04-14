"use client";
import React, { useState } from "react";

function getBoard(size: number) {
  const arr = Array.from({ length: size * size }).fill(null);
  return arr;
}

const Patterns = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row

  [0, 3, 6], // left col
  [1, 4, 7], // mid col
  [2, 5, 8], // right col

  [0, 4, 8], // diagonal

  [2, 4, 6], // other diagonal
];

const BoardSize = 3;

const TicTacToe = () => {
  const [board, setBoard] = useState(getBoard(BoardSize));

  const [player, setPlayer] = useState("X");

  function calculateWinner(board: string[]): string | null {
    for (const pattern of Patterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // "X" or "O"
      }
    }
    return null; // No winner yet
  }

  const handleBoardMove = (index: number) => {
    const winner = calculateWinner(board);
    if (board[index] || winner) return; // already filled
    if (winner) {
      console.log("winner", winner);
    }
    setBoard((prev) => {
      const copy = [...prev];
      copy[index] = player === "X" ? "X" : "O";
      return copy;
    });

    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  function getStatusMessage() {
    const winner = calculateWinner(board);
    let msg;
    if (winner) {
      msg = winner && (winner == "X" ? "X is Winner" : "O is Winner");
      return msg;
    }

    msg = `It's ${player} turn.`;

    return msg;
  }

  function resetGame() {
    setBoard(getBoard(BoardSize));
    setPlayer('X')
  }

  return (
    <div className="w-full flex flex-col items-center gap-2  border">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-center font-bold">Tic Tac Toe</h1>
        <button
          className="bg-orange-400 px-4 py-2 text-lg text-white-400 rounded"
          type="button"
          onClick={resetGame}
        >
          Reset
        </button>
        <p className="text-md text-violet-500 text-xl text-center font-semibold">
          {getStatusMessage()}
        </p>
      </div>
      <div className="w-[240px] flex flex-wrap">
        {board.map((item, index) => (
          <div
            key={index}
            className="size-[80px] bg-gray-200 border-1 text-2xl flex justify-center items-center"
            onClick={() => handleBoardMove(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
