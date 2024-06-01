import React from 'react'
import MockServer01 from './b_MockServer/MockServer01'
import MockServer02 from './b_MockServer/MockServer02'

export default function index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0601
      </h1>

      <h2>1. 통신(HTTP/REST API)</h2>


      <h2>2. Mock Server</h2>
      <MockServer01 />
      <MockServer02 />
      

      <h2>3. Zustand</h2>
      

    </div>
  )
}
