import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import ProgressBar from "../../components/mcode/comp_1/ProgressBar";

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

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <Grid>
        <Grid.Item>
          <ProgressBar />
        </Grid.Item>
      </Grid>
    </div>
  );
}
