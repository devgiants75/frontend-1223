import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length + 1) {
      setCurrentIndex(1);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(-100%)`;
      }
    } else if (currentIndex === 0) {
      setCurrentIndex(images.length);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(-${images.length * 100}%)`;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (sliderRef.current && isTransitioning) {
      sliderRef.current.style.transition = 'transform 1s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="slider">
      <div className="slider-images" ref={sliderRef} onTransitionEnd={handleTransitionEnd}>
        <div className="slide">
          <img src={images[images.length - 1]} alt={`Slide ${images.length - 1}`} />
        </div>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <div className="slide">
          <img src={images[0]} alt="Slide 0" />
        </div>
      </div>
      <button className="prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
