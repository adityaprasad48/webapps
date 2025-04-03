import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export function RaceCondition() {
  // get products from api it should have query params name by which products are filtered

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [productNames, setProductNames] = useState<string[]>([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setProductNames(data.map((product: ProductType) => product.title));
        console.log('data', data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // I think you are lookig for this product feature when user type wrong product name

  const handleWord = (word: string) => {
    setQuery(word);
  };

  return (
    <div>
      <h1></h1>
      <div>
        <div className="flex justify-center items-center gap-2 mb-4 mt-2">
          <input
            className="border-2 border-yellow-300 rounded-lg px-4 py-2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
          />
          <button
            className="bg-yellow-500 text-white font-xl px-4 py-2 rounded-lg"
            onClick={() => setLoading(true)}
          >
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {products.filter((product: ProductType) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        ).length > 0 ? (
          <div className="min-width-80 bg-yellow-200 p-4 flex flex-col gap-4">
            {products
              .filter((product: ProductType) =>
                product.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((product: ProductType) => (
                <div
                  className="bg-yellow-400 px-4 py-2 rounded-xl flex flex-col gap-2"
                  key={product.id}
                >
                  <h2 className="text-2xl text-left text-yellow-700 font-bold">
                    {product.title}
                  </h2>
                  <p className="text-lg text-left text-orange-600 font-semibold">
                    {product.description.slice(0, 200)}
                  </p>
                  <p className="text-sm font-bold text-right text-red-800">
                    ${product.price}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h1 className="text-underline">Did you mean by this search</h1>
            <div className="flex items-center flex-col gap-2 my-2">
              {productNames
                .filter((name) =>
                  name.toLowerCase().includes(query.slice(0, -1).toLowerCase())
                )
                .map((name) =>
                  [...new Set(name.split(" "))].map((word, index) =>
                    word.toLowerCase().startsWith(query[0].toLowerCase()) ? (
                      <div
                        key={`${name}-${index}`}
                        className="cursor-pointer bg-yellow-400 px-4 py-2 rounded-xl flex flex-col gap-2"
                        onClick={() => handleWord(word)}
                      >
                        {word}
                      </div>
                    ) : null
                  )
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
