"use client";
import { dropDowns } from "@/utils/header";
import { use } from "chai";
import {
  BotIcon,
  Menu,
  MenuSquareIcon,
  PiIcon,
  TvIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "../mcode/modal/Modal";
import { set } from "mongoose";

const Header = ({ isOpen, setIsOpen: sidebarOpen }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalName, setModalName] = useState("");

  const loginContent = () => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-bold">Login Web</h2>
        <p>This is a sample modal content.</p>
        <button
          className="mt-4 w-full bg-purple-500 text-white px-4 py-2 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  };

  const signupContent = () => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-bold">Sign Up Into Web</h2>
        <p>This is a sample modal content.</p>
        <button
          className="mt-4 w-full bg-purple-500 text-white px-4 py-2 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  };

  const handleOpenModal = (type: string) => {
   setModalName(type);
    setModalOpen(true);
  };


  const handleClose = () => {
    setModalOpen(false);
  };

  const [iconNum, setIconNum] = useState(0);
  const [modeOpen, setModeOpen] = useState(false);

  const handleToggle = () => {
    sidebarOpen((pre) => !pre);
  };

  const handleIconClick = (num: number) => {
    setModeOpen((open) => !open);
    setIconNum(num);
  };

  useEffect(() => {
    const progressBar = document.getElementById("progress");
    if (progressBar) {
      progressBar.style.opacity = "1";
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // useEffect(() => {
  //   const $progressbar = document.querySelector<HTMLElement>("#progress");
  //   if ($progressbar) {
  //     $progressbar.style.transformOrigin = "0% 50%";
  //     $progressbar.animate(
  //       [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
  //       {
  //         fill: "forwards",
  //         duration: 1000, // Example duration
  //       }
  //     );
  //   }
  // }, []);

  //! scroll(), scroll(root), scroll(block), scroll(inline self)

  return (
    <header className="fixed top-0 left-0 w-full z-50 desktop-s:bg-white transition-colors duration-200  min-h-[64px] flex items-center px-4 mb-2 border-b border-gray-200 bg-orange-50">
      <div
        id="progress"
        style={{ opacity: 0, transformOrigin: "0% 50%" }}
        className="left-0 fixed transform-left w-full h-[7px] bg-orange-500 mt-[70px] "
      />
      <div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-orange-200/50 transition-all duration-200 ease-in-out"
          onClick={handleToggle}
        >
          {isOpen ? <MenuSquareIcon /> : <Menu />}
        </button>
        <Link href="/" className="text-4xl font-bold text-orange-400">
          A
        </Link>
      </div>
      <div className="h-full w-full ml-auto hidden md:block">
        <div className="w-full flex justify-center items-center space-x-1">
          {dropDowns.map((item, index) => (
            <div key={index} className="relative group flex items-center">
              <Link
                href={item.link ? item.link : "#"}
                className="flex justify-center items-center px-2 text-gray-600 hover:text-gray-800 h-[65px] rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
              {item.childs.length > 0 && (
                <div className="absolute top-[62px] left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 hidden group-hover:block backdrop-blur-md">
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
        <button
          onClick={() => handleOpenModal("signup")}
          className="bg-orange-400 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap cursor-pointer"
        >
          Sign Up
        </button>
        <button
          onClick={() => handleOpenModal("login")}
          className="bg-gray-200 text-steal-400 px-4 py-2 rounded-lg text-sm whitespace-nowrap cursor-pointer"
        >
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

      <Modal isOpen={modalOpen} onClose={handleClose}>
        {modalName === "login" ? loginContent() : signupContent()}
      </Modal>
    </header>
  );
};

export default Header;
