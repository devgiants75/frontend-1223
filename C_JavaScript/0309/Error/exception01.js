/*
! 구문 오류와 예외

? 1. 오류의 종류
: 프로그래밍 언어의 오류(2가지)
  - 프로그램 실행 전에 발생하는 "구문 오류"
  - 프로그램 실행 중에 발생하는 "런타임 오류(예외)"

? 2. 구문 오류
: 괄호의 짝이 다름, 문자열을 열었는데 닫지 않음 등 구문 자체의 오류가 있으면 웹 브라우저가 코드를 분석 조차 하지 X >> 실행 X

? 런타임 오류(예외)
: 실행 중에 발생하는 오류를 의미
: 코드가 순차적으로 실행되다가 오류가 위치하는 부분 이후에는 실행이 중단

*/

//! 구문 오류 예제
console.log('=== 구문 오류 예제 ===');
console.log('# 프로그램이 시작되었습니다!');

//? SyntaxError 발생 - 구문 오류
// : 오류 자체에 어떤 파일의 어느 위치에서 오류가 발생했는지 명시

// console.log('괄호를 닫지 않는 실수를 했습니다.'
console.log('괄호를 닫지 않는 실수를 했습니다.');

// 터미널 실행 단축키: ctrl + shift + `(백틱)


//! 런타임 오류(예외) 예제
console.log('=== 런타임 오류(예외) 예제 ===');
console.log("@ 프로그램이 시작되었습니다!");

//? TypeError
// : 자바스크립트는 SyntaxError라고 출력되는 오류 이외의 모든 오류가 예외(런타임 에러)로 분류
// ex) TypeError, ReferenceError, RangeError 등

// console.rog('log를 rog로 잘못 입력했습니다.');
// console.log('런타임 오류 발생 이후의 코드는 실행되지 X');
// : 위의 예외는 오탈자 수정만으로도 코드 해결이 가능
// but, 오탈자 수정만으로 해결할 수 없는 예외도 존재

//! JS 실행 중 발생하는 예외를 다루는 방법
// : 예외 처리

//? 1. 기본 예외 처리
// : 조건문을 사용해서 예외가 발생하지 않도록 지정
// : 권장하지 X
// : 로직의 복잡성이 증가

document.addEventListener('DOMContentLoaded', () => {
  // HTML에 h1요소가 존재하지 X
  // : ReferenceError 발생
  // : HTML 웹문서(document)에서 참조할 h1 요소가 존재하지 않음

  //? else 문으로 코드의 예외는 피했지만
  // : 예외를 처리하지 않았기 때문에 해당 예외 이후의 코드가 실행되지 X
  // const h1 = document.querySelector('h1');
  // if (h1) {
  //   h1.textContent = '안녕하세요';
  // } else {
  //   console.log('h1 태그를 추출할 수 없습니다.');
  // }
})

//? 고급 예외 처리
// : try catch finally 구문

/*
try {
  : 예외가 발생할 가능성이 있는 코드
} catch (exception) {
  : 예외가 발생했을 때 실행할 코드
} finally {
  : 무조건 실행할 코드
  : 필요한 경우에만 사용(선택사항)
}
*/

try {
  // 예외가 발생될 코드
  // : 객체 자체가 존재하지 X
  willExcept.byeBye(); 
  // : try 구문 안에서 예외가 발생하면 더 이상 try 구문을 진행하지 X
  // : catch 구문을 실행
  console.log('try 구문의 마지막 줄');
} catch (exception) {
  console.log('catch 구문의 마지막 줄');
} finally {
  console.log('finally 구문의 마지막 줄');
}

//? finally 구문을 사용하는 이유
function test () {
  try {
    alert('A 위치입니다.');
    throw "예외 강제 발생";
  } catch(exception) {
    alert('B 위치입니다.');
    return
  } 
  // 출력X
  // : return 키워드를 사용해 함수를 벗어남
  alert('C위치입니다.');
}

test();

function sample() {
  try {
    console.log('A 위치입니다.');
    throw "예외 강제 발생";
  } catch(excetpion) {
    console.log('B 위치입니다.');
    return
  } finally {
    console.log('C 위치입니다.');
  }
}

sample();
// : sample 함수의 실행 시 A,B,C의 위치가 모두 출력
// : finally 구문 앞에 return이 있더라도 finally 구문은 반드시! 실행한다는 특성