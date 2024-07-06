import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
    images: string[];
}

export default function ImageSliderAuto({ images }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 2000); // 2초마다 이미지 변경
  
      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    }, [images.length]);
  
    const visibleImages = images.slice(currentIndex, currentIndex + 5);
    if (visibleImages.length < 5) {
      visibleImages.push(...images.slice(0, 5 - visibleImages.length));
    }
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', overflow: 'hidden', width: '80%' }}>
          {visibleImages.map((image, index) => (
            <div key={index} style={{ flex: '0 0 20%' }}>
              <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    );
}
