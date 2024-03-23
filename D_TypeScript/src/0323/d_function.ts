// d_function.ts
{
// 타입스크립트 함수

//! 함수의 선언과 호출
// : 매개변수와 반환 값에 타입 지정 가능

// - 기본 함수 선언
function greet(name: string): string {
  return `Hello, ${name}`;
}

// - 화살표 함수
// : 타입 속성으로 명시하여 첨부
type ArrowGreetType = (name: string) => string;

const arrowGreet: ArrowGreetType = (name) => `Hello ${name}`;
console.log(arrowGreet('이승아')); // Hello 이승아

//! 선택적 매개변수와 기본 매개변수
// 선택적 매개변수
// : 함수 호출 시 생략 가능, 매개변수를 선택적으로 허용
// : 변수명 뒤에 ? 작성

// 기본 매개변수
// : 매개변수에 기본값을 할당
// : 선택적 매개변수로 매개변수가 전달되지 않은 경우 해당 기본값을 할당
// : 매개변수명 = '기본값'

function select(name?: string, greeting: string = 'hi'): string {
  if (name) {
    return greeting + " " + name;
  } else {
    return greeting;
  }
}

// name은 생략되고, greeting의 기본값이 출력
console.log(select()); // hi

// 'hello'의 값이 name의 값으로 지정
// : 의도와 다르게 인사말이 이름으로 지정
console.log(select('hello')); // hi hello

// 'lsa'가 name으로, 'hello'가 greeting으로 설정
console.log(select('lsa', 'hello')); // hello lsa 

//? 선택적 매개변수와 기본 매개변수의 차이
// : 두가지 모두 함수 호출 시 생략 가능
// - 선택적 매개변수는 생략된 경우: undefined로 처리
// - 기본 매개변수는 생략된 경우: 지정된 기본 값을 사용

//? 주의사항
// 1. 선택적 매개변수는 반드시 필수 매개변수 뒤에 작성
// 2. 기본 매개변수는 필수 매개변수와 선택적 매개변수 양쪽에 작성 가능
// 3. 기본 매개변수가 필수 매개변수 앞에 작성된 경우
// : 기본 매개변수를 생략하려면 반드시 undefined를 전달
console.log(select(undefined, 'hello')); // hello
}