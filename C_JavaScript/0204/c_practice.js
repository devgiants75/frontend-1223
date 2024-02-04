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
score = 101;

// switch (score) {
//   case score < 0 || score > 100:
//     console.log("잘못된 점수");
//     break;
//   case 90 <= score && 100 >= score:
//     console.log("A");
//     break;
//   case 80 <= score && 89 >= score:
//     console.log("B");
//     break;
//   case 70 <= score && 79 >= score:
//     console.log("C");
//     break;
//   default:
//     console.log('D');
// }