import React from 'react'

/*
! 리액트 라우터: 페이지 이동 기능

? 라우터
: 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
: react-router-dom 패키지를 사용하여 라우팅을 구현

? 설치 방법
: react-router-dom 설치
: npm 명령어를 사용하여 설치하는 외부 기능은 node_modules에 담겨야 하기 때문에 프로젝트 최상위 root에 설치

npm install react-router-dom

? 사용 방법
1. 프로젝트에 라우터 기능을 적용
- 프로젝트 최상단인 index.tsx 파일에서
  BrowserRouter를 적용하여 자식 컴포넌트들이 라우팅 기능을 사용할 수 있도록 작성

? Routes
  : 여러 개의 Route를 담을 수 있는 컴포넌트로 명시
  : 여러 Route를 감싸서 path속성과 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할

? Route
  : 특정 주소(URL)에 컴포넌트를 연결
  : Route 태그 내에
    path속성="주소규칙"
    component속성={보여주고 싶은 컴포넌트}
*/
export default function Route() {
  return (
    <div>Route</div>
  )
}
