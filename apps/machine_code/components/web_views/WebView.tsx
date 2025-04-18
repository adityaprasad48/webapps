"use client";

import React, { useEffect } from "react";

const WebView = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-amber-50">
      <ToggleSwitch1 />
      <ToggleSwitch />
      <RadioInput />
      <CheckBoxInput />
      <div className="flex space-x-2">
        <input className="size-10" type="radio" name="sample" defaultChecked />
        <input className="size-10" type="radio" name="sample" />
      </div>
    </div>
  );
};

export default WebView;

const RadioInput = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <label className="w-[25px] h-[25px] flex items-center justify-center border-2 border-gray-300 rounded-full cursor-pointer group">
        <input
          className="hidden peer"
          type="radio"
          defaultChecked
          name="custom-radio"
        />
        <span
          style={{
            width: "calc(100% - 6px)",
            height: "calc(100% - 6px)",
          }}
          className="bg-gray-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-500"
        ></span>
      </label>

      <label className="w-[25px] h-[25px] flex items-center justify-center border-2 border-gray-300 rounded-full cursor-pointer group">
        <input className="hidden peer" type="radio" name="custom-radio" />
        <span
          style={{
            width: "calc(100% - 6px)",
            height: "calc(100% - 6px)",
          }}
          className="bg-gray-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-500"
        ></span>
      </label>
    </div>
  );
};

const CheckBoxInput = () => {
  return (
    <div className="check-box-group">
      <label
        className="custom-checkbox"
        tabIndex={0}
        aria-label="Checkbox Label"
      >
        <input type="checkbox" defaultChecked />
        <span className="checkmark"></span>
        <span className="label">Checkbox Label</span>
      </label>

      <label
        className="custom-checkbox"
        tabIndex={0}
        aria-label="Another Label"
      >
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="label">Another Label</span>
      </label>
    </div>
  );
};

const ToggleSwitch = () => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="hidden peer" />
        <div className="block bg-gray-600 w-14 h-8 rounded-full peer-checked:bg-green-500"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition peer-checked:translate-x-6"></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">Toggle Switch</div>
    </label>
  );
};
// CSS styles for the custom checkbox

const ToggleSwitch1 = () => {
  useEffect(() => {
    const checkboxes = document.querySelectorAll(".toggle-switch");
    console.log('checkboxes', checkboxes)
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        // alert("Checkbox clicked");
        const target = e.currentTarget as HTMLElement | null;
        if (target) {
          target.classList.toggle("active");
        }
      });
    });
    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="toggle-switch one"></div>
      <div className="toggle-switch two"></div>
      <div className="toggle-switch three"></div>
    </>
  );
};
