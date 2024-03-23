// f_practice.ts
{
//! 1. 간단한 사용자 관리 시스템

// 요구 사항
//? User 인터페이스 생성
// id: 숫자 타입
// username: 문자열 타입
// role: "admin" 또는 "user" 리터럴 타입
interface User {
  id: number;
  username: string;
  role: 'admin' | 'user';
}

//? createUser 함수 타입을 정의
// username (문자열), role ("admin" 또는 "user" 리터럴)을 매개변수로 받고, User 객체를 반환

let userId = 0;

function createUser(username: string, role: 'admin' | 'user'): User {
  return {
    id: ++userId, // 각 사용자에게 고유한 ID 할당
    username,
    role
  };
}

//? updateUserRole 함수 타입을 정의
// user (User 객체), newRole ("admin" 또는 "user" 리터럴)을 매개변수로 받고, 업데이트된 User 객체를 반환
function updateUserRole(user: User, newRole: 'admin' | 'user'): User {
  return {
    ...user, // user 객체를 가져와서
    role: newRole // role 속성만 업데이트
  }
}

// 함수 사용
const user1 = createUser('이승아', 'user');
console.log(user1);
// { id: 1, username: '이승아', role: 'user' }
console.log(updateUserRole(user1, 'admin'));
// { id: 1, username: '이승아', role: 'admin' }

//! 2. 간단한 이벤트 관리 시스템

// 요구 사항
//? Event 인터페이스를 생성
// id: 숫자 타입
// title: 문자열 타입
// description: 문자열 타입
// date: 문자열 타입
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

//? createEvent 함수 타입을 정의
// title, description, date (모두 문자열)을 매개변수로 받고, Event 객체를 반환

let eventId = 0; // 간단한 ID 생성을 위한 변수

function createEvent(title: string, description: string, date: string): Event {
  return {
    id: ++eventId, // 각 이벤트에게 고유한 ID 할당
    title,
    description,
    date,
  };
}

//? updateEventDate 함수 타입을 정의
// event (Event 객체), newDate (문자열)을 매개변수로 받고, 업데이트된 Event 객체를 반환
function updateEventDate(event: Event, newDate: string): Event {
  return {
    ...event,
    date: newDate,
  };
}

// 함수 사용
const event1 = createEvent('TypeScript Workshop', 'Learn TypeScript basics', '2023-04-05');
console.log(updateEventDate(event1, '2023-04-06'));
}