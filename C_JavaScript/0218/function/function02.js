//! 자바스크립트 함수

//! 고차 함수 - 타이머 함수
// : 특정 시간마다 또는 특정 시간 이후에 콜백 함수를 호출하는 기능

// 1. setTimeout(함수, 시간)
// : 특정 시간 후에 함수를 한 번 호출

// 2. setInterval(함수, 시간)
// : 특정 시간마다 함수를 호출

setTimeout(() => {
  console.log('3초 후에 실행됩니다.');
}, 3000); // 시간 단위는 밀리초 (1000밀리초 = 1초)

let count = 0;
let number = setInterval(() => {
  console.log(`3초 마다 실행됩니다. (${count}번째)`);
  count++;
}, 3000);
// - 인터벌을 종료하지 않을 경우 무한으로 실행

// 타이머 종료 함수
// clearTimeout(), clearInterval() 함수 사용

// clearTimeout(타이머_ID): setTimeout으로 설정한 타이머 제거
// clearInterval(타이머_ID): setInterval로 설정한 타이머 제거

// 타이머 id는 해당 타이머를 반환하는 객체
let counting = 0;
let id = setInterval(() => {
  console.log(`5초마다 실행됩니다. (${counting}번째)`);
  counting++;
}, 5000);

setTimeout(() => {
  console.log('타이머를 종료합니다.');
  clearInterval(id);
  clearInterval(number);
}, 15000);