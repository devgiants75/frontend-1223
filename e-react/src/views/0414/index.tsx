import React from 'react'
import JSX01 from './a_JSX/JSX01'
import JSX02 from './a_JSX/JSX02'
import JSX03 from './a_JSX/JSX03'
import Props01 from './b_Props/Props01'
import Props02 from './b_Props/Props02'

export default function index() {
  return (
    <div>
      <h1 
        // CSS의 경우 속성 사용 시
        // : background-color로 지정
        style={{ backgroundColor: 'pink' }}
      >
        0414 수업자료
      </h1>
      <h2>1. JSX</h2>
      <JSX01 />
      <JSX02 />
      <JSX03 />

      <h2>2. Props</h2>
      <Props01 />
      <Props02 />

      <h2>3. 조건부 렌더링</h2>
    </div>
  )
}
