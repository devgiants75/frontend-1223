//! 자바스크립트의 자료형 (데이터 타입)
// 자료형의 종류
// - 기본 자료형, 참조 자료형

// 1. (기본) 자료형
// : 컴퓨터가 처리할 수 있는 자료의 형태

// typeof 변수명: 자료형을 알 수 있는 함수

//! - 숫자형 (number)
// : 정수, 실수, 10진수, 그 외의 숫자 형태를 가리지않고 사용 가능
let num = 10;
let float = 10.5;

console.log(typeof num); // 줄복사: alt shift 방향키
console.log(typeof float);

//! - 문자형 (string)
// : 텍스트 데이터를 나타내는 타입
// : 홑따옴표(''), 쌍따옴표(""), 백틱(``)으로 둘러싸서 표현

let str1 = 'hello';
let str2 = "javascript";
let str3 = `hello, javascript`;

//? 템플릿 문자열
// : 백틱을 사용하여 정의
// : 문자열 내에서 변수나 표현식 ${} 안에 넣어서 사용할 수 있도록 하는 문자열

// 변수 삽입
let name = '이승아'; // 일반 변수 지정 시: 따옴표 사용
let greeting = `안녕하세요 ${name}님`; // 템플릿 문자열: 백틱 사용
console.log(greeting);

// 표현식 삽입
let num1 = 10;
let num2 = 20;
console.log(`num1 + num2 = ${num1 + num2}`);

// 여러 줄 문자열
// : 템플릿 문자열의 경우 여러 줄의 문자열 작성 가능
let multiLine = `
첫 번째 줄
두 번째 줄
세 번째 줄
`;
console.log(multiLine);

//! - 논리형 (boolean 불리언)
// : 참(true), 거짓(false) 값만을 가지는 자료형

let bool1 = true;
let bool2 = false;
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean
console.log(bool1); // true

//! null & undefined 자료형

//? - null
// : 값이 없음을 명시적으로 나타냄
// : 객체가 없음을 의미하는 값 (아무것도 참조하지 않음)
// : (변수에 할당된) 데이터 값이 유효하지 않은 상태
console.log(null); // null

//? undefined
// : 값이 할당되지 않은 변수의 기본값
// : 변수 선언은 되었으나 아직 어떠한 값도 할당되지 않았을 경우
let hello;
console.log(hello); // undefined

//? null과 undefined의 비교
// 모두 값이 없음을 표현
// null은 값이 의도적으로 비어 있음
// undefined는 값이 아직 할당되지 않았음

//! 자료형 변환
// : 자료형이 다른 자료형으로 바뀌는 것

// 문자, 숫자, 논리형의 자료형을 그 자신과 다른 자료형으로 바꾸는 것

//? 문자열로 변환 (string)
// : String()함수 또는 toString()함수를 사용
let numberToString = String(123);
console.log(typeof numberToString); // string

//? 숫자형으로 변환
// : Number()함수
let stringtoNumber = Number('123');
console.log(typeof stringtoNumber); // number

// - 문자열이 숫자로 변환할 수 없는 경우
//   : NaN 값을 도출 (Not a Number)
// NaN
// : 어떤 값과도 동등하지 X (반드시 대문자 N)
// : 어떤 수학적 연산이든 NaN을 만나면 결과값이 NaN

let notANumber = Number('This is not a number');
console.log(notANumber); // NaN

//? 논리형으로 변환
// Boolean() 함수 사용

// JS의 불리언 변환에서
// : false, 0, '', null, undefined, NaN을 제외한 데이터는
// : 모두 true로 간주

let stringToBoolean = Boolean('Hello');
let numberToBoolean = Boolean(0);

console.log(stringToBoolean); // true
console.log(numberToBoolean); // false