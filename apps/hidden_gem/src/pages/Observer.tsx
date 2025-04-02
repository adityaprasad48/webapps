import { useEffect, useState, useRef } from "react";

const LazyImage = ({ src, alt, width, height }: { src: string; alt: string , width:number, height:number}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return <img ref={imgRef} src={isVisible ? src : ""} alt={alt} width={width} height={height} style={{ background: 'lightgray', }} />

};

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItems((prev) => [...prev, ...Array.from({ length: 5 }, (_, i) => prev.length + i + 1)]);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);


  return <div className="items">
      {items.map((item) => {
        return <div key={item} className="item">{item}</div>
      })}
      <p ref={loaderRef} style={{height: '50px'}}>...Loading</p>
    </div>

}

export default function Observer() {
  return (
    <div>
      {/* <h2>Scroll Down to Load Image</h2>
      <div style={{ height: "100vh" }} />
      <LazyImage height={300} width={300} src="https://picsum.photos/300/300" alt="Lazy Loaded" /> */}

      <InfiniteScroll/>
    </div>
  );
}
