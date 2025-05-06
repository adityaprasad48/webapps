import { PlaneIcon } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flying Planes</title>
      </Head>
      <div className="relative w-full h-screen overflow-hidden bg-sky-100">
        {/* Plane 1 */}
        <PlaneIcon className="plane plane1 text-blue-500" />
        {/* Plane 2 */}
        <PlaneIcon className="plane plane2 text-red-500" />
        {/* Plane 3 */}
        <PlaneIcon className="plane plane3 text-green-500" />
        {/* Plane 4 */}
        <PlaneIcon className="plane plane4 text-yellow-500" />
        <h1 className="absolute top-10 left-10 text-3xl font-bold text-gray-800">
          Welcome to the Flying Planes Homepage!
        </h1>
      </div>

    </>
  );
}