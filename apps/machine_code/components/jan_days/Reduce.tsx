import { CopyIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const getRandomArrayString = () => {
  const randomArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
  );
  return JSON.stringify(randomArray);
};

const Reduce = () => {
  const reduces = [
    {
      question: "Sum of Array Element",
      actual_ans: "take this obj array apply sum logic return answer here",
      func: "implementation function .toString()",
      your_answer: [1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, 0),
    },
    {
      question: "Product of Array Element",
      actual_ans: "take this obj array apply sum logic return answer here",
      func: "implementation function .toString()",
      your_answer: [1, 2, 3, 4, 5].reduce((acc, cur) => acc * cur, 0),
    },
  ];

  const [accordianIndex, setAccordianIndex] = useState(-1);

  const [newArr, setNewArr] = useState(getRandomArrayString());

  const handleToggle = (index: number) => {
    setAccordianIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleCopyArray = () => {
    navigator.clipboard.writeText(newArr);
  };

  return (
    <div className="w-full  bg-amber-50 p-4">
      <span className="text-4xl font-bold text-amber-800 bg-amber-200 transform rotate-45">
        Jan 28
      </span>
      <h2 className="bg-amber-300 text-2xl text-amber-800 px-8 py-4">
        Master Reduce Function
      </h2>
      <ul className="bg-amber-100">
        {reduces.map((reduce, index) => (
          <li key={index}>
            <div className="flex justify-between items-center px-2 py-2">
              <h3 className="text-amber-900 text-xl">{reduce.question}</h3>
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="text-amber-800 text-2xl font-bold size-10 border-1 flex items-center justify-center cursor-pointer"
              >
                +
              </button>
            </div>
            {accordianIndex == index && (
              <div className="border-t-1 border-amber-800">
                <div className="flex justify-between text-amber-800 text-lg font-bold px-4 py-2">
                  <span>{newArr}</span>
                  <span onClick={handleCopyArray} className="cursor-pointer">
                    <CopyIcon />
                  </span>{" "}
                </div>
                <p className="text-amber-800 text-lg font-bold px-4 py-2">
                  Actual Answer
                </p>
                <code className="text-amber-800 text-lg font-bold px-4 py-2">
                  {JSON.stringify(reduce?.your_answer.toString(), null, 2)}
                </code>
              </div>
            )}
          </li>
        ))}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Reduce;
