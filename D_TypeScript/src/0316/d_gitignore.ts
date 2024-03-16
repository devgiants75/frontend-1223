// d_gitignore.ts

// .gitignore
// : git에 업로드 시키지 않을 내용을 관리하는 파일

// 일반적으로 JS/TS/React 프로젝트 업로드 시
// , node_modules 폴더는 gitignore로 명시하는 것을 권장
// : package.json에 명시된 내용을 npm install 명령어를 사용하는 경우 해당 프로젝트에 설치(node_modules를 포함)

//? .gitignore 파일에 아래의 명령어 첨부
// # node_modules 파일 무시
// node_modules/
// */node_modules