/* eslint-disable @next/next/no-img-element */
"use client";

import { MinusCircleIcon, PlusCircleIcon, PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const includeKeys = [
    { text: "Price", key: "price" },
    { text: "Category", key: "category" },
    { text: "Rating", key: "rating" },
  ];

  return (
    <div className="h-[200px] border-1 border-amber-200 p-1">
      <div className="h-[50px] px-2 py-4 flex justify-between">
        <h2>{product.title}</h2>
        <button
          className="size-[25px]  flex justify-center items-center"
          type="button"
          onClick={handleToggle}
        >
          {open ? (
            <MinusCircleIcon width={20} height={20} />
          ) : (
            <PlusCircleIcon width={20} height={20} />
          )}
        </button>
      </div>
      {open && (
        <div className="h-[150px] flex border-1 border-purple-300">
          <img
            className="h-full flex-1 border-1 border-amber-50"
            src={product.images[0]}
          />
          <div className="flex-1/3">
            {includeKeys.map((item, index) => (
              <p
                key={index}
                className="px-1 py-2 flex justify-between border-b-1 border-b-orange-600"
              >
                <span>{item.text}</span>
                <span>:</span>
                <span>{product[item.key]}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FEPagination = () => {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=48");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProduct = products.length;
  const pageSize = 5;

  const totalPages = Math.ceil(totalProduct / pageSize);

  const start = pageNum * pageSize;
  const end = start + pageSize;

  console.log("start", start);
  console.log("end", end);

  const pageBtns = Array(totalPages)
    .fill(0)
    .map((_, i) => i);

  const handlePageNum = (value: number) => {
    console.log("num", value);
    setPageNum(value);
  };

  const handleFB = (value: number) => {
    setPageNum((prev) => {
      const nextPage = prev + value;
      return nextPage;
    });
  };

  return (
    <div className="w-full h-full overflow-auto flex flex-col gap-2">
      <div className="flex justify-center flex-wrap gap-2">
        <button
          type="button"
          disabled={pageNum == 0}
          onClick={() => handleFB(-1)}
          className={twMerge(
            "size-[50px] border border-amber-500 bg-amber-100 text-amber-800 rounded",
            pageNum == 0 && "bg-gray-200 "
          )}
        >
          Back
        </button>
        {pageBtns.slice(0).map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handlePageNum(num)}
            className={twMerge(
              "size-[50px] border border-amber-500 bg-amber-100 text-amber-800 rounded",
              pageNum == num && "border-2"
            )}
          >
            {num + 1}
          </button>
        ))}
        <button
          type="button"
          disabled={pageNum == 0}
          onClick={() => handleFB(1)}
          className={twMerge(
            "size-[50px] border border-amber-500 bg-amber-100 text-amber-800 rounded",
            pageNum == totalPages && "bg-gray-200 "
          )}
        >
          Next
        </button>
      </div>
      {products.length > 1 ? (
        products
          .slice(start, end)
          .map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <h2>No Product Found</h2>
      )}
    </div>
  );
};

export default FEPagination;
