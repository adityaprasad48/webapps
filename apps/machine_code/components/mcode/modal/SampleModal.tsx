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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpen}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <p>This is a modal content.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </Modal>
      
    </div>
  );
};

export default SampleModal;
