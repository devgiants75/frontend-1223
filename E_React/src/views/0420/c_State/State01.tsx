import React, { useState } from 'react'

/*
! useState
: React에서 제공하는 Hook 중 하나
: 함수형 '컴포넌트' 내에서 상태를 관리 가능
  (컴포넌트 단위의 상태 관리)

>> Hook을 통해 상태값을 선언
>> 해당 상태값을 업데이트하는 함수를 제공받음
>> 해당 함수는 비동기적 처리를 기본으로 진행
>> 상태 변경 시 컴포넌트의 재렌더링을 유발

*/
export default function State01() {

  //! useState의 기본 구문
  // const [state, setState] = useState(initialState);

  // - state: 현재의 상태값
  // - setState: 상태를 업데이트하는 함수
  //   (관례상 'set + 현재 상태값'으로 명명)
  // - initialState: 상태의 초기값

  // >> hook은 React 내부의 함수 기능이기 때문에
  //    : React에서 import 해서 사용

  // 상태에 타입 정의
  // useState 뒤에 제네릭으로 상태값의 타입 지정
  const [count, setCount] = useState<number>(0); // 초기 상태값 0
  


  return (
    <div>State01</div>
  )
}
