// f_practice.ts

//! 1. 간단한 사용자 관리 시스템

// 요구 사항
//? User 인터페이스 생성
// id: 숫자 타입
// username: 문자열 타입
// role: "admin" 또는 "user" 리터럴 타입

//? createUser 함수 타입을 정의
// username (문자열), role ("admin" 또는 "user" 리터럴)을 매개변수로 받고, User 객체를 반환

//? updateUserRole 함수 타입을 정의
// user (User 객체), newRole ("admin" 또는 "user" 리터럴)을 매개변수로 받고, 업데이트된 User 객체를 반환

//! 2. 간단한 이벤트 관리 시스템

// 요구 사항
//? Event 인터페이스를 생성
// id: 숫자 타입
// title: 문자열 타입
// description: 문자열 타입
// date: 문자열 타입

//? createEvent 함수 타입을 정의
// title, description, date (모두 문자열)을 매개변수로 받고, Event 객체를 반환

//? updateEventDate 함수 타입을 정의
// event (Event 객체), newDate (문자열)을 매개변수로 받고, 업데이트된 Event 객체를 반환