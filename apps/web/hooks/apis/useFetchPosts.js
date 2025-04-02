


import { useEffect, useState } from 'react';

 export const useFetchPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const LIMIT = 10;
  
  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`
    );
    const data = await res.json();
    if (data.length < LIMIT) setHasMore(false);
    setPosts((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  
  useEffect(() => {
    fetchPosts();
  }, []);

  return { loading, posts, hasMore,fetchPosts };
  
}
