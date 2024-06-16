document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar'); // 사이드바 요소 가져옴
  const hamburgerButton = document.getElementById('hamburgerButton'); // 햄버거 버튼 요소 가져옴
  const todoButton = document.getElementById('todoButton'); // 할 일 추가 버튼 요소 가져옴
  const modal = document.getElementById('modal'); // 모달 요소 가져옴
  const closeModal = document.getElementById('closeModal'); // 모달 닫기 버튼 요소 가져옴
  const addTodoButton = document.getElementById('addTodoButton'); // 할 일 추가 버튼 요소 가져옴
  const todoItems = document.getElementById('todoItems'); // 할 일 목록 리스트 요소 가져옴
  const slides = document.querySelectorAll('.slide'); // 모든 슬라이드 이미지 요소 가져옴
  let currentSlide = 0; // 현재 슬라이드 인덱스 초기화

  // 사이드바 토글 함수
  function toggleSidebar() {
    const isVisible = sidebar.style.transform === 'translateX(0%)'; // 사이드바 보이는 상태 확인
    sidebar.style.transform = isVisible ? 'translateX(-100%)' : 'translateX(0%)'; // 사이드바 상태에 따라 위치 조정
  }

  // 모달 표시 함수
  function showModal() {
    modal.style.display = 'block'; // 모달 표시
  }

  // 모달 숨기기 함수
  function hideModal() {
    modal.style.display = 'none'; // 모달 숨김
  }

  // 할 일 추가 함수
  function addTodo() {
    const input = document.getElementById('todoInput'); // 할 일 입력 필드 요소 가져옴
    if (input.value.trim() !== '') { // 입력값 검사
      const newTodo = document.createElement('li'); // 새로운 리스트 아이템 요소 생성
      newTodo.textContent = input.value; // 텍스트로 입력값 설정
      todoItems.appendChild(newTodo); // 할 일 목록에 추가
      input.value = ''; // 입력 필드 초기화
      hideModal(); // 모달 숨김
    } else {
      alert('Please enter a todo.'); // 할 일 입력 안내 메시지
    }
  }

  // 사이드바 토글 버튼 클릭 이벤트 리스너
  hamburgerButton.addEventListener('click', toggleSidebar);

  // 할 일 추가 버튼 클릭 이벤트 리스너
  todoButton.addEventListener('click', showModal);

  // 모달 닫기 버튼 클릭 이벤트 리스너
  closeModal.addEventListener('click', hideModal);

  // 할 일 추가 버튼 클릭 이벤트 리스너
  addTodoButton.addEventListener('click', addTodo);

  // 모달 외부 클릭 시 모달 닫기
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      hideModal(); // 클릭된 대상이 모달이면 숨김
    }
  });

  // 이미지 슬라이더 자동 변경
  slides[currentSlide].style.display = 'block'; // 현재 슬라이드 표시

  setInterval(() => {
    slides[currentSlide].style.display = 'none'; // 현재 슬라이드 숨김
    currentSlide = (currentSlide + 1) % slides.length; // 다음 슬라이드로 인덱스 조정
    slides[currentSlide].style.display = 'block'; // 새 슬라이드 표시
  }, 3000); // 3초마다 반복

  // 메인 영역 클릭 시 사이드바 숨기기
  const mainArea = document.querySelector('.main'); // 메인 영역 요소 가져옴
  mainArea.addEventListener('click', function(event) {
    if (sidebar.style.transform === 'translateX(0%)') { // 사이드바가 표시된 상태면
      sidebar.style.transform = 'translateX(-100%)'; // 사이드바 숨김
    }
  });
});
