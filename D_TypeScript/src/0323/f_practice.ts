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

//! 3. union, intersection, literal, functin type을 활용한 고급 타입 만들기

// 요구 사항
// 1. 고객 정보를 나타내는 타입(CustomInfo) - 인터페이스
// : 고객의 name(string)과 email(string), status를 포함
// : , status는 "active", "inactive", "prospective" 중 
//     하나의 값을 가질 수 있는 리터럴 타입

type CustomerStatus = "active" | "inactive" | "prospertive";

interface CustomerInfo {
  name: string;
  email: string;
  status: CustomerStatus;
}

// 연락처 정보를 나타내는 인터페이스 정의
interface ContactInfo {
  phone: string;
  address: string;
}

// 2. 고객 정보 업데이트를 위한 함수 타입(UpdateCustomerFunction) 정의
// : CustomerInfo 타입의 객체와 업데이트할 정보를 담은 객체를 매개변수로 받고, 업데이트된 CustomerInfo 객체를 반환
// : 업데이트할 정보는 Partial<CustomerInfo> 타입을 사용

// 3. 고객 연락처 정보(ContactInfo)를 CustomerInfo에 추가하는 인터섹션 타입 정의
// : ContactInfo는 phone(string)과 address(string) 속성
// : 고객 정보와 연락처 정보를 모두 포함하는 새로운 타입을 생성
}