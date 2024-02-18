//! 객체, 배열, 함수 복습 문제

//? 하(초급)
// 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가
let person = {
  name: '이승아',
  age: 28,
  isStudent: false
}

// 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력
let fruits = ['apple', 'banana', 'mango'];
console.log(fruits[1]); // banana

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8

//? 중(중급)
// 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// for 반복문 in 연산자를 활용해 해당 속성을 가져오기
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // [ 'APPLE', 'BANANA', 'MANGO' ]

// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 '새 배열을 반환'하는 함수를 작성
// [1, 2, 3]
// [4, 5, 6]
// : [5, 7, 9]
function combineArrays(arr1, arr2) {
  return arr1.map((element, index) => element + arr2[index]);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6])); 
// [ 5, 7, 9 ]

//? 상(고급)
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let personCopy = deepCopy(person);
console.log(personCopy);
// { name: '이승아', age: 28, isStudent: false }

// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용
const users = [
  // 배열 users의 각 요소의 타입은 객체
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

// users는 매개변수명
function adultUserNames(users) {
  return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}

// users는 실제 데이터값
console.log(adultUserNames(users));
// [ 'John', 'Doe' ]