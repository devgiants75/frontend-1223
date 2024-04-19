import React from 'react'
// { Img }: export 내보내기로 가져오는 컴포넌트
// Component01: export default 내보내기로 가져오는 컴포넌트
import ExportDefault, { Img } from './Component01';

export default function Component02() {
  return (
    <div>
      <h3>Component02 컴포넌트</h3>

      <Img />

      {/* 
        export default로 내보내진 컴포넌트는 컴포넌트명 변경이 가능 
      */}
      <ExportDefault />
    </div>
  )
}
