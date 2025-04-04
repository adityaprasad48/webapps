import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const Riddle = () => {
  const [riddleData, setRiddleData] = useState(null);
  const [refetch, setRefetch] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
      fetch("https://riddles-api.vercel.app/random")
        .then((res) => res.json())
        .then((data) => {
          setRiddleData(data);
        });
  }, []);

  useEffect(() => {
    if (refetch) {
      fetch("https://riddles-api.vercel.app/random")
        .then((res) => res.json())
        .then((data) => {
          setRiddleData(data);
          setRefetch(false);
          setShow(false)
        });
    }
  }, [refetch]);

  const handleShowAnswer = () => {
    setShow(true);
  };

  const handleRefetch = () => {
    setRefetch(true);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <h2 className="text-xl font-semibold text-gray-600">{riddleData?.riddle}</h2>
      {show && <p className="text-gray-600">{riddleData?.answer}</p>}
      <div className="flex justify-between ">
        <div
          onClick={handleRefetch}
          className="py-2 px-4 bg-violet-400 text-white rounded-lg cursor-pointer"
        >
          <RefreshCw height={30} width={30} />
        </div>
        <button
          type="button"
          className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 cursor-pointer"
          onClick={handleShowAnswer}
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default Riddle;
