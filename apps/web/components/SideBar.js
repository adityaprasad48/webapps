"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideBar() {
  const navs = [
    { name: "Infinite Comments", path: "/comments" },
    { name: "Time", path: "/time" },
    { name: "Observer", path: "/observer" },
    { name: "Products", path: "/products" },
    { name: "Random Product", path: "/random-product" },
  ];

  return (
    <div className="sidebar">
      <h1>Navigation</h1>
      <ul>
        {navs.map((nav, index) => (
          <li key={index}>
            <Link href={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
