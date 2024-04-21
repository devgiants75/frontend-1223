import React from 'react'
import State01 from './a_State/State01'
import State02 from './a_State/State02'

export default function index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0421</h1>

      <h2>1. State 기본 동작 원리</h2>
      <State01 />
      <State02 />
    </div>
  )
}
