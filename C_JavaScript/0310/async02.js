//! JS 비동기 프로그래밍 - 콜백 함수

//! 1. 콜백 함수
//? 다른 함수에 인자로 전달되는 함수
// : 외부 함수의 내부에서 호출(실행)
// : 어떤 작업이 완료된 후에 실행되어야 하는 함수
// : 비동기 작업의 결과를 다루거나, 특정 이벤트가 발생한 후 추가 작업을 수행

//! 2. 콜백 함수 예시
function greeting(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  let name = prompt("Please enter your name.");
  callback(name); // callback은 함수
}

// greeting 함수는 processUserInput 함수의 인자로 전달되는 콜백함수
processUserInput(greeting);

//! 3. 콜백 함수를 사용하는 비동기 요청 예시
// : 웹 API 요청 - 사용자의 데이터를 콜백 함수로 전달하여 호출

// fetch
// : 가서 어떤 것 또는 어떤 이를 다시 가져오는 것이다.
// == 데이터를 가져오다.
function fetchUserData(userId, callback) {
  // 시간에 대한 비동기 작업을 처리하는 setTimeout() 콜백함수를 사용
  // : setTimeout()은 사용자가 임의로 코드의 실행 흐름을 제어하는 비동기 코드
  setTimeout(() => {
    // 전달할 사용자 데이터
    const userData = {
      id: userId,
      name: "이승아",
      email: "devgiants75@naver.com",
    };
    callback(userData);
  }, 3000); // 3초 후 사용자 데이터를 전달하는 콜백함수를 호출
}

// fetchUserData로 전달하는 인자함수
// : 익명함수로써, 해당 인자의 역할을 제외하고는 호출되지 않음.
fetchUserData(1, function (user) {
  console.log("User Found: ", user);
});

// 사용자로부터 이름을 prompt창에서 입력받는 함수
processUserInput(greeting);

// EX)
// A 함수가 33번째줄에서 setTimeout 설정으로 3초 뒤에 실행
// B 함수가 40번째줄에서 일반 함수로써 호출
// >> 해당 파일 실행 시 A / B 중 먼저 실행되는 코드 (B)

//! 4. 비동기 프로그래밍으로써 콜백 함수의 단점
// 콜백함수는 비동기 작업이 중첩 될수록 코드의 인자로 전달되는 코드의 중복이 늘어남

//? 콜백 지옥(callback hell)
// : 중첨된 콜백 함수들이 여러 단계에 걸쳐서 깊게 중복되는 문제점
// - 가독성 저하
// - 디버깅 어려움
// - 유지 관리 어려움

console.log("안녕하세요"); // 텍스트로 출력
console.error("안녕하세요"); // 빨간색 배경의 오류로 인식

// ================ //
function loginUser(email, password, callback) {
  // 예시 데이터베이스 사용자 정보
  // : 실제 프로그램에서는 프론트엔드 단위가 아닌 DB에 저장된 데이터
  const databaseUsers = [
    {
      email: 'example@naver.com',
      password: 'password',
      name: '이승아'
    },
    {
      email: 'example2@naver.com',
      password: 'password2',
      name: '이도경'
    },
  ];

  // 매개변수로 전달받는 email과 password를 
  // , 데이터베이스 정보와 비교
  const user = databaseUsers.find(
    user => user.email === email && user.password === password
  );

  // 사용자 찾기 성공
  if (user) {
    // 비밀번호 정보를 제외한 사용자 정보를 반환
    // : 객체의 구조분해할당을 사용(+ 스프레드 연산자)
    const { password, ...userWithoutPassword } = user;
    // const password = user.password;
    // const name = user.name;
    // const email = user.emial;

    // const userWithoutPassword = {
    //  name = user.name;
    //  email = user.email;
    // }
    callback(null, userWithoutPassword);
    // : 애러가 없기 때문에 null
    // : , 사용자 객체 반환
  } else {
    // 사용자 찾기 실패
    callback(new Error('Invalid email or password'));
    // : 에러 메시지와 함께 콜백 함수 호출
  }
}

// 사용자의 역할(roles)을 기반으로 사용자에게 특정 접근 권한이 있는지 확인하는 함수
function checkAccess(roles, callback) {
  // 접근 권한을 확인하는 로직
  // : ex) 'admin' 역할이 있으면 접근 허용
  const accessGranted = roles.inclueds('admin');

  if (accessGranted) {
    callback(null, true); // 접근 권한 있음
  } else {
    callback(null, false); // 접근 권한 없음
  }
}

// 함수 호출
// : 로그인이 완료되기 전에 첫 번째 익명함수를 호출
// : 첫 번째 익명함수는 로그인 시 발생하는 오류를 실행
// : 두 번째 콜백함수(checkAccess)는 해당 사용자가 해당 페이지에 접근이 가능한지에 대한 기능을 판단
//? loginUser 실행 완료 전 익명 함수 실행 시작
loginUser("example@naver.com", "password", function (error, user) {
  if (error) {
    return console.error(error);
  }
  // 해당 사용자가 웹 페이지에 접근이 가능한지의 유무를 판단하는 함수(매개변수로 또 다시 함수를 호출)
  //? 익명 함수 실행 완료 전에 checkAccess 함수 실행 시작
  checkAccess(roles, function(error, access) {
    if (error) {
      return console.error(error);
    }

    if (access) {
      console.log('Access granted');
    } else {
      console.log('Access denied');
    }
  })
});

//? 콜백 지옥
// : 계단식 코드가 순차적으로 이어짐