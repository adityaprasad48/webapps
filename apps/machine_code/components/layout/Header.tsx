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
      <div className="flex items-center gap-2">
        
        <Link href="/" className="text-4xl font-bold text-orange-400">
          A
        </Link>
        <div className="flex gap-4 ml-4">
          <span><Link href="/1">Page 1</Link></span>
          <span><Link href="/2">Page 2</Link></span>
          <span><Link href="/3">Page 3</Link></span>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg  text-sm">
          Sign Up
        </button>
        <button className="bg-gray-200 text-steal-400 px-4 py-2 rounded-lg text-sm">
          Login
        </button>
        <div className="relative">
          <button className="border-1 border-gray-400 p-1 rounded-lg" onClick={isOpen ? handleClose : handleOpen}>
            {isOpen ? <CrosshairIcon /> : <HammerIcon />}
          </button>
          {isOpen && <div className="absolute top-[64px] right-[20px] bg-green-200">
              
            </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
