import React from 'react'
import JSX01 from './a_JSX/JSX01'
import JSX02 from './a_JSX/JSX02'

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

      <h2>2. Props</h2>

      <h2>3. 조건부 렌더링</h2>
    </div>
  )
}
