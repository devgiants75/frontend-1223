import React from 'react'
import puppy02 from '../../../assets/images/puppy02.jpg'

// puppy02 이미지를 생성
// : 픽사베이에서 이미지 다운로드
// : images 폴더 내에 puppy02로 저장

// Component03 컴포넌트 내에 
// : img 태그를 사용하여 - puppy02를 마크업

// Component03 컴포넌트를 index.tsx 파일에서 호출(사용)
export default function Component03() {
  return (
    <div>
      <img src={puppy02} alt="강아지02" width={200} />
    </div>
  )
}
