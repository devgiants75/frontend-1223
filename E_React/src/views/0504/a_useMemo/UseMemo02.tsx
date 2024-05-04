import React, { useMemo, useState } from 'react'

//! 빨간색
//? 파란색
//// 사용하지 않는 주석
//todo - 프로젝트 구현 시 해야할 내용 정리

//* 검은 배경에 노란 글씨
//# 검은 배경에 핑크 글씨
//% 검은 배경에 초록 글씨
//& 검은 배경에 흰색 글씨

//! 사용자의 입력에 따라 필터링된 리스트를 표시하는 컴포넌트 구현

// 큰 리스트를 생성하는 Array 인스턴스 생성
// Array.from은 배열로 부터 새로운 Array 인스턴스를 생성
// : length 속성을 사용하여 1000개의 길이를 가지는 배열을 생성하고
// : 각 요소를 'Item 1', 'Item 2' ... 'Item 1000' 형태로 초기화
const largeList = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

export default function UseMemo02() {
  const [filter, setFilter] = useState<string>('');

  // useMemo를 사용하여 리스트 필터링 로직을 메모이제이션
  const filteredList = useMemo(() => {
    console.log('배열을 필터링 중입니다.');
    // largeList를 순회하여 filter 값이 포함된 아이템만 반환

    //? toLowerCase()
    // 대소문자를 구분하지 않도록 
    // : 배열값과 input값을 모두 소문자로 변환

    //? includes()
    // : 배열과 문자열 등에 해당 내용 포함 여부에 따라 boolean값을 반환
    return largeList.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <div>
      <input 
        type="text" 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Filter list'
      />

      {/* 필터링된 결과를 리스트 형태로 출력 */}
      <ul style={{
        height: '400px',
        overflowY: 'scroll'
      }}>
        {filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
