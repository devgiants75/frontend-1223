//! 태그 이름과 클래스 이름 리스트를 인수로 받아 
// , 새로운 HTML 요소를 생성하고 반환하는 함수

// div 태그에 class명이 container, special 인 요소 생성 시
// : create('div', ['container', 'special']);
function create(tag, classListArr = [], id="") {
  const newEl = document.createElement(tag);
  // 클래스 이름 리스트에 요소가 존재할 경우
  // , 각 클래스 이름을 새 요소의 클래스 리스트에 추가
  if (classListArr.length > 0) {
    classListArr.forEach(className => newEl.classList.add(className));
  }

  // id 속성의 경우 여러값 지정이 불가하기 때문에
  // , 단일 값으로 전달
  if (id !== "") {
    newEl.id = id;
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

  // 현재 월, 날짜, 요일을 Date 객체에서 추출
  // : 월을 0~11까지의 수로 반환
  // : 일을 1~31까지의 수로 반환
  // : 요일을 0~6까지의 수로 반환
  const todayMonth = months[date.getMonth()];
  const todayDate = date.getDate();
  const todayDay = days[date.getDay()];

  // mm, dd, day 요소에 각각 현재 월, 날짜, 요일을 표시
  mm.innerHTML = todayMonth;
  dd.innerHTML = todayDate;
  day.innerHTML = todayDay;
}

// id가 mm, dd, day인 요소를 찾아 표시
const curMonth = document.getElementById('mm');
const curDate = document.getElementById('dd');
const curDay = document.getElementById('day');

// 현재 날짜를 표시하는 함수를 호출
displayDate(curMonth, curDate, curDay);

//! 할 일 목록을 저장할 배열
let taskArr = [];

// 할 일 객체를 생성하는 생성자 함수
// : 'task' 할 일 내용, 'completed' 완료 상태
function taskEl(task, completed) {
  this.task = task; // 할 일 내용을 저장
  this.status = 'false'; // 완료 상태를 기본값 false로 저장
}

// form 요소에 submit 이벤트 리스너 추가
form.addEventListener('submit', (event) => {
  // 폼 제출에 의한 페이지 새로고침 방지
  event.preventDefault();

  // 로컬 스토리지
  // 'Tasks'항목이 존재한다면, taskArr 배열을 해당 항목으로 업데이트
  // : 웹 페이지의 로컬 스토리지에 기존에 저장된 할 일 목록(배열)이 존재한다면 taskArr 배열에 저장
  if (JSON.parse(localStorage.getItem('Tasks'))) {
    taskArr = JSON.parse(localStorage.getItem('Tasks'));
  }

  // 입력 필드에서 사용자가 입력한 값 가져오기(공백 제거)
  let newTask = newInput.value.trim();
  // 이미 추가된 할 일들을 저장할 배열
  let alreadyIncluded = [];

  // taskArr 배열을 순회하여 각 할 일의 내용을 alreadyIncluded 배열에 추가
  for (let i = 0; i < taskArr.length; i++) {
    alreadyIncluded.push(taskArr[i].task);
  }

  // taskArr = [{task: '', status: false}, {}, {}]
  // alreadyIncluded = [task1, task2, task3]

  // 이미 포함된 할 일인지 확인하고, 그렇다면 경고 메시지를 출력
  // includes메서드: 매개변수값이 해당 배열에 존재하는지 여부를 boolean 값으로 반환
  if (alreadyIncluded.includes(newTask)) {
    alert('This task already exists');
  } else if (newTask.length > 0) {
    // 새 할 일 객체 생성
    let addedTaskEl = new taskEl(newTask, 'false');
    // taskArr 배열에 추가
    taskArr.push(addedTaskEl);
    // 로컬 스토리지에 저장
    localStorage.setItem('Tasks', JSON.stringify(taskArr));
    // 입력 필드 초기화
    newInput.value = '';
    // 할 일 목록 업데이트 함수 호출
    updateTaskList();
    // 진행 상태 업데이트 함수 호출
    updateProgress();
  }
});

// 할 일 목록 업데이트 함수 호출
function updateTaskList() {
  // 로컬 스토리지에서 할 일 목록 가져오기
  let list = JSON.parse(localStorage.getItem('Tasks'));

  // 할 일 목록에 할 일이 하나 이상 있는 경우
  if (list.length > 0) {
    // toDoList 요소에 'active' 클래스 추가
    toDoList.classList.add('active');
    // 가장 최근에 추가된 할 일을 toDoList 요소의 내부 HTML에 추가
    toDoList.innerHTML +=
    `
    <li class="task">
      <span>${list[list.length - 1].task}</span>
      <i class="bi bi-x-square delete-btn"></i>
    </li>
    `;
  } else {
    // 할 일이 없을 경우 'active' 클래스 제거
    toDoList.classList.remove('active');
  }

  updateProgress();
}

//! 로컬 스토리지에서 할 일 목록을 불러와 초기화 하는 함수
function initializeTaskList() {
  let list = JSON.parse(localStorage.getItem('Tasks'));

  // 할 일 목록이 있고 길이가 0보다 클 경우
  if (list && list.length > 0) {
    // toDoList 요소에 'active' 클래스 추가
    toDoList.classList.add('active');

    // list 배열을 순회하여 각 할 일을 toDoList에 추가
    for (let i = 0; i < list.length; i++) {
      // 할 일의 상태가 'false(미완료)'인 경우
      if (list[i].status === 'false') {
        toDoList.innerHTML += 
        `
        <li class="task">
          <span>${list[i].task}</span>
          <i class="bi bi-x-square delete-btn"></i>
        </li>
        `;
        // 할 일의 상태가 true(완료)인 경우
      } else if (list[i].stauts === 'true') {
        toDoList.innerHTML += 
        `
        <li class="task completed">
          <span>${list[i].task}</span>
          <i class="bi bi-x-square delete-btn"></i>
        </li>
        `;
      }
    }
  } else {
    // 할 일 목록이 없는 경우
    toDoList.classList.remove('active');
  }

  updateProgress();
}

//! toDoList 요소에 클릭 이벤트 리스너 추가
toDoList.addEventListener('click', (e) => {
  // 'task' 클래스와 'delete-btn' 클래스를 가진 요소들의 리스트 생성
  const lis = [...document.getElementsByClassName('task')];
  const dlt = [...document.getElementsByClassName('delete-btn')];

  let list = JSON.parse(localStorage.getItem('Tasks'));

  // 클릭된 요소가 할 일 목록에 포함되어 있는 경우
  if (lis.includes(e.target)) {
    // toggle 메서드
    // : bool 속성의 값을 전환
    // : css 스타일 변경
    e.target.classList.toggle('completed');

    // list 배열을 순회하여 클릭된 할 일의 상태 업데이트
    for (let i = 0; i < list.length; i++) {
      if (list[i].task === e.target.innerText && list[i].status === 'false') {
        // 상태가 false인 값을 true로 변경
        // : 실제 데이터 값 변경
        list[i].status === 'true'
        localStorage.setItem('Tasks', JSON.stringify(list));
        break;
      } else if (list[i].task === e.target.innerText && list[i].status === 'true') {
        list[i].status === 'false'
        localStorage.setItem('Tasks', JSON.stringify(list));
        break;
      }
    }
  }

  // 클릭된 요소가 삭제 버튼일 경우
  if (dlt.includes(e.target)) {
    // list 배열을 순회하며 클릭된 할 일 삭제
    for (let i = 0; i < list.length; i++) {
      // 여러 개의 줄바꿈 또는 두 번 이상의 공백을 단일 공백으로 변경
      if (list[i].task.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() === e.target.parentNode.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()) {
        list.splice(i, 1); // 배열에서 해당 할 일 제거
        localStorage.setItem('Tasks', JSON.stringify(list));
        // toDoList 요소의 내부 HTML 을 초기화
        toDoList.innerHTML = '';
        initializeTaskList(); // 할 일 목록을 재초기화
        break;
      }
    }
  }

  updateProgress();
});

//! 진행 상태를 업데이트 하는 함수
function updateProgress() {
  let list = JSON.parse(localStorage.getItem('Tasks'));
  let count = 0; // 완료된 할 일의 수

  // list 배열을 순회, 완료된 할 일의 수를 계산
  list.forEach(tasks => {
    if (task.stauts === 'true') {
      count++;
    }
  })

  // 진행 상태 바의 너비 계산
  let newWidth = `${(count / list.length) * 100}%`; // 백분율 할당

  // 계산된 너비가 'NaN' 또는 '0'% 인 경우 너비를 100%로 설정
  if (newWidth === 'NaN%' || newWidth === '0%') progressDone.style.width = '100%';
  else progressDone.style.width = newWidth;

}

initializeTaskList();
renderTime();