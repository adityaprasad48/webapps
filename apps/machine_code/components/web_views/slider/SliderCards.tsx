
import React from 'react';
import Slider from './SnapCards';
// Make sure the path to Slider is correct. Adjust './Slider' if needed.

const SliderCards: React.FC = () => (
  <Slider autoplay interval={3000} infinite>
    <div style={{ background: 'lightpink', height: '200px', width: '100%' }}>Slide 1</div>
    <div style={{ background: 'lightblue', height: '200px',width: '100%' }}>Slide 2</div>
    <div style={{ background: 'lightgreen', height: '200px',width: '100%' }}>Slide 3</div>
  </Slider>
);

export default SliderCards;