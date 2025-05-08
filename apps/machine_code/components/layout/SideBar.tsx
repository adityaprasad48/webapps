"use client";

import { dropDowns } from "@/utils/header";
import {
  HomeIcon,
  BookA,
  Plus,
  Bandage,
  Droplet,
  Minus,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = ({isOpen, setIsOpen}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close if already open
          : [...prev, index] // Open if closed
    );
  };

  const Icons = [
    <HomeIcon className="w-5 h-5 text-orange-500" />,
    <BookA className="w-5 h-5 text-orange-500" />,
    <Droplet className="w-5 h-5 text-orange-500" />,
    <Bandage className="w-5 h-5 text-orange-500" />,
  ];

  if (!isOpen) {
    return null; // Hide the sidebar if not visible
  }

  return (
    <div className="md:hidden min-w-[250px] w-[250px]  py-4 px-4 border-r border-l border-gray-300 bg-orange-50 flex flex-col items-start text-gray-700 shadow-lg h-full">
      {dropDowns.map((dd, index) => (
        <div
          key={index}
          className="w-full  border-b border-gray-200 cursor-pointer py-2 px-2"
          onClick={() => toggleDropdown(index)}
        >
          <div className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-orange-200/50 transition-all duration-200 ease-in-out">
            <div className="flex items-center space-x-3 w-full ">
              <span className=""> {Icons[index]}</span>
              <span className="text-sm font-medium">{dd.name}</span>
            </div>
            {dd.childs.length > 0 && (
              <span className="cursor-pointer text-orange-500">
                {openIndexes.includes(index) ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            )}
          </div>
          {openIndexes.includes(index) && dd.childs.length > 0 && (
            <div className="w-full mt-2">
              {dd.childs.map((child, childIndex) => (
                <div
                  key={childIndex}
                  onClick={() => {
                    setIsOpen(false);
                    setOpenIndexes([]);
                  }}
                  className="flex items-center space-x-2 pl-8 py-1 text-gray-500 hover:text-gray-700"
                >
                  <Link href={child.link} className="text-sm">
                    {child.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
