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

const SideBar = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const toggleDropdown = (index: number) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close if already open
          : [...prev, index] // Open if closed
    );
  };

  const Icons = [
    <HomeIcon className="w-5 h-5 text-gray-500" />,
    <BookA className="w-5 h-5 text-gray-500" />,
    <Droplet className="w-5 h-5 text-gray-500" />,
    <Bandage className="w-5 h-5 text-gray-500" />,
  ];

  if (!isSidebarVisible) {
    return null; // Hide the sidebar if not visible
  }

  return (
    <div className="md:hidden min-w-[250px] w-[250px] px-4 border-r border-l border-gray-300 bg-orange-50 flex flex-col items-start text-gray-700 relative">
      {dropDowns.map((dd, index) => (
        <div
          key={index}
          className="w-full py-4 px-4 border-b border-gray-200 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {Icons[index]}
              <span className="text-sm font-medium">{dd.name}</span>
            </div>
            {dd.childs.length > 0 && (
              <span
                onClick={() => toggleDropdown(index)}
                className="cursor-pointer text-gray-500 hover:text-gray-700"
              >
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
                  className="flex items-center space-x-2 pl-8 py-1 text-gray-500 hover:text-gray-700"
                >
                  <Link href={child.link} className="text-sm">{child.name}</Link>
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
