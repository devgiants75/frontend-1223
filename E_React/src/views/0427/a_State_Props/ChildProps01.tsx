import React from 'react'
import { UserType } from './StateProps01';

type ChildProps = {
  userInfo: UserType | undefined
}

//! 자식 컴포넌트
const ChildProps01 = ({ userInfo }: ChildProps) => {
  return (
    <>
      {userInfo && (
        // JSX에서 (소괄호 내의 UI 구현부는 비워질 경우 오류)
        <>
          <p>사용자 이름: {userInfo.userName}</p>
          <p>사용자 키: {userInfo.height}</p>        </>
      )}
    </>
  )
}

export default ChildProps01;