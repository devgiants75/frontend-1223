import React from 'react'

// Filters 컴포넌트의 props 타입 정의
interface FiltersProps {
  // 필터 상태를 변경하는 함수 타입
  setFilter: (filter: 'all' | 'completed' | 'active') => void;
}

export default function Filters({ setFilter }: FiltersProps) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>ALL</button>
      <button onClick={() => setFilter('completed')}>COMPLETED</button>
      <button onClick={() => setFilter('active')}>ACTIVE</button>
    </div>
  )
}
