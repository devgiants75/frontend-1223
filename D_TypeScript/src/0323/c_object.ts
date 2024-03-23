// c_object.ts
{
//! 객체 타입 

//? 1. 객체 '리터럴'
// : 실제 객체 데이터 정의
// : 구분자로 쉼표(,)만 사용 가능
// : 객체 이름은 소문자로 시작

type UserType = {
  name: string;
  height: number;
}

const user: UserType = {
  name: '이승아',
  height: 169
}
// : 객체 '리터럴'은 객체를 정의하고 각 속성에 값을 할당

console.log(user.name);
console.log(user['height']);

//? 2. 구조적 타이핑
// : 객체의 타입을 그 구조나 멤버에 의해서 결정하는 방식
// : 객체의 형태가 같다면, 같은 타입으로 간주

// - 덕 타이핑(duck typing)
// : 객체의 실제 타입보다는 객체가 가진 속성과 메서드가
// : 어떤 타입에 맞느냐가 중요

type Person = {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Name: ${person.name} / Age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const seungah = {
  name: '이승아',
  age: 30
}
const dokyung = {
  name: '이도경',
  age: 30,
  hobby: 'reading'
}
const eunhae = {
  name: '심은혜'
}

// greet 함수 호출
// : 인자로 Person 타입의 데이터가 전달

// Person과 구조가 같기 때문에 Person으로 취급
greet(seungah);

// 구조적 타이핑에 의해 Person으로 취급
// : hobby 속성을 무시한 채로 Person으로 인식
greet(dokyung); 

// Person 타입 속성의 구조와 일치하지 않음(age 속성 누락)
// greet(eunhae);

//? 중첩된 객체 타입
// : 객체 내부에 또 다른 객체를 포함하는 형태
// : 복잡한 데이터를 조직화하고 관리하기 용이

// 사용자의 프로필과 주소 정보를 포함하는 중첩된 객체 타입 정의
type Address = {
  street: string;
  city: string;
  zipCode?: string;
}

type UserProfile = {
  username: string;
  email?: string;
  address?: Address; // address의 속성값의 타입은 '객체'
}

let userA: UserProfile = {
  username: 'A',
  email: 'abc@naver.com',
  address: {
    street: '123 St',
    city: 'Busan',
    // zipCode: '12345'
  }
}

console.log(userA.username); // A
// console.log(userA.address.city); - Error

// 중첩된 객체 속성을 옵셔널 하는 경우
// : 해당 객체를 생략하는 경우를 대비하여 오류를 발생 - 96
// : 오류를 방지하기 위해서 조건문 사용

function isAddress(user: UserProfile) {
  if (user.address) {
    console.log(user.address.city);
  }
}

isAddress(userA); // Busan

//? 인덱스 서명
// : 객체의 모든 속성에 대해 타입을 정의하지 않고
//   , 키와 값의 타입만을 정의하여 
//     객체의 구조를 유연하게 지정하는 방법
// : 객체의 속성에 동적으로 접근할 수 있는 기능

// - 장점
// 유연성: 정해진 속성 이름 없이 다양한 속성을 객체에 추가 가능
// 동적 데이터 처리: 런타임에 키와 값을 결정 가능

type UserRecord = {
  // name: string; - 일반적인 객체 속성 타입 명시
  // [propertyName: indexType]: valueType;

  // 문자열의 키를 가지며, 각 키의 값도 문자열 타입으로 지정되어야 한다.
  [key: string]: string;
}

let user1: UserRecord = {
  name: '이승아',
  // UserRecord 타입은 속성명이 문자열 속성값도 
  // , 반드시 문자열인 다양한 속성을 지정 가능
  // age: 20,
  // isStudent: false
  age: '20',
  isStudent: 'false'
  // 추가적인 사용자 속성 지정 가능
}

user1.email = 'qwerty@naver.com'; // 문자열 키와 속성값
console.log(user1.email); // qwerty@naver.com
}