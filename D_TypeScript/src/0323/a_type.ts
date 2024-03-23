// a_type.ts
{
//! 유니언 타입, 인터섹션 타입

//? 1. 유니언 타입
// : 변수가 여러 타입 중 하나의 타입을 가질 수 있도록 허용
// : OR (또는, |)
// : 입력된 데이터 타입에 따라 다른 비즈니스 로직을 처리할 때 유용

// - 입력된 데이터 타입에 따라 다른 처리
// string 타입: 문자열을 대문자 처리
// number 타입: 제곱한 값을 반환
// boolean 타입: 반대 값을 반환
function processInput(input: string | number | boolean): string | number | boolean {
  // 유니언 타입 사용 시 타입 제한을 하지 않은 경우에는
  // : 유니언 타입으로 지정된 모든 타입에서 중복되는 속성만! 사용 가능
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * input
  } else {
    return !input;
  }
}

let input1 = 'input one';
let input2 = 2;
let input3 = false;

console.log(processInput(input1)); // INPUT ONE
console.log(processInput(input2)); // 4
console.log(processInput(input3)); // true

//? 2. 인터섹션 타입
// : 여러 타입을 하나로 결합하여
//   , 모든 주어진 타입의 속성을 포함하는 새로운 타입을 생성
// : 그리고 (and, &)

// - 타입 속성을 사용하여 User 타입, Permissions 타입 정의
// User 타입: name, age 속성
// Permissions 타입: role, permissions 속성
// : 두 타입 속성의 인터섹션을 사용하여 EnhancedUser 타입을 생성

type User = {
  name: string;
  age?: number; // 옵셔널 - 필수 값 X
}

type Permissions = {
  readonly role: string;
  permissions: string[];
}

type EnhancedUser = User & Permissions;

let user1: EnhancedUser = {
  name: '이승아',
  // age: 30,
  role: 'developer',
  permissions: ['frontend', 'backend']
}

user1 = { // 객체 자체를 새롭게 부여
  name: '이도경',
  age: 30,
  role: 'admin', 
  permissions: ['hello', 'hi']
}
// readonly의 읽기 전용 속성은 해당 객체에서
// , readonly로 지정된 속성을 따로 수정하고자 할 때 오류 발생
// : 객체 자체를 객체 변수에 새롭게 부여 - 오류 X
// : 객체가 생성된 후에 해당 속성 값만을 변경 - 오류 O

// user1.role = 'HR'; - Error (읽기 전용 속성 변경 불가!)
}