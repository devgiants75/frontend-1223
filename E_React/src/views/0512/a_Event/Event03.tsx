import React, { useState } from 'react'

//! 이벤트 핸들러
// : 특정 이벤트가 발생했을 때 실행되는 함수
// : 리액트에서는 이벤트 핸들링을 위해 JSX 코드 내에서 이벤트 핸들러를 직접 할당

//? 주요 이벤트 타입
// onClick: 사용자가 요소를 클릭할 때 발생
// onChange: 입력 요소의 값이 변경될 때 발생
// onSubmit: 폼 제출 시 발생

export default function Event03() {
  const [count, setCount] = useState(0);

  const handelConditionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 조건부 이벤트 핸들링
    // : 이벤트 핸들러 내부에서 특정 조건에 따른 로직 구현
    if (count >= 5) {
      console.log('카운트를 더이상 증가시킬 수 없습니다.');
      event.preventDefault();
    } else {
      setCount(count + 1);
      console.log(`버튼이 ${count + 1}번 클릭되었습니다.`);
    }
  }
  return (
    <div>
      <button onClick={handelConditionClick}>조건부 이벤트 핸들러</button>
    </div>
  )
}
