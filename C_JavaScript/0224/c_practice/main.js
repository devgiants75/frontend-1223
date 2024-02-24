// 1. 입력 필드에서 '추가' 버튼을 클릭하면
// : 새로운 항목이 리스트에 추가되도록 구현
let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
  // 새로운 'li'요소를 생성하여 newItem 변수에 저장
  // 웹 문서의 새로운 요소 생성 방법
  // : document.createElement('요소명');
  let newItem = document.createElement('li');

  // newItem에 'todo-item'이라는 클래스 속성을 추가
  // 웹 문서의 요소에 class 속성 추가
  // 참조된요소.classList.add('class명');
  newItem.classList.add('todo-item');

  // newItem을 todoList(할 일 목록)의 자식 요소로 추가
  // 하위 요소를 추가하는 방법
  // : 상위요소.appendChild(하위요소)
  todoList.appendChild(newItem);

  // 입력 창의 내용은 사용 후 비우는 것이 원칙
  todoInput.value = '';
});

// 2. 토글(Toggle)
// : 두 가지 상태를 취할 수 있는 장치나 기능

// 리스트의 항목을 클릭하면 '완료' 상태를 토글(Toggle)할 수 있도록 설정
// : todoList 내의 어떤 항목이든 클릭 할 때마다 정의된 함수가 실행
todoList.addEventListener('click', function(e){
  // 클릭된 요소가 'li' 태그(목록 항목)인지 확인
  if(e.target.tagName === 'li') {
    // 해당 목록 항목의 클래스 목록에서 'completed'클래스 속성을 추가
    // : completed 클래스가 있으면 제거, 없으면 추가
    e.target.classList.toggle('completed');
  }
})