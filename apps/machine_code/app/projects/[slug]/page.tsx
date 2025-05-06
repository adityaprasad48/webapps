'use client'
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { useParams } from "next/navigation";
import ProgressBar from "@/components/mcode/comp_1/ProgressBar";
import RedGreenLight from "@/components/mcode/comp_1/RedGreenLight";
import TrafficLights from "@/components/mcode/comp_1/TrafficLights";
import TicTacToe from "@/components/mcode/TicTacToe";
import DragToFolder from "@/components/mcode/drag/DragToFolder";
import FaceBuilder from "@/components/mcode/drag/FaceBuilder";
import DraggableCircles from "@/components/mcode/comp_1/CircleInBox";
import ReorderableList from "@/components/mcode/comp_1/ReorderableList";
import DragColorTheme from "@/components/mcode/comp_1/DragColorTheme";
import InventoryGrid from "@/components/mcode/drag/InventoryGrid";
import RatingFeed from "@/components/mcode/ui/RatingFeed";
import TextImageEditor from "@/components/typography/TextDesigner";
import GoodText from "@/components/typography/GoodText";
import RotatingClock from "@/components/mcode/ui/RotatingClock";
import ImageFeedback from "@/components/mcode/ui/ImageFeedback";

const Grid = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const defaultCls =
    "h-[400px] w-full flex items-center justify-center gap-4 p-4 border border-b border-gray-300";

  const classNames = twMerge(defaultCls, className);

  return <div className={classNames}>{children}</div>;
};

Grid.Item = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const classNames = twMerge(
    "w-full h-full flex items-center justify-center  border-gray-300 p-2 border-1",
    className
  );
  return <div className={classNames}>{children}</div>;
};

Grid.Item.displayName = "Grid.Item";

const Projects = [
  {
    name: "Progress Bar",
    comp: <ProgressBar />,
  },
  {
    name: "Red Green Light",
    comp: <RedGreenLight />,
  },
  {
    name: "Traffic Lights",
    comp: <TrafficLights />,
  },
  {
    name: "Tic Tac Toe",
    comp: <TicTacToe />,
  },
  {
    name: "Drag To Folder",
    comp: <DragToFolder />,
  },
  {
    name: "Face Builder",
    comp: <FaceBuilder />,
  },
  {
    name: "Draggable Circle",
    comp: <DraggableCircles />,
  },
  {
    name: "Reorderable List",
    comp: <ReorderableList />,
  },
  {
    name: "Drag Color Theme",
    comp: <DragColorTheme />,
  },
  {
    name: "Inventory Grid",
    comp: <InventoryGrid />,
  },
  {
    name: "Rating Feed",
    comp: <RatingFeed />,
  },
  {
    name: "Text Editor",
    comp: <TextImageEditor />,
  },
  {
    name: "Good Text",
    comp: <GoodText />,
  },
  {
    name: "Rotating Clock",
    comp: <RotatingClock />,
  },
  {
    name: "Image Feedback",
    comp: <ImageFeedback />,
  },
];

export default function Page() {
  const { slug: pageNum } = useParams();
  const perPage = 4;
  const currentPage = pageNum === undefined ? 1 : Number(pageNum);
  // slice the projects array to get the current page projects
  const currentPageProjects = Projects.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  const totalPages = Math.ceil(Projects.length / perPage);
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      {currentPageProjects.map((project) => (
        <Grid.Item key={project.name}>{project.comp}</Grid.Item>
      ))}
      <div className="flex justify-between">
        <button disabled={currentPage <= 1}>Previous</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage >= totalPages}>Next</button>
      </div>
    </div>
  );
}
