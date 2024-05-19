import React, { ReactNode, createContext, useContext, useState } from 'react'

//! Context API
// : React의 애플리케이션에서 전역적으로 데이터를 관리할 수 있는 기능
// : React에서 제공하는 기능
// >> 컴포넌트 트리 전체에 걸쳐서 데이터를 효율적으로 전달 가능
// EX) 사용자의 로그인 상태, 테마 설정, 언어 설정 등 

//? Context API의 주요 구성 요소
// 1) React.createContext
// : 새로운 Context 객체를 생성
// : 해당 객체는 Provider와 Consumer 컴포넌트를 포함

// 2) Provider
// : Context 객체로부터 생성된 컴포넌트
//   , Context를 구독하는 컴포넌트들에게 context의 변화를 알림
// >> Provider는 value 속성을 통해 자식 컴포넌트에게 데이터를 전달

// 3) Consumer
// : Context 변화를 구독하는 컴포넌트
//   , 함수 자식 패턴을 사용하여 context 값을 받아 사용 가능

//& Context API를 사용한 '사용자 로그인 상태 관리'

//! 사용자 정보를 위한 인터페이스 정의
interface User {
  name: string;
}

//! Context에서 사용할 값의 타입 정의
// : Context가 다룰 값의 타입을 정의
interface UserContextType {
  // User 객체 또는 null값
  user: User | null;
  // 해당 상태를 업데이트 하는 함수
  // : React에서 상태 업데이트 로직 정의 방법
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

//# Context 생성 및 초기값 설정
// : createContext를 사용하여 Context 생성
// >> 초기값은 undefined를 가짐
// >> 나중에 UserContextType으로 명시
const UserContext = createContext<UserContextType | undefined>(undefined);

//# UserProvider 컴포넌트 정의
interface UserProviderProps {
  // React의 컴포넌트가 자식 요소로 props 전달
  children: ReactNode;
}

const UserProvider = ({ children } : UserProviderProps) => {
  // >> 사용자의 정보를 제공하는 컴포넌트
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* 자식 컴포넌트에게 Context 값을 제공(value속성을 통해 전달) */}
      {children}
    </UserContext.Provider>
  )
};

//! Navbar 컴포넌트
const Navbar = () => {
  // 전역 상태에 대한 불러오기
  // : react에서 제공하는 useContext() 훅 사용
  // >> 소괄호 내에 정의된 context 작성
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않습니다.');
  };

  const { user } = userContext;

  // 사용자가 로그인 되어 있는 경우 사용자 이름을, 그렇지 않으면 Guest 출력
  return <div>{user ? user.name : 'Guest'}</div>
}

//! Profile 컴포넌트
const Profile = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않습니다.');
  };

  const { user, setUser } = userContext;

  if (!user) {
    // 로그인하지 않은 상태 - 로그인 버튼 출력, 클릭 시 로그인 상태로 전환
    return <button onClick={() => setUser({ name: '이승아' })}>로그인</button>
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => setUser(null)}>로그아웃</button>
    </div>
  );
};

export default function ContextApi01() {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Profile />
      </UserProvider>
    </div>
  )
}
