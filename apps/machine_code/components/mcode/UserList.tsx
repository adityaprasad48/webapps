'use client';
import { useEffect, useRef, useState } from "react";

const UserList = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItems((prev) => [
            ...prev,
            ...Array.from({ length: 5 }, (_, i) => prev.length + i + 1),
          ]);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[300px] w-full overflow-auto resize-y">
      {items.map((item) => {
        return (
          <div key={item} className="flex items-center justify-center  h-[80px] bg-purple-100 w-full border-b border-purple-300 text-center text-xl ">
            {item}
          </div>
        );
      })}
      <p ref={loaderRef} className="h-[50px] flex items-center justify-center text-gray-500">
        ...Loading
      </p>
    </div>
  );
};

export default UserList;

function useCustomeState<T>(
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const state = useRef(initialState);
  const setState = (newState: React.SetStateAction<T>) => {
    state.current =
      typeof newState === "function"
        ? (newState as (prevState: T) => T)(state.current)
        : newState;
  };
  return [state.current, setState];
}
