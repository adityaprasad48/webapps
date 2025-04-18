"use client";
import {
  BotIcon,
  CrosshairIcon,
  HammerIcon,
  PiIcon,
  TvIcon,
} from "lucide-react";
import { set } from "mongoose";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconNum, setIconNum] = useState(0);
  const [modeOpen, setModeOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleIconClick = (num: number) => {
    setModeOpen((open) => !open);
    setIconNum(num);
  };

  const dropDowns = [
    {
      name: "Home",
      childs: [],
    },
    {
      name: "About",
      childs: [],
    },
    {
      name: "Game",
      childs: [
        { name: "Game 1", link: "/game/1" },
        { name: "Game 2", link: "/game/2" },
      ],
    },
    {
      name: "Forms",
      childs: [
        { name: "Form 1", link: "/form/1" },
        { name: "Form 2", link: "/form/2" },
      ],
    },
    {
      name: "Data",
      childs: [
        { name: "Data 1", link: "/data/1" },
        { name: "Data 2", link: "/data/2" },
      ],
    },
    {
      name: "UI Components",
      childs: [
        { name: "Component 1", link: "/component/1" },
        { name: "Component 2", link: "/component/2" },
      ],
    },
  ];

  // on scroll => bg-white

  return (
    <header className="fixed top-0 left-0 w-full z-50 desktop-s:bg-white transition-colors duration-200  h-[64px] flex items-center px-4 mb-2 py-2 border-b border-gray-200 bg-white">
      <div>
        <Link href="/" className="text-4xl font-bold text-orange-400">
          A
        </Link>
      </div>
      <div className="ml-auto hidden md:block">
        <div className="w-full flex space-y-2 ml-4">
          {dropDowns.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link ? item.link : "#"}
                className="text-gray-600 hover:text-gray-800 font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
              {item.childs.length > 0 && (
                <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 hidden group-hover:block backdrop-blur-md">
                  {item.childs.map((child, index) => (
                    <Link
                      key={index}
                      href={child.link}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg  text-sm">
          Sign Up
        </button>
        <button className="bg-gray-200 text-steal-400 px-4 py-2 rounded-lg text-sm">
          Login
        </button>

        <div
          className="relative leafygreen-ui-hc6lm9"
          onBlur={() => setModeOpen(false)}
        >
          <button
            aria-label="Dark Mode Menu"
            aria-labelledby="Dark Mode Menu"
            aria-expanded="false"
            aria-haspopup="true"
            // tabIndex={0}
            onClick={() => setModeOpen((open) => !open)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setModeOpen(false);
              }
            }}
            type="button"
            aria-disabled="false"
            className="cursor-pointer leafygreen-ui-1qlrfdk"
          >
            <div className="leafygreen-ui-xhlipt">
              {iconNum == 0 && <PiIcon />}
              {iconNum == 1 && <TvIcon />}
              {iconNum == 2 && <BotIcon />}
            </div>
          </button>
          {modeOpen && (
            <div
              role="menu"
              aria-hidden="false"
              className="w-[150px] absolute top-[40px] right-[10px] bg-black text-white  block leafygreen-ui-1qlrfdk rounded-xl cursor-pointer"
            >
              <div
                role="menuitem"
                // tabIndex={0}
                aria-disabled="false"
                className="w-[100px] leafygreen-ui-1qlrfdk"
                onClick={() => handleIconClick(0)}
              >
                <div className="flex flex-row items-center space-x-4 py-2 px-2 leafygreen-ui-xhlipt">
                  <PiIcon width={20} height={20} />
                  <span>System</span>
                </div>
              </div>
              <div
                role="menuitem"
                // tabIndex={0}
                aria-disabled="false"
                className="w-[100px] leafygreen-ui-1qlrfdk"
                onClick={() => handleIconClick(1)}
              >
                <div className="flex flex-row items-center space-x-4 py-2 px-2 leafygreen-ui-xhlipt">
                  <TvIcon width={20} height={20} />
                  <span>Dark</span>
                </div>
              </div>
              <div
                role="menuitem"
                // tabIndex={0}
                aria-disabled="false"
                className="w-[100px] leafygreen-ui-1qlrfdk"
                onClick={() => handleIconClick(2)}
              >
                <div className="flex flex-row items-center space-x-4 py-2 px-2 leafygreen-ui-xhlipt">
                  <BotIcon width={20} height={20} />
                  <span>Light</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
