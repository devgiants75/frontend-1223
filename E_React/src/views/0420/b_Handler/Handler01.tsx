import React from 'react'

/*
- 버튼 클릭 시 일어날 로직 정리
  : 버튼 클릭 시 console 창에 '버튼을 클릭하였습니다.' 출력

*/

export default function Handler01() {

  // 1. 보통 (이벤트를 실행시킬 요소가 담긴)컴포넌트 내부에서 정의
  // 2. handle 키워드로 함수가 시작 + 이벤트 이름을 작성
  //  >> 관례) 이벤트 이름을 따라 작성
  //          onChange={handleChange}

  //? 함수 정의
  function handleClick() {
    console.log('버튼을 클릭하였습니다.');
  }

  return (
    <div>
      {/* 
      - 버튼 요소에 prop 속성으로 이벤트 '전달'

      - 이벤트 핸들러에 전달된 함수는 호출되지 않아야 한다!!!!!
        : 함수를 호출할 경우 화면이 렌더링 되는 즉시 함수가 실행
      
      */}
      <button onClick={handleClick}>
        클릭
      </button>

      <button onClick={function handleClick2() {
        console.log('TSX 내에서 이벤트 핸들러를 인라인으로 정의');
      }}>
        클릭2
      </button>

      <button onClick={() => {
        console.log('화살표 함수를 사용하여 간결하게 작성');
      }}>
        클릭3
      </button>
    </div>
  )
}
