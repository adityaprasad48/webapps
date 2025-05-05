"use client";
import React, { useState } from "react";

const Navigations = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isOpen, setIsOpen })
          : child
      )}
    </>
  );
};

export default Navigations;
