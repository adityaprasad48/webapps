"use client";

import { useState, useRef } from "react";

const OTPInput = () => {
  const [createdOtp, setCreatedOtp] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let value = e.target.value;

    if (isNaN(Number(value))) {
      return;
    }
    value = value.trim();

    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
    const allFilled = otp.join("").length === otp.length;
    if (allFilled) {
      document.getElementById("otp_submit")?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const pastedData = e.clipboardData.getData("text");
    if (pastedData.length === otp.length) {
      setOtp(pastedData.split(""));
      document.getElementById(`otp-input-${otp.length - 1}`)?.focus();
    } else {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
  };

  const genrateOtp = (length: number) => {
    let result = "";
    const characters = "123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      console.log("randomChar", randomChar);
      result += randomChar;
    }
    return result;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(createdOtp).then(() => {
      console.log("OTP copied to clipboard", createdOtp);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              otpRefs.current[index] = el;
            }}
            id={`otp-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <button
        id="otp_submit"
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit OTP
      </button>

      <p className="mt-2 text-sm text-gray-500">Entered OTP: {otp.join("")}</p>

      <div className="flex justify-center items-center mt-4">
        <p className="text-2xl text-green-500">{createdOtp}</p>
        <button
          onClick={() => setCreatedOtp(genrateOtp(4))}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate OTP
        </button>
        <button
          onClick={handleCopy}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Copy OTP
        </button>
      </div>
    </form>
  );
};

export default OTPInput;
