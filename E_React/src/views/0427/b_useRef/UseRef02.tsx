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
    // 다음 이미지로 인덱스를 순환
    // 0, 1, 2, 3, 4
    // % images.length
    // : 인덱스가 이미지 배열의 끝을 넘어가면 다시 0으로 돌아오도록 설정
    // : 이미지 배열의 길이를 초과하지 않고 순환하는 이미지를 생성
    const nextIndex = (currentImageIndex + 1) % images.length;
    setcurrentImageIndex(nextIndex);

    // 참조된(보여지는) 이미지 요소에 애니메이션 효과를 적용
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = '1';
        }
      }, 300);
    }
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
          width: '300px',
          height: '300px',
          transition: 'opacity 0.3s'
        }}
      />
      <button onClick={handleNextClick}>다음 이미지</button>
    </div>
  )
}
