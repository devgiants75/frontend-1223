// g_class05.ts
{
//! 추상 클래스와 추상 메서드

//? 정의
// 1. 추상 클래스
// : 인스턴스화 할 수 없고
//   , 하나 이상의 추상 메서드를 포함할 수 있는 클래스
// : 공통의 기능을 정의, 상속을 통해서 해당 기능을 구현하도록 강제하는 틀을 제공
// - abstract 키워드를 사용하여 정의

//? 2. 추상 메서드
// : 구체적인 구현이 없이 선언만 된 메서드
// - 메서드의 구현이란 로직이 작성되는 부분(중괄호)
// : 파생되는 클래스가 반드시 구현해야 하는 메서드의 틀을 제공
// - 추상 클래스 내에서 abstract 키워드를 사용하여 선언

//? 3. 추상 클래스 / 추상 메서드 예제
// 동물 추상 클래스
abstract class Animal {
  // 추상클래스 내에서는 반드시 한 개 이상의 추상 메서드가 정의되어야 함
  // : 그 외에는 다른 일반 메서드와 일반 멤버 변수 정의도 가능

  // 추상 메서드 정의
  // : 중괄호의 로직 구현부가 존재하지 X
  abstract makeSound(): void;

  move() {
    console.log('moving...');
  }
}

// 비추상 클래스 'Dog'은(는) 'Animal' 클래스에서 상속된 추상 멤버 'makeSound'을(를) 구현하지 않습니다.
// : 추상 클래스를 상속받은 클래스에서는 반드시 추상 메서드를 구현!!
//   , 메서드의 로직 {}중괄호를 작성해야 함!!
class Dog extends Animal {
  makeSound(): void {
    console.log('멍멍!!');
  }
}
const myDog = new Dog();
myDog.makeSound(); // 멍멍!!
myDog.move(); // moving...

//! 인터페이스 구현(Implementing Interfaces)
//? 정의
// : 메서드와 속성의 시그니처를 정의하는 구조체
// : 클래스가 특정 기능을 구현하도록 강제, 다형성을 지원

//? 구현 방법
// interface 키워드를 사용하여 정의
// implements 키워드를 사용하여 해당 클래스가 정의된 인터페이스를 구현함을 선언

//? 인터페이스 예제
// : 인터페이스명도 대괄호 시작
// : I인터페이스명으로 사용
interface IAnimal {
  // name이라는 변수와 makeSound라는 메서드를 반드시 포함
  name: string;
  makeSound(): void;
}

// 'Cat' 클래스가 'IAnimal' 인터페이스를 잘못 구현합니다.
// 'Cat' 형식에 'IAnimal' 형식의 name, makeSound 속성이 없습니다.
class Cat implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
      console.log('야옹!!');
  }
}

const myCat = new Cat('야옹이');
myCat.makeSound(); // 야옹!!

//! 추상클래스와 인터페이스의 차이점
// 1. 추상클래스는 클래스의 '이다(is - a)'관계를 나타냄
// : 상속 받는 하위 클래스가 부모 클래스의 특정 종류로 간주
// EX) '동물' 추상 클래스를 상속받는 '개', '고양이' 클래스

// 2. 인터페이스는 클래스가 '할 수 있는(has - a)'관계를 나타냄
// : 해당 기능을 할 수 있음에 중점
// EX) '비행 가능' 인터페이스를 구현하는 '새'와 '비행기' 클래스

// - 공통점: 확장성과 유지보수성
}