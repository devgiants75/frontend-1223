import React from 'react'

/*
- 함수를 prop으로 전달: <button>과 같은 요소에 함수를 prop으로 전달하여 이벤트를 처리 가능

- 이벤트 핸들러 전달: 이벤트 핸들러는 전달되어야 하며 호출X 
>> 즉, onClick={handleClick} 형식을 사용, onClick={handleClick()} 형식은 사용 X

- 이벤트 핸들러 정의: 이벤트 핸들러 함수는 별도로 또는 인라인으로 정의 가능

- 이벤트 핸들러의 접근성: 이벤트 핸들러는 컴포넌트 내부에서 정의되므로, props에 접근 가능

- 부모에서 자식으로의 전달: 부모 컴포넌트에서 이벤트 핸들러를 선언하고 이를 자식 컴포넌트에게 prop으로 전달 가능

- 애플리케이션 특정 이벤트 핸들러: 애플리케이션 특정 이름으로 자체 이벤트 핸들러 prop을 정의 가능

- 이벤트의 상향 전파: 이벤트는 상향 전파
  >> 전파를 막기 위해서는 첫 번째 인자에서 e.stopPropagation()을 호출

- 기본 동작 방지: 이벤트는 원치 않는 기본 브라우저 동작
  >> 이를 방지하기 위해 e.preventDefault()를 호출

*/

export default function Practice() {
  /*
  ! button 요소를 클릭하는 경우
    : body의 배경색이 토글(변경)되도록 설정
    : 토글의 값 - black, white

  ? 요구 사항
  1. button 요소 클릭 시 이벤트 핸들러 실행(handleClick)

  2. handleClick 이벤트는 컴포넌트 내에서 정의
    >> body의 색상 변경:
    let bodyStyle = document.body.style;
    위의 변수에서 bodyStyle.backgroundColor 속성에 값을 전달하면 값이 지정

    >> 토글의 기능을 위해 if, else구문 사용 
  */

  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white'
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      배경색을 토글합니다.
    </button>
  )
}
