//! 콜백을 사용한 비동기 코드 작성

// 데이터베이스 조회 모방
// findUserById / findUserPosts 함수를 작성
// : 사용자 ID를 인자로 받아, 해당 사용자 정보와 사용자의 게시물을 비동기적으로 조회

function findUserById(userId, callback) {
  setTimeout(() => {
    console.log(`Finding user with ID ${userId}`);
    // 아래의 user 데이터는 서버와 통신하여 가져오는 값
    const user = {
      id: userId,
      username: 'LSA'
    };
    // 통신을 통해 데이터를 가져오기 전에 callback 함수는 실행중
    callback(null, user);
  }, 3000); // 1초 뒤에 사용자 정보 반환
}

function findUserPosts(userId, callback) {
  setTimeout(() => {
    console.log(`Finding posts for user ${userId}`);
    const posts = [
      { postId: 1, content: 'Hello World'},
      { postId: 2, content: 'Another Posts'}
    ];
    callback(null, posts);
  }, 1000); // 1초 뒤에 사용자 게시물 반환
}

// 함수 호출
findUserById(1, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('User found: ', user);
  findUserPosts(user.id, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Posts found: ', posts);
  })
});

// setTimeout()을 사용하여
// : 사용자 ID를 인자로 전달받아
// : 사용자 정보와 사용자의 게시물을 비동기적으로 조회
// >> 코드의 실행 시점을 개발자가 지정