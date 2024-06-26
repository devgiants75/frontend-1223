import React from 'react'
import GoalApp from './a_array/GoalApp'
import Effects01 from './b_Effects/Effects01'
import Effects02 from './b_Effects/Effects02'
import Effects03 from './b_Effects/Effects03'
import Practice01 from './c_Practice/Practice01'
import Practice02 from './c_Practice/Practice02'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0428</h1>

      <h2>1. 배열 렌더링(State&Ref)</h2>
      <GoalApp />

      <h2>2. 리액트 부수 효과(Effects)</h2>
      {/* 
      b_Effects
      >> Effects01.tsx
      */}
      <Effects01 />
      <Effects02 />
      <Effects03 />

      <h2>3. 리액트 부수 효과 예제</h2>
      {/*  
      c_Practice
      >> Practice01.tsx
      */}
      <Practice01 />
      <Practice02 />
    </div>
  )
}
