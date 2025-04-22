"use client";
import { dropDowns } from "@/utils/header";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { slug: comp_index } = useParams();

  const Component = dropDowns.find((item) => item.name == "UI/UX")?.childs[
    comp_index
  ]?.comp;

  console.log("params", comp_index);

  return (
    <div className="flex justify-center items-center">
      <Component />
    </div>
  );
}
