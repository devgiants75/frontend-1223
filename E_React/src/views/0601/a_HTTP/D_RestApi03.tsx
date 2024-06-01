import React, { useEffect, useState } from 'react'
/*
API 호출 방법

1. Fetch 사용법

*/
export default function D_RestApi03() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // fetch의 경우 데이터를 Response 객체로 가져옴
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Response 객체를 json화
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      {/* JSON 형식의 데이터를 JS객체로 변환 */}
      {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
    </div>
  )
}
