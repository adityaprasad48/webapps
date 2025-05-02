'use client';

import React from 'react'

const FillBoxByDrag = () => {

  
  return (
    <div className='shadow-md'>
      <div className="box relative h-[300px] w-[500px] bg-white">
        <div  className='box_in absolute w-1/2 h-full bg-amber-600 z-10'></div>
        <div className="line absolute w-[10px] h-full bg-blue-500 z-20 cursor-grab"></div>
      </div>
      <input type="range" />
      <input type="range" min="0" max="100" value="50" className="slider" />
    </div>
  )
}

export default FillBoxByDrag