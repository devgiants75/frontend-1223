import React from 'react'
import WebcamDrawingApp from './c_Practice/WebcamDrawingApp'
import Reducer01 from './a_Reducer/Reducer01'
import Reducer02 from './a_Reducer/Reducer02'
import Reducer03 from './a_Reducer/Reducer03'
import Reducer04 from './a_Reducer/Reducer04'
import Custom01 from './b_Custom/Custom01'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>0505</h1>

      <h2>1. useReducer</h2>
      <Reducer01 />
      <Reducer02 />
      <Reducer03 />
      <Reducer04 />


      <h2>2. Custom Hook</h2>
      <Custom01 />


      <h2>3. practice</h2>

      <WebcamDrawingApp />
    </div>
  )
}
