import React, { ReactNode, createContext, useState } from 'react'

//! 컨텍스트 생성
//? 1. 테마 타입을 정의
type Theme = 'light' | 'dark';

//? 2. ThemeContext 생성 및 초기값 설정
const ThemeContext = createContext<Theme>('light');

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // 테마 변경 함수
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>테마 전환 토글</button>
        <div style={{
          background: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white'
        }}>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
