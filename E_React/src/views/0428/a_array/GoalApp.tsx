import React, { useRef, useState } from 'react'
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';

// a_array 폴더
// >> CreateGoal.tsx
// >> GoalApp.tsx
// >> GoalList.tsx

//! 메인 컴포넌트
// 목표 App 컴포넌트 정의
// : 목표를 추가, 삭제, 조회, 수정 담당 

interface Goal {
  id: number;
  title: string;
  explanantion: string;
  active: boolean;
}

// 초기 목표 설정
const initialGoals: Goal[] = [
  {
    id: 1,
    title: '책 10권 읽기',
    explanantion: '경제 서적 10권 읽기',
    active: true
  },
  {
    id: 2,
    title: '야구 직관 보러가기',
    explanantion: '잠실 구장 가보기',
    active: false
  },
  {
    id: 3,
    title: '저축하기',
    explanantion: '맥북 구매하기',
    active: false
  },
]

//! 목표 APP 컴포넌트 정의
export default function GoalApp() {

  // 목표 상태 관리
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  // 목표 입력 상태 관리 (CreateGoal에 전달)
  const [goalInput, setGoalInput] = useState({
    title: '',
    explanantion: ''
  });

  // 새로 생성되는 id 관리
  const nextId = useRef(4);

  return (
    <div>
      <CreateGoal 
        goal={}
        onChange={}
        onCreate={}
      />
      <GoalList 
        goals={} 
        onRemove={} 
        onToggle={} 
      />
    </div>
  )
}
