'use-client'
import { useEffect, useRef , useState} from "react";

function CursorFollow({ x, y }) {
  const circleRef = useRef(null);
  const prevX = useRef(x);
  const prevY = useRef(y);
  const timerRef = useRef(null);
  const [display, setDisplay] = useState('block');

  useEffect(() => {
    // Clear any existing timer
    clearTimeout(timerRef.current);

    // Check if x and y have remained the same
    if (prevX.current === x && prevY.current === y) {
      timerRef.current = setTimeout(() => {
       setDisplay('none');
      }, 1000);
    } else {
      // If x or y changed, reset display
      if (circleRef.current) {
        setDisplay('block');
      }
    }

    // Update previous values
    prevX.current = x;
    prevY.current = y;

    return () => clearTimeout(timerRef.current);
  }, [x, y]);

  console.log('display', display);

  console.log('prevX', prevX.current, 'prevY', prevY.current);

  return <div ref={circleRef} style={{ width: 50, height: 50, display, background: "red", borderRadius: "50%", position: 'absolute', left: x + 'px', top: y + "px" }} />;
}

export default CursorFollow;
