import React from 'react'
import State01 from './a_State/State01'
import State02 from './a_State/State02'
import State03 from './a_State/State03'
import Practice01 from './b_Practice/Practice01'
import Practice02 from './b_Practice/Practice02'

export default function index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0421</h1>

      <h2>1. State 기본 동작 원리</h2>
      <State01 />
      <State02 />
      <State03 />

      <h2>2. State 연습 문제</h2>
      <Practice01 />
      <Practice02 />
    </div>
  )
}
