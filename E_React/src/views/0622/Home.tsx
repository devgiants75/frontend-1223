import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  // useNavigate 훅을 사용하여 프로그래밍 방식으로 페이지 이동을 관리
  const navigate = useNavigate();

  // "My Page"로 이동하는 함수
  const goToMyPage = () => {
    navigate('/mypage');
  };

  return (
    <div>
      <h1>Home Page</h1>
      {/* 버튼 클릭 시 goToMyPage 함수 호출 */}
      <button onClick={goToMyPage}>Go to My Page</button>
    </div>
  );
}

