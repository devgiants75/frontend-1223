//! 객체의 참조 타입 이해

// 자바스크립트의 데이터 타입은 크게 2가지로 나뉨

//? 1. '원시' 타입(Primitive Type)
// : 문자열, 숫자, 불린, null, undefined, symbol

//? 2. '참조' 타입(reference Type)
// : 객체를 포함한 나머지 데이터 타입

// 1. 참조 타입 정의
// : 메모리에 직접 저장된 값을 참조하는 데이터 타입
// : 객체, 배열, 함수 등을 포함

// 2. 참조
// : 참조 타입은 변수에 직접 값을 저장 X
// : 메모리에 저장된 값을 가져옴
// - 참조 타입의 변수를 다른 변수에 할당할 경우
// : 새로운 변수는 원래 변수가 참조하고 있던 메모리의 주소를 가짐
// : 두 변수가 같은 객체를 참조

// ---원시 타입---
let num1 = 3;
let num2 = num1; // num2 또한 원시 타입
console.log(num2); // 3

num1 = 5;
console.log(num2); // 3 - 데이터(값)만을 복사

// ---참조 타입---
let computer1 = {
  name: '삼성노트북'
}

let computer2 = computer1;
console.log(computer2); // { name: '삼성노트북' }

computer1.name = '맥북';
console.log(computer2); // { name: '맥북' }

// 참조: 해당 자료의 주소값을 가짐.
// computer1과 computer2의 두 변수는 같은 객체를 참조하기 때문에 각각의 값을 변경할 경우 원본 객체도 변경

// - 참조에 의한 함수 호출
// : 함수에 참조 타입의 변수를 전달하는 경우
// : 위의 예시와 동일하게 원본 객체에 영향
function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer1);
console.log(computer2.name); // 아이패드

//! 객체의 복사
// : 깊은 복사 & 얕은 복사

//? 얕은 복사
// : 복사본이 원본 객체를 참조하기 때문에 원본 객체가 변경되면 복사본에 영향 O
let animal1 = {
  name: 'choco'
}
let animal2 = animal1;

//? 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// : 원본 객체와 복사본이 서로 독립적
// JSON.parse(JSON.stringfy(obj)) 메서드를 사용

animal3 = JSON.parse(JSON.stringify(animal1));
console.log(animal1.name); // choco

animal3.name = 'banana';
console.log(animal3.name); // banana
console.log(animal1.name); // choco
// : JSON.parse(JSON.stringfy(obj))로 복사한 객체의 경우 원본 객체와 동일한 형식이지만 서로 다른 주소값을 가짐

//! 자바스크립트 속성 존재 확인
// : 속성이 객체에 존재하는지 확인을 위해서 in 연산자 사용
let book = {
  title: '어린왕자',
  author: '생택쥐페리',
  publishYear: 1943
}

// > 반환값은 불리언값
console.log('title' in book); // true
console.log('hello' in book); // false

//! 속성 삭제
// 속성 삭제 시 값이 자동으로 삭제
// : delete 연산자를 사용

delete book.author;
console.log('author' in book); // false