// a_loop.ts
//! 배열의 다양한 반복 방법
var arr = [1, 2, 3, 4, 5];
//? 1. for문(루프)
// : 배열의 각 요소에 접근할 때 인덱스를 사용하여 배열을 순회
// - 장점: 구현이 간단, 인덱스가 필요한 경우에 적합, 반복의 횟수 지정이 가능
// - 단점: 코드의 복잡성이 증가, 반복문 중첩 시 가독성이 떨어짐
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//? 2. forEach 메서드
// : 배열의 각 요소에 대해 실행할 함수를 인자로 받는 콜백함수
// : 배열의 모든 요소에 대해 동일한 작업(콜백함수)을 수행해야 하는 경우 사용
// - 장점: 간결, 배열의 각 요소에 대해 처음부터 끝까지 접근하기가 용이
// - 단점: 중간에 반복을 중단 X
arr.forEach(function (item) {
    console.log(item);
});
//? 3. map 메서드
// : 배열의 각 요소를 변환하여 새로운 배열을 '생성'
// : 데이터를 변환할 때 사용, 단순한 반복 시 사용하지 X
// - 단순 반복보다 변환의 목적으로 사용하기 때문에 원본 배열을 변경하지 X
//   , 모든 요소를 순회하여 새 배열 생성
var doubled = arr.map(function (item) { return item * 2; });
console.log(doubled);
//? 5. for...of 루프
// : ES6에 도입된 방법, 배열의 각 요소에 접근 가능
// : 코드가 간단, 배열의 각 요소를 순차적으로 접근
// 일반 for문과의 차이점
// : 배열의 인덱스에 접근 X
console.log('for of 루프');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    console.log(num);
}
//? 6. for...in 루프
// : 객체의 모든 열거 가능한 속성을 순회
// : 배열과 객체에서 사용 가능
console.log('for in 루프');
for (var num in arr) {
    console.log(num);
}
var student = {
    name: '이승아',
    height: 169,
    job: 'developer'
};
console.log('객체의 for in 루프');
for (var key in student) {
    console.log("".concat(key, ": ").concat(student[key]));
}
