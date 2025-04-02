'use client'
import { useEffect,useState, useCallback, useRef } from 'react'

export default function Time() {

  const [sec, setSec] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const [newSec, setNewSec] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
      setNewSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sec]);


  useEffect(() => {
    if (sec % 60 === 0 && sec !== 0) {
      setMinute((prev) => prev + 1);
      setSec(0);
    }
  }, [sec]);

  useEffect(() => {
    if (minute % 60 === 0 && minute !== 0) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
  }, [minute]);

const hours_new = Math.floor(newSec / 3600);
const minutes_new = Math.floor((newSec % 3600) / 60);
const seconds_new = newSec % 60;

  return <div>
      <h2>Time</h2>
      <h1>Seconds: {sec}</h1>
      <h1>Minute: {minute}</h1>
      <h1>Hour: {hour}</h1>


      <h1 style={{border: '2px solid orange'}}>{hours_new}:{minutes_new}:{seconds_new}</h1>
   </div>
}


 