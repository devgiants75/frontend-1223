import React, { useState } from 'react'
import ChildProps02 from './ChildProps02'

//! 자식 컴포넌트의 이벤트를 부모 컴포넌트로 전달
// : 자식 컴포넌트에서 발생한 이벤트를
// : 부모 컴포넌트의 함수를 통해 처리

interface UserType {
  username: string;
  height: number;
}

const initialValue: UserType = {
  username: '이승아',
  height: 169
}

//? 부모 컴포넌트
export default function StateProps02() {
  //! 사용자의 정보를 저장하는 상태관리 파트
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);

  //! 위의 useState 상태 관리를 위한 이벤트와 정보는
  // 자식 컴포넌트에서 전달받아서 사용
  const handleUpdate = (newInfo: UserType) => {
    setUserInfo(newInfo);
  }

  return (
    <div>
      <hr />
      <h5>자식으로 부터 이벤트 전달받기</h5>
      <ChildProps02 
        userInfo={userInfo} 
        onUpdate={handleUpdate} 
      />
    </div>
  )
}
