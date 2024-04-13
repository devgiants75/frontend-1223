import React from 'react'

/*
! 플러그인(확장)
- ES7+ React Snippet
  : react 문법 코드를 쉽게 작성하기 위한 스니펫 설정 기능
  스니펫(Snippet)
    - 재사용 가능한 소스 코드, 기계어 등을 작업 단위로 묶어서 사용할 수 있게 하는 기능 

  ? 함수형 컴포넌트 제작 스니펫
  rfc
  rfce
*/ 

/*
! 리액트 동작 원리

? CRP 정의
  (Crtical Rendering Path)
: 웹 브라우저가 HTML, CSS, JS 등의 리소스를 받아서 픽셀로 변화하여 화면에 렌더링하는 과정

1. 문서 파싱 및 DOM 생성 (HTML)
  : 브라우저는 HTML 문서를 받아 파싱(분석)하고, 이를 DOM 트리로 변환
  : JSX가 Babel을 통해 JS(ES5)로 변환되어 실행

- CSSOM 생성
  : CSS 파일과 스타일 태그(<style />) CSSOM 트리로 변환

- JS 처리
  : 컴포넌트 로직과 상태 관리가 이루어짐

- 렌더 트리 형성
  : DOM과 CSSOM이 결합되어 렌더 트리가 형성 
  : 화면에 실제 표시될 요소 포함

- 레이아웃(Reflow)
  : 렌더 트리를 기반으로 각 요소의 크기와 위치를 계산

- 페인트
  : 계산된 레이아웃에 따라 요소들을 화면에 그림

- 합성
  : 여러 레이어를 합성하여 최종 화면을 사용자에게 보여줌.
*/

function React01() {
  return (
    <div>React01</div>
  )
}

export default React01;
