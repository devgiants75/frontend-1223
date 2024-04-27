import React from 'react'

//! 배열 렌더링 (추가, 조회, 수정, 제거 - CRUD 기능)

// 동적인 배열 렌더링
// : JS 내장 함수 map/filter 사용

//? 장바구니 구현

type ItemsType = {
  items: {
    id: number; // 제품 고유 아이디
    name: string; // 제품 이름
    amount: number; // 구매 수량
  }
}

// 기존 장바구니 항목
const initialItems = [
  { id: 1, name: '사과', amount: 2 },
  { id: 2, name: '칸쵸', amount: 1 },
  { id: 3, name: '우유', amount: 3 }
]

// 장바구니 항목 1개
function Item ({ items }: ItemsType) {
  return (
    <div>
      <p>
        <b>{items.name}</b>
        (amount: {items.amount})
      </p>
    </div>
  )
}

export default function Arr01() {
  return (
    <>
      {/* 
        <Item items={initialItems[0]}/>
        <Item items={initialItems[1]}/>
        <Item items={initialItems[2]}/> 
      */}
      {/* 
      {initialItems.map((item, index) => (
        <Item items={item} key={index}/>
      ))} 
      */}
      {initialItems.map(item => (
        <Item items={item} key={item.id} />
      ))}
    </>
  )
}
