"use client";

import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "./ToastContainer";

export const NotificationContainer = () => {
  const [queue, setQueue] = useState<[string, string, number][]>([]);
  const [notifications, setNotifications] = useState<Record<string, any>>({});

  const createNotificationMessageElement = (msg: string, pos: string) => {
    return (
      <div className="notification-message" key={msg}>
        <span>{msg}</span>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            const updatedNotifications = { ...notifications };
            const notificationElement =
              updatedNotifications[msg]?.notificationElement;
            if (notificationElement) {
              let sib =
                notificationElement.nextElementSibling as HTMLElement | null;
              let height = notificationElement.offsetHeight + 15;

              while (sib) {
                sib.style[pos] =
                  parseInt(sib.style[pos] || "0", 10) - height + "px";
                height = sib.offsetHeight + 15;
                sib = sib.nextElementSibling as HTMLElement | null;
              }

              delete updatedNotifications[msg];
              setNotifications(updatedNotifications);
            }
          }}
        >
          x
        </button>
      </div>
    );
  };

  return <div className="notification-container top-left"></div>;
};

export const CustomNotification = () => {
  const [i, setI] = useState(0);

  const addTop = () => {
    toast(`Top Left Notification ${i}`, "top-left", {
      icon: "🔔",
      persistent: true,
      duration: 3000,
    });
    setI((prev) => prev + 1);
  };


   const addBottom = () => {
    toast(`Bottom Left Notification ${i}`, "bottom-left", {
      icon: "🔔",
      persistent: true,
      duration: 3000,
    });
    setI((prev) => prev + 1);

  };

  return (
    <div>
      <div className="notification-triggers">
        <button onClick={addTop} type="button" className="trigger-btn">
          top left
        </button>
        <button onClick={addTop} type="button" className="trigger-btn">
          top
        </button>
        <button onClick={addTop} type="button" className="trigger-btn">
          top right
        </button>
        <button onClick={addBottom} type="button" className="trigger-btn">
          bottom left
        </button>
        <button onClick={addBottom} type="button" className="trigger-btn">
          bottom
        </button>
        <button onClick={addBottom} type="button" className="trigger-btn">
          bottom right
        </button>
      </div>
      <ToastContainer />
      {/* <div className="notification-container top-left"></div>
    <div className="notification-container top"></div> */}
    </div>
  );
};
