import React, { useCallback, useEffect, useState } from 'react'

//! useCallback 개요
// : 성능 최적화를 위해 사용되는 Hook
// : 주어진 함수를 메모리에 저장하여 
//   ,컴포넌트가 다시 렌더링될 때 같은 함수를 재사용할 수 있도록 메모이제이션하는 기능

//! useCallback 구조

// const memo = useCallback(() => {
//   doSomething(a, b)
// }, [a, b]);

interface ProfileProps {
  userId: number;
}

interface User {
  id: number;
  name: string;
}

const Profile = ({ userId }: ProfileProps) => {
  const [user, setUser] = useState<User | null>(null);

  //* useCallback 미사용 시
  // : fetchUser 함수는 컴포넌트가 렌더링 될 때마다 재생성
  // >> useEffect가 불필요하게 여러 번 실행

  // const fetchUser = async () => {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  //   const userData = await response.json();
  //   return userData;
  // }

  //* useCallback 사용 시
  // : 페이지의 다른 부분이 변경되더라도
  //   해당 함수의 참조값은 그대로 유지되어 계산 X
  const fetchUser = useCallback(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await response.json();
    return userData;
  }, [userId]);

  // 비동기 작업이 useCallback으로 메모화되어
  // , userId가 동일하다면 fetchUser 뿐만 아니라
  // , useEffect 또한 불필요한 실행을 하지 않음
  useEffect(() => {
    fetchUser().then(userData => setUser(userData));
  }, [fetchUser]);

  return <div>
    {user ? (<p>Name: {user.name}</p>) : (<p>사용자 데이터 로딩중</p>)}
  </div>
}

export default function UseCallback01() {
  return (
    <div>
      <h3>사용자 프로필</h3>
      <Profile userId={1} />
      <Profile userId={2} />
    </div>
  )
}
