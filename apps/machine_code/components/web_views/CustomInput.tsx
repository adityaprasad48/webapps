"use client";

import React, { useEffect } from "react";

const CustomInput = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((el) => {
      el.addEventListener("blur", (e: Event) => {
        const target = e.target as HTMLInputElement | null;
        if (target?.value) {
          target?.classList.add("dirty");
        } else {
          target?.classList.remove("dirty");
        }
      });
    });
  }, []);

  return (
    <div>
      <label className="custom-field">
        <input type="email" placeholder="&nbsp;" />
        <span className="placeholder">Enter Email</span>
        {/* <span className="error-message" aria-live="polite">
          The email is invalid
        </span> */}
      </label>

      <label className="custom-field one">
        <input type="text" placeholder=" " />
        <span className="placeholder">Enter Text</span>
      </label>

      <label className="custom-field two">
        <input type="url" placeholder="&nbsp;" />
        <span className="placeholder">Enter URL</span>
      </label>

      <label className="custom-field three">
        <input type="password" placeholder="&nbsp;" />
        <span className="placeholder">Enter Password</span>
        <span className="border"></span>
      </label>
    </div>
  );
};

export default CustomInput;
