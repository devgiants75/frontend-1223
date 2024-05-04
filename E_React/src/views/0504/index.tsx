import React from 'react'
import Todo from './c_practice/Todo'
import WebcamDrawingApp from './c_practice/WebcamDrawingApp'
import UseMemo01 from './a_useMemo/UseMemo01'
import UseCallback01 from './b_useCallback/UseCallback01'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0504</h1>

      <h2>1. useMemo</h2>
      <UseMemo01 />

      <h2>2. useCallback</h2>
      <UseCallback01 />

      <h2>3. practice</h2>
      <Todo />
      <WebcamDrawingApp />

    </div>
  )
}
