// components/PlaneIcon.js

import React from "react";

const PlaneIcon = ({ className, style }) => (
  // <svg
  //   className={className}
  //   style={style}
  //   width="80"
  //   height="80"
  //   viewBox="0 0 24 24"
  //   fill="currentColor"
  // >
  //   <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  // </svg>
  <svg
    className={className}
    style={style}
    width="80" // bigger size
    height="80"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export default PlaneIcon;