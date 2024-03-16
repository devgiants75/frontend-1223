//! 카드 메모리 게임(카드 매칭 게임)
// 사용자가 카드를 클릭하여 뒤집고
// , 같은 색상의 카들르 매칭시키는 게임
// - 게임의 초기화, 카드 뒤집기, 매칭 검사, 게임 리셋 및 완료 확인 등의 기능을 포함

// 문서의 로딩이 완료되면 함수를 실행
document.addEventListener("DOMContentLoaded", () => {
  //! HTML 요소를 선택(DOM 요소로 지정)
  // cardContainer 요소의 자식 요소로 생성될 카드를 전달
  const cardContainer = document.getElementById("card-container");
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");
  const completedButton = document.getElementById("completed-button");

  //! 색상 배열을 정의(6개)
  const colors = [
    // 'black', 'red', 'yellow', 'pink', 'orange', 'blue'
    "#cc3131",
    "#e3ddbb",
    "#23b923",
    "#34bcbc",
    "#3939db",
    "#e5b7e4",
  ];

  //! colors 배열의 색상들을 복제하여 새로운 배열 cardColors를 생성
  // : 스프레드 연산자를 사용하여 모든 요소를 새로운 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //! 게임을 초기화하는 함수 정의
  function initializeGame() {
    //? cardColors 배열을 섞기(무작위)
    // : shuffle() 함수 사용 - 배열 요소의 순서를 무작위로 섞음
    shuffle(cardColors);

    //? cardContainer 내부의 HTML을 비움(초기화)
    // : 게임 새로 시작 시 기존의 카드를 제거
    cardContainer.innerHTML = "";

    //? 12개의 카드를 생성(for 반복문)
    for (let i = 0; i < 12; i++) {
      // cardContainer 내부 HTML 추가
      // : 12개의 새로운 카드 요소 생성
      cardContainer.innerHTML += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="./images/front.jpg" alt="카드의 앞면" />
          </div>
          <div class="card-back" style="background-color: ${cardColors[i]};"></div>
        </div>
      </div> 
      `;
    }

    //? 12장의 각 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드를 클릭했을 때 동작을 정의
    addCardEventListeners();
  }

  //! 잠시동안 모든 카드를 공개하는 함수 정의
  // : 게임 시작 시 사용자에게 모든 카드를 잠깐 보여줌
  function revealCardsTemporarily() {
    // 'completed-button'(완료 버튼)을 비활성
    // : 카드가 뒤집힐 당시에 사용자의 컨트롤을 막는 로직

    // DOM요소.속성 = 속성값;
    // >> boolean 타입의 속성의 경우 속성값에 boolean값을 지정
    // <button id="start-button" disabled>완료</button>
    completedButton.disabled = true;

    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        // 모든 카드를 뒤집기
        card.classList.add("flipped");
      });
    }, 100); // 0.1초 동안 함수를 실행

    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        // 모든 카드를 다시 원래 상태로 되돌림
        card.classList.remove("flipped");
      });
      // 'completed-button'버튼을 다시 활성화
      completedButton.disabled = false;
    }, 2000); // 2초 동안 함수를 실행
  }

  //! 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  // : 카드를 클릭했을 때 뒤집는 기능을 구현
  function addCardEventListeners() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      // flipCard 함수는 사용자 정의 함수
      card.addEventListener("click", flipCard);
    });
  }

  //! 변수 선언
  // 카드가 뒤집혔는지 여부
  // 첫 번째와 두 번째 선택된 카드
  // 게임판이 잠겨있는지 여부
  let hasFlippedCard = false; // 첫번째 카드가 선택되지 않은 것이 기본값
  let firstCard, secondCard;
  let lockBoard = false; // 게임판이 잠겨있지 않는 것이 기본값
  // 게임 시작 상태 추적을 위한 변수
  // : 시작 버튼과 재시작 버튼에 대한 이벤트 리스너 내에서 활용
  let isGameStarted = false;

  //! 카드를 뒤집는 함수 정의
  // : 카드 클릭 시 호출
  function flipCard() {
    // 게임이 시작되지 않았거나 게임판이 잠겨있는 경우 - 더 이상 카드를 뒤집지 않음
    if (!isGameStarted || lockBoard) return;
    // 클릭된 카드에 'flipped' class 속성을 추가: 해당 카드 뒤집기
    // this: flipCard 함수가 호출된 카드 객체 그 자체
    this.classList.add("flipped");

    // 게임 시작 시 hasFlippedCard가 false 설정이 되어 있기 때문에
    // : if 조건문이 실행
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;
      // 두 카드가 일치하는지 확인 - 사용자 정의 함수
      checkForMatch();
    }
  }

  //! 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {
    let isMatch =
      firstCard.querySelector(".card-back").style.backgroundColor ===
      secondCard.querySelector(".card-back").style.backgroundColor;

    // 카드가 매치되면 비활성화, 아닐 경우 다시 뒤집기
    // 비활성화: 매치된 카드들을 다시 선택할 수 없도록 지정
    isMatch ? disableCards() : unflipCards();
  }

  //! 매치된 카드를 처리하는 함수 정의
  function disableCards() {
    // 카드를 뒤집는 기능을 제거
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // 게임판을 초기화 - 사용자 함수 정의
    resetBoard(); 
  }

  //! 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {
    lockBoard = true; // 게임판을 잠금

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      // 카드를 뒤집은 후에는 게임판 잠금을 해제
      resetBoard();
    }, 1000);
  }

  //! 게임판을 초기화하는 함수 정의
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]; // 새로운 카드가 담길 수 있도록 설정
  }

  //! 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;

  // 'start-button' 버튼에 클릭 이벤트 리스너를 추가
  startButton.addEventListener('click', () => {
    // 게임을 초기화
    initializeGame();
    // 현재 시간을 게임 시작 시간으로 설정
    gameStartTime = new Date();
    // 버튼의 가시성을 조정
    // : 시작, 재시작, 완료 버튼의 보여지는 로직을 구현
    toggleButtonVisibility(true);
    // 카드를 잠시동안 공개
    revealCardsTemporarily();
    isGameStarted = true; // 게임이 시작됨
  });

  // 'reset-button'버튼에 클릭 이벤트 리스너를 추가
  resetButton.addEventListener('click', () => {
    // 게임을 초기화
    initializeGame();
    // 현재 시간을 게임 시작 시간으로 설정
    gameStartTime = new Date();
    // 버튼의 가시성을 조정
    // : 시작, 재시작, 완료 버튼의 보여지는 로직을 구현
    toggleButtonVisibility(true);
    // 카드를 잠시동안 공개
    revealCardsTemporarily();
    isGameStarted = true; // 게임이 시작됨
  });

  // 'completed-button' 버튼 클릭 시 이벤트 리스너 추가
  completedButton.addEventListener('click', () => {
    // 모든 카드가 뒤집혀있는지 확인
    // : .card 클래스를 가진 모든 요소를 배열로 변환
    // - every 메소드를 사용해 모든 카드가 'flipped' 클래스 속성을 
    //      포함하고 있는지 확인

    // - Array.from()은 DOM NodeList를 배열로 변환
    // - every 함수는 배열의 모든 요소가 주어진 함수를 만족할 때 true를 반환(boolean 타입을 반환)

    const allFlipped = Array.from(document.querySelectorAll('.card')).every(card => 
      card.classList.contains('flipped'));

    if (allFlipped) {
      // 모든 카드가 뒤집힌 경우
      // : 게임 완료 시간을 계산
      const gameTime = new Date() - gameStartTime;
      alert(`게임 완료~! 소요 시간: ${Math.floor(gameTime / 1000)}초`);
      isGameStarted = false; // 게임 완료 시 시작 상태를 false로 설정
    } else {
      alert('완료되지 않았습니다.');
    }
  });

  //! 버튼의 가시성을 토글하는 함수 정의
  function toggleButtonVisibility(isGameStarted) {
    // 게임 시작 여부가 true이면
    // : 보여지지 않음
    startButton.style.display = isGameStarted ? 'none' : 'block';

    // 게임 시작 여부가 true이면
    // : 보여짐
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  // 초기에는 시작 버튼만 표시
  toggleButtonVisibility(false);

  // 게임을 초기화(화면에 렌더링)
  initializeGame();
});

// 배열의 요소를 무작위로 섞는 커스텀 함수
// : 각 요소를 다른 임의의 위치와 교환
function shuffle(array) {
  // 배열의 마지막 요소부터 시작하여 첫 번째 요소까지 역순으로 반복
  // i는 11부터 0까지 반복
  for (let i = array.length - 1; i > 0; i--) {
    // Math.random() * (i + 1)
    // : 0부터 i까지 무작위 인덱스를 생성
    // 현재 요소(i)와 무작위로 선택된 요소(j)의 위치를 교환

    let j = Math.floor(Math.random() * (i + 1));
    // : 0부터 i까지의 범위 내에서 무작위 j를 생성

    [array[i], array[j]] = [array[j], array[i]];
    // 배열의 i번째 원소와 j번째 요소를 서로 바꿈
    // : 구조분해 할당으로 표현
    // '피셔-에이츠 셔플'의 알고리즘 기반

    // 카드를 무작위로 잘 섞기 위함(무작위 섞기)
  }
}
