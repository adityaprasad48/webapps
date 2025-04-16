// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io();

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);

    socket.on("inventory-update", (updatedProduct) => {
      setProducts((prev) =>
        prev.map((p: any) =>
          p._id === updatedProduct._id ? updatedProduct : p
        )
      );
    });

    return () => {
      socket.off("inventory-update");
    };
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">📦 Product Inventory</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product._id}>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.stock}</td>
              <td className="p-2 border">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                  onClick={() => {
                    fetch("/api/update-stock", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ id: product._id }),
                    });
                  }}
                >
                  +1
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
