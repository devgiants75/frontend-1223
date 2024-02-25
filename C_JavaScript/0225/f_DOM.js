//! DOM
// : Document Object Model(문서 객체 모델)

//? 문서 객체
// : HTML 문서 안에서 요소(Element)로 불리는 객체

//? 문서 객체 모델(DOM)
// : 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있도록 하는 인터페이스(상호작용, 규약)

//? DOM 사용
// : JS를 사용하여 DOM에 접근하는 경우
// : 웹 페이지의 요소를 선택, 추가, 수정, 삭제하는 데 필요한 메서드와 속성에 접근이 가능

// - CRUD
// : Create(생성), Read(읽기), Update(수정), Delete(삭제)

//? DOMContentLoaded 이벤트
// : 문서 객체를 조작할 때 사용하는 이벤트
// : 웹 브라우저가 문서 객체를 모두 읽고 나서 실행
// : 문서 객체가 완전히 로드되고 준비된 후에 스크립트가 실행되기 때문에 오류 방지 가능
document.addEventListener('DOMContentLoaded', () => {
  // 여기에 DOM 조작 코드를 작성
})

//! 문서 객체를 가져오기
//? document.body
// : 문서의 body 요소를 읽어오기(head, title 등도 가능)

//? querySelect() & querySelectAll()
// : head 요소와 body요소 내부에 생성한 다른 요소들을 읽어올 때 사용
// : 선택자 부분에는 CSS 선택자를 입력
//   ex) 태그, 아이디, 클래스, 속성, 후손 등

document.addEventListener('DOMContentLoaded', () => {
  // 요소 읽어오기
  const header = document.querySelector('h1');

  // 텍스트와 스타일을 변경
  header.textContent = '헤더입니다.';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '10px';
});

// document.querySelectAll(선택자)
// 문서 객체를 여러 개 추출
// : 배열로 저장하여 사용
// : 내부의 요소에 접근하고 활용하려면 반복을 사용
document.addEventListener('DOMContentLoaded', () => {
  // 요소 읽기
  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'List Item';
    item.style.color = 'pink';
    item.style.backgroundColor = 'black';
    item.style.listStyle = 'none';
  })
});