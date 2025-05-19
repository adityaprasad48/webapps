import { CustomNotification } from '@/components/web_views/CustomNotification';
import DragToFolder from "@/components/mcode/drag/DragToFolder";
import FaceBuilder from "@/components/mcode/drag/FaceBuilder";
import InventoryGrid from "@/components/mcode/drag/InventoryGrid";
import BorderShape from "@/components/web_views/BorderShape";
import BoxShadow from "@/components/web_views/BoxShadow";
import Buttons from "@/components/web_views/Buttons";
import CardExpand from "@/components/web_views/CardExpand/CardExpand";
import CssTooltip from "@/components/web_views/CssTooltip";
import CustomInput from "@/components/web_views/CustomInput";
import CustomSelect from "@/components/web_views/CustomSelect";
import DropDown from "@/components/web_views/DropDown";
import FillBoxByDrag from "@/components/web_views/FillBoxByDrag";
import RangeSlider from "@/components/web_views/dot_pattern/DotPattern";
import StackCards from "@/components/web_views/stackcard/StackCards";
import { TwoBg } from "@/components/web_views/two_bg/TwoBg";
import WebDialog from "@/components/web_views/webdialog/WebDialog";
import SliderCards from '@/components/web_views/slider/SliderCards';

export const dropDowns = [
  {
    name: "Home",
    link: "/",
    childs: [],
  },
  {
    name: "Projects",
    link: "/projects",
    childs: [],
  },
  {
    name: "About",
    link: "/about",
    childs: [],
  },
  {
    name: "UI/UX",
    childs: [
      { name: "Input", link: "/ui/1", comp: CustomInput },
      { name: "Select", link: "/ui/2", comp: CustomSelect },
      { name: "Drop Down", link: "/ui/3", comp: DropDown },
      { name: "Css Tooltip", link: "/ui/4", comp: CssTooltip },
      { name: "Tooltip JS", link: "/ui/5", comp: CustomInput },
      { name: "Web Dialog", link: "/ui/6", comp: WebDialog },
      { name: "Mobile Nav", link: "/ui/7", comp: CustomInput },
      { name: "Border Shape", link: "/ui/8", comp: BorderShape },
      { name: "Button Groups", link: "/ui/9", comp: Buttons },
      { name: "Custom Notification", link: "/ui/10", comp: CustomNotification },
      { name: "FillBoxByDrag", link: "/ui/11", comp: FillBoxByDrag },
      { name: "Range Slider", link: "/ui/12", comp: RangeSlider },
      { name: "Two Bg", link: "/ui/13", comp: TwoBg },
      { name: "Stack Cards", link: "/ui/14", comp: StackCards },
      { name: "ScrollSnapCards", link: "/ui/15", comp: SliderCards },
    ],
  },
  {
    name: "Forms",
    childs: [
      { name: "Form 1", link: "/form/1" },
      { name: "Form 2", link: "/form/2" },
    ],
  },
  {
    name: "Drag n Drop",
    childs: [
      { name: "Drag to Folder", link: "/drag/1", comp: DragToFolder },
      { name: "Face builder", link: "/drag/2", comp: FaceBuilder },
      { name: "Inventory Box", link: "/drag/3", comp: InventoryGrid },
    ],
  },
  {
    name: "Cool Stuff",
    childs: [{ name: "Expand Card", link: "/cool/1", comp: CardExpand }],
  },
];
