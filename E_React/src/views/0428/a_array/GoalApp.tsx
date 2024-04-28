import React, { ChangeEvent, useRef, useState } from 'react'
import CreateGoal from './CreateGoal';
import GoalList from './GoalList';

// a_array 폴더
// >> GoalApp.tsx
// >> CreateGoal.tsx
// >> GoalList.tsx

//! 메인 컴포넌트
// 목표 App 컴포넌트 정의
// : 목표를 추가, 삭제, 조회, 수정 담당 

interface Goal {
  id: number;
  title: string;
  explanation: string;
  active: boolean;
}

// 초기 목표 설정
const initialGoals: Goal[] = [
  {
    id: 1,
    title: '책 10권 읽기',
    explanation: '경제 서적 10권 읽기',
    active: true
  },
  {
    id: 2,
    title: '야구 직관 보러가기',
    explanation: '잠실 구장 가보기',
    active: false
  },
  {
    id: 3,
    title: '저축하기',
    explanation: '맥북 구매하기',
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
    explanation: ''
  });

  // 새로 생성되는 id 관리
  const nextId = useRef(4);

  //! 이벤트 핸들러 정의

  // 1. 목표 입력 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 두 개의 input을 하나의 핸들러로 관리
    // : 이벤트가 일어나는 target에서 데이터 값을
    //   비구조화 할당으로 처리(name, value)
    const {name, value} = e.target;

    // 스프레드 연산자 사용
    // : 변경되지 않은 input은 그대로 두고
    //   변경된 name의 value값만 
    //   상태 설정 함수로 업데이트
    setGoalInput({
      ...goalInput,
      [name]: value
    });
  };

  // 2. 목표 추가 핸들러
  const handleCreate = () => {
    // 새로운 목표 생성
    const newGoal = {
      id: nextId.current,
      title: goalInput.title,
      explanation: goalInput.explanation,
      active: false
    };

    // 현재 목표를 목표 목록에 추가

    //? 배열의 불변성을 지키는 방법
    // : 기존의 배열을 수정하지 않고 복사하여 사용
    //   기존 배열 수정 X, 새로운 원소가 추가된 새로운 배열을 생성

    // - spread 연산자(...)
    // setGoals([...goals, newGoal]);
    // - concat 함수
    setGoals(goals.concat(newGoal));

    // 입력 필드 초기화
    setGoalInput({
      title: '',
      explanation: ''
    });
    // 다음 ID 증가(ref 참조값 증가)
    nextId.current += 1;
  }

  // 3. 목표 제거 핸들러
  const handleRemove = (id: number) => {
    // filter
    // : 배열을 순회하여 함수 반환값이 True인
    //   요소만을 새로운 배열로 추출

    // goal.id가 매개변수와 일치하지 않는 원소만 추출 >> 새로운 배열로 생성
    // : goal.id가 매개변수로 받아오는 id인 것을 제거
    setGoals(goals.filter(goal => goal.id !== id));
  }

  // 4. 목표 수정 핸들러(활성 상태 변경)
  const handleToggle = (id: number) => {
    // 전체 배열 순회(map) goal.id가 매개변수와 일치하는 요소는 전체 속성 중에서 active 값만 반전
    // : 일치하지 않는 요소는 그대로 반환

    //? map()과 forEach()의 차이점
    // forEach()
    // : 기존 배열을 변경
    // : 단순히 반복문을 대체하기 위한 방법

    // map()
    // : 새로운 배열을 반환
    // : 요소값을 다른 값으로 mapping한(기능을 적용한) 새로운 배열을 생성하는 함수
    setGoals(
      goals.map(goal => 
        goal.id === id ? {...goal, active: !goal.active} : goal
      )
    )
  }

  return (
    <div>
      <CreateGoal 
        goal={goalInput}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <GoalList 
        goals={goals} 
        onRemove={handleRemove} 
        onToggle={handleToggle} 
      />
    </div>
  )
}
