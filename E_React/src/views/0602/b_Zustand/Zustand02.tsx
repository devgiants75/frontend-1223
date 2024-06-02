import React, { useState } from 'react'
import { useMemberStore } from './stores/user.store';

//! 상태 정의 및 스토어 생성
// : 회원 정보 상태 & 사용자 인증 상태

//! UI 컴포넌트
// 회원 관리 컴포넌트 - 회원 목록 표시, 회원 추가, 수정, 삭제 기능
// 로그인 컴포넌트 
// 홈 화면 컴포넌트 - 로그인 완료 시 보여질 홈 화면

//# 1. 로그인 컴포넌트
const Login = () => {
  const [username, setUserName] = useState<string>('');

  return (
    <>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button>Login</button>
    </>
  )
}

//# 2. 회원 관리 컴포넌트
export function MemberManager() {
  // useMemberState를 사용한 회원 관리 컴퓨넌트
  const { members, addMember, updateMember, deleteMember } = useMemberStore();

  // 새로운 회원에 대한 상태 관리 (input)
  const [newMemberName, setNewMemberName] = useState<string>('');

  // 각 회원별 업데이트 될 이름을 위한 임시 저장소
  // : 인덱스 서명 문법 사용
  const [editMemberNames, setEditMemberNames] = useState<{[id: number]: string}>({});

  interface Sample {
    [key: string]: string;
    // [id: number]: string;
  }

  const sampleData: Sample = {
    hello: '안녕',
    hi: '안녕하세요',
    // 1: '이승아'
  }

  //* 이벤트 핸들러 구현 //
  const handleAddMember = () => {

  }

  const handleUpdateMember = (id: number) => {

  }

  const handleDeleteMember = (id: number) => {

  }

  return (
    <div>
      <input 
        type="text" 
        value={newMemberName}
        onChange={(e) => setNewMemberName(e.target.value)}
        placeholder='Enter member name'
      />
      <button onClick={handleAddMember}>Add Member</button>
    
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name}
            <input 
              type="text" 
              // 객체의 속성값 불러오는 방법(2가지)
              // 객체명.속성명
              // 객체명[속성명]
              value={editMemberNames[member.id] || ''}
              onChange={(e) => setEditMemberNames({ 
                ...editMemberNames, 
                [member.id]: e.target.value 
              })}
              placeholder='new name'
            />
            <button onClick={() => handleUpdateMember(member.id)}>
              수정
            </button>
            <button onClick={() => handleDeleteMember(member.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Zustand02() {
  return (
    <div>Zustand02</div>
  )
}
