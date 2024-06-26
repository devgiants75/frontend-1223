import React, { useReducer, useState } from 'react'

//! 2. 리듀서를 사용하여 상태 업데이트 로직을 한 곳에서 관리
// : 상태의 중앙 관리식 구현

type UserInfo = {
  name: string;
  age: number;
  email: string;
}

type Action = 
  // payload - 액션 객체 내에 포함된 데이터를 지칭
  // : 해당 데이터 업데이트 시 필요한 정보를 제공
  | { type: 'setName'; payload: string } 
  | { type: 'setAge'; payload: number } 
  | { type: 'setEmail'; payload: string };

function reducer(state: UserInfo, action: Action): UserInfo {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setAge':
      return { ...state, age: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function Reducer03() {

  //* 복수의 useState 사용
  // : 사용자가 입력한 정보를 여러 상태로 관리
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  //* useReducer를 사용한 리팩토링
  // : 복잡한 상태 업데이트 로직을 외부 reducer 함수에 위임
  // : 상태 업데이트 로직을 한 곳에서 관리할 수 있게 작성
  const [state, dispatch] = useReducer(reducer, { name: '', age: 0, email: ''})

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <h1>UseState로 여러 개의 상태 관리</h1>
      <input type="text" value={name} onChange={handleNameChange}/>
      <input type="number" value={age} onChange={handleAgeChange}/>
      <input type="email" value={email} onChange={handleEmailChange}/>

      <hr />
      <input 
        type="text" 
        value={state.name} 
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
      />
      <input 
        type="number" 
        value={state.age} 
        onChange={(e) => dispatch({ type: 'setAge', payload: Number(e.target.value) })}
      />
      <input 
        type="email" 
        value={state.email} 
        onChange={(e) => dispatch({ type: 'setEmail', payload: e.target.value })}
      />
    </div>
  )
}
