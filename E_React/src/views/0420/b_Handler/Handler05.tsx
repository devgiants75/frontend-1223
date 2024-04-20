import React from 'react'

//! 이벤트 전파(버블링)
// : 컴포넌트의 자식 요소에서 발생하는 이벤트를 잡아내는 것
// : 발생한 곳에서 시작 > 트리를 따라 위로 올라감

//! 전파 중지
// : 이벤트 핸들러는 그들의 유일한 인자로 이벤트 객체를 전달받음
//  >> 보통 e라고 불리며, event를 의미
//  >> 해당 이벤트 객체를 통해 이벤트 전파를 중지 가능

//! 기본 동작 방지
// : 일부 브라우저 이벤트는 해당 요소 내에 기본 동작을 포함
// EX) 내부의 버튼이 클릭되었을 때 form요소의 제출 이벤트
//     >> 전체 페이지를 다시 로드

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={(e) => {
      // 이벤트 전파 중지: .stopPropagation(); 사용
      e.stopPropagation();
      console.log(e.target);
      onClick();
    }}>
      {children}
    </button>
  )
}

export default function Handler05() {
  return (
    <div className='Main' style={{ padding: '20px', backgroundColor: 'pink'}} onClick={() => {
      console.log('메인 영역을 클릭하였습니다.');
    }}>
      <Button onClick={() => console.log('AAAAA')}>
        A 동작
      </Button>
      <Button onClick={() => console.log('BBBBB')}>
        B 동작
      </Button>

      <hr />
      <form onSubmit={(e) => {
        // 이벤트 객체(e) 내부의 기본 동작 방지: .preventDefault()
        e.preventDefault();
        console.log('전송중입니다.');
      }}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}
