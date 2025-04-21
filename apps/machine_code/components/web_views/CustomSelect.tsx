"use client";
import React, { useEffect } from "react";
import "./WebView.css";


const CustomSelect = () => {
  useEffect(() => {
    const selectors = document.querySelectorAll(".custom-select select");

    selectors.forEach((select) => {
      const parent = select.parentElement;

      // click happens after
      parent?.addEventListener("mousedown", (e) => {
        if (window.innerWidth >= 420) {
          e.preventDefault();

          const dropDown = document.createElement("ul");
          dropDown.className = "selector-options";

          [...(select as HTMLSelectElement).options].forEach((option) => {
            const dropDownOption = document.createElement("li");
            dropDownOption.textContent = option.textContent;

            dropDownOption.addEventListener("mousedown", (e) => {
              e.stopPropagation();
              (select as HTMLSelectElement).value = option.value;
              select.dispatchEvent(new Event("change"));
              dropDown.remove();
            });

            dropDown.appendChild(dropDownOption);
          });

          parent.appendChild(dropDown);

          const handleClickOutside = (e: MouseEvent) => {
            if (!parent.contains(e.target as Node)) {
              dropDown.remove();
              document.removeEventListener("click", handleClickOutside);
            }
          };

          document.addEventListener("click", handleClickOutside);
        }
      });

      select.addEventListener("change", (e) => {
        console.log("changed", (e.target as HTMLSelectElement).value);
      });
    });

    return () => {
      selectors.forEach((select) => {
        const parent = select.parentElement;
        parent?.replaceWith(parent.cloneNode(true)); // Remove all event listeners
      });
    };
  }, []);

  return (
    <div>
      <label className="custom-select">
        Select from number options
        <select name="sample">
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
        </select>
      </label>

      <label className="custom-select">
        Select Country
        <select name="sample">
          <option value="1">United States</option>
          <option value="2">China</option>
          <option value="3">Brazil</option>
          <option value="4">India</option>
        </select>
      </label>
    </div>
  );
};

export default CustomSelect;
