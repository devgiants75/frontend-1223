// b_practice.ts
{
// 문제 1: 제네릭 함수 작성
// - reverseArray 제네릭 함수 작성
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

let numberArray = reverseArray<number>([1, 2, 3]);
console.log(numberArray); // [3, 2, 1]
let stringArray = reverseArray<string>(['a', 'b', 'c']);
console.log(stringArray); // ['c', 'b', 'a']

// 문제 2: 제네릭 인터페이스 정의
// - KeyValue라는 제네릭 인터페이스를 정의
//   인터페이스는 key와 value라는 두 개의 속성을 가지며
//   , 각각의 타입은 제네릭으로 지정
interface KeyValue<K, V> {
  key: K,
  value: V
}

let keyValue: KeyValue<string, number> = {
  key: '이승아',
  value: 28
}

let anotherKeyValue: KeyValue<boolean, string> = {
  key: true,
  value: '참입니다.'
}

// 문제 3: 제네릭을 사용한 고차함수 구현
// mapArray라는 제네릭 고차함수 작성
// : 배열과 배열의 각 요소를 변환하는 콜백함수를 매개변수로 전달
// : 변환된 요소로 구성된 새 배열을 반환

function mapArray<T, U>(array: T[], callback: (item: T) => U): U[] {
  return array.map(callback);
}

let numbers = [1, 2, 3];
let doubledNumbers = mapArray<number, number>(numbers, (x) => x * 2);
console.log(doubledNumbers); // [ 2, 4, 6 ]

let strings = ['a', 'b', 'c'];
let uppercasedStrings = mapArray<string, string>(strings, (s) => s.toUpperCase());
console.log(uppercasedStrings); // [ 'A', 'B', 'C' ]
}