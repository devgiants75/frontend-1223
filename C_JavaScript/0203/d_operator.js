//! JS 연산자
// : 수학적 계산을 위한 코드

// - 산술 / 할당 / 비교 / 논리

//? 산술 연산자
// : 수학적 계산을 수행하는데 사용
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)
// 나눗셈-나머지(%), 증가(++), 감소(--)

let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.33333333...
console.log(x % y); // 1

// 증감 연산자(++, --)
// : 숫자에 직접 적용하여 출력할 수 X
console.log("---------증감연산자----------");
console.log(3 - 1); // 2
// console.log(3++); - SyntaxError

// - 후위 연산자
// : x++ (변수 뒤에 연산자를 사용)
// : 해당 브라우저 식에서 바로 값을 변화 X
// : 그 다음 해당 변수를 불렀을 때 값을 계산
x = 10;
console.log(x++); // 10
console.log(x++); // 11
console.log(x); // 12

// - 전위 연산자
// : --x (변수 앞에 연산자를 사용);
// : 브라우저가 변수를 먼저 증가/감소 시키고 값을 반환
x = 10;
console.log(--x); // 9
console.log(x) // 9

x = 10;
x++; // 10
x++; // 11
--x; // 11
x++; // 11
x; // 12
x++; // 12
++x; // 14
console.log(x++) // 14

//! 할당(대입) 연산자
// : 변수에 값을 할당하는 데 사용
// 할당(=), +=, -=, *=, /=, %=

let a = 10; // 10을 a에 할당

// 더하기 후 할당
a += 5; // a = a + 5; >> 15
console.log(a); // 15

// 빼기 후 할당
a -= 2; // a = a - 2;
console.log(a); // 13

// 곱셈 후 할당
a *= 2; // a = a * 2;
console.log(a); // 26

// 나누기 후 할당
a /= 2; // a = a / 2;
console.log(a); // 13

//! 비교 연산자
// : 두 값을 비교하고, 그 결과를 boolean의 값으로 반환

// 동등(==), 부등(!=)
// > 값이 동일한지 테스트 (데이터 유형을 고려하지 X)

// 일치(===), 불일치(!==)
// > 엄격한 값과 값의 데이터 유형의 완전한 동일성을 모두 테스트

// 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)

let num1 = 10;
let num2 = '10';

// clg >> 코드 스니펫
console.log(num1 == num2); // 동등 - true
console.log(num1 != num2); // 부등 - false

console.log(num1 === num2); // 일치 - false
console.log(num1 !== num2); // 불일치 - true

// '=='와 '==='의 차이
// : 동등 연산자는 두 값이 같은지 비교할 때 자동으로 타입 변환을 수행(내용만 비교)
// : 일치 연산자는 두 값이 같은지 비교할 때 타입 변환 수행X
//   >> 값과 타입이 모두 같을 때만 true를 반환

console.log(num1 > num2); // 초과 - false
console.log(num1 < num2); // 미만 - false
console.log(num1 >= num2); // 이상 - true
console.log(num1 <= num2); // 이하 - true

//! 논리 연산자
// : boolean 값을 연산하는데 사용

// and(논리곱): &&
// : false값이 하나라도 있으면 무조건 false

// or(논리합): ||
// : true값이 하나라도 있으면 무조건 true

// not(부정논리): !

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true