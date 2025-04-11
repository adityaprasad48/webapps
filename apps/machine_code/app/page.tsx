import CountryDropDown from "../components/mcode/CountriesDropDown";
import InfiniteScroller from "../components/mcode/InfiniteScroller";
import Modal from "../components/mcode/modal/Modal";
import SampleModal from "../components/mcode/modal/SampleModal";
import OTPInput from "../components/mcode/OTPInput";
import Rating from "../components/mcode/StarRating";
import Payment from "../components/Payment";

const Grid = ({ children }) => {
  return (
    <div className="h-[400px] w-full flex items-center justify-center gap-4 p-4 border border-bottom-1 border-gray-300">
      {children}
    </div>
  );
};

import { ReactNode } from "react";

Grid.Item = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center  border-gray-300 p-2">
      {children}
    </div>
  );
};

Grid.Item.displayName = "Grid.Item";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <Grid>
        <Grid.Item>
          <OTPInput />
        </Grid.Item>
        <Grid.Item>
          <Payment />
        </Grid.Item>
      </Grid>

      <Grid>
        <Grid.Item>
          <SampleModal />
        </Grid.Item>
        <Grid.Item>
          <CountryDropDown />
        </Grid.Item>
      </Grid>

      <Grid>
        <Grid.Item>
          <InfiniteScroller />
        </Grid.Item>
        <Grid.Item>
          <Rating />
        </Grid.Item>
      </Grid>
    </div>
  );
}
