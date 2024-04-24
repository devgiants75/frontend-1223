// 데이터 모델 정의 모듈

// 사용자 정보를 나타내는 User 인터페이스
export interface User {
  id: number; // 사용자 ID
  name: string; // 사용자 이름
  email: string; // 사용자 이메일
}

// 게시물 정보를 나타내는 Post 인터페이스
export interface Post {
  userId: number; // 게시물을 작성한 사용자 ID
  id: number; // 게시물 ID
  title: string; // 게시물 제목
  body: string; // 게시물 본문
}
