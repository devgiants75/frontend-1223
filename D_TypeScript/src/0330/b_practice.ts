// b_practice.ts
{
// 문제 1: 제네릭 함수 작성
// - reverseArray 제네릭 함수 작성
function reverseArray() {
}

let numberArray = reverseArray<number>([1, 2, 3]);
console.log(numberArray); // [3, 2, 1]
let stringArray = reverseArray<string>(['a', 'b', 'c']);
console.log(stringArray); // ['c', 'b', 'a']

// 문제 2: 제네릭 인터페이스 정의
// - KeyValue라는 제네릭 인터페이스를 정의
//   인터페이스는 key와 value라는 두 개의 속성을 가지며
//   , 각각의 타입은 제네릭으로 지정
}