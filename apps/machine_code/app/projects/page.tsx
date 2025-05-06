import CountryDropDown from "@/components/mcode/CountriesDropDown";
import FEPagination from "@/components/mcode/FEPagination";
import SampleModal from "@/components/mcode/modal/SampleModal";
import Comments from "@/components/mcode/NestedComment";
import OTPInput from "@/components/mcode/OTPInput";
import StarRating from "@/components/mcode/StarRating";
import FormTab from "@/components/mcode/tabs/FormTab";
import UserList from "@/components/mcode/UserList";
import Payment from "@/components/Payment";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


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

export default function Page() {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <h1>Project Paginations</h1>
      <div>
        <Grid>
          <Grid.Item>
            <FormTab />
          </Grid.Item>
        </Grid>

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
            <UserList />
          </Grid.Item>
          <Grid.Item>
            <StarRating />
          </Grid.Item>
        </Grid>

        <Grid className="h-[700px]">
          <Grid.Item>
            <Comments />
          </Grid.Item>
          <Grid.Item>
            <FEPagination />
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
}
