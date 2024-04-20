import React from 'react'

interface ClgButtonProps {
  message: string;
  children: React.ReactNode;
}

// 두 버튼에서 다른 메시지 값을 prop로 전달받아 출력
// >> 컴포넌트 내부에서 선언되기 때문에 컴포넌트의 props에 접근 가능
function ClgButton({ message, children }: ClgButtonProps): JSX.Element {
  return (
    <button onClick={() => console.log(`${message}`)}>
      {children}
    </button>
  );
}

export default function Handler02(): JSX.Element {
  return (
    <div>
      <ClgButton message='A를 동작'>
        A를 동작시킵니다.
      </ ClgButton>
      <ClgButton message='B를 동작'>
        B를 동작시킵니다.
      </ClgButton>
    </div>
  )
}
