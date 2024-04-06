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
  <div id="mm">November</div>
  <div id="dd">16</div>
  <div id="day">Sunday</div>
</div>
`;

mainMsg.innerHTML = `If you don't give up, you can do it.`;

// 할 일 완료 여부 확인 막대 그래프 생성
const progressBar = create('div', ['progress']);
const progressDone = create('div', ['progress-done']);
append(progressBar, [progressDone]);

// main 영역의 DOM 요소 전달
append(main, [clockContainer, mainMsg, form, progressBar]);

//! 실시간 시간 지정 기능 추가
const $hour = document.getElementById('hr');
const $minute = document.getElementById('min');
const $second = document.getElementById('sec');

// 매 초마다 renderTime 함수를 호출하여 시간을 갱신하는 타이머 설정
const clock = setInterval(renderTime, 1000);

// 현재 시간을 가져와서 해당 요소에 표시하는 함수
function renderTime() {
  // 시간(1~23):분(0~59):초(0~59) 
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // 시, 분, 초가 10보다 작으면 앞에 '0' 문자열을 붙여 두 자리수로 표시
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  // 시, 분, 초를 각각의 요소에 표시
  $hour.innerHTML = hr;
  $minute.innerHTML = min;
  $second.innerHTML = sec;
}

//! 현재 날짜를 표시하는 함수
function displayDate(mm, dd, day) {
  // 현재 날짜와 시간을 나타내는 Date 객체 생성
  let date = new Date();

  // 월을 나타내는 문자열 배열
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 요일을 나타내는 문자열 배열
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}
