import React from "react";

//! 이벤트 핸들러 prop의 이름 지정
// - 관례상 on으로 시작하고 그 뒤에 대문자로 단어를 연결

interface ButtonProps {
  onClg?: () => void;
  onAlert?: () => void;
  children: React.ReactNode;
}

// HTML 요소 내부의 prop는 정의된 이벤트 핸들러를 사용
// : 이벤트 핸들러 첨부 시 해당 이벤트를 사용할 수 있는
//   , 적절한 요소 사용이 필요
function Button1({ onClg, onAlert, children }: ButtonProps) {
  return <button onClick={onClg} style={{
    border: 'none', backgroundColor: 'white'
  }}>
    {children}
  </button>
  // <div onClick={onClg} style={{
  //   border: '1px solid black', borderRadius: '5px'
  //   , backgroundColor: '#eee', padding: '5px'
  // }}>{children}</div>
  ;
}

function Button2({ onClg, onAlert, children }: ButtonProps) {
  return <button onClick={onAlert}>{children}</button>;
}

// 사용자 커스텀 Button 컴포넌트 내부의 props는 사용자 이름 정의가 가능
export default function Handler04() {
  return (
    <div>
      <Button1 onClg={() => console.log("콘솔창 출력")}>
        이벤트 핸들러 이름 지정(콘솔)
      </Button1>
      <Button2 onAlert={() => alert("알림창 출력")}>
        이벤트 핸들러 이름 지정(알림창)
      </Button2>
    </div>
  );
}
