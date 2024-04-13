import React from 'react'

/*
! 컴포넌트(Component)
: 사용자 인터페이스(UI)를 구축하는 기본 요소

! 컴포넌트 사용 방법
1. 컴포넌트 내보내기(export default)

2. 함수 정의 
- 컴포넌트는 함수형 또는 클래스형으로 제작 가능
- 함수형 컴포넌트 제작을 권장
: JS의 일반 함수 형태와 동일
  , 함수명을 반드시 대문자로 시작
: rfc 스니펫 사용 시 
  - 파일명으로 함수명이 구현
  - 파일명 자체를 대문자로 사용하여 제작
  - 폴더의 메인이되는 파일인 index.tsx의 경우
    소문자 index를 사용해야만 디렉토리의 메인 파일로 인식

3. 마크업 추가
: src와 alt 속성을 가진 img 태그를 반환

>> JSX
  : HTML처럼 작성 되지만 JS코드로 분류
  : JS내에서 마크업을 내장할 수 있도록 함

*/

export function Img() {
  // HTML 코드 내에서 문법 사용 시
  // : 중괄호 내에서 작성

  // 자바스크립트 문법 내에서 HTML 코드 작성 시
  // : 소괄호 내에서 작성
  // : 컴포넌트 함수 내에서 렌더링 할 HTML 코드는
  //   return 반환문 내에 ()소괄호 지정 후 작성
  return (
    <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" alt="강아지" width={300} />
  );
}

// 4. 정의된 컴포넌트 사용
export default function Component01() {
  // 컴포넌트 사용 시 함수 컴포넌트 명으로 태그 작성
  // - 마크업이 한 개인 경우 return 키워드와 동일한 줄에 작성 가능
  // return <Img />

  // - return 키워드와 동일한 줄에서 컴포넌트 호출이 이루어지지 않거나 여러 개의 컴포넌트를 호출 할 경우 
  // , 반드시 () 소괄호로 감싸서 사용
  return (
    <div>
      {/*  
        return에서 태그 사용 시
        - 소문자 사용 시: React가 HTML 태그로 인식
          (HTML에 미리 정의된 태그)

        - 대문자 사용 시: React가 컴포넌트로 인식
          (React 내에서 사용자 정의된 태그)
        
      */}
      {/* p태그, img태그 - HTML 태그 */}
      <p>강아지 이미지 컴포넌트 사용</p>
      <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" alt="HTML img 강아지" width={100} />

      <hr />
      {/* Image 컴포넌트 - 사용자 정의 태그 */}
      <Img />
      <Img />
    </div>
  );
}
