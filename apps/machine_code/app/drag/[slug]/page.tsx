"use client";
import { dropDowns } from "@/utils/header";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { slug: comp_index } = useParams();

  const Component = React.useMemo(() => {
    const child = dropDowns.find((item) => item.name === "Drag n Drop")?.childs?.[
      Number(comp_index) - 1
    ];
    return child && "comp" in child ? child.comp : null;
  }, [comp_index]);



  console.log("params", comp_index);

  return (
    <div className="flex justify-center items-center">
      {Component ? <Component /> : <div>Component not found</div>}
    </div>
  );
}
