import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//! useNavigate() 훅
// : react-router-dom에서 제공하는 함수형 컴포넌트의 네비게이션
// : 프로그램 코드를 통해 네비게이션을 수행
// >> 특정 경로로 이동 | 이전 페이지로 돌아가는 기능 수행
// EX) 양식 제출 후 페이지를 전환, 회원가입 후 홈화면으로 전환

//! 동적 라우팅 / URL 파라미터

//? 동적 라우팅
// : URL의 일부를 변수로 사용하여 해당 값에 따라 서로 다른 데이터를 표시할 수 있는 라우팅 방식
// EX) 사용자 프로필 페이지, 특정 상품 페이지 등 하나의 UI체계에서 각각의 다른 데이터가 필요한 경우에 사용

//? URL 파라미터(:id) 사용 방법
// : 경로에 변수를 포함시키는 방법
// >> 리액트 라우터에서는 ':변수명' 형식을 사용
// EX) /users/:id, /products/:productId

//? useParams()
// : 리액트 라우터 훅 중 하나
// : URL 파라미터의 값을 읽어오는 데 사용
// >> 경로 변수에 접근, 해당 값을 애플리케이션 로직에 활용

export default function Router03() {
  //? useNaviage() 사용법
  const navigate = useNavigate();

  //& useParams() 사용법
  const { id } = useParams();

  //? 특정 경로 이동 방법
  const goHome = () => navigate('/'); // 전체 경로를 /로 지정
  const go0413 = () => navigate('/0413');

  //? 이전 페이지로 돌아가기
  const goBack = () => navigate(-1);
  
  return (
    <div>
      <button onClick={goHome}>홈으로 이동</button>
      <button onClick={go0413}>0413페이지로 이동</button>
      <button onClick={goBack}>이전 페이지로 이동</button>

      <div>
        <p>User Id: {id}</p>
      </div>
    </div>
  )
}
