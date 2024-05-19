import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Axios02() {
  // HTTP 요청으로 가져오는 사용자 데이터
  const [users, setUser] = useState<User[]>([]);
  // HTTP 요청 중 발생하는 error에 대한 상태 관리
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

        setUser(response.data); // 응답 데이터 저장
      } catch (err: any) {
        setError(err.message); // 에러 메시지 설정
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <hr />
      {error 
        ? <p>Error: {error}</p> 
        : users.map(user => 
            <div key={user.id}>
              {user.name}
            </div>
          )
      }
    </div>
  )
}
