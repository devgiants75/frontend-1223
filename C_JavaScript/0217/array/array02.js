//! 자바스크립트 배열

//! 배열 스프레드 연산자와 복사

//? 배열 스프레드 연산자
// : ES6에 도입된 기능
// : 배열의 요소를 확장할 때 사용, 배열의 복사 및 병합에 사용
// : ... 형태로 사용

// - 배열 복사
// : 배열의 모든 요소를 새 배열에 복사
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];

originalArray[1] = 5;
console.log(copiedArray); // [ 1, 2, 3 ]

let array1 = [11, 22, 33];
let array2 = array1;

array1[1] = 55;
console.log(array2); // [ 11, 55, 33 ]

// - 배열 병합
// : 두 개 이상의 배열을 병합할 경우 사용
// : 병합된 새 배열은 기존 배열들을 변경하지 X
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let mergedArray = [...numbers1, ...numbers2];
let mergedReverse = [...numbers2, ...numbers1];
console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(mergedReverse); // [ 4, 5, 6, 1, 2, 3 ]

//? 깊은 복사와 얕은 복사의 차이
// 1. 얕은 복사
// : 객체의 최상위 수준의 속성만 복사하는 것을 의미
// : 복사된 객체에서 중첩된 객체를 변경하면 원본에도 영향
// - 스프레드 연산자를 사용해 구현 가능
// - 배열의 경우 요소값을 새롭게 전달

// 2. 깊은 복사
// : 객체에 포함된 모든 수준의 속성을 완전히 새로운 복사본으로 생성
// : 복사된 객체를 변경해도 원본 객체에 영향을 미치지 X

//! 고급 배열 패턴 기능
// 1. 배열과 문자열 사이의 변환
// join()
// : 배열의 모든 요소를 연결하여 하나의 문자열로 변환
// : 선택적으로 구분자를 전달 - 제공하지 않을 경우 쉼표가 기본값
let fruits = ['사과', '바나나', '망고'];
let result = fruits.join();
let resultWithSpace = fruits.join(' ');
let resultWithDash = fruits.join('-');

console.log(result); // 사과,바나나,망고
console.log(resultWithSpace); // 사과 바나나 망고
console.log(resultWithDash); // 사과-바나나-망고

// split()
// : 문자열을 특정 구분자를 기준으로 분리하여 배열로 반환
let sentence = '사과,바나나,망고';
let words = sentence.split(',');
console.log(words); // [ '사과', '바나나', '망고' ]

//! 다차원 배열
// : 배열의 요소로 또 다른 배열을 포함하는 구조
// : 자바스크립트에서는 주로 2차원 배열을 사용
//   (3차원 이상의 배열도 존재)'

//? 다차원 배열 생성
// : 배열 리터럴 형식 사용
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// : 3X3 크기의 2차원 배열

//? 다차원 배열에 접근
// : 인덱스를 연속적으로 사용
// : matrix 배열의 첫 번째 행의 두 번째 요소에 접근
let item = matrix[0][1];
console.log(item); // 2