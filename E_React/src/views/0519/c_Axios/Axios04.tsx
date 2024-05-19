import axios from 'axios';
import React from 'react'

//! HTTP 통신 - PUT(수정) / DELETE(삭제)
export default function Axios04() {
  const userId = 1; // 예제용 ID (정적 데이터)

  const updateUser = async () => {
    try {
      // put 메서드
      // : 2개의 인자를 전달
      // >> 첫 번째 인자인 URL에서 수정하고자 하는 데이터를 명시
      // >> 두 번째 인자에서 수정 데이터를 명시
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        name: '이승아',
        email: '이승아이메일'
      });
      console.log('User updated', response.data);
    } catch(error: any) {
      console.error('Failed to Update user: ' + error.message);
    }
  }

  const deleteUser = () => {

  }

  return (
    <div>
      <button onClick={updateUser}>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}
