import React from 'react'

// Props에 대한 타입 정의
interface ChildComponentProps {
  userInfo: {
    username: string;
    height: number;
  };
  onUpdate: (newInfo: {name: string; height: number}) => void;
}

export default function ChildProps02({ userInfo, onUpdate}: ChildComponentProps) {
  return (
    <div>s</div>
  )
}
