// b_literal.ts
{

//! 리터럴 타입(Literal, '문자 그대로의')

//? 1. 리터럴 타입의 정의
// : 특정 문자열, 숫자 또는 불리언 값을 정확히 지정하는 타입
// : 특정 값으로 제한된 타입

// 해당 값만을 가지는 상수 또는 해당 값을 타입으로 지정한 변수
// : 다른 값을 할당하려고 하면 타입 에러가 발생

// 1. 변수를 const로 선언하고 직접 리터럴 값을 할당(초기화)
// : 해당 값을 자동으로 리터럴 값으로 유추

let normalString = 'hello';
normalString = 'hi';

const exactString: 'hello' = 'hello'; // 리터럴 타입
// exactString = 'hi'; - Error
const exactNumber = 10;
const exactBoolean = true;

// 2. 변수에 타입 명시를 리터럴 값으로 명시
let exactString2: 'hello' = 'hello';
// exactString2 = 'hi'; - Error
let exactNumber2: 10 = 10;
let exactBoolean2: true = true;

//? 2. 리터럴 타입 활용
// : 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
// : 변수나 매개변수가 특정 값들 중 하나만을 가질 수 있도록 제한

// Directions 타입 속성의 경우
// string 타입의 네 가지 특정 리터럴 타입중 하나만을 가지는 타입
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions = 'up';
moveUp = 'down';

// let moveBottom: Directions = 'bottom'; - Error

// 함수 인자로서의 리터럴 타입 지정으로 함수 인자를 특정 값으로 제한
function setAlignment(alignment: 'left' | 'right' | 'center'): void {
  // 함수 내용
}

// 리터럴 타입은 숫자, 문자열, 불리언 등 원시 타입과 결합하여 다양하게 사용 가능

// 숫자 데이터는 모든 자료를 입력 가능
// 문자열 데이터는 'yes' 또는 'no'만 가능
type Literal = number | 'yes' | 'no';

let gameStart: Literal = 'yes';
gameStart = 'no';
gameStart = 3;
gameStart = 3230894720394;
// gameStart = 'hello'; - Error

//? 리터럴 타입의 활용 로직
// : 구체적인 값을 강제 | 특정 값들만 허용하는 로직 설계에 유용
// : 코드의 의도를 명확하게 표현 > 오류 감소, 자동완성 및 리팩토링에 용이

//? 리터럴 타입의 한계성
// : 고정된 값에만 제한되기 때문에 유연성이 떨어짐
}