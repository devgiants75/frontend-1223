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

//! useState vs. useReducer

//? useState
// : React의 가장 기본적인 상태 관리 Hook
// : 간단한 상태 로직에서 사용하기 적합
// - 상태와 이 상태를 업데이트하는 함수를 제공

//* const [state, setState] = useState(initialState);

// - state: 현재 상태 값
// - setState: 상태를 업데이트하는 함수
// - initialState: 상태의 초기 값

//? useReducer
// : 복잡한 상태 로직을 관리하는 데 useState보다 더 적합
// : 상태 업데이트 로직을 외부에서 선언할 수 있으므로 테스트와 재사용이 용이
// - reducer 함수와 초기 상태를 기반으로 상태와 dispatch 함수를 제공

//* const [state, dispatch] = useReducer(reducer, initialState);

// useReducer는 세 가지 주요 요소로 구성

// - Reducer 함수: 상태 변경 로직을 포함하고, 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환
// >> 상태 변경 로직을 포함하는 함수
// >> 이전 상태(state)와 액션 객체(action)를 인자로 받아 새로운 상태를 반환

// - Initial State: 리듀서의 초기 상태를 정의
// >> 상태의 초기 값. 컴포넌트가 처음 렌더링 될 때 사용되는 상태

// - Dispatch 함수: 액션을 발생시켜 상태를 업데이트하는 함수
// >> 이 함수에 액션을 전달하면 리듀서 함수가 호출되어 새로운 상태를 계산

// state: 현재 상태 값. useReducer를 통해 관리되는 상태

//& useReducer 사용 이유와 적합한 상황
// 1) 사용 이유
// 복잡한 상태 로직 관리: 여러 값이 연동되어 변경되어야 하는 복잡한 상태 로직을 관리할 때 유용
// 중앙 집중식 관리: 상태 업데이트 로직을 한 곳에 모아서 관리할 수 있어 코드의 가독성과 유지 관리가 쉬움
// 테스트 용이성: 리듀서 함수는 순수 함수이므로 테스트가 용이

// 2) 적합한 상황
// 복수의 하위 값이 있는 복잡한 상태 객체: 상태가 다중 차원적이며 여러 하위 값들을 포함하는 경우
// 상태 로직이 여러 이벤트에 걸쳐 있을 때: 같은 상태에 대한 여러 변경이 다양한 이벤트에 의해 발생하는 경우
// 전역 상태의 로컬 관리: 컴포넌트의 로컬 상태로 전역 상태를 효과적으로 모방하고 싶을 때

type CounterState = {
  count: number;
};

type CounterAction = {
  type: 'increment' | 'decrement';
};

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action');
  }
}

//# Reducer 동작 방식
//# 1. 초기화
// CounterWithReducer 컴포넌트가 렌더링 될 때, useReducer 훅이 호출

// useReducer의 첫 번째 인자로는 reducer 함수가, 두 번째 인자로는 상태의 초기값 (initialState)이 주어짐
// >> 이 때 initialState는 { count: 0 }로 설정되어 있어 카운터의 초기 값은 0

// useReducer는 현재 상태를 나타내는 state와 액션을 디스패치할 수 있는 dispatch 함수를 반환
// >> 초기 상태에서는 state.count의 값이 0

//# 2. 사용자 인터랙션
// 사용자가 "Increase" 버튼을 클릭하면, dispatch 함수가 { type: 'increment' } 액션을 받아 실행

// "Decrease" 버튼 클릭 시, dispatch 함수는 { type: 'decrement' } 액션을 실행

//# 3. 액션 처리
// dispatch 함수에 의해 전달된 액션은 reducer 함수로 이동
// reducer 함수는 전달된 action.type에 따라 다른 동작을 수행
// - increment 타입의 경우, 현재 state.count 값에 1을 더한 새로운 상태 ({ count: state.count + 1 })를 반환
// - decrement 타입의 경우, 현재 state.count 값에서 1을 뺀 새로운 상태 ({ count: state.count - 1 })를 반환

//# 4. 상태 업데이트 및 리렌더
// reducer 함수에서 반환된 새로운 상태는 state에 반영
// >> 이 변경으로 인해 CounterWithReducer 컴포넌트는 자동으로 리렌더링

// 컴포넌트가 리렌더링되면서 새로운 state.count 값이 화면에 표시
// >> 이 값은 사용자가 "Increase" 또는 "Decrease" 버튼을 클릭할 때마다 업데이트

//# 5. 에러 처리
// 만약 dispatch가 처리하지 못하는 액션 타입을 받게 되면, reducer 함수의 default 케이스에 의해 에러가 발생하고, 이는 애플리케이션의 안정성을 위해 중요

export default function Reducer01() {
  const [count, setCount] = useState(0);  // 카운트 상태 초기화

  //* Reducer 사용 코드
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    setCount(count + 1);  // 카운트 증가 함수
  };

  const handleDecrement = () => {
    setCount(count - 1);  // 카운트 감소 함수
  };

  return (
    <>
      <div>
        <h1>useState 상태 관리</h1>
        <h2>Current Count: {count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <hr />
      <div>
        <h1>useReducer 상태 관리</h1>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
      </div>
    </>
  );
}
