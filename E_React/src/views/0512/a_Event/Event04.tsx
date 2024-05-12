import React, { useState } from 'react'

//! 커스텀 이벤트 핸들러 정의
// : 표준 이벤트 핸들러를 확장하거나 특수한 로직을 포함하는 설계 함수

//? 커스텀 클릭 이벤트 핸들러 타입
interface Props {
  onCustomClick: (data: string) => void;
}

const CustomButton = ({ onCustomClick }: Props) => {
  const handleClick = () => {
    const data = '데이터';
    onCustomClick(data); // 커스텀 데이터와 함께 이벤트 실행
  }

  return <button onClick={handleClick}>클릭</button>
}

//! 고차원 함수의 이벤트 핸들링
// 고차원 함수
// : 다른 함수를 인자로 받거나 함수를 결과로 반환하는 함수
// : 이벤트 핸들러를 동적으로 생성하는 데 사용
const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default function Event04() {
  const { count, increment, decrement } = useCounter();

  const handleCustomClick = (data: string) => {
    console.log(`자식요소로 부터 전달받은 데이터: ${data}`);
  }

  const handleEvent = (logic: () => void) => {
    return () => {
      logic();
      console.log(`현재 카운트: ${count}`);
    }
  }
  return (
    <div>
      <CustomButton onCustomClick={handleCustomClick}></CustomButton>

      <div>
        <button onClick={handleEvent(increment)}>증가</button>
        <button onClick={handleEvent(decrement)}>감소</button>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}
