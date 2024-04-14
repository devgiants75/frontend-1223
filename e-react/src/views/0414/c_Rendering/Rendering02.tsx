import React from 'react'

//! 리스트 렌더링

// 1. 배열에서 데이터 렌더링

export default function Rendering02() {
  // key로 지정할 id가 없는 배열의 경우 인덱스 번호를 주로 사용
  const people = ['이승아', '이도경', '정주연', '정혜윤', '전예찬'];

  const peopleDescription = [
    {
      id: 0,
      name: '이승아',
      job: 'developer' 
    },
    {
      id: 1,
      name: '이도경',
      job: 'general' 
    },
    {
      id: 3,
      name: '정주연',
      job: 'operation' 
    },
    {
      id: 4,
      name: '정혜윤',
      job: 'operation' 
    },
    {
      id: 5,
      name: '조승범',
      job: 'business' 
    },
  ];

  // map 콜백함수의 매개변수
  // : 첫 번째 인자 - 각 순회 요소
  // : 두 번째 인자 - 해당 순회 요소의 인덱스 번호
  const listItems = people.map(
    (person, index) => <li key={index}>{person}</li>
  );

  // businessItems: 배열
  const businessItems = peopleDescription.filter(
    person => person.job === 'developer' || person.job === 'business'
  )

  const businessItemsList = businessItems.map(
    // 배열 렌더링 시 key 속성
    // : 각 구성 요소가 어떤 배열 항목에 해당하는지 React에게 전달
    // : 배열 항목의 이동 또는 정렬 시 React가 배열에서 어떠한 항목의 변화가 일어났는지 정확하게 인지하도록 도움
    // : DOM 트리에 불필요한 메모리 사용을 방지

    // : key값은 고유한 값이어야 한다.
    // : key값은 변경되어서는 안된다.
    person => <li key={person.id}>{person.name}</li>
  )

  return (
    <>
      <h2>Map을 사용한 전체 리스트 렌더링</h2>
      <ul>{listItems}</ul>

      <h2>Filter를 사용한 필터링 리스트 렌더링</h2>
      <ul>{businessItemsList}</ul>
    </>
  )
}
