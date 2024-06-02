import React from 'react'
import { create } from 'zustand';

//! Zustand 상태관리 프로그램
// : React Hooks을 기반
// : 최소한의 API를 사용하여 상태를 쉽게 생성하고 접근
// >> 상태를 단일 저장소 store에 저장
//    , 해당 store를 가져와서 컴포넌트에 자동으로 업데이트 전달

//? Zustand의 장점
// - 간결성: 최소한의 코드로 상태 관리 가능
// - 유연성: 여러 상태 조각들을 하나의 저장소에서 결합

//? Zustand 사용법
// 설치
// : npm install zustand

//? Zustand 예시 코드
// - 폴더/파일 단위 분리 X

//# 1. store 생성 (전역 상태가 담길 저장소)

// store
// : 애플리케이션의 상태를 저장하는 곳
// : create 함수를 사용하여 생성
// >> 애플리케이션의 상태와 상태를 업데이트 하는 함수들이 포함

//* State의 타입 선언
// : 카운트 상태 저장
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

//* create 함수의 파라미터에 함수 형태로 state의 초기값과 state를 변경하는 함수를 선언

// 1) set 함수
// : Zustand 스토어의 상태를 업데이트 하는 데 사용
// : 해당 함수는 '이전 상태를 인수로 받아 새로운 상태를 반환하는 함수'를 인자로 받음

// 2) state
// : Zustand 스토어의 현재 상태
// : set 함수 내에서 이전 상태에 접근할 때 사용
// EX) state.count는 현재 count 값에 접근하는 방법

// 스토어 명명방법
// 사용자 데이터 전역 상태 관리: useUserStore
// 제품 데이터 전역 상태 관리: useProductStore

// 스토어 파일 명명 방법
// 사용자 데이터 전역 상태 관리: user.store.ts
// 제품 데이터 전역 상태 관리: product.store.ts

export const useStore = create<CountState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}));

function Component() {
  const {count, decrement} = useStore();

  return (
    <>
      <p>{count}</p>
      <button onClick={decrement}>감소</button>
    </>
  )
}

export default function Zustand01() {

  // store에 있는 속성 중 해당 컴포넌트에서 사용할 속성을
  // , 구조 분해 할당으로 가져옴
  const { count, increment } = useStore();

  // store의 원하는 특정 부분만 선택하여 사용
  const otherCount = useStore(state => state.count);
  const otherIncrement = useStore(state => state.increment);

  return (
    <div>
      {/* 외부 파일의 컴포넌트로 생각 */}
      <Component />

      <p>{count}</p>
      <p>{otherCount}</p>

      <button onClick={increment}>증가</button>
      <button onClick={otherIncrement}>추가 증가</button>
    </div>
  )
}
