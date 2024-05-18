import React from 'react'
import styled from 'styled-components';

//! CSS-in-JS의 라이브러리
// : JS를 사용하여 컴포넌트 스타일을 적용하는 방식
// >> CSS의 JS화

//? CSS-in-JS의 특징
// 1. 동적 스타일링
// : 스타일 자체를 동적 생성하고 적용
//   , 상태나 props에 따라 스타일 변경 가능
// 2. 서버 사이드 렌더링 지원
// : 초기 로딩 시에도 스타일링이 적용된 상태로 컨텐츠 제공이 가능

//? CSS-in-JS의 종류
// 1. styled-components
// 2. emotion

//! styled-components
//? 1. 설치
// : node_modules가 최상위에 있는 폴더에서 설치
// : npm install styled-components

// 1-1. 스타일드 컴포넌트 쉽게 사용하는 방법
// - vscode-styled-components 확장 프로그램 설치
// - css 자동완성 + 타입 명시를 위한 styled-components 타입 정의
//   : npm i @types/styled-components

//? 2. 기본 사용법
// : styled 내에서 생성한 html 태그를 컴포넌트에 할당하는 형식
// : 스타일링은 html 태그명 옆의 ``(백틱) 내부에서 정의

//& 버튼 스타일 생성
const Button = styled.button`
  background-color: green;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* 현재 요소를 참조: &(앰퍼샌드) */
  &:hover {
    background-color: darkgreen;
  }
`;

//? 3. 프롭스(props)를 활용한 동적 스타일링
// + 타입스크립트 사용 시 전달되는 props의 타입 명시가 필수!

interface ButtonProps {
  // primary 속성은 선택적 값이면서 boolean 타입
  primary?: boolean;
}

// 스타일드 컴포넌트의 프롭스 타입 명시는
// : html 태그 뒤 제네릭<> 안에 명시
const PropsButton = styled.button<ButtonProps>`
  background-color: ${props => props.primary ? 'navy' : 'gray'};
  color: white;
  padding: 10px;
  border-radius: 5px;

  /* 
    해당 버튼에 호버 시 primary 속성이 존재하면 blue
    , 존재하지 않으면 darkgray로 설정 
  */
  &:hover {
    background-color: ${props => props.primary ? 'blue' : 'darkgray'};
  }
`;

//? 글로벌 스타일 적용
// : 전체 애플리케이션 또는 특정 부분에 걸쳐 공통 스타일 적용
// : createGlobalStyle 값을 사용(styled-components에서 가져오기)

export default function Style03() {
  return (
    <div>
      <Button>스타일드 컴포넌트로 구현하는 버튼</Button>
      <PropsButton primary>프롭스를 사용하는 스타일드 컴포넌트 버튼1</PropsButton>
      <PropsButton>프롭스를 사용하는 스타일드 컴포넌트 버튼2</PropsButton>
    </div>
  )
}
