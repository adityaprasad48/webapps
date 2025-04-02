"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./observer.module.css";
import { useScrolledEnd } from "@/hooks/useScrolledEnd";
import { useFetchPosts } from "@/hooks";
import InfiniteScroller from "@/components/InfiniteScroller";

export default function Observer() {
  const [offset, setOffset] = useState(0);
  const { posts, loading, hasMore, fetchPosts } = useFetchPosts();


  const handleChange = () => {
    fetchPosts();
  }

  console.log({posts, loading, hasMore, fetchPosts});


  // const [products, setProducts] = useState([]);

  // const P_LIMIT = 4;

  // const fetchProduct = useCallback((offset) => {
  //   fetch(
  //     `http://localhost:3000/observer/api?offset=${offset}&limit=${P_LIMIT}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts((prev) => [...prev, ...data]));
  // }, []);

  // useEffect(() => {
  //   fetchProduct(offset);
  // }, [offset, fetchProduct]);

  // const loadMore = () => {
  //   setOffset(offset + P_LIMIT);
  // };

  // const scrollableDiv = useRef(null);

  // useScrolledEnd(scrollableDiv, () => {
  //   if (hasMore && !loading) {
  //     setPage((prev) => prev + 1);
  //   }
  // });

  // const lastPostRef = useCallback(node => {
  //   if (!hasMore) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       setPage(prev => prev + 1);
  //     }
  //   });
  //   if (node) observer.current.observe(node);
  // }, [hasMore]);

  

  return (
    <div className={styles.ob_container}>
      {/* <div className={styles.productContainer}>
        <h2>Products</h2>
        <div className={styles.productList}>
          <ul>
            {products?.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          {products?.length && <button onClick={loadMore}>Load More</button>}
        </div>
      </div> */}

      {/* <div>
      {posts?.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div> */}

      <button onClick={handleChange}>Load Data</button>

      <InfiniteScroller fetchData={fetchPosts} hasMore={hasMore}>
        {posts?.map((post) => (
          <div style={{padding: '20px', border: '1px solid green'}} key={post.id}>{post.title}</div>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more posts</p>}
      </InfiniteScroller>
    </div>
  );
}
