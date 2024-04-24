// 유틸리티 함수 네임스페이스
import { User, Post } from './models';

// Utils 네임스페이스 안에 함수들을 정의하여 관련 유틸리티 함수들을 그룹화
export namespace Utils {
  // User 객체를 받아 콘솔에 사용자 정보를 출력하는 함수
  export function printUser(user: User): void {
    console.log(`User: ${user.name} (${user.email})`);
  }

  // Post 배열을 받아 콘솔에 게시물 정보를 출력하는 함수
  export function printPosts(posts: Post[]): void {
    posts.forEach(post => console.log(`[${post.title}]: ${post.body}`));
  }
}
