import React, { ChangeEvent } from 'react'

//! 단일 목표 생성 컴포넌트
// : input 두 개와 button 하나로 이루어진 컴포넌트
// : 2024년의 목표와 설명을 첨부
// : '목표 추가' 버튼 클릭 시 - 목표가 추가

//? 목표를 생성하기 위해 전달받을 props의 타입
interface GoalProps {
  // 목표의 타입 정의
  goal: {
    title: string;
    explanation: string;
  };
  // '목표 추가' 버튼에 동작될 이벤트
  onCreate: () => void;
  // input창 데이터를 변경해주는 이벤트 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CreateGoal({ goal, onChange, onCreate }: GoalProps) {
  return (
    <div>
      {/* 목표 입력 input */}
      <input 
        type="text" 
        name='title'
        value={goal.title}
        placeholder='목표를 입력하세요.'
        onChange={onChange}
      />
      {/* 목표 설명 입력 input */}
      <input 
        type="text" 
        name='explanation'
        value={goal.explanation}
        placeholder='목표를 입력하세요.'
        onChange={onChange}
      />
      <button onClick={onCreate}>목표 추가</button>
    </div>
  )
}
