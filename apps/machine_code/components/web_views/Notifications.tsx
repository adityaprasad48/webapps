"use client";

import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

const Notifications = () => {
  const nots = [
    {
      id: 1,
      title: "Notification 1",
      des: "This is about UI Notification",
      bg: "bg-red-200",
      zIndex: 10,
    },
    {
      id: 2,
      title: "Notification 2",
      des: "This is about Css Notification",
      bg: "bg-blue-200",
      zIndex: 10,
    },
    {
      id: 3,
      title: "Notification 3",
      des: "This is about Js Animation Notification",
      bg: "bg-green-200",
      zIndex: 10,
    },
    {
      id: 4,
      title: "Notification 4",
      des: "This is about Creative Notification",
      bg: "bg-yellow-200",
      zIndex: 10,
    },
  ];

  const [zs, setZs] = useState(nots.map((not: any) => not.zIndex));

  return (
    <div>
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg  w-96 relative border h-[500px]">
        {/* <h2 className="text-xl font-semibold text-gray-600 ">Notifications</h2> */}
        {nots.map((not, index) => (
          <div
            key={not.id}
            className={twJoin(
              "flex flex-col gap-2 shadow-lg p-4 rounded-lg absolute",
              not.bg,
              `left-0 right-0  mx-auto`,
              "transition-all duration-500 ease-in-out transform hover:scale-105"
            )}
            style={{
              top: not.id * 20 + "px",
              zIndex: zs[index],
            }}
            onClick={() => setZs((pre_zs) => pre_zs.map((z, zi) => zi == index ? z + 10 : z ))}
            onBlur={() => setZs()}
          >
            <h3 className="text-lg font-semibold text-gray-600">{not.title}</h3>
            <p className="text-gray-600">{not.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
