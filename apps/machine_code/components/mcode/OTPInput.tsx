"use client";

import { Copy, Newspaper } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const generateOtp = (length:number) => {
  let result = "";
  const characters = "123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomChar = characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    // console.log("randomChar", randomChar);
    result += randomChar;
  }
  return result;
};

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [createdOtp, setCreatedOtp] = useState();

  useEffect(() => {
    const generated: any = generateOtp(4);
    setCreatedOtp(generated);
  }, []);

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
            className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}
      </div>
      <button
        id="otp_submit"
        type="submit"
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>

      <p className="mt-2 text-sm text-gray-500">Entered OTP: {otp.join("")}</p>

      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setCreatedOtp(generateOtp(4))}
          className="ml-4 bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full cursor-pointer hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <Newspaper className="inline-block mr-2" />
          Generate OTP
        </button>
        <p className="text-2xl text-green-500">{createdOtp}</p>
        <button
          onClick={handleCopy}
          className="ml-4 bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full cursor-pointer hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <Copy height={25} width={30} />
        </button>
      </div>
    </form>
  );
};

export default OTPInput;
