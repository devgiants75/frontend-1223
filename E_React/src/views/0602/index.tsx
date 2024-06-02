import React from 'react'
import Zustand01 from './b_Zustand/Zustand01'
import Zustand02 from './b_Zustand/Zustand02'

export default function index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0602
      </h1>

      <h2>1. Practice</h2>


      <h2>2. Zustand</h2>
      <Zustand01 />
      <Zustand02 />
      

    </div>
  )
}
