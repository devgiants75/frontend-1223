// j_union.ts
{
//! 1. union 타입이란?
// : 여러 타입 중 하나가 될 수 있는 값을 나타내는 방법
// : 값에 허용된 타입을 두 개 이상으로 지정
// : OR 연산자 (A 또는 B)
// : | 기호를 사용하여 표현

//! 2. union 타입의 사용
// : 변수, 함수의 매개변수, 반환값 등에서 모두 사용 가능
// : 타입의 유연성을 제공
// : 무분별한 any 사용을 방지

//! 3. union 타입의 예시(사용방법)
// type UnionType = Type1 | Type2 | Type3;

type Any = string | number | boolean | string[];

let value: Any = '문자';
value = 123;
value = true;
value = ['1', '2'];
// value = {}; - Error (객체 타입은 Any 타입에 할당X)

//? 타입 별칭의 예시
// 관리자 계정 Admin
type Admin = {
  id: string | number;
  password: number;
}

// 사용자 계정 User
type User = {
  id: string | number;
  name: string;
}

type Person = Admin | User;
// 타입 별칭의 union 타입의 경우
// : 중복되지 않은 타입 속성은 옵셔널(?)과 동일

// type Person = {
//   id: string | number;
//   password?: number;
//   name?: string;
// }

let lsa: Person = {
  id: '123',
  // name: '123'
  password: 123
}

//! union 타입의 특징
// 1. 공통 필드 접근
// : union의 모든 멤버가 공유하는 속성에만 직접적으로 접근 가능

// 2. 타입 가드 사용
// : 특정 타입에만 존재하는 속성이나 메서드에 접근하기 위해서는 타입 가드를 사용
// 타입 가드 - 조건문을 통해 타입을 좁혀나가는 방식

// 3. 유연성과 안정성
// : 다양한 타입의 사용을 가능하게 하는 유연성을 제공, 타입 가드를 적극적으로 사용하여 코드의 안정성을 향상

//! union 타입 실습
type Union = number | string;

function getAge(age: Union) {
  // 나이가 입력될 때
  // - 숫자의 경우 소수점 자리가 없도록 지정하여 반환: toFixed()
  // - 문자열의 경우 그대로 반환

  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  } 
  if (typeof age === 'string') {
    return age;
  }
}

console.log(getAge(12.345)); // 12
console.log(getAge('12살')); // 12살
}