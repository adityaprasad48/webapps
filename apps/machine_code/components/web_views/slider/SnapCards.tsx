import React, { useEffect, useRef, useState } from 'react';

const useSlider = ({ slides, autoplay = true, interval = 3000, infinite = true }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (autoplay) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, interval);
    }
    return resetTimeout;
    // eslint-disable-next-line
  }, [current, autoplay, interval, infinite]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? (infinite ? 0 : prev) : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? (infinite ? slides.length - 1 : 0) : prev - 1));
  };

  return { current, nextSlide, prevSlide };
};

const Slider = ({ children, autoplay, interval, infinite }) => {
  const slides = React.Children.toArray(children);
  const { current, nextSlide, prevSlide } = useSlider({ slides, autoplay, interval, infinite });

  return (
    <div style={sliderContainerStyle}>
      <div style={sliderTrackStyle(current)}>
        {slides.map((child, index) => (
          <div key={index} style={slideStyle}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} style={navButtonStyle('left')}>{'‹'}</button>
      <button onClick={nextSlide} style={navButtonStyle('right')}>{'›'}</button>
      <div style={dotsContainerStyle}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              ...dotStyle,
              background: idx === current ? '#333' : '#bbb',
              transform: idx === current ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const sliderContainerStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 600,
  margin: '2rem auto',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  background: '#f8f9fa',
};

const sliderTrackStyle = (current: number): React.CSSProperties => ({
  display: 'flex',
  transition: 'transform 0.6s cubic-bezier(0.4,0.2,0.2,1)',
  transform: `translate3d(-${current * 100}%, 0, 0)`,
  willChange: 'transform',
});

const slideStyle: React.CSSProperties = {
  flex: '0 0 100%',
  width: '100%',
  minHeight: 280,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
  fontSize: 24,
  fontWeight: 500,
  color: '#22223b',
  borderRadius: 16,
  margin: '1rem 0',
  boxSizing: 'border-box',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
};

const navButtonStyle = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'absolute',
  top: '50%',
  [side]: 16,
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.85)',
  border: 'none',
  borderRadius: '50%',
  width: 40,
  height: 40,
  fontSize: 28,
  color: '#22223b',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  zIndex: 10,
  transition: 'background 0.2s',
  outline: 'none',
});

const dotsContainerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 18,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
  zIndex: 5,
};

const dotStyle: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: '#bbb',
  display: 'inline-block',
  transition: 'background 0.2s, transform 0.2s',
};

export default Slider;
