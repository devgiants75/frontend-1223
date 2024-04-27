import React, { useRef, useState } from 'react'

//! useRef: DOM 선택
// : 컴포넌트 내에서 조회 및 수정할 수 있는 변수 관리

//? 컴포넌트 내부에서 배열을 선언하여 사용 시
// : 배열에 새 항목을 추가할 때, 그 항목의 고유 id를 관리하는 용도

interface Item {
  id: number;
  name: string;
  amount: number;
}

interface ItemListProps {
  items: Item[],
  onRemove: (id: number) => void;
  onEdit: (id: number, amount: number) => void;
}

// 기존 장바구니 항목
const initialItems = [
  { id: 1, name: '사과', amount: 2 },
  { id: 2, name: '칸쵸', amount: 1 },
  { id: 3, name: '우유', amount: 3 }
]

function Item ({ items }) {
  return (
    <div>
      <p>
        <b>{items.name}</b>
        (amount: {items.amount})
      </p>
    </div>
  )
}

export default function Arr02() {
  const [items, setItems] = useState<Item[]>(initialItems);

  // 다음 아이템의 id 관리를 위한 useRef 사용
  // : 컴포넌트가 리렌더링 되어도 해당 값이 유지
  const nextId = useRef<number>(4);

  // 새로운 아이템을 생성하는 함수
  const onCreate = (name: string, amount: number) => {
    const newItem = { id: nextId.current, name, amount};
    setItems([...items, newItem]);
    nextId.current += 1;
  }
  return (
    <div>
      <button 
        onClick={() => onCreate('새 항목', 1)}
      >
        새 물품 추가
      </button>
    </div>
  )
}
