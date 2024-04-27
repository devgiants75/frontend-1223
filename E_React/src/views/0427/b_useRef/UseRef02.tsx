import React, { useRef, useState } from 'react'



interface ImageGalleryProps {
  images: string[]; // 이미지 URL 배열
}

//! 이미지 갤러리 순환 예제
// useRef를 사용하여 이미지 갤러리 내에서 이미지 순서를 순환
export default function UseRef02({ images }: ImageGalleryProps) {
  // 현재 이미지 인덱스를 상태로 관리
  const [currentImageIndex, setcurrentImageIndex] = useState<number>(0);

  // 이미지 요소에 대한 참조
  const imageRef = useRef<HTMLImageElement>(null);

  const handleNextClick = () => {

  }

  return (
    <div
      style={{
        margin: '10px'
      }}
    >
      <h3>이미지 갤러리</h3>
      <img 
        ref={imageRef}
        src={images[currentImageIndex]}
        alt={`Display number ${currentImageIndex + 1}`} 
        style={{
          width: '400px',
          height: '400px',
          transition: 'opacity 0.3s'
        }}
      />
      <button onClick={handleNextClick}>다음 이미지</button>
    </div>
  )
}
