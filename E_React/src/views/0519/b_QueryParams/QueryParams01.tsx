import React from 'react'
import { useSearchParams } from 'react-router-dom';

//! 쿼리 파라미터
// : 웹 애플리케이션에서 사용자 입력, 페이지 상태, 기타 (부수적인) 데이터를 URL을 통해 전달하는 방법
// : URL의 ?뒤에 위치
//   , key=value의 형태로 다수가 & 기호로 연결될 수 있음

// >> 리액트에서는 react-router-dom 라이브러리의 useSearchParams 훅을 사용하여 쿼리 파라미터를 관리

//? 쿼리 파리미터의 장점
// 1. 상태 유지
// : 사용자가 애플리케이션에서 데이터를 입력하고 페이지를 새로고침할 때, URL에 포함된 쿼리 파라미터에 데이터를 저장하여 데이터 값이 유지
// 2. 복잡한 데이터 관리
// : 하나의 URL에 key의 이름을 붙여 여러 값들에 대한 상태 관리가 가능

//? useSearchParams 훅
// : useState의 형태와 유사
// : key와 value 쌍의 값들을 상태 관리
// : 해당 값에서 get('key') 조회 시 value값 사용 가능

export default function QueryParams01() {
  //& useSearchParams 훅 구조
  // : URL의 쿼리 파라미터와 해당 내용을 업데이트 할 수 있는 함수를
  //   , 배열 형태로 반환

  // - searchParams
  //   : 현재 쿼리 파라미터를 나타내는 URLSearchParams의 객체
  //   : 해당 객체를 사용하여 쿼리 파라미터의 값을 읽거나 
  //     , 특정 파라미터가 있는지 확인
  // - setSearchParams
  //   : 쿼리 파라미터를 업데이트하는 함수
  //   : 해당 함수에 새로운 파라미터 객체를 전달
  //     , URL이 업데이트되고, 관련 컴포넌트들이 리렌더링
  const [searchParams, setSearchParams] = useSearchParams();
  
  //& 쿼리 파라미터의 값 읽어오기
  // : URLSearchParams의 객체에 .get('key')메서드 사용 시
  // : 해당 key라는 이름의 쿼리 파라미터 값을 반환
  // : 해당 파라미터가 URL에 없는 경우 get()메서드는 null을 반환
  // >> query 변수에는 항상 문자열 값이 저장 (null이 불러오는 오류 방지)
  const query = searchParams.get('query') || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;

    //& 쿼리 파라미터의 값 지정
    // : 쿼리 설정 함수에 URLSearchParams 객체 형식의 데이터를 지정
    // { key명: value값 }
    setSearchParams({ query: newQuery });
  }

  return (
    <div>
      <input 
        type="text" 
        value={query}
        onChange={handleInputChange}
        placeholder='검색어를 입력해주세요.'
      />
      {/* 
        URL의 경우 띄어쓰기가 인식되지 X
        : + 기호를 통해 구현
      */}
      <p>Search Query: {query}</p>
    </div>
  )
}
