"use client";

import React from "react";
import "./WebView.css";

const CssTooltip = () => {
  return (
    <button
      className="tooltip-button tooltip top-right"
      data-tip="Tooltip will come here if you debug the code."
    >
      Hover me
    </button>
  );
};

export default CssTooltip;
