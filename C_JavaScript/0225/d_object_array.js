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