import React, { useEffect, useState } from 'react'

//! 부수 효과(Side Effects)
// : 컴포넌트의 '주요 기능(상태 관리, UI 렌더링)' 외에 발생하는 작업
// EX) API 호출, 이벤트 리스너 등록, 수동 DOM 조작 등

//! useEffect
// : React 함수형 컴포넌트에서 부수 효과를 수행하기 위한 Hook(기능)
// : 데이터 가져오기, 구독 설정, 이벤트 등록의 작업 수행
// : 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 설정 가능

//! React 컴포넌트의 '라이프 사이클'
// 1. 마운팅(Mounting)
// : 컴포넌트가 DOM에 처음 삽입될 때 실행
// 2. 업데이트(Updating)
// : 컴포넌트가 재렌더링되는 단계
// : 주로 state(상태) 또는 props(속성)의 변경에 의해 발생
// 3. 언마운팅(Unmounting)
// : 컴포넌트가 DOM에서 제거될 때 실행

//! useEffect와 라이프 사이클
// 마운팅과 업데이트에서 실행할 코드 관리
// , 의존성 배열(deps)을 사용하여 업데이트 시 동작을 제어
// , 반환되는 함수는 언마운팅 시 호출되어 정리작업에 사용

export default function Effects01() {
  const [count, setCount] = useState<number>(0);

  //! useEffect 기본 구조
  // 첫 번째 인자
  // : 부수 효과를 수행하는 함수(콜백함수)

  // 두 번째 인자(의존성 배열[], deps)
  // : 해당 배열의 값이 변경될 때 마다 효과가 다시 실행
  // - 배열이 비워져있는 경우
  //   : 컴포넌트가 마운트 될 때 한 번만 실행
  //   +) 의존성 배열에 값이 있는 경우에도 마운트 시에는 반드시 실행

  // - 정리 함수가 존재할 경우(return 반환)
  //   : 언마운트 시 단 한번만 실행
  useEffect(() => {
    // 해당 콘솔은 count값이 변경될 경우 무조건 실행
    console.log(`카운트가 ${count}로 변경되었습니다.`);

    // 창 크기 변경 이벤트 리스너 등록
    const handleChange = () => {
      console.log('창 크기가 변경되었습니다.');
    };
    window.addEventListener('resize', handleChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleChange);
    }
  }, [count]);

  const handleUpClick = () => {
    setCount(count + 1);
  }
  
  const handleDownClick = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleUpClick}>증가</button>
      <button onClick={handleDownClick}>감소</button>
    </div>
  )
}
