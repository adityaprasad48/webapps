import { useEffect, useState } from 'react';

 export const useScrolledEnd = (ref,callback) => {
  const [reached, setReached] = useState(false);
    
  useEffect(() => {
    const scrollableDiv = ref.current; // Replace with your scrollable div's class or ID
    const handleScroll = () => {
      const nearBottom = scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight - 100;

      callback();
      // setReached(nearBottom);
    };

    scrollableDiv.addEventListener('scroll', handleScroll);
    return () => scrollableDiv.removeEventListener('scroll', handleScroll);
  }, []);

  return reached;


}
