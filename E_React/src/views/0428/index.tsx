import React from 'react'
import GoalApp from './a_array/GoalApp'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0428</h1>

      <h2>1. 배열 렌더링(State&Ref)</h2>
      <GoalApp />

      <h2>2. 변경 가능한 참조 객체 생성</h2>

      <h2>3. 배열 렌더링</h2>
    </div>
  )
}
