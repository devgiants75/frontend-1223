// 문제 1: 객체와 배열의 기본 조작
// personInfo 객체가 주어졌을 때, 다음 작업을 수행하는 코드를 작성

let personInfo = {
  name: "김지수",
  age: 28,
  email: undefined,
  hobbies: ["등산", "독서", "영화 감상"],
  address: {
    city: "서울",
    zipCode: "123-456"
  }
}

// 1. email 속성이 있는지 확인하고, 없으면 "email 속성이 없습니다."를 출력
// 2. hobbies 배열에서 두 번째 취미를 출력
// 3. address 객체에서 city 값을 출력