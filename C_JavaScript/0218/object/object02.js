// 자바스크립트의 객체 프로토타입

//! 프로토타입 기반 언어
// : 객체를 원형(프로토타입)으로 하는 복제 과정을 통해
//   객체의 동작 방식을 재사용 할 수 있게 하는 방법
// : 모든 객체들이 메서드와 속성들을 상속 받기 위한 템플릿(틀)으로써 프로토타입 객체를 가짐
// : 정의된 객체를 기반으로 생성된 다른 객체들이 공통적으로 사용할 수 있는 속성과 메서드를 제공

//! 생성자 함수를 사용한 객체 생성(객체의 틀을 정의)
// 생성자 함수를 사용할 경우 코드를 재사용하여 같은 구조의 객체를 여러 개 생성 가능
// : new 키워드를 사용하여 새로운 객체를 생성
// : 관례적으로 함수명의 첫 글자는 대문자로 시작
//   (일반적 기능을 담은 함수와 구별)
function Person(firstName, lastName, age, gender, intersts) {
  this.name = {
    first: firstName,
    last: lastName
  };
  this.age = age;
  this.gender = gender;
  this.intersts = intersts;
  this.greeting = function() {
    console.log(`Hello, ${this.name.first}`);
  }
}

// 생성자 함수를 사용한 객체 생성
let person1 = new Person('승아', '이', 28, 'female', ['exercise', 'develop']);
let person2 = new Person('도경', '이', 30, 'female', ['exercise', 'develop']);
// >> 생성자 함수로 만들어진 객체 내의 this는
//    new 키워드를 통해 만들어진 객체 그 자체
person1.greeting(); // Hello, 승아
person2.greeting(); // Hello, 도경

//! 클래스를 사용한 객체 생성 방법
// : ES6 이후 도입
// : 기존의 프로토타입 기반 생성보다 더 직관적인 방법으로 객체를 생성
// : 생성자 함수와 유사하게 새로운 객체를 생성하는 템플릿 역할

// 클래스의 생성자
// : 클래스를 사용하여 객체를 생성하고 초기화하기 위한 특별한 메서드
// : new 키워드로 클래스의 객체를 생성할 때 자동으로 호출
// : 각 클래스는 하나의 constructor(생성자)만을 가짐

// 클래스의 메서드
// : 클래스 기반으로 생성된 객체가 공통적으로 가질 수 있는 함수
// : 클래스 내부에서 메서드 정의 시 function 키워드를 사용하지 X

//? 클래스 생성 방법
// class 키워드 사용, 클래스명은 대문자로 시작을 권장
class Person2 {
  // 생성자
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job; // 속성 초기화
  }

  greet() {
    console.log(`안녕하세요 ${this.name}님`);
  }
}

let personA = new Person2('이지희', 19, 'high-school');
let personB = new Person2('이지훈', 15, 'middle-school');
personA.greet(); // 안녕하세요 이지희님
personB.greet(); // 안녕하세요 이지훈님