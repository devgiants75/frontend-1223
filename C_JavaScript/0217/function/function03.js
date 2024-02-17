//! 자바스크립트의 고급 함수

// 1. 콜백 함수(callback)
// : 다른 함수의 인자로 전달되어, 그 함수의 내부에서 실행되는 함수
// : 비동기 작업, 이벤트 처리, 특정 조건에 따른 함수 실행 등에 사용

//? 선언적 함수 사용으로 콜백 함수 구현
function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    // callback 매개변수는 함수가 전달되기 때문에 호출 가능
    callback(i);
  }
}

function print(i) {
  console.log(`${i}번째 함수 호출`);
}

// 함수 호출
callThreeTimes(print);

// 콜백함수로 익명함수 사용
callThreeTimes(function (i) {
  console.log(`${i}번째 함수 호출입니다.`);
})

//! 콜백 함수를 활용하는 자바스크립트 내장 함수
// 배열이 가지는 콜백함수 활용 메서드의 형태
// function (value, index, array)

// 1. forEach()
// : 배열이 갖고 있는 함수
// : 단순하게 배열 내부의 요소를 사용해서 콜백함수를 호출
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
  // 콜백함수의 매개변수에서 array값은 생략
  console.log(`${index}번째 요소: ${value}`);
})

// 2. map()
// : 배열이 가지는 함수
// : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성
// : 요소의 개수 변화 X

const newNumbers = numbers.map(function(value) {
  // 해당 배열의 인덱스와 배열 자체를 사용하지 않을 경우
  // : 콜백함수의 매개변수로 요소값만을 작성 가능
  return value * value;
})

console.log(newNumbers); 
// [ 74529, 2704, 10609, 1024, 3249 ]
// - 기존의 배열과 요소의 수가 일치 (길이가 같다.)

// 3. filter()
// : 배열이 가지는 함수
// : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 만드는 함수

const array = [0, 1, 2, 3, 4, 5];
const evenNumbers = array.filter(function(value) {
  return value % 2 === 0;
})

console.log(`원래 배열 ${array}`);
console.log(`짝수만 추출: ${evenNumbers}`);

// - 배열의 콜백 함수 사용 시 주로 화살표 함수를 사용
const arrowResult = array.filter(value => value % 2 === 0)
console.log(arrowResult); // [ 0, 2, 4 ]

// 배열의 메서드와 화살표 함수
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbersArray의 값들 중
// - 짝수만 선택하여 (filter)
// - 해당 값들을 제곱하여 (map)
// - 차례로 콘솔에 출력 (forEach)

numbersArray
  .filter(value => value % 2 === 0)
  .map(value => value * value)
  .forEach(value => console.log(value));
// 메서드 체이닝
// : 어떤 메서드(기능)이 반환(리턴)하는 값을 기반으로 함수를 줄줄이 사용하는 것