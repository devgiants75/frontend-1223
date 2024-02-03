//! 자바스크립트의 유용한 확장(플러그인)

// 1. JavaScript (ES6) code snippets
// 자바스크립트 명령어에 대한 축약어 지정
// : 재사용 가능한 소스코드의 작은 부분(일부분)
// ex) console.log() >> clg
// ex) console.error() >> cer
console.log('데이터 입력');
console.error('오류 입력');

// 2. ESLint
// : JS에 대한 문법적 오류나 일관되지 않은 코딩 스타일, 사용되지 않는 코드를 식별
// >> 커스텀 규칙 설정 가능, 프로젝트의 코딩 가이드라인을 정의

// 3. Prettier - Code formatter
// : 코드를 자동으로 정리하여 일관된 스타일로 설정
// >> 프로젝트의 코딩 스타일 차이를 줄임
// : 설치 후 정리할 코드에 ctrl + k + f 사용 시 자동 정렬
// 기본 구성에 대한 기능 사용 질문
// 구성 클릭 > Prettier 클릭

let a = 1;
let b = 3;
let c = 2;