import React from 'react'

// Props에 대한 타입 정의
interface ChildComponentProps {
  userInfo: {
    username: string;
    height: number;
  };
  onUpdate: (newInfo: {username: string; height: number}) => void;
}

export default function ChildProps02({ userInfo, onUpdate }: ChildComponentProps) {

  const updateInfo = () => {
    // 부모로부터 전달받은 상태 업데이트를 사용
    onUpdate({ username: '이도경', height: 158 });
  }

  return (
    <>
      {/* 현재의 userInfo값은 부모로부터 전달 받은 값 */}
      <p>사용자 이름: {userInfo.username}</p>
      <p>사용자 키: {userInfo.height}</p>
      <button onClick={updateInfo}>사용자 정보 업데이트</button>
    </>
  )
}
