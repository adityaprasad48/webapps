import { ReactNode } from "react";
import ImageFeedback from "../../components/mcode/ui/ImageFeedback";
import RotatingClock from "../../components/mcode/ui/RotatingClock";
import GoodText from "../../components/typography/GoodText";
import TextEditor from "../../components/typography/TextDesigner";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <TextEditor />
      <GoodText />
      <RotatingClock />
      <ImageFeedback />
    </div>
  );
}
