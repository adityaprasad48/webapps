import { ReactNode } from "react";
import ImageFeedback from "../../components/mcode/ui/ImageFeedback";
import RotatingClock from "../../components/mcode/ui/RotatingClock";
import GoodText from "../../components/typography/GoodText";
import TextEditor from "../../components/typography/TextDesigner";
import RatingFeed from "@/components/mcode/ui/RatingFeed";
import Nav from "@/components/mcode/ui/WebSiteNav";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
        {/* <RatingFeed /> */}
        <Nav/>
      </div>
      <TextEditor />
      <GoodText />
      <RotatingClock />
      <ImageFeedback />
    </div>
  );
}
