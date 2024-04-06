//! 태그 이름과 클래스 이름 리스트를 인수로 받아 
// , 새로운 HTML 요소를 생성하고 반환하는 함수

// div 태그에 class명이 container, special 인 요소 생성 시
// : create('div', ['container', 'special']);
function create(tag, classListArr = []) {
  const newEl = document.createElement(tag);
  // 클래스 이름 리스트에 요소가 존재할 경우
  // , 각 클래스 이름을 새 요소의 클래스 리스트에 추가
  if (classListArr.length > 0) {
    classListArr.forEach(className => newEl.classList.add(className));
  }

  // 생성된 요소 반환
  return newEl;
}

//! 부모 요소와 자식 요소 리스트를 인수로 받아
// , 모든 자식 요소를 부모 요소에 추가하는 함수
function append(parent, nodeList) {
  // nodeList(자식 요소)의 각 요소를 순회하면서 parent에 추가
  nodeList.forEach(el => parent.appendChild(el));
}

//! 요소 생성

// 변수명 앞에 $표시
// : HTML에서 가지고 오는 DOM 요소를 차별화하여 표시
const $container = document.getElementById('container');
// section 태그 - 클래스명 main
const main = create('section', ['main']);
// ul 태그 - 클래스명 to-do-list
const toDoList = create('ul', ['to-do-list']);

// 생성된 main, toDoList 요소를 $container의 자식 요소로 추가
append($container, [main, toDoList]);

// form 태그: task-form
// input 태그: new-input
// input 태그: task-submit
// label 태그: submit-label
// i 태그: 클래스명(bi, bi-plus-square, submit-icon)
const form = create('form', ['task-form']);
const newInput = create('input', ['new-input']);
const submit = create('input', ['task-submit']);
const submitLabel = create('label', ['submit-label']);
const submitIcon = create('i', ['bi', 'bi-plus-square', 'submit-icon'])

// submit 요소의 속성을 변경
submit.setAttribute('type', 'submit');
submit.setAttribute('value', '');

// newInput 요소의 속성을 변경
newInput.setAttribute('type', 'text');

// 생성된 DOM 요소를 자식 요소로 추가
append(submitLabel, [submit, submitIcon]);
append(form, [newInput, submitLabel]);

//! 메인 메시지를 작성하는 요소 생성

// div: main-msg
const mainMsg = create('div', ['main-msg']);
// div: clock-container
const clockContainer = create('div', ['clock-container']);

// clockContainer의 내부 HTML을 설정(innerHTML)
clockContainer.innerHTML =
`
<div class="time-container">
  <div id="hr">00</div>
  <div class="divider">:</div>
  <div id="min">00</div>
  <div class="divider">:</div>
  <div id="sec">00</div>
</div>
<div class="mm-dd-day">
  <div id="mm">April</div>
  <div id="dd">6</div>
  <div id="day">Saturday</div>
</div>
`;

mainMsg.innerHTML = `If you don't give up, you can do it.`;

// 할 일 완료 여부 확인 막대 그래프 생성
const progressBar = create('div', ['progress']);
const progressDone = create('div', ['progress-done']);
append(progressBar, [progressDone]);

// main 영역의 DOM 요소 전달
append(main, [clockContainer, mainMsg, form, progressBar]);