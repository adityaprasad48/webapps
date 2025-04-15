import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import ReorderableList from "../../components/mcode/comp_1/ReorderableList";
import DragColorTheme from "../../components/mcode/comp_1/DragColorTheme";
import InventoryGrid from "../../components/mcode/drag/InventoryGrid";
import DraggableCircle from "../../components/mcode/comp_1/CircleInBox";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <DraggableCircle />
      <ReorderableList />
      <DragColorTheme />
      <InventoryGrid />
    </div>
  );
}
