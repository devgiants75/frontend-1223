import React, { useState } from 'react';

//! 리액트와 일반 TS의 차이
// 간단한 카운터 예제
// : UI 컴포넌트가 클래스 또는 함수 형태로 작성
// : 함수형 컴포넌트 사용을 권장
// : 컴포넌트를 기반으로 UI와 상태관리를 구현

export default function React02() {
  // 리액트에서 제공하는 기능을 사용
  // : 데이터의 상태 관리에 대한 기능
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  // return의 ()소괄호 내에 HTML 문서를 작성
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
    </div>
  )
}
