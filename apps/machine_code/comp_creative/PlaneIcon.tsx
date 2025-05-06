// components/PlaneIcon.js

import React from "react";

const PlaneIcon = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export default PlaneIcon;