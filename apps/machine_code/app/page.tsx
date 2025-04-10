import OTPInput from "../components/OTPInput";
import Payment from "../components/Payment";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <main className="h-full">
        {/* <Payment /> */}
        <OTPInput />
      </main>
    </div>
  );
}
