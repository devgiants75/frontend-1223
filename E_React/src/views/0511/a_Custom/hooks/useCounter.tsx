import React, { useState } from "react";

//! Custom Hook (정의 컴포넌트)

//& 1. Custom Hook 정의
// : React의 기본 Hook (useState, useEffect 등)을
//   ,사용하여 작성되는 재사용 가능한 로직의 모음

//& 2. Custom Hook 특징
// - 보통 use로 시작하는 함수로 정의 (권장사항)
// - 함수 내에서 다른 Hook을 호출하고, 해당 결과를 반환

//? 초기값을 매개변수로 전달받고, 카운터를 증가/감소시키고 초기화하는 함수들을 반환
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
