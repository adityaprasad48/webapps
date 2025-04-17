"use client";
import { CrosshairIcon, CrossIcon, HammerIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // on scroll => bg-white

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-auto desktop-s:bg-white transition-colors duration-200 bg-transparent h-[64px] flex items-center px-4 mb-2 py-2 border-b border-gray-200 bg-white">
      <div>
        <Link href="/" className="text-4xl font-bold text-orange-400">
          A
        </Link>
      </div>
      <div className="hidden md:block">
        <div className="w-full flex space-y-2 ml-4">
          <span>
            <Link href="/1">Page 1</Link>
          </span>
          <span>
            <Link href="/2">Page 2</Link>
          </span>
          <span>
            <Link href="/3">Page 3</Link>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg  text-sm">
          Sign Up
        </button>
        <button className="bg-gray-200 text-steal-400 px-4 py-2 rounded-lg text-sm">
          Login
        </button>
        <button
          className="group font-base font-semibold inline-block pointer desktop-s:hidden"
          onClick={isOpen ? handleClose : handleOpen}
          rel="noopener noreferrer"
        >
            <span className="relative font-bold inline-flex gap-1.5 items-center justify-center cursor-pointer w-full disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-45 duration-200 ease-in-out focus:outline-none focus:ring focus:ring-blue-500 select-none shadow-md bg-white hover:shadow-lg text-gray-600 hover:text-gray-800 active:text-gray-900 px-4 h-10 text-base rounded-lg hover:bg-gray-100">
            {isOpen ? (
              <CrosshairIcon className="w-5 h-5" />
            ) : (
              <HammerIcon className="w-5 h-5" />
            )}
          </span>
        </button>

       
      </div>
    </header>
  );
};

export default Header;
