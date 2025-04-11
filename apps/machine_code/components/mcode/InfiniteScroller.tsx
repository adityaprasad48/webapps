'use client';

import {useState, useEffect, useRef} from 'react';

export default function InfiniteScroller({ fetchData, hasMore, children }) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollableDiv = useRef(null);

  // useEffect(() => {
  //   if (hasMore) {
  //     fetchData();
  //   }
  // }, [fetchData, hasMore]);

  const handleScroll = () => {
    let nearBottom = scrollableDiv.current.scrollTop + scrollableDiv.current.clientHeight >=
    scrollableDiv.current.scrollHeight - 100
    
    // if (nearBottom && hasMore && !loading) {

    console.log('nearBottom', nearBottom);

      // fetchData();
  };

  useEffect(() => {
    const div = scrollableDiv.current;
    div.addEventListener('scroll', handleScroll);
    return () => div.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{width: '600px', height: '600px', overflow: 'auto'}} ref={scrollableDiv}>
      {children}
    </div>
  );
}
