import React, { useEffect, useState } from 'react'

//! Custom Hook (커스텀 훅) 정의
// - 실무) API호출, 이벤트 리스너 관리, 폼 데이터 처리 등의 기능에 사용

interface FetchResult<T> {
  // 데이터 가져오기 성공 - T 타입, 실패(또는 가져오기 전) - null 타입
  data: T | null; 
  loading: boolean;
  error: Error | null; // 에러 발생 - Error 타입, 미 발생 - null 타입
}

export default function useFetch<T>(url: string): FetchResult<T> {
  const [result, setResult] = useState<FetchResult<T>>({
    data: null,
    loading: true,
    error: null
  });

  // useEffect(() => {
  //   //? fetch()함수를 사용한 서버 통신
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => setResult({ data, loading: false, error: null}))
  //     .catch(error => setResult({ data: null, loading: false, error }));
  // }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setResult({ data: null, loading: true, error: null });
        const response = await fetch(url);
        const data = await response.json();
        setResult({ data, loading: false, error: null })
      } catch (error) {
        setResult({ data: null, loading: false, error: error as Error})
      }
    }

    fetchData();
  }, [url]);

  return result;
}
