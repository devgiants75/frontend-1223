// 사용자 및 게시물 데이터 처리 모듈
import { fetchData } from './apiUtils';
import { User, Post } from './models';

// 주어진 userId에 해당하는 사용자 정보를 가져오는 함수
export async function getUser(userId: number): Promise<User> {
  return fetchData<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

// 주어진 userId에 해당하는 사용자의 게시물을 가져오는 함수
export async function getPostsByUser(userId: number): Promise<Post[]> {
  return fetchData<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}
