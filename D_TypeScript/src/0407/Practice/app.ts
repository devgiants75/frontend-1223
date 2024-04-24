// 애플리케이션의 진입점으로, 사용자 데이터와 게시물을 가져와 출력하는 로직을 포함
import { getUser, getPostsByUser } from './dataService';
import { Utils } from './utils';

// 주어진 userId를 사용하여 해당 사용자의 정보와 게시물을 가져와 출력하는 비동기 함수
async function showUserData(userId: number): Promise<void> {
  try {
    const user = await getUser(userId); // 비동기적으로 사용자 정보를 가져옴
    Utils.printUser(user); // 가져온 사용자 정보를 출력

    const posts = await getPostsByUser(userId); // 비동기적으로 사용자의 게시물을 가져옴
    Utils.printPosts(posts); // 가져온 게시물 정보를 출력
  } catch (error) {
    console.error('Error fetching user data:', error); // 에러 발생 시 콘솔에 에러 정보를 출력
  }
}

showUserData(1); // 함수 실행 예시, userId 1에 해당하는 사용자의 데이터를 가져와 출력
