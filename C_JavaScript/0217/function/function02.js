//! 자바스크립트 함수 구조

// 매개변수와 인자

// 매개변수 (파라미터, parameter)
// : 함수의 입력으로 사용되는 변수를 의미
// : 함수를 정의할 때 소괄호 안에 선언

// 인자 (아규먼트, argument)
// : 함수를 호출할 때 전달하는 실제 값
// : 함수 호출 시 소괄호 안에 넣어 함수에 전달

function add(a, b) { // 파라미터
  console.log(a + b); // 7
}

add(3, 4); // 인자

//? 자바스크립트에서 파라미터와 아규먼트 사용
// 함수 호출 시 전달되는 아규먼트의 수
// , != 함수 정의 시 선언된 파라미터의 수

// 파라미터 > 인자: 넘기지 않은 파라미터의 값은 undefined로 지정
// 파라미터 < 인자: 초과된 아규먼트의 값은 무시

function log(a) {
  console.log(a);
}

log(); // undefined
log('안녕'); // 안녕
log('hello', 'hi'); // hello

//! 반환값(return)
// : 입력 받아 처리한 결과를 '반환'
// : return 키워드를 사용해서 지정 가능
// : 함수 내에서 return 키워드를 사용하는 경우
//   , 함수의 실행을 즉시 중단하고 return 뒤에 오는 값을 반환

function subtract(a, b) {
  result = a - b;
  return result;
}

let outcome = subtract(10, 7);
console.log(outcome); // 3

// return이 없는 함수는 undefined를 반환
// : 일반적으로 즉시 콘솔 출력 시 사용

// 실습 문제
// : 함수 square를 작성하여 파라미터로 x값을 받음
// : 반환 값으로 x의 제곱을 반환
// : 반환 결과를 변수에 담아 해당 변수를 콘솔창에 출력
// - 함수 선언문 형식으로 작성

function square(x) {
  return x * x;
}

let squareResult = square(5);
console.log(squareResult); // 25

//! 기본 매개변수 & 나머지 매개변수
// 1. 기본 매개변수
// : 함수에 인자가 전달되지 않았을 때 사용되는 기본값 설정
// : 함수 호출 시 특정 매개변수를 생략 가능

// 구현 방법
// : 함수 선언 시 매개변수명 뒤에 = 연산자와 기본값을 지정
function greet(name='이승아') {
  console.log(`안녕하세요, ${name}님`);
}

greet(); // 안녕하세요, 이승아님
greet('이도경'); // 안녕하세요, 이도경님

// 2. 나머지 매개변수
// : 함수에 전달된 인자들을 배열로 받을 수 있도록 작성하는 방법
// : 주로 함수에 가변적인 수의 인자를 전달할 때 유용
// : 매개변수명 앞에 ...을 붙여 정의

function print(...numbers) {
  console.log(numbers);
}

console.log(print(1, 2, 3, 4, 5));
console.log(print(11, 22, 33));

// 스프레드 문법 - 배열을 개별 요소로 분해 하는 문법
// : ...을 사용
let parts = ['어깨', '무릎'];
let body = ['머리', ...parts, '발'];
console.log(body);