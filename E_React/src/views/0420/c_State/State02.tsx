import React, { useState } from 'react'

//! useState를 사용한 이벤트 처리

// React의 이벤트 핸들러
// : onClick과 같이 camelCase를 사용
// : 문자열이 아닌 함수를 '이벤트'에 전달

export default function State02() {
  const [inputValue, setInputValue] = useState<string>('초기값');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 사용자의 입력값을 상태로 설정
    setInputValue(e.target.value);
  }

  const handleResetClick = () => {
    setInputValue('');
  }

  return (
    <div>
      {/*  
      input의 텍스트를 p태그의 내용으로 전달하는 이벤트 설정

      onChange 이벤트
      : 사용자가 입력 필드에 타이핑할 때 마다 발생하는 이벤트
      : input, textarea, select 등의 HTML 요소에 적용
      */}
      <h5 style={{ backgroundColor: "black", color: "white" }}>
        useState를 사용한 이벤트 처리
      </h5>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* 
        버튼 '클릭' 시 input 태그 안의 내용이 초기화
        : 빈 문자열로 현재값을 업데이트
        : handleResetClick
      */}
      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>
    </div>
  )
}
