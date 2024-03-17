// e_type_practice.ts
{
//? 문제 1: 기본 타입 정의하기
// username은 문자열, userAge는 숫자, isSubscribed는 불리언 값으로 타입을 정의
let username: string = '이승아';
let userAge: number = 28;
let isSubscribed: boolean = true;

//? 문제 2: 배열 타입 정의하기
// 문자열 배열 fruits와 숫자 배열 numbers를 정의
let fruits: string[] = ['사과', '바나나', '망고'];
let numbers: Array<number> = [1, 3, 5];

//? 문제 3: 튜플 타입 정의하기
// 이름과 나이를 요소로 하는 튜플 person을 정의
let person: [string, number] = ['이승아', 27];
// let person: [string, number] = [27, '이승아']; - Error

//? 문제 4: void 타입을 사용하는 함수 정의하기
// 아무런 값을 반환하지 않고, 매개변수로 받은 메시지를 콘솔에 출력하는 함수 printMessage를 정의
function printMessage(message: string): void {
  console.log(message);
}
}