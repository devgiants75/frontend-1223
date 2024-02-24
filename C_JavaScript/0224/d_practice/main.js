/*
thumb-bar의 이미지를 클릭
: 해당 이미지로 full-img 변경

! button 태그에 클릭 이벤트 발생 시
1. 다크모드 버튼 클릭 시
  : 버튼의 class 속성이 dark로 지정
  : 버튼의 textContent(내용)가 '밝음모드'로 변경
  : overlay 배경 색이 'rgba(0, 0, 0, 0.5)'로 지정

2. 밝음모드 버튼 클릭 시
  : 위의 로직이 아닌 경우 역전환
*/

// HTML 요소 선택
// querySelector('선택자');
// : CSS의 선택자를 사용하여 태그, class속성명, id속성명 등을 사용 가능
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//? 이미지 파일 이름 배열
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
]

//? 이미지에 대한 대체 텍스트를 저장하는 객체
const alts = {
  'image1.jpg': '강아지1',
  'image2.jpg': '강아지2',
  'image3.jpg': '강아지3'
}

//? 썸네일 이미지를 동적으로 생성하고 클릭 이벤트 추가
images.forEach((image) => {
  const newImage = document.createElement('img');

  // 생성된 요소에 속성 추가
  // : 요소명.setAttribute('속성명', 속성값);
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);

  // newImage는 썸네일 항목의 목록을 생성
  newImage.addEventListener('click', () => {
    displayedImg.src = `images/${image}`;
    displayedImg.alt = alts[image];
  });
})

// '다크모드' & '라이트모드' 버튼 기능 구현
btn.addEventListener('click', () => {
  // 속성의 값을 가지고오는 방법
  // 요소.getAttribute('속성명');
  const className = btn.getAttribute('class');
  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = '라이트모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = '다크모드';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
})



