//! 사용자 목록을 보여주는 웹 페이지
// DOMContentLoaded
// : 문서의 초기 HTML이 완전히 로드되고 파싱되었을 때 실행하는 이벤트
document.addEventListener('DOMContentLoaded', function() {
  let users = [
    { name: '사용자 1', email: 'user1@example.com', age: 30 },
    { name: '사용자 2', email: 'user2@example.com', age: 26 }
  ];

  let userList = document.getElementById('user-list');

  // users 배열의 각 사용자(요소)에 대해 반복 실행
  users.forEach(user => {
    // 새로운 div 요소 생성
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
      <h2>이름: ${user.name}</h2>
      <p>이메일: ${user.email}</p>
      <p>나이: ${user.age}</p>
    `;
    userList.appendChild(userDiv);
  });
});

//! 최신 검색 목록을 보여주는 검색창
