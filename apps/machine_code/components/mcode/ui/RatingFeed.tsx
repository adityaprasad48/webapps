"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const RatingFeed = () => {
  let CustomerID = "67ff36298f13e8748dadbc22";
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [customerId, setCustomerId] = useState(CustomerID);

  const handleSend = async () => {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, message, rating }),
    });

    if (response.ok) {
      // Handle success
      console.log("Feedback submitted successfully", await response.json());
    } else {
      // Handle error
      console.error("Error submitting feedback");
    }
  };

  return (
    <div
      className={twMerge(
        "sticky top-[100px] right-[200px] w-[300px] rounded-md border-1 border-gray-200 bg-white pt-5 transition-all duration-300",
        rating > 0 ? "h-[300px]" : "h-[85px]"
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col items-center px-2 space-y-2">
          <p>Learned something?</p>
          <div className="flex flex-row space-x-2">
            {[1, 2, 3, 4, 5].reverse().map((value) => (
              <span
              key={value}
              onClick={() => setRating(rating === value ? 0 : value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                setRating(rating === value ? 0 : value);
                }
              }}
              aria-label={`Rate ${value} out of 5`}
              className={twMerge(
                "px-2 rounded-md text-steal-700 bg-gray-200 border border-gray-400 cursor-pointer select-none",
                rating == value &&
                `bg-${["red", "orange", "green", "blue", "purple"][value - 1]}-200 border border-${["red", "orange", "green", "blue", "purple"][value - 1]}-400`
              )}
              >
              {value}
              </span>
            ))}
            {/* <div
              onClick={() => setRating(0)}
              className="fixed inset-0 z-0"
              role="presentation"
            ></div> */}
          </div>
        </div>
        {
          <div className="flex flex-col space-y-2 transition-opacity duration-300 opacity-100">
            <div className="px-2">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="border px-12 py-10 w-full rounded-md"
                placeholder="Write your feedback here"
                name="feedback_message"
                id="feedback_message"
              ></textarea>
            </div>
            <div className="flex flex-row justify-end bg-gray-100 border-t border-gray-300 p-2">
              <button
                onClick={handleSend}
                className="bg-gray-800 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700"
              >
                Send
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default RatingFeed;
