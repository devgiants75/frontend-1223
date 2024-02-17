// 자바스크립트 함수 복습 문제

//! 배열이 가지는 콜백 함수 구현

//? 1. 배열의 모든 요소에 함수 적용 (map 함수 사용)
// numbers라는 이름의 배열을 생성하고, 1부터 10까지의 숫자를 요소로 채움
// double이라는 이름의 함수를 작성합니다. 이 함수는 숫자를 매개변수로 받아 그 숫자의 두 배를 반환
// numbers 배열의 각 요소에 double 함수를 적용하고, 결과를 새 배열에 저장
// 최종 결과를 출력
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function double(number) {
  return number * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

//? 2. 특정 조건을 만족하는 요소의 수 세기 (filter 함수 사용)
// scores라는 이름의 숫자 배열을 생성하고, 임의의 점수를 요소로 채움
// countPassingScores라는 함수를 작성
// 이 함수는 scores 배열을 매개변수로 받아, 60점 이상인 점수의 개수를 반환
// countPassingScores 함수를 사용하여 60점 이상인 점수의 개수를 계산하고, 그 결과를 출력

const scores = [55, 60, 70, 80, 90, 45, 75, 85, 95, 65];

function countPassingScores(scores) {
  return scores.filter(score => score >= 60).length;
}

console.log(countPassingScores(scores)); // 8 

//? A부터 B까지 더하는 함수

// A부터 B까지의 범위를 지정 -> 범위 안에 있는 숫자를 모두 더하는 함수 구현

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`1부터 10까지의 합: ${sumAll(1, 10)}`);