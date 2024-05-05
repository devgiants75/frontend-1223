import React, { useReducer, useState } from 'react'

//! React 상태 관리
// : 컴포넌트의 동작과 렌더링을 제어하는 중요한 부분

//& 상태
// 컴포넌트의 변경 가능한 데이터를 의미
// : 사용자의 액션, 네트워크 응답 등에 의해 변경

//? 왜 상태 관리가 필요한가?
// 동적 UI 구현: 사용자의 입력, 서버 응답, 시간 경과 등 다양한 이벤트에 따라 UI를 업데이트해야 할 때 변화된 상태가 필요
// 컴포넌트 간의 데이터 공유: 서로 다른 컴포넌트 간에 상태를 공유하고, 이 상태를 기반으로 서로 영향을 주고받기 위해 각자의 컴포넌트가 상태를 관리하고 있어야 함

// >> 주로 사용자 인터페이스의 동적 요소를 관리하기 위해 사용
//   예를 들어, 입력 폼, 개별 컴포넌트의 활성화 상태 등

//? 상태 관리의 예시
// 폼 입력 값 관리
// 사용자 인터페이스 상태 (예: 열려 있는 드롭다운 메뉴)
// 사용자 세션 데이터 (로그인 상태 등)

//& useReducer 사용 이유와 적합한 상황
// 1) 사용 이유
// 복잡한 상태 로직 관리: 여러 값이 연동되어 변경되어야 하는 복잡한 상태 로직을 관리할 때 유용
// 중앙 집중식 관리: 상태 업데이트 로직을 한 곳에 모아서 관리할 수 있어 코드의 가독성과 유지 관리가 쉬움
// 테스트 용이성: 리듀서 함수는 순수 함수이므로 테스트가 용이

// 2) 적합한 상황
// 복수의 하위 값이 있는 복잡한 상태 객체: 상태가 다중 차원적이며 여러 하위 값들을 포함하는 경우
// 상태 로직이 여러 이벤트에 걸쳐 있을 때: 같은 상태에 대한 여러 변경이 다양한 이벤트에 의해 발생하는 경우
// 전역 상태의 로컬 관리: 컴포넌트의 로컬 상태로 전역 상태를 효과적으로 모방하고 싶을 때

//! useState VS useReducer

//? 1. useState
// : React에서 가장 기본적인 상태 관리 Hook
// : 간단한 상태 로직에서 사용하기 적합
// - 상태와 해당 상태를 업데이트 하는 함수를 제공

//* const [state, setState] = useState<T>(initialValue);

//? 2. useReducer
// : 복잡한 상태 로직을 관리하는 데 useState보다 적합
// : 상태 업데이트 로직을 외부에서 선언 가능 - 테스트와 재사용성이 용이
// - reducer 함수와 초기 상태를 기반으로 상태와 dispatch 함수를 제공

//* const [state, dispatch] = useReducer(reducer, initialValue);

// - reducer 함수
// : 상태 변경 로직을 포함
//   , 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환

// - initialValue
// : 리듀서의 초기 상태를 정의

// - dispatch 함수
// : 액션을 발생시켜 상태를 업데이트하는 함수
// : 해당 함수에 액션을 전달 >> 리듀서 함수가 호출되어 새로운 상태를 계산

// - state
// : 현재 상태 값, useReducer를 통해 관리되는 상태

type CounterState = {
  count: number;
}

type CounterAction = {
  type: 'increment' | 'decrement';
}

const initialValue: CounterState = {
  count: 0
}

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('다룰 수 없는 액션입니다.');
  }
}

export default function Reducer01() {
  //& useState를 사용한 카운터 상태 관리
  const [count, setCount] = useState<number>(0);

  //& useReducer를 사용한 카운터 상태 관리
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // 카운트 증가 함수
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1); // 카운트 감소 함수
  }

  return (
    <div>
      <h1>useState 상태 관리</h1>
      <h2>현재 카운트 값: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <hr />
      <h1>useReducer 상태 관리</h1>
      <h2>현재 카운트의 값: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
    </div>
  )
}
