// f_object_type.ts

{
// 타입스크립트의 객체 타입*

//! 객체 타입 지정(명시)
// : 객체 타입 정의 시 {}(중괄호)를 사용하여 표현
// : 객체 타입의 경우 타입끼리의 구분 시 세미콜론(;) 사용을 권장!

//? 객체 타입 정의와 객체의 차이점
// - 콜론의 우변에는 값 대신 해당 속성값의 타입을 명시(지정)
// - 구분자로 콤마(,) 뿐만 아니라 세미콜론(;)도 사용 가능

// 객체 타입 명시
// : 변수 명 뒤에 콜론을 사용하여 명시
// : 콜론 뒤 중괄호를 사용

const user: {
  name: string; // 세미콜론 사용 권장!
} = {
  name: '이승아',
  //? 객체의 경우 타입으로 명시되지 않은 속성은 정의할 수 없음!
  // height: 169 - Error
}

//? 객체의 경우 타입으로 명시된 값은 반드시 정의되어 있어야 함!
// const user1: { - Error
//   name: string;
//   height: number;
// } = {
//   name: '이승아'
// }

//! 객체의 선택 속성(선택적 프로퍼티)
// : 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현
// : 객체 타입에 지정된 형식 그대로를 객체로 작성
//   >>> BUT! 선택적으로 값을 생략하고 싶은 경우 선택적 프로퍼티를 사용

const nameAndUnknownHeight: {
  name: string;
  height?: number; // 타입 명시 속성 뒤에 물음표를 작성 > 선택적 프로퍼티
} = {
  name: '이도경',
  // height: 157
}

//! 읽기 전용 속성
// : 속성명 앞에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
// : 해당 키워드가 붙은 속성은 const 키워드를 이용한 변수 정의와 유사

// 객체의 속성값에 접근하는 방법 - 점 연산자를 사용하여 접근
const readonlyName: {
  readonly name: string;
  age: number;
} = {
  name: '이도경',
  age: 30
}

readonlyName.age = 29;
console.log(readonlyName.age); // 29

// readonlyName.name = '이승아'; - Error: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
console.log(readonlyName.name); // 이도경

}