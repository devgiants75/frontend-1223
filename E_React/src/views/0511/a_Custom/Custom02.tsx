import React from 'react'
import useFetch from './hooks/useFetch';

//! 메인 컴포넌트 (커스텀 훅 사용)

// 가져올 데이터 타입 명시
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Custom02() {
  // const { data, loading, error } = useFetch<제네릭타입>(url전달);

  let url = 'https://jsonplaceholder.typicode.com/users';

  const { data, loading, error } = useFetch<User[]>(url);

  if (loading) return <div>로딩중입니다.</div>;
  if (error) return <div>에러 발생: ${error.message}</div>;

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {/* 변수명? - 해당 데이터가 비어져있지 않음을 명시 */}
        {data?.map(user => (
          <li key={user.id}>
            {user.name} ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
