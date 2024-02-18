//! 객체(Object)

//! 객체의 정의
// : 관련된 데이터와 함수의 집합
// : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)과 메서드(기능)라고 불림

// - 자바스크립트는 '객체'지향 프로그래밍 언어
// : 실세계에 존재하고 인지한느 모든 것을 객체로 표현

// - 객체는 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너
// : 배열도 여러 타입의 자료를 담는 것이 가능한 객체의 일부
// typeof(데이터): 해당 데이터의 형태를 반환
console.log(typeof([1, 2, 3])); // object

//! 객체 생성 방법
// 변수를 정의하고 초기화하여 시작
// : 객체는 중괄호({})를 사용하여 초기화

// 1. 리터럴 방식
// : 중괄호를 사용한 생성
let person = {
  //? 데이터
  // : 객체의 프로퍼티(속성)
  // - '키: 값'의 형태로 지정
  name: {
    last: 'lee',
    first: 'seungah'
  },
  age: 28,
  gender: 'female',
  intersts: ['develope', 'exercise']
}

// 2. 생성자 함수 사용 방식
// : new 키워드와 함께 사용
// : 함수 내부에서 this 키워드를 사용해 객체의 속성(프로퍼티)을 정의
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, ${this.name}`);
  }
}

let person1 = new Human('이승아', 28);
let person2 = new Human('이도경', 30);

// 객체는 다른 이름값을 갖는 복수 개의 멤버로 구성
// : 한 쌍의 이름과 값은 쉼표(,)로 구분
// : 이름과 값은 : (콜론)으로 분리

//? 객체
// : 고유한 특성과 동작을 가지는 것(사람)

// 특성 (속성, 프로퍼티)
// : 이름, 나이, 직업 등

// 기능 (동작, 메서드)
// : 걷다, 말하다, 먹다 등

//? 객체의 기본 형태
let objectName = {
  // 키1: 값1,
  // 키2: 값2,
  // ...
  // : 값의 데이터 형식에는 제한 X 
    // (배열, 또 다른 객체, 함수 모두 사용 가능)
}

// 배열(리스트)가 각 요소에 대해 인덱스로 접근
// 객체는 각 요소값에 대해 키로 접근
// : 객체명.속성명, 객체명.메서드명 - 점 표기법

let dog = {
  name: {
    last: 'choco', // name 객체의 프로퍼티(속성)
    first: 'strawberry'
  },
  age: 3,
  color: 'white',
  favoriteToy: ['곰인형', '탱탱볼'],
  greet: function() {
    console.log(`Hello, ${this.name.last}`);
  }
}

// 프로퍼티(속성) 추가
dog.speed = 10;
console.log(dog);
// { name: '초코', age: 3, color: 'white', speed: 10 }

// 점 표기법을 사용한 프로퍼티 접근
console.log(dog.age);
console.log(dog.name.first); // strawberry
console.log(dog.favoriteToy[1]); // 탱탱볼

// 대괄호 표기법
// 객체명['키'] (키값을 문자열로 전달)
console.log(dog['age']); // 3

// 객체 내의 함수 호출
// 객체명.함수명()
dog.greet(); // Hello, choco

//? this 키워드
// : 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킴
// greet: function() {
  // console.log(`Hello, ${this.name.last}`);
  //? this.name.last는
  // : this는 해당 코드를 가지고 있는 dog 객체 그 자체
  // == dog.name.last와 동일 
  //    (점 표기법을 사용한 속성에 접근)
// }

let human1 = {
  name: '이승아',
  greeting: function() {
    console.log(this.name);
  }
}

let human2 = {
  name: '이도경',
  greeting: function() {
    console.log(this.name);
  }
}

// human1과 human2는 서로 다른 객체이기 때문에
// : 각각의 이름으로 생성됨
// : this가 가리키는 객체가 다름 (실행중인 코드가 속한 객체)

human1.greeting(); // 이승아
human2.greeting(); // 이도경+