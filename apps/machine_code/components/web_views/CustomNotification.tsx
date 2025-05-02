"use client";

import React, { useEffect } from "react";

const CustomNotification = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="custom-notification-wrapper">
        <div className="notification-triggers">
          <button type="button" className="trigger-btn">
            Top Left
          </button>
          <button type="button" className="trigger-btn">
            Top
          </button>
          <button type="button" className="trigger-btn">
            Top Right
          </button>
          <button type="button" className="trigger-btn">
            Bottom Left
          </button>
          <button type="button" className="trigger-btn">
            Bottom
          </button>
          <button type="button" className="trigger-btn">
            Bottom Right
          </button>
        </div>
      </div>
      <div className="notification-container">
        <div className="notification-message shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum
          <button type="button" className="close-btn">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomNotification;
