//! node.js 설치

// 1. nodejs 홈페이지 접속
// https://nodejs.org/en
// : LTS 버전 설치 (Long Term Support)

// 2. 환경 변수 설정
// 윈도우 > 시스템 환경 변수 편집
// >> 환경 변수
// >> 시스템 변수(하단) 
// >> 새로 만들기
// >> 변수 이름: NODE_HOME
// >> 변수 값: node 설치 환경 경로를 지정
// C:\Program Files\nodejs

// >> ITPS에 대한 사용자 변수(상단)
// 변수명 Path 더블 클릭(환경 변수 편집)
// >> 새로 만들기 : %NODE_HOME%
// >> 위로 이동 (상단으로 올리기)

// 윈도우 클릭 > cmd(명령 프롬프트)
// node 설치 완료 확인 명령어
// : node -v (20.11.0)
// : npm -v (10.2.9)

console.log('node를 사용한 출력');

// vsc의 터미널
// ctrl + shift + `(백틱)

// 터미널을 git bash 설정
// +옆의 ▽버튼 클릭
// : 기본 프로필 선택 > git bash 클릭

// 실행하고자 하는 파일의 터미널을 실행
// 탐색기 > 파일명 우클릭 > '통합 터미널에서 열기'
// node 파일명.js