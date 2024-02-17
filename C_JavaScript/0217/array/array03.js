//! 배열의 기본 개념 복습
// 배열 생성: 빈 배열과 숫자, 문자열, 불리언 값을 포함하는 배열 각각을 생성
let emptyArray = [];
let mixedArray = [1, 'Hello', true];

// 배열 요소 접근: 주어진 배열 let fruits = ['Apple', 'Banana', 'Cherry'];에서 'Banana'를 출력하는 코드를 작성
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]);

// 배열 요소 수정: 위 fruits 배열에서 'Cherry'를 'Mango'로 변경하는 코드를 작성
fruits[2] = 'Mango';
console.log(fruits); // [ 'Apple', 'Banana', 'Mango' ]

//! 배열 정렬 및 검색 - fruits 배열 사용
// reverse 메소드 사용하기: 문자열 배열을 알파벳 역순으로 정렬하는 코드를 작성
fruits.reverse();
console.log(fruits); // [ 'Mango', 'Banana', 'Apple' ]

//! 고급 배열 패턴과 기술
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// 스프레드 연산자 사용하기: 두 배열을 병합하여 새 배열을 만드는 코드를 작성
let merge = [...array1, ...array2];
console.log(merge); // [ 1, 2, 3, 4, 5, 6 ]