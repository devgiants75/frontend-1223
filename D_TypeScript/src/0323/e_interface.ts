// e_interface.ts
{
//! 1. 인터페이스 정의
// : 객체 구조를 정의하는 타입스크립트의 기능
// : 컴파일 시간에 타입 체킹을 위해 사용되는 개념
// - 코드의 가독성과 유지 보수성을 향상
// - 다양한 구현체에 동일한 인터페이스를 적용하여 일관성과 재사용성을 제공

// 타입 속성
type UserType = {
  name: string;
  age: number;
}

// 인터페이스 명시
// : interface 키워드를 사용하여 명시
// : 인터페이스명은 대문자로 시작
// : type 속성의 선택적 프로퍼티(옵셔널)와 읽기 전용 프로퍼티 지정 가능
interface UserInterface {
  name?: string; // 선택적 프로퍼티
  readonly age: number; // 읽기 전용 프로퍼티
}

// 인터페이스 사용(구현) 예제
let employee: UserInterface = {
  name: '이승아',
  age: 28
}

//! 인터페이스의 역할
// 1. 타입 체킹: 개발자가 의도한 대로 코드 작동 가능
// 2. 코드 가독성 향상
// 3. 코드 재사용 촉진
// 4. 확장 가능성
// : 기본 인터페이스를 확장(상속)하여 멤버를 추가하거나 재정의 가능

//! 확장된 인터페이스
// : extends 키워드를 사용하여 확장

// 도형을 정의하는 인터페이스
interface Shape {
  color: string;
}

// 사각형을 정의하는 인터페이스
// : 도형의 인터페이스를 상속받음(Shape이 가진 모든 정의를 가짐)
interface Square extends Shape {
  // color: string; 이 생략
  sideLength: number;
}

// : 공통된 속성을 가진 인터페이스를 여러 번 정의하지 않아도 되기 때문에 코드 중복을 줄임

//! 인터페이스(interface) VS 타입 별칭(type)
//? 인터페이스
// - 확장성(extends 키워드 사용)
// - 합치기
// (동일한 이름의 인터페이스를 여러 번 선언 - 자동으로 하나의 인터페이스로 처리)
// - 주로 객체의 모양을 정의하는 데 사용
interface Shape {
  name: string;
}

// interface Shape {
//   color: string;
//   name: string;
// } - 해당 인터페이스와 동일하게 인식

//? 타입 별칭
// - 유니온 타입: 여러 타입 중 하나일 수 있는 값 정의에 유용
// - 기본 타입 별칭: 일반적인 타입의 별칭을 지정
// - 확장 불가능!
// - 타입 조합에 주로 사용
}