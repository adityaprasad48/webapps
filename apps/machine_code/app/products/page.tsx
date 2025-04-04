'use client'

import { useEffect,useState } from 'react'
import styles from "./randomproduct.module.css";
import CursorFollow from '../../components/CursorFollow';


export default function RandomProduct() {
  const [random, setRamdom] = useState(1);
  const [product, setProduct] = useState(null);

  const handleClick = () => { 
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRamdom(randomNum);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${random}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [random])


  // get position of cursor
  const [cursor, setCursor] = useState({x: 0, y: 0});

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY
    })
  }

  console.log(cursor)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }
  ,[])

 

  return <div>
    <CursorFollow bg="#000" x={cursor.x} y={cursor.y}/>
    <div className={styles.container}>
      <button className={styles.productBtn} onClick={handleClick}>Get Product</button>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  </div>
}