import React from 'react'
import React01 from './a_React/React01'
import React02 from './a_React/React02'
import Route from './b_Route/Route'
import Component01 from './c_component/Component01'
import Component02 from './c_component/Component02'
import Component03 from './c_component/Component03'

// 0413 폴더 내의 전체 컴포넌트를 담는 폴더
export default function Index() {
  return (
    <>
      <h2>a_React</h2>
      <React01 />
      <React02 />

      <h2>b_Route</h2>
      <Route />

      <h2>c_Component</h2>
      <Component01 />
      <Component02 />
      <Component03 />
    </>
  )
}
