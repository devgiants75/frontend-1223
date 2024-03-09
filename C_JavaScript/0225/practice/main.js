//! 아이템들을 저장할 배열(items)
let items = []; // 추가되는 li를 저장

//! 새 아이템을 생성하는 함수(createItem)
function createItem() {
  // 입력 필드의 DOM 요소를 읽어오기
  const inputField = document.getElementById("input-field");

  // 입력 필드의 값을 가져오기
  // : 공백 제거 후 가져오기
  const newItem = inputField.value.trim();

  // 새 아이템이 비어있지 않은 경우
  if (newItem) {
    // 기존 아이템 배열에 새 아이템 추가
    items = [...items, newItem];

    // 입력 필드 초기화
    inputField.value = "";

    // 아이템 목록을 다시 렌더링(renderItems)
    renderItems();
  }
}

//! 아이템을 삭제하는 함수(deleteItem)
function deleteItem(index) {
  // '특정 인덱스의 아이템'을 제외한 새로운 배열을 생성
  // : 선택된 요소의 인덱스 번호를 매개변수로 전달받음

  //? filter 메서드의 인자 순서
  // 1. 현재 요소(배열의 현재 요소)
  // 2. 인덱스(현재 요소의 인덱스)
  // 3. 배열 그 자체

  // 콜백함수의 인자로 사용하지 않는 우선순위 매개변수는 _언더바로 표시
  items = items.filter(
    (_, i) =>
      // 현재 처리 중인 요소의 인덱스가(i)
      // 매개변수(index)와 다른 경우에만 true를 반환
      // >> 새로운 배열의 요소로 저장
      // 인덱스 번호가 3번인 요소를 삭제하는 경우
      // : 배열을 순회하면서 3번인 요소만 제외하고 새로운 배열로 반환 (삭제된 효과)
      i !== index
  );

  // 아이템 목록을 다시 렌더링
  renderItems();
}

//! 아이템 목록을 렌더링하는 함수(renderItems)
function renderItems() {
  // 아이템 목록을 담을 DOM 요소를 읽어오기
  const itemList = document.getElementById("item-list");
  // 목록을 초기화 (innerHTML: 내부 HTML코드를 불러오기)
  itemList.innerHTML = "";

  // 아이템 배열을 순회하여 목록을 생성(map)
  items.forEach((item, index) => {
    // 각각의 아이템에 대한 li요소를 생성
    const li = document.createElement("li");

    // li 요소에 아이템 텍스트 추가
    li.textContent = item;
    console.log("텍스트 추가 성공");

    // li 요소 클릭 시 해당 아이템 삭제 함수를 호출
    li.onclick = () => deleteItem(index);

    // 생성한 li요소를 목록에 추가
    itemList.appendChild(li);
  });
}

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', createItem);

// 문서가 로드되었을 때 아이템 목록을 처음으로 렌더링
document.addEventListener("DOMContentLoaded", renderItems);
