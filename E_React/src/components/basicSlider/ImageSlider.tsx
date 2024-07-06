import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css'; // 스타일 파일을 별도로 만듭니다.

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(0)`;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isTransitioning && currentIndex === images.length && sliderRef.current) {
      sliderRef.current.style.transition = 'transform 1s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
    }
  }, [currentIndex, isTransitioning, images.length]);

  useEffect(() => {
    if (sliderRef.current && isTransitioning) {
      sliderRef.current.style.transition = 'transform 1s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="slider">
      <div className="slider-images" ref={sliderRef} onTransitionEnd={handleTransitionEnd}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        {/* 첫 번째 이미지를 마지막에 복제하여 무한 루프 효과를 만듭니다. */}
        <div className="slide">
          <img src={images[0]} alt="Slide 0" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
