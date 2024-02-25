//! 객체의 속성 존재 여부 확인
// : 객체에 없는 속성에 접근 - undefined 자료형
// : 조건문으로 undefined인지 아닌지 확인

// 객체 생성
let object = {
  name: '이승아',
  age: 28,
  job: 'developer'
}

// 객체 내부에 해당 속성이 있는지 확인
if (object.name !== undefined) {
  // name 속성이 존재
  console.log('name 속성이 있습니다.');
} else {
  console.log('name 속성이 없습니다.');
}

//? >> 조건문을 연산자를 활용하여 간단하게 표시
// 논리연산자(and, or, not)
// or연산자의 경우 둘 중에 하나라도 true면 true

// object.name이 존재하는지 여부를 논리연산자를 사용하여 표시(실행 X)
object.name || console.log('name 속성이 없습니다.');

// object.hobby가 존재하는지 여부를 논리연산자를 사용하여 표시(실행 O)
object.hobby || console.log('hobby 속성이 없습니다.');

//? 기본 속성 지정하기
// : 삼항 연산자

// - 객체의 기본 속성을 지정
object.name = object.name !== undefined ? object.name : '이름을 알 수 없는 고객';
object.hobby = object.hobby !== undefined ? object.hobby : '취미를 알 수 없는 고객';

// - 객체 출력(JSON 형태로 반환)
console.log(JSON.stringify(object, null, 2));
console.log(object.hobby);

//? 객체의 기본 속성을 간단하게 지정
// >> object의 name과 favorite 속성을 지정
// : 각각 속성이 존재하지 않을 경우
// : '이름을 알 수 없음', '떡볶이'로 지정
// : 논리연산자를 사용하여 구현

object.name = object.name || '이름을 알 수 없음';
object.favorite = object.favorite || '떡볶이';
console.log(object.favorite);

//! 배열 기반의 다중 할당
// : 배열과 비슷한 방법으로 한 번에 여러 개의 변수에 값을 할당

//? 다중 할당의 형태
// 식별자의 경우 변수를 나열한 형태
// : [식별자, 식별자, 식별자, ...] = 배열

let array = [1, 2]
let [a, b] = array;
// let a = 1; - let a = array[0];
// let b = 2; - let b = array[1];
console.log(a);
console.log(b);
console.log(a, b); // 1 2

[a, b] = [b, a];
console.log(a, b); // 2 1

// : 배열의 크기는 같을 필요가 X
// : 넘치는 값은 생략
// : const 키워드로써 다중 할당을 받을 수 있다.
let arrayA = [1, 2, 3, 4, 5];
const [aa, bb, cc] = arrayA;
// 다중 할당을 받은 식별자는 각각의 변수가 선언된 것과 같다.
console.log(aa, bb, cc); // 1 2 3

//! 객체 기반의 다중 할당
// : 객체 내부에 있는 속성을 꺼내서 변수로 할당할 때 사용

// 객체 속성을 꺼내서 다중 할당
// {속성명, 속성명} = 객체
// {식별자=속성명, 식별자=속성명} = 객체

// 객체 생성
const bookObject = {
  name: '어린왕자',
  price: 18000,
  publisher: '열린책들'
}

// 객체에서 변수를 추출: name과 price 속성을 그대로 꺼내옴
// : 배열의 다중 할당과 달리
// : 지정된 속성명으로 해당 값이 자동 전달
// : 객체에 저장된 속성명이 아닐 경우 undefined를 반환
const { name, price, author } = bookObject;
// 어린왕자 18000 undefined
console.log(name, price, author); 

// name과 price 속성을 각각의 새로운 이름의 변수에 저장
const {aaa=name, bbb=price} = object;
console.log(aaa, bbb); // 어린왕자 18000

//! 배열&객체 전개 연산자

//? 얕은 복사
// : 배열과 객체는 할당할 때 얕은 복사가 이루어짐

// 구매해야 할 물건 목록
const product0225 = ['우유', '식빵'];
const product0226 = product0225;

product0225.push('고구마');
product0226.push('토마토');

console.log(product0225); // [ '우유', '식빵', '고구마', '토마토' ]
console.log(product0226); // [ '우유', '식빵', '고구마', '토마토' ]

// >> 얕은 복사(참조 복사)
// : 서로 이름만 다를 뿐 '서로 같은 메모리 참조값'을 가짐

//? 깊은 복사
// : 두 배열이 완전히 독립적으로 작동
// : 전개 연산자를 사용하여 깊은 복사가 가능(스프레드 연산자, ...)

const product0227 = [...product0225];
product0225.push('치즈');
console.log(product0225); // 치즈 포함 O
console.log(product0227); // 치즈 포함 X

// 전개 연산자의 경우 배열의 요소 추가에도 사용
// [요소, 요소, ...배열, 요소]
const addProduct = ['감자', '오렌지주스'];
const product0228 = ['양파', ...addProduct, ...product0225]; // 배열 전달이 아니라 배열의 요솟값만 전달하는 방법
console.log(product0228);

//! 객체 전개 연산자
// : 배열과 동일하게 깊은 복사를 할 때 전개 연산자를 사용

//? 얕은 복사
const puppyA = {
  이름: '구름',
  나이: 3,
  분류: '푸들'
}

const puppyB = puppyA;
puppyB.이름 = '초코';
puppyB.나이 = 2;

console.log(JSON.stringify(puppyA));
console.log(JSON.stringify(puppyB));

//? 전개 연산자를 사용하여 깊은 복사
const puppyC = {...puppyA};
puppyC.이름 = '감자';
puppyC.나이 = 4;

console.log(JSON.stringify(puppyA));
console.log(JSON.stringify(puppyC));

//? 전개 연산자를 사용한 객체 요소 추가
// {...객체, 요소, 요소, 요소}
const puppyD = {
  예방접종: true,
  ...puppyA, // 이름, 나이, 분류
  이름: '나비', // 기존의 속성을 덮어쓰기
  나이: 1 // 기존의 속성을 덮어쓰기(업데이트, 수정)
}

console.log(puppyD);