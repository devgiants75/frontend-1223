import React from 'react'
import { useCounter } from './hooks/useCounter';

//! 메인 컴포넌트
// : 실제 화면에 출력될 로직 
// - Custom Hook을 사용하는 컴포넌트
// - Custom Hook은 일반 React Hook 사용법과 동일
export default function Custom01() {
  //? 객체의 구조 분해 할당
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}
