//! 자바스크립트 비동기 프로그래밍 - Promise(프로미스)

//! 1. 프로미스(Promise)의 정의
// : 자바스크립트에서 비동기 연산의 최종 완료 또는 실패와 그 결과값을 나타내는 구조

//! 2. 프로미스의 상태(3가지)
// 1. 대기(pending)
// : 비동기 연산이 아직 완료되지 않은 상태
// 2. 이행(FullFilled)
// : 비동기 연산이 성공적으로 완료되고, 프로미스가 결과값을 반환한 상태
// 3. 거부(Rejected)
// : 비동기 연산이 실패하고, 프로미스가 에러를 반환한 상태

//! 3. 프로미스 생성 및 사용법
// : new Promise() 생성자를 사용하여 생성
// : , 해당 생성자는 실행 함수를 인자로 전달받음
// : , 해당 함수는 resolve와 reject 두 가지 매개변수를 가짐

//? resolve(value): 프로미스를 이행 상태로 변경, 결과값 value를 반환
//? reject(error): 프로미스를 거부 상태로 변경, 에러 error를 반환

const myPromise = new Promise((resolve, reject) => {
  const condition = true; // 조건을 설정하는 예시

  if (condition) {
    resolve('Promise is fulfilled'); // 조건이 참이면 프로미스 이행
  } else {
    reject('Promise is rejected'); // 조건이 거짓이면 프로미스 거부
  }
});

//! 프로미스의 메서드 사용
// : .then(), .catch(), .finally()

//? .then()
// : 프로미스가 이행됐을 때 실행될 콜백 함수를 등록
// : 결과값을 인자로 받음

//? .catch()
// : 프로미스가 거부됐을 때 실행할 콜백 함수를 등록
// : 에러를 인자로 받음

//? .finally()
// : 프로미스의 성공/실패 여부와 상관없이 실행될 콜백 함수를 등록

// 1, 2, 3, 4 작업이 비동기로 실행
myPromise
  .then((result) => {
    console.log(result); // Promise is fulfilled
    return 'Proceeding to next step';
  })
  .then((nextResult) => {
    console.log(nextResult); // Proceeding to next step
  }) 
  .catch((error) => {
    console.error(error); // 프로미스 작업 실패 시 에러 출력
  })
  .finally(() => {
    console.log('Operaiton completed'); // 성공/실패 상관없이 수행
  });

// 계단식 전달 방법을 사용한 콜백함수와 달리
// , Promise는 then과 catch 블럭을 사용하여 코드의 가독성을 증가