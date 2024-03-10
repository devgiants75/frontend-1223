//! 카드 메모리 게임(카드 매칭 게임)
// 사용자가 카드를 클릭하여 뒤집고
// , 같은 색상의 카들르 매칭시키는 게임
// - 게임의 초기화, 카드 뒤집기, 매칭 검사, 게임 리셋 및 완료 확인 등의 기능을 포함

// 문서의 로딩이 완료되면 함수를 실행
document.addEventListener('DOMContentLoaded', () => {

  //! HTML 요소를 선택
  // cardContainer 요소의 자식 요소로 생성될 카드를 전달
  const cardContainer = document.getElementById("card-container");
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");
  const completedButton = document.getElementById("completed-button");

  //! 색상 배열을 정의(6개)
  const colors = [
    // 'black', 'red', 'yellow', 'pink', 'orange', 'blue'
    '#cc3131', '#e3ddbb', '#23b923', '#34bcbc', '#3939db', '#e5b7e4'
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

    //? 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드를 클릭했을 때 동작을 정의
    addCardEventListeners();
  }

  //! 잠시동안 모든 카드를 공개하는 함수 정의
  function revealCardsTemporarily() {

  }

  //! 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수
  function addCardEventListeners() {

  }

  //! 변수 선언
  // 카드가 뒤집혔는지 여부
  // 첫 번째와 두 번째 선택된 카드
  // 게임판이 잠겨있는지 여부
  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

  //! 카드를 뒤집는 함수 정의
  function flipCard() {

  }

  //! 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {

  }

  //! 매치된 카드를 처리하는 함수정의
  function disableCards() {

  }

  //! 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {

  }

  //! 게임판을 초기화하는 함수 정의
  function resetBoard() {

  }

  //! 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;
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
    
    let j = Maht.floor(Math.random() * (i + 1));
    // : 0부터 i까지의 범위 내에서 무작위 j를 생성

    [array[i], array[j]] = [array[j], array[i]];
    // 배열의 i번째 원소와 j번째 요소를 서로 바꿈
    // : 구조분해 할당으로 표현
    // '피셔-에이츠 셔플'의 알고리즘 기반
    
    // 카드를 무작위로 잘 섞기 위함(무작위 섞기)
  }
}