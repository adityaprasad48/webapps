"use client";
import { dropDowns } from "@/utils/header";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { slug: comp_index } = useParams();

  const Component = dropDowns.find((item) => item.name == "Cool Stuff")?.childs[
    Number(comp_index) - 1
  ]?.comp;

  console.log("params", comp_index);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Component />
    </div>
  );
}
