import React, { useState } from 'react'

//! useState의 기본 작동 원리


export default function State01() {

  //? count 상태 관리 (number)
  const [count, setCount] = useState<number>(0);

  //? 이벤트 핸들러 함수 정의
  // : 카운트를 증가시키는 함수
  const handleIncrementHandler = () => {
    // count 값을 직접 증가 X
    // : prevCount로 값을 대체하여 증가!
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={handleIncrementHandler}>증가</button>
    </div>
  )
}
