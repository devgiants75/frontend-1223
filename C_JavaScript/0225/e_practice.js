//! 문제 1: 객체와 배열의 기본 조작
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
if (personInfo.email !== undefined) {
  console.log('email 속성이 있습니다.');
} else {
  console.log('email 속성이 없습니다.');
}
// 2. hobbies 배열에서 두 번째 취미를 출력
console.log(personInfo.hobbies[1]);
// 3. address 객체에서 city 값을 출력
console.log(personInfo.address.city);

//! 문제 2: 기본 속성 지정 및 다중 할당
// userData 객체가 주어졌을 때, 다음 작업을 수행하는 코드를 작성

let userData = {
  name: "박서준",
  age: 29
}

// 1. nickname 속성이 없을 경우, '익명'으로 기본값을 할당
userData.nickname =  userData.nickname || '익명';

// 2. 객체에서 name과 nickname을 각각 변수 userName과 userNickname에 할당하세요. nickname이 없다면, '익명'으로 할당
const { name: userName, nickname: userNickname = '익명값으로 수정' } = userData;

console.log(userName, userNickname); // 박서준 익명

//! 문제 3: 배열 전개 연산자와 객체 전개 연산자
let teamMembers = ["이하늘", "김지민"];
let product = {
  name: "노트북",
  price: 1500000,
  manufacturer: "ABC Electronics"
}

// 1. teamMembers 배열에 새로운 멤버 '장서연', '최현우'를 추가한 새 배열 updatedTeamMembers를 생성
let updatedTeamMembers = [...teamMembers, '장서연', '최현우'];
console.log(updatedTeamMembers);

// 2. product 객체를 깊은 복사하여 updatedProduct 객체를 만들고, updatedProduct에 inStock 속성을 true로 추가한 후, 두 객체를 출력
let updatedProduct = {...product, isStock: true};
console.log(product);
console.log(updatedProduct);

