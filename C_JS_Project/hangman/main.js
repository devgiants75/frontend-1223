// 문서가 완전히 로드되면 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // 알파벳 배열 생성
  let categories, chosenCategory, word, lives, counter, space; // 게임에 필요한 변수 선언
  const guesses = []; // 사용자의 추측 저장 배열
  const hintButton = document.getElementById("hint"); // 힌트 버튼 요소
  const resetButton = document.getElementById("reset"); // 리셋 버튼 요소
  const showLives = document.getElementById("mylives"); // 생명 표시 요소
  const showCategory = document.getElementById("catagoryName"); // 카테고리 표시 요소
  const showClue = document.getElementById("clue"); // 힌트 표시 요소
  const myStickman = document.getElementById("stickman"); // 스틱맨 그리기를 위한 canvas 요소
  const context = myStickman.getContext("2d"); // canvas의 2D 렌더링 컨텍스트

  function setupButtons() {
    // 'buttons'라는 id를 가진 HTML 요소를 찾아서 myButtons 변수에 할당
    const myButtons = document.getElementById("buttons");

    // 새로운 <ul> 요소를 생성하고, 그 id를 'alphabet'으로 설정
    const letters = document.createElement("ul");
    letters.id = "alphabet";

    // alphabet 배열의 각 글자(문자)에 대해서 반복 실행
    alphabet.forEach((letter) => {
      // <li> 요소를 생성
      const list = document.createElement("li");
      // 이 <li> 요소의 id를 'letter'로 설정
      list.id = "letter";
      // <li> 요소의 텍스트 내용으로 해당 글자를 설정
      list.textContent = letter;
      // 'click' 이벤트 리스너를 추가하여, 클릭되면 handleGuess 함수가 실행
      list.addEventListener("click", handleGuess);
      // 생성된 <li> 요소를 <ul> 요소(letters)의 자식으로 추가
      letters.appendChild(list);
    });

    // 최종적으로 생성된 <ul> 요소를 myButtons의 자식으로 추가
    myButtons.appendChild(letters);
  }

  function handleGuess(event) {
    // 클릭된 요소의 텍스트 내용을 guess 변수에 할당
    const guess = event.target.textContent;
    // 클릭된 요소에 'active'라는 클래스를 추가
    event.target.classList.add("active");
    // 클릭된 요소에서 'click' 이벤트 리스너를 제거하여, 다시 클릭되지 않도록 설정
    event.target.removeEventListener("click", handleGuess);

    // 추측된 글자가 실제 단어에 포함되어 있는지 확인
    const correct = word.includes(guess);
    if (!correct) {
      // 추측이 틀렸을 경우, 남은 생명(lives)을 하나 감소시키고 게임 상태를 업데이트
      lives--;
      updateGameState();
      // 애니메이션을 실행 (함수 내용은 생략되어 있음)
      animate();
    } else {
      // 추측이 맞았을 경우, 화면에 해당 글자를 보여주는 함수를 호출
      revealLetters(guess);
    }
  }

  function revealLetters(guess) {
    // guesses 배열을 반복하면서 각 요소(guessElem)와 그 위치(index)를 가져옴
    guesses.forEach((guessElem, index) => {
      // 추측된 글자가 실제 단어의 해당 위치의 글자와 같은 경우,
      if (word[index] === guess) {
        // 해당 위치의 요소 텍스트를 추측된 글자로 설정
        guessElem.textContent = guess;
        // 맞춘 글자 수를 나타내는 counter를 증가
        counter++;
      }
    });
    // 게임 상태를 업데이트하는 함수를 호출
    updateGameState();
  }

  function updateGameState() {
    // 현재 남은 생명(lives)을 화면에 표시
    showLives.textContent = `You have ${lives} lives`;
    // 남은 생명이 1 미만이면 게임 오버 메시지를 표시
    if (lives < 1) {
      showLives.textContent = "Game Over";
    }
    // 맞춘 글자 수(counter)와 공백의 수(space)의 합이 guesses 배열의 길이와 같으면 승리 메시지를 표시
    if (counter + space === guesses.length) {
      showLives.textContent = "You Win!";
    }
  }

  function animate() {
    // 행맨을 그리는 함수들의 배열
    const drawFuncs = [
      rightLeg,
      leftLeg,
      rightArm,
      leftArm,
      torso,
      head,
      frame4,
      frame3,
      frame2,
      frame1,
    ];
    // 남은 생명에 따라 해당하는 부분을 그림
    // >> 예를 들어, lives가 9이면 frame1 함수가 실행
    drawFuncs[lives]();
  }

  function drawLine(fromX, fromY, toX, toY) {
    // 시작점에서 끝점까지 선을 그림
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke(); // 선을 캔버스에 그림
  }

  function frame1() {
    drawLine(0, 150, 150, 150);
  } // 게임 프레임의 하단 부분을 그림
  function frame2() {
    drawLine(10, 0, 10, 600);
  } // 게임 프레임의 좌측 세로 부분을 그림
  function frame3() {
    drawLine(0, 5, 70, 5);
  } // 게임 프레임의 상단 가로 부분을 그림
  function frame4() {
    drawLine(60, 5, 60, 15);
  } // 게임 프레임의 짧은 수직 부분을 그림
  function head() {
    // 머리를 그림 원을 이용하여 그림
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }
  function torso() {
    drawLine(60, 36, 60, 70);
  } // 몸통을 그림
  function rightArm() {
    drawLine(60, 46, 100, 50);
  } // 오른쪽 팔을 그림
  function leftArm() {
    drawLine(60, 46, 20, 50);
  } // 왼쪽 팔을 그림
  function rightLeg() {
    drawLine(60, 70, 100, 100);
  } // 오른쪽 다리를 그림
  function leftLeg() {
    drawLine(60, 70, 20, 100);
  } // 왼쪽 다리를 그림

  function selectCategory() {
    // 사용 가능한 카테고리 배열
    const categoryNames = ["Premier League Football Teams", "Films", "Cities"];
    // 선택된 카테고리의 이름을 화면에 표시
    showCategory.textContent = `The Chosen Category Is ${
      categoryNames[categories.indexOf(chosenCategory)]
    }`;
  }

  function setupGame() {
    // 가능한 카테고리와 각 카테고리에 해당하는 단어들의 배열
    categories = [
      [
        "everton",
        "liverpool",
        "swansea",
        "chelsea",
        "hull",
        "manchester-city",
        "newcastle-united",
      ],
      ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
      ["manchester", "milan", "madrid", "amsterdam", "prague"],
    ];

    // 랜덤하게 카테고리를 선택하고, 그 카테고리에서 랜덤하게 단어를 선택
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    // 단어 중 공백은 '-'로 치환
    word = word.replace(/\s/g, "-");
    // 버튼을 설정
    setupButtons();

    // 초기 게임 상태를 설정
    guesses.length = 0;
    lives = 10;
    counter = 0;
    space = 0;
    // 단어 홀더를 설정
    setupWordHolder();
    // 게임 상태를 업데이트
    updateGameState();
    // 카테고리를 선택하여 표시
    selectCategory();
  }

  function setupWordHolder() {
    // 'hold'라는 id를 가진 HTML 요소를 찾아서 wordHolder 변수에 할당하고, 내부 HTML을 초기화
    const wordHolder = document.getElementById("hold");
    wordHolder.innerHTML = "";
    // 새로운 <ul> 요소를 생성하고, 그 id를 'my-word'로 설정
    const correct = document.createElement("ul");
    correct.setAttribute("id", "my-word");

    // 선택된 단어의 각 문자에 대해 반복
    word.split("").forEach((char) => {
      // 각 문자에 대한 <li> 요소를 생성
      const guess = document.createElement("li");
      guess.className = "guess";
      // 문자가 '-'이면 '-'를, 그렇지 않으면 '_'를 표시
      guess.textContent = char === "-" ? "-" : "_";
      // 생성된 <li> 요소를 <ul> 요소에 추가
      correct.appendChild(guess);
      // guesses 배열에 추가
      guesses.push(guess);
      // 공백 문자('-')의 개수를 셈
      if (char === "-") space++;
    });

    // 최종적으로 생성된 <ul> 요소를 wordHolder의 자식으로 추가
    wordHolder.appendChild(correct);
  }

  hintButton.addEventListener("click", function () {
    // 힌트 배열을 정의 각 카테고리 별로 힌트가 저장
    const hints = [
      [
        "Based in Mersyside",
        "Based in Mersyside",
        "First Welsh team to reach the Premier Leauge",
        "Owned by A russian Billionaire",
        "Once managed by Phil Brown",
        "2013 FA Cup runners up",
        "Gazza's first club",
      ],
      [
        "Science-Fiction horror film",
        "1971 American action film",
        "Historical drama",
        "Animated Fish",
        "Giant great white shark",
      ],
      [
        "Northern city in the UK",
        "Home of AC and Inter",
        "Spanish capital",
        "Netherlands capital",
        "Czech Republic capital",
      ],
    ];

    // 현재 선택된 카테고리의 인덱스를 구함 
    const categoryIndex = categories.indexOf(chosenCategory);
    // 현재 게임에서 선택된 단어의 인덱스를 구함
    const hintIndex = chosenCategory.indexOf(word);
    // 화면에 힌트를 표시
    showClue.textContent = `Clue: - ${hints[categoryIndex][hintIndex]}`;
  });

  resetButton.addEventListener("click", function () {
    // 캔버스를 청소 (모든 그림을 지움)
    context.clearRect(0, 0, 400, 400);
    // 이전 게임의 동적 요소를 청소하는 함수를 호출
    clearPreviousGame();
    // 게임을 다시 설정
    setupGame();
  });

  function clearPreviousGame() {
    // 이전에 생성된 알파벳 버튼들이 있는지 확인하고, 있다면 제거
    const existingLetters = document.getElementById("alphabet");
    if (existingLetters) {
      existingLetters.remove();
    }
  
    // 이전 게임의 단어 표시를 지우기 위해 wordHolder 내부의 HTML을 초기화
    const wordHolder = document.getElementById("hold");
    if (wordHolder) {
      wordHolder.innerHTML = "";
    }
  
    // 힌트와 생명 표시를 리셋
    showClue.textContent = "Clue -";
    showLives.textContent = "";
  }
  
  // 게임 초기 설정을 수행하는 함수를 호출
  setupGame();
  
});

/*
# 1. 프리미어 리그 축구 팀들
: 잉글랜드 프리미어 리그에서 경기하는 축구 팀들의 이름이 포함

에버턴
리버풀
스완지
첼시
헐
맨체스터 시티
뉴캐슬 유나이티드

# 2. 영화
: 다양한 유명 영화의 이름을 포함

에일리언
더티 해리
글래디에이터
니모를 찾아서
조스

# 3. 도시
: 세계 각국의 유명 도시 이름을 포함

맨체스터
밀라노
마드리드
암스테르담
프라하

& === 힌트 번역 ===

# 1. 프리미어 리그 축구 팀

"멀시사이드에 위치해 있음" (리버풀과 에버턴이 위치한 지역)
"멀시사이드에 위치해 있음" (중복된 힌트)
"프리미어 리그에 진출한 최초의 웨일즈 팀" (스완지)
"러시아 억만장자가 소유함" (첼시)
"필 브라운이 한때 감독을 맡았음" (헐 시티)
"2013 FA컵 준우승팀" (맨체스터 시티)
"게자의 첫 클럽" (뉴캐슬 유나이티드)

# 2. 영화에 대한 힌트

"과학-공상 호러 영화" (에일리언)
"1971년 미국 액션 영화" (더티 해리)
"역사 드라마" (글래디에이터)
"애니메이션 물고기" (니모를 찾아서)
"거대한 백상아리" (조스)

# 3. 도시에 대한 힌트

"영국 북부의 도시" (맨체스터)
"AC 및 인터의 본거지" (밀라노)
"스페인의 수도" (마드리드)
"네덜란드의 수도" (암스테르담)
"체코의 수도" (프라하)
*/
