import { PlaneIcon } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-sky-100">
        {/* Plane 1 */}
        <PlaneIcon className="plane plane1 text-blue-500 h-20 w-20" />
        {/* Plane 2 */}
        <PlaneIcon className="plane plane2 text-red-500 h-20 w-20" />
        {/* Plane 3 */}
        <PlaneIcon className="plane plane3 text-green-500" />
        {/* Plane 4 */}
        <PlaneIcon className="plane plane4 text-yellow-500" />

        <PlaneIcon className="plane random-plane1 text-purple-600" />
        <PlaneIcon className="plane random-plane2 text-pink-500" />
      </div>
    </>
  );
}


