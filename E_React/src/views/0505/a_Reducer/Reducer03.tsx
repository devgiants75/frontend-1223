import React, { useReducer, useState } from 'react'

type UserInfo = {
  name: string;
  age: number;
  email: string;
};

//* 
type Action =
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
  //! useState를 사용할 때의 문제점
  // useState는 React에서 가장 기본적인 상태 관리 훅입니다. 하지만 복잡한 상태 로직을 관리할 때 몇 가지 한계가 있습니다. 예를 들어, 여러 상태가 서로에게 의존적일 경우 각 상태를 업데이트하는 로직이 분산되고, 각각의 상태 업데이트가 다른 상태 업데이트를 필요로 할 수 있습니다. 이로 인해 코드의 복잡성이 증가하고, 버그가 발생하기 쉬워집니다.

  // 예시: 복수의 useState 사용
  // 다음은 여러 useState를 사용하는 예시 코드입니다. 사용자가 입력한 정보를 여러 상태로 관리하고 있습니다.
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  //! useReducer로 리팩토링
  // useReducer는 복잡한 상태 업데이트 로직을 외부의 reducer 함수에 위임함으로써, 상태 업데이트 로직을 한 곳에서 관리할 수 있게 도와줍니다. 이는 디버깅을 용이하게 하고 코드의 가독성을 향상시킵니다.
  const [state, dispatch] = useReducer(reducer, { name: '', age: 0, email: '' });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };


  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="number" value={age} onChange={handleAgeChange} />
      <input type="email" value={email} onChange={handleEmailChange} />

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
