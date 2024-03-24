// c_class02.ts
{
  //! 생성자(Constructor)

  //? 생성자 함수의 정의
  // : 클래스의 인스턴스가 생성될 때 자동으로 호출되는 특별한 메서드
  // - 인스턴스의 초기화(초기 상태 설정)
  // - 속성(프로퍼티)의 초기값 설정

  //? 생성자 함수 사용법
  // : constructor 키워드를 사용하여 클래스 내부에 정의
  // : 인자를 받아서 클래스의 프로퍼티를 초기화

  //? 특징
  // - 클래스는 단 하나의 생성자만 가질 수 있다.
  // - 반환값X 함수, 자신을 new 키워드와 함께 호출하는 대상(클래스)의 새로운 인스턴스를 암시적으로 반환
  // - 필수적인 요소 X, 생성자가 없는 경우 자동으로 빈 생성자를 추가

  //! '사람' 클래스 정의
  class Person {
    // 멤버 변수(속성, 프로퍼티)
    name: string;
    age: number;

    // 생성자 함수
    constructor(name: string, age: number) {
      // this 키워드를 사용하여 생성되는 인스턴스의 변수를 초기화
      // 좌항의 name: 인스턴스의 값(메모리에 저장되는 값)
      // 우항의 name: 인자값
      this.name = name;
      this.age = age;
    }

    // 메서드 - 일반적인 메서드(생성자X)는 반환값이 존재 가능
    describe(): string {
      return `${this.name} is ${this.age} years old`;
    }
  }

  // 클래스를 통해 객체를 생성하는 경우
  // new 키워드와 클래스의 생성자를 통해 인스턴스화
  // 기본 생략된 생성자가 아닌 사용자 정의 생성자를 작성하는 경우
  // , 해당 생성자의 매개변수에 맞춰 인자를 전달해야 함!
  let person1 = new Person('이승아', 29);
  console.log(person1.name); // 이승아
  console.log(person1.describe()); // 이승아 is 29 years old

  let person2 
}
