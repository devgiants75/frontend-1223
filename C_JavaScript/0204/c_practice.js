//! JS 조건문 예제

let score; // 점수를 저장할 변수 선언

//? 해당 결과가 출력되도록 임의의 값을 할당

score = 70;

// 1. 점수가 70점 이상이 경우 '합격!'을 출력(콘솔창)
if (score >= 70) {
  console.log("합격!");
}

// 2. 점수가 60점 이상인 경우 '합격!'을 출력
//    60점 미만인 경우 '불합격!'을 출력
if (score >= 60) {
  console.log("합격!");
} else {
  console.log("불합격!");
}

// 3. 
// -점수가 0점 미만, 100점 초과인 경우
//  '점수가 잘못되었습니다.' 출력
// - 90점 이상 'A' 출력
// - 80점 이상 'B' 출력
// - 70점 이상 'C' 출력
// - 그 외에는 'D' 출력

score = 71;
if (score < 0 || score > 100) {
  console.log('점수가 잘못되었습니다.');
} else if (score >= 90) { // 90 이상 100 이하의 수
  console.log('A');
} else if (score >= 80) { // 80 이상 89 이하의 수
  console.log('B');
} else if (score >= 70) { // 70 이상 79 이하의 수
  console.log('C');
} else {
  console.log('D'); // 0 이상 70 미만의 수
}

// >> 위의 else if문을 switch문으로 변경
score = 71;

// switch의 조건으로 true를 입력
// : switch문을 강제로 실행
switch (true) {
  // 점수의 범위를 축약(유효성 검사)
  case score < 0 || score > 100:
    console.log("잘못된 점수");
    break;
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log('D');
}

//! 논리연산자와 삼항연산자
true ? console.log('A') : console.log('B');
false ? console.log('B') : console.log('A');

// 논리합
// a || b는 a와 b중 하나라도 true면 true를 반환

// : a || b에서 a가 true인 경우 b는 평가되지 X
// : 특정조건이 true일 때 추가적인(필요없는) 연산을 방지
true || console.log('A');

// 논리곱
// a && b는 a와 b 모두 true일 때만 true를 반환

// : a && b에서 a가 true인 경우에만 b를 계산
// : a && b에서 a가 false인 경우 b는 평가하지 X
true && console.log('A');
false && console.log('A');

// - 회원 정보의 유무에 따른 페이지 접근 제한

let token = ''; // 회원정보 X
token && console.log('회원만 접근 가능한 페이지');

console.log('--------------');
token = '회원';
token && console.log('회원만 접근 가능한 페이지');
