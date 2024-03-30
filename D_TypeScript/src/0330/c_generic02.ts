// c_generic02.ts
{
//! 제네릭의 제약 조건

//? 제약 조건(Constraints)
// : 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
// : 제네릭 타입의 사용 범위를 제한, 특정 속성이나 메서드에 접근 가능

//? 제네릭 제약조건의 예시
interface Lengthwise {
  // length 속성을 가지는 인터페이스
  // : 해당 속성의 타입은 number

  length: number;
  // : Lengthwise 인터페이스를 구현하는 모든 객체는 숫자 타입의 length 속성을 반드시 가져야 한다.
}

// 제약 조건 사용을 위해 T라는 제네릭 타입이 Lengthwise 인터페이스를
// , 확장(상속)해야 함.
// : length 속성을 포함하는 어떠한 객체든지 인자로 전달 가능
function constraintsFunc<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  // : .length 속성이 반드시 존재함을 확신
  return arg;
}

let variable = constraintsFunc({length: 10, value: 3}); // 10
console.log(variable); // { length: 10, value: 3 }

//? 최소한의 속성을 가진 객체 찾기

// keyof 연산자
// : 객체 형태의 타입을 따로 속성만 뽑아 유니온 타입으로 만들어주는 연산자
// : 모든 키의 이름을 유니온 타입으로 반환
type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = name | age;

//! 조건부 타입
// : 타입 매개변수에 대한 조건 표현식을 기반으로 타입을 결정하는 방식
// : if문과 유사한 역할

type Check<T> = T extends string ? 'String' : 'Not a String';
// : 제네릭 타입 T가 string인 경우 'String'을
//   , 그렇지 않은 경우 'Not a String' 타입을 가짐
type Type1 = Check<string>; // String
type Type2 = Check<number>; // Not a String

function checkType<T>(value: T): Check<T> {
  // 일반 문자열이 아닌 
  // 리터럴 타입으로써의 문자열로 타입 지정
  return typeof value === 'string' ? 'String' as Check<T>: 'Not a String' as Check<T>;
}

console.log(checkType<string>('안녕하세요')); // String
console.log(checkType<number>(500)); // Not a String

//? 타입 단언
// : 타입스크립트에게 개발자가 특정 값의 타입임을 알고 있음을 전달
// : 컴파일러가 타입을 정확하게 추론하지 못하는 경우
// : 개발자가 구체적인 타입을 프로그램에게 전달

// 각주 문법(as 키워드)
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
console.log(strLength); // 16

someValue = true;
strLength = (someValue as string).length;
console.log(strLength); // undefined
// : someValue를 boolean 값으로 변환하는 경우
// : 해당 값의 길이가 측정되지 않아 undefined로 출력
// undefined: 길이 측정은 문자열일 경우에만 사용 가능

//? 타입 제한 예시
// : 조건부 타입 명시와 타입 단언을 사용
type IsNumber<T> = T extends number ? number : string;

// processValue 함수
// : 숫자 타입인 경우에는 그 숫자의 제곱근
// : 숫자가 아닌 경우에는 Not a number 문자열을 반환

function processValue<T>(value: T): IsNumber<T> {
  if (typeof value === 'number') {
    return Math.sqrt(value) as IsNumber<T>;
  } else {
    return 'Not a number' as IsNumber<T>;
  }
}
console.log(processValue(9)); // 3
console.log(processValue('hello')); // Not a number
}