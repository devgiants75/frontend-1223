import React from 'react'
import Review01 from './a_Review/Review01'
import Handler01 from './b_Handler/Handler01'
import Handler02 from './b_Handler/Handler02'
import Handler03 from './b_Handler/Handler03'
import Handler04 from './b_Handler/Handler04'
import Handler05 from './b_Handler/Handler05'
import PracticeHandler from './b_Handler/Practice'
import State01 from './c_State/State01'

export default function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'pink'
      }}>
        0420 수업 자료
      </h1>
      <h2>1. Review</h2>
      <Review01 />

      <h2>2. Handler</h2>
      <Handler01 />
      <Handler02 />
      <Handler03 />
      <Handler04 />
      <Handler05 />
      <PracticeHandler />

      <h2>3. State</h2>
      <State01 />

    </div>
  )
}
