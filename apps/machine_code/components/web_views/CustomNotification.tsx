"use client";

import React, { useEffect } from "react";

const CustomNotification = () => {
  // useEffect(() => {
  //   class Notification {
  //     private container: HTMLDivElement;
  //     stackGap = 15;
  //     offsetGap = 25;

  //     constructor(pos = "top-right", parent = document.body) {
  //       this.container = document.createElement("div");
  //       this.container.className = `notification-container ${pos}`;
  //       parent.appendChild(this.container);
  //     }

  //     private getPosition() {
  //       const position = this.container.className.split(" ")[1];
  //       switch (position) {
  //         case "top-left":
  //           return { top: "20px", left: "20px" };
  //         case "top":
  //           return { top: "20px", left: "50%", transform: "translateX(-50%)" };
  //         case "top-right":
  //           return { top: "20px", right: "20px" };
  //         case "bottom-left":
  //           return { bottom: "20px", left: "20px" };
  //         case "bottom":
  //           return { bottom: "20px", left: "50%", transform: "translateX(-50%)" };
  //         case "bottom-right":
  //           return { bottom: "20px", right: "20px" };
  //         default:
  //           return {};
  //       }
  //     }

  //     show(message: string, duration = 3000) {
  //       let timer:any = null;
  //       const notificationElement = this.createNotification(message);
  //       this.container.insertAdjacentElement("afterbegin", notificationElement);

  //       let space = notificationElement.offsetHeight + (this.offsetGap + this.stackGap);
  //       let sib = notificationElement.nextElementSibling;
  //       while (sib) {
  //         sib.style.top = space + 'px'
  //         space = space + (sib.offsetHeight + this.stackGap);
  //         sib = sib.nextElementSibling
  //       }

  //       // timer = setTimeout(() => {
  //       //   notificationElement.remove();
  //       //   clearTimeout(timer);
  //       // }
  //       // , duration);
  //     }

  //     createNotification(message: string) {
  //       const box = document.createElement("div");
  //       box.className = "notification-message shadow-md";
  //       box.innerHTML = `<span>${message}</span><button class="close-btn">Close</button>`;
  //       return box;
  //     }

  //     close(notificationElement: HTMLDivElement) {
  //       notificationElement.remove();
  //     }
  //   }
  //   const notification = new Notification("top-right");
  //   const triggerButtons = document.querySelectorAll(".trigger-btn");
  //   triggerButtons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const position = button.innerText.toLowerCase().replace(" ", "-");
  //       notification.show(`Notification from ${position}`);
  //     });
  //   });
    
  // }, []);


  //  create a html for with box already fill with white color and vertical line which you can drag and dragged portion will be filled with green color



  return (
    <>
      {/* create a html for with box already fill with white color and vertical line which you can drag and dragged portion will be filled with green color */}

      {/* <div className="custom-notification-wrapper">
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
          <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum
          </span>
          <button type="button" className="close-btn">
            Close
          </button>
        </div>
      </div> */}
    </>
  );
};

export default CustomNotification;
