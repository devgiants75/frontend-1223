import axios from 'axios';
import React, { useEffect, useState } from 'react'

/*
2. Axios 사용법

#
API 응답 처리 및 오류 관리

*/
export default function E_RestApi04() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      // axios로 가져오는 데이터는 자동으로 JSON 데이터로 파싱
      // : 데이터에 직접적인 .data 구축이 가능
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
    </div>
  )
}
