import { darken } from 'polished';
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';

//! styled-components 테마 적용
// : ThemeProvider를 사용하여 원하고자하는 styled-components의 맥락에
//   전역 테마를 설정
//   >> 해당 테마를 가지는 모든 자식 컴포넌트에서 접근 가능

//& 전역 테마 설정
// : 객체 구조로 정의
const globalTheme = {
  colors: {
    primary: '#007bff', // 주 색상
    secondary: '#6c757d', // 보조 색상
    success: '#28a745', // 성공 색상
    danger: '#dc3545' // 위험 색상
  },
  fonts: {
    small: '12px', // 작은 폰트 크기
    medium: '16px', // 중간(기본) 폰트 크기
    large: '20px' // 큰 폰트 크기
  }
}

// Button 컴포넌트에 사용할 props 타입 정의
interface ButtonProps {
  // globalTheme.colors 객체의 키(key) 값들 중에 하나를 나타냄
  // : 해당 값들 중 하나가 keyof 변수에 할당될 수 있음
  // >> 전역 테마의 색상 키를 참조
  color: keyof typeof globalTheme.colors;
}

// Button 스타일 컴포넌트 정의
const Button = styled.button<ButtonProps>`
  background-color: ${props => props.theme.colors[props.color] || '#000'};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.large};
  cursor: pointer;

  &:hover {
    background-color: ${props => {
      const color = props.theme.colors[props.color] || '#000'; // 글자 색상 설정
      // polished의 darken 함수를 사용하여 색상을 어둡게 설정
      // >> CSS-in-JS 기법에서 색상을 조정하고 조작하는 함수를 제공 (+ 단위 기능도 포함)
      // >> darken(), lighten(): 첫 번째 인자 alpha(투명도), 두 번째 인자 색상값
      // : npm i polished
      return darken(0.5, color);
    }};
  }
`;

const StateButton = styled.button<{ themeMode: 'light' | 'dark' }>`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
`;

export default function Style04() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const dynamicTheme = {
    colors: {
      background: themeMode === 'light' ? 'white' : '#333',
      text: themeMode === 'light' ? 'black' : 'white',
      primary: '#007bff',
      secondary: '#6c757d'
    },
    fonts: globalTheme.fonts
  }

  return (
    <>
      <hr />
      <ThemeProvider theme={globalTheme}>
        <Button color='primary'>Primary Button</Button>
        <Button color='secondary'>Secondary Button</Button>
      </ThemeProvider>
      <hr />
      
      <ThemeProvider theme={dynamicTheme}>
        <StateButton themeMode={themeMode} onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}>
          상태 활용 버튼(테마 토글)
        </StateButton>
      </ThemeProvider> 

    </>
  )
}
