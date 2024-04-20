import React, { useState } from "react";

//! 여러 개의 입력 상태 값 처리
// : input에 name을 설정하여 이벤트가 발생했을 때 해당 값을 참조
// : useState에서는 문자열이 아니라 객체 형태의 상태를 관리

//! 리액트 상태에서 객체를 수정해야 할 때는
// input[name] = value;
// : 위 처럼 직접 수정 X

// setInput({ ...inputs, [name]: value })
// : 위 처럼 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용

const example = [
  {
    id: 0,
    name: '이승아'
  },
  {
    id: 1,
    name: '이도경'
  },
]

export default function State03() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {

  }

  const handleInputChange = () => {

  }
  
  return (
    <>
      <h5 style={{}}>
        여러 개의 입력 상태 관리
      </h5>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="아이디"
          name="id"
          onChange={handleInputChange}
          value={id}
        />
        <input 
          type="text" 
          placeholder="비밀번호"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
      </form>
    </>
  );
}
