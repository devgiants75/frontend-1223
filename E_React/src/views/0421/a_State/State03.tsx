import React, { useState } from "react";

//! useState를 사용한 다양한 타입의 상태 관리

interface User {
  id: number;
  name: string;
}

export default function State03() {
  //? 1. 숫자형(number)
  let [count, setCount] = useState<number>(0);

  //? 2. 문자열(string)
  const [name, setName] = useState<string>("");

  //? 3. 논리형(boolean)
  const [isVisiable, setIsVisiagle] = useState<boolean>(false);

  //? 4. 객체(Object)
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
  });

  //? 5. 배열(Array)
  const [items, setItems] = useState<string[]>([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  }

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;

    setItems([...items, newItem]);
  }

  return (
    <div style={{ margin: "20px", border: "1px solid black" }}>
      <h5>여러 타입의 상태 관리</h5>

      {/* 숫자형: 카운터 증가 버튼 */}
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가 버튼
      </button>

      {/* 문자열: 사용자 이름 입력 필드 */}
      <p>Name: {name}</p>
      <input 
        type="text" 
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      {/* 논리형: 토글 버튼 */}
      <p>Visiable: {isVisiable ? 'Yes' : 'No'}</p>
      <button onClick={() => setIsVisiagle(!isVisiable)}>토글 버튼</button>

      {/* 객체: 사용자 정보 수정 입력 필드 */}
      <p>User: {JSON.stringify(user)}</p>
      <input 
        type="text" 
        name="name"
        value={user.name}
        onChange={handleUserChange}
        placeholder="user name"
      />

      {/* 배열: 배열 요소 추가 */}
      <p>Items: {JSON.stringify(items)}</p>
      <button onClick={addItem}>아이템 추가</button>
    </div>
  );
}
