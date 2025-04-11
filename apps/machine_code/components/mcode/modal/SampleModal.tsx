"use client";

import React, { useState } from "react";
import Modal from "./Modal";

const SampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const content = (
    <div className="p-4">
      <h2 className="text-lg font-bold">Sample Modal</h2>
      <p>This is a sample modal content.</p>
      <button
        className="mt-4 w-full bg-purple-500 text-white px-4 py-2 rounded"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={handleOpen}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {content}
      </Modal>
      
    </div>
  );
};

export default SampleModal;
