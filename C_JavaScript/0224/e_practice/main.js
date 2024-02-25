// 선택지 배열
const options = ['옵션 A', '옵션 B', '옵션 C', '옵션 D'];

// 피드백에 대한 메시지 객체
const feedbacks = {
  '옵션 A': 'A를 선택하셨군요! 좋은 선택입니다.',
  '옵션 B': 'B는 매우 인기 있는 선택지입니다.',
  '옵션 C': 'C를 선택한 당신, 독특한 시각을 가지고 있군요!',
  '옵션 D': 'D, 대담한 선택! 멋집니다.'
};

//! HTML 요소 가져오기
// radio 버튼이 나열 될 div
const optionsContainer = document.getElementById('options-container');

// feedback이 출력 될 div
const feedbackDiv = document.getElementById('feedback');

// 이벤트를 등록할 '제출' button
const submitBtn = document.getElementById('submit-btn');

//! 선택지 동적 생성
// 콜백함수(순회하는요소, 요소의 인덱스, 배열그자체)
options.forEach((option, index) => {
  const label = document.createElement('label');
  const radioButton = document.createElement('input');

  // 생성한 input 요소를 라디오 버튼으로 변경
  radioButton.setAttribute('type', 'radio');
  // 모든 라디오 버튼이 같은 이름을 공유
  // : 그룹화 (같은 이름 중에서 하나만 선택 가능)
  radioButton.setAttribute('name', 'option');
  // 라디오 버튼의 값을 현재 옵션 값으로 설정
  radioButton.setAttribute('value', option);
  radioButton.id = `option${index}`;

  // JS에서 생성된 라벨 요소에 라디오 버튼을 자식 요소로 추가
  label.appendChild(radioButton);
  // 생성한 라벨 요소에 텍스트 노드를 추가
  // : 현재 옵션의 텍스트를 지정(추가)
  label.appendChild(document.createTextNode(option));
  // 완성된 라벨을 옵션 컨테이너에 추가
  // : 라디오 버튼과 텍스트를 포함
  optionsContainer.appendChild(label);
})

//! 제출 버튼에 클릭 이벤트 리스너 추가
// : 사용자가 버튼 클릭 시 선택된 옵션에 따라
// : 다른 피드백이 출력

submitBtn.addEventListener('click', () => {
  // 문서에서 이름이 option인 라디오 버튼 중
  // , 현재 선택된 라디오 버튼을 찾아 변수에 저장
  // 현재 해당 문서에 있는 input 요소
  // : radio버튼, button버튼
  const selectedOption = document.querySelector('input[name="option"]:checked');
  
  // 선택된 라디오 버튼이 존재한다면
  // : 해당 피드백 메시지를 표시
  if (selectedOption) {
    // 선택된 옵션의 값을 키로 사용하여
    // : feedbacks 객체에서 해당하는 메시지를 찾아 변수에 저장
    const feedbackMessage = feedbacks[selectedOption.value];
    // feedbackDiv의 내용을 위의 찾은 메시지로 설정
    feedbackDiv.textContent = feedbackMessage;
  } else {
    feedbackDiv.textContent = '옵션을 선택해주세요.';
  }
})