//! 자바스크립트의 제어문

// 제어문
// : 프로그램의 흐름을 제어하는 경우에 사용하는 실행문
// - 조건문, 반복문

// 순차문
// : 코드가 위에서 아래로 순차적으로 실행되는 구문

//! 조건문(Condition)
// : 프로그램에게 특정 조건을 검사하고
// : , 그 결과에 따라 다른 행동을 하도록 명령하는 방식
// : 특정 조건에 따라 코드블록을 실행 | 건너뛰기 가능

//? JS 조건문의 종류
// : if문, else문, else if문, switch문

//? 1. if문
// : 가장 기본적인 조건문: 특정 조건이 참이면 코드 블록을 실행

//* if문의 기본형태
/*
if (조건) {
  조건이 참(true)일 때 실행할 코드
}
*/
// >> 조건
// : 보통 비교 연산자를 사용해 표현(동등, 일치, 부등호 - boolean 타입으로 반환)
// : 주어진 조건이 참(true)일 때만 코드블록을 실행
// : 만약 조건이 거짓(false)d이면 코드블록은 무시

let number = 10;

if (number > 0) {
  // 조건이 참일 때 실행할 코드
  console.log("The number is positive");
}

console.log("순차문의 코드 진행");

//? else문
// : if문과 함께 사용, if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의

//* 기본 형태
/*
if (조건) {
  조건이 참일 때 실행되는 코드
} else {
  조건이 거짓일 때 실행되는 코드
}
*/

number = -10; // 변수 재할당

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

//? else if문
// : 여러 조건을 순차적으로 검사하고 싶을 때 사용
// : 첫 번째 if 조건이 거짓이면, else if의 조건을 검사
// >> if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

//* 기본적인 문법
/*
if (조건1) {
  조건1이 참일 때 실행되는 코드
} else if (조건2) {
  조건1이 거짓이고, 조건2가 참일 때 실행되는 코드
} else if (조건3) {
  조건1과 2가 거짓이고, 조건3이 참일 때 실행되는 코드
  ...
} else {
  모든 조건이 거짓일 때 실행되는 코드
}
*/

number = 0;

if (number > 0) {
  console.log("양수입니다.");
} else if (number < 0) {
  console.log("음수입니다.");
} else {
  console.log("0입니다.");
}

// - 조건식에 true와 false값과의 비교
// boolean 타입에서 false값으로 인식되는 값
// (false, 0, '', null, undefined)
// : 위의 값을 제외하고는 true의 값을 반환하기 때문에
// : 변수가 참인지 또는 그 값이 존재하는지를 테스트하기 위해서, 변수 이름 그 자체를 사용할 수 있음

// 조건식에서 변수명을 boolean 타입과 일치여부 확인을 하지 않아도 된다.

// >> 해당 변수를 불일치와 비교하고 싶은 경우
//    : 부정논리를 사용(!)

let cheese = "Cheddar";
// let result = Boolean(cheese);

if (cheese) {
  console.log("치즈가 존재합니다.");
} else {
  console.log("치즈가 없습니다.");
}

// cheese !== true
if (!cheese) {
  console.log("치즈가 없습니다.");
} else {
  console.log("치즈가 있습니다.");
}

//? switch문
// : 하나의 표현식을 평가하고 그 값에 맞는 case 라벨로 코드 실행을 전환
// : 여러 가지 경우 중 하나를 선택하는데 사용

//* 기본 구조
/*
switch (식) {
  case 값1:
    식이 값1과 일치할 때 실행되는 코드
  case 값2:
    식이 값2과 일치할 때 실행되는 코드
  case 값3:
    식이 값3과 일치할 때 실행되는 코드
  ...
  default:
    식이 어떤 값과도 일치하지 않을 때 실행되는 코드
}
*/

let fruit = "banana";

// case의 값의 경우 조건식의 데이터와 같은 데이터타입을 가져야 함
switch (fruit) {
  // 줄정렬: 원하는 줄을 드래그 ctrl + k + f
  // 해당 파일 전체 정렬: 마우스 커서 ctrl + k + f
  case "apple":
    console.log("사과");
    break;
  // break문(필수X)
  // : 이전의 선택이 표현식의 값과 일치한다면
  // , 브라우저는 해당 코드 블록에서 실행을 멈추고
  // , switch문 아래에 있는 코드로 이동
  // >> break를 만나면 switch문 탈출!
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  default:
    console.log("일치하는 과일이 없습니다.");
}

//! 삼항(조건) 연산자
// : 조건에 따라 값을 반환하는 세 개의 피연산자를 가지는 식(항이 3개 - 연산자 2개)
// : if-else문을 더 간결하게 표현

//* 기본 구조
// 조건 ? 표현식1 : 표현식2
// : 주어진 조건을 평가한 후, 그 결과가 true면 표현식1을
// : , false면 표현식2를 실행

/*
if (조건) {
  표현식1
} else {
  표현식2
}
*/

let num = 11;
let message = num > 10 ? "10보다 크다." : "10보다 작거나 같다.";
console.log(message);

// 중첩 else if문과 삼항 연산자
// : JS의 if조건문은 해당 조건들 내에서 또 다른 조건식을 작성할 수 있다.
/*
if (조건1) {
  조건1이 참일 때 실행될 코드
  if (조건 2) {
    조건 1과 조건 2가 모두 참일 때 실행될 코드
  } else {
    조건 1은 참이지만, 조건 2는 거짓일 때 실행될 코드
  }
} else {
  조건1이 거짓일 때 실행될 코드
}
*/

// 50점 이상일 경우에는 시험 합격
// >> 90점 이상 A
// >> 80점 이상 B
// >> 그 외의 경우 C
// 50점 미만일 경우 불합격

let score = 41;

if (score >= 50) {
  console.log('합격');
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else {
    console.log('C');
  }
} else {
  console.log('불합격');
}

// 위의 중첩 if문을 삼항 연산자로 변환
let grade 
= score > 100 || score < 0 ? '존재하지 않는 점수'
// 0 ~ 100 사이의 값 중에서 등급을 지정
: score >= 90 ? 'A'
: score >= 80 ? 'B'
: score >= 70 ? 'C' : '탈락';



