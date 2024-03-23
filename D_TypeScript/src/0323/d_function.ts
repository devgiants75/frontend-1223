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

//! Rest 매개변수
// : 함수에 여러 개의 매개변수를 그룹화하여 배열로 전달하는 기능
// : 함수에 가변적인 수의 인자를 안전하고 효율적으로 처리하도록 하는 기능

// ...연산자를 매개변수 앞에 사용하여 정의
function sum(...numbers: number[]): number {
  // reduce 메서드
  // : 네 개의 매개변수를 가질 수 있는 콜백함수
  // - 1. accumulator: 누적 계산의 결과값
  // - 2. currentValue: 처리할 현재 요소
  // - 3. (선택) 처리할 현재 요소의 인덱스
  // - 4. (선택) reduce를 호출한 배열
  return numbers.reduce((a, b) => a + b, 0);
  // a += b
}

const result1 = sum(1, 2, 3, 4, 5);
console.log(result1); // 15
const result2 = sum(10, 20, 30);
console.log(result2); // 60
const result3 = sum(129, 3242, 234);
console.log(result3); // 3605

// 첫 번째 인자는 name의 변수에
// 두 번째 인자부터는 names 배열에 할당
function greetEveryone(name: string, age: number, ...names: string[]): string {
  // join 메서드
  // : 배열의 모든 요소를 연결하여 하나의 문자열로 생성
  // : 배열 내의 각 요소를 문자열로 변환하고 지정된 구분자(선택사항)로 해당 요소들을 구분하여 결합
  return names
    .map(name => `Hello ${name}`)
    .join(', ');
  // : 메서드 체이닝
}

console.log(greetEveryone('이승아', 30, '이도경', '진현지', '심은혜')); // Hello 이도경, Hello 진현지, Hello 심은혜

// Rest 매개변수 주의사항
// : 항상 마지막에 위치
// : 타입 명시를 주의

//! 함수의 '오버로딩'
// : 같은 이름의 함수에 대해 
//   여러 매개변수의 타입과 반환 타입을 정의하는 기능

//? 특징
// : 함수는 '하나 이상의 타입 시그니처'를 가질 수 있다.
// : 함수는 '단 하나의 구현'을 가질 수 있다.

// 기본 문법
// : 함수 선언부는 여러 개가 될 수 있지만, 구현은 하나만 있어야 한다.
// - 함수의 선언부: 중괄호 이전의 함수명, 매개변수 지정
// - 함수의 구현부: 중괄호와 중괄호 내의 코드
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  // 함수 구현부: 단일 함수명에 대한 중괄호는 반드시 하나!
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
    // concat() 메서드
    // : 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
  }
  throw new Error('Invalid arguments');
}

console.log(add(1, 2)); // 3
console.log(add('이', '승아')); // 이승아

// 함수의 오버로딩의 사용
// : 함수에 대한 다양한 타입의 매개변수를 제공할 수 있도록 지정
// : + 타입 안정성 유지
}