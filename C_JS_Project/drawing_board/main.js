document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("drawing-board");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerHeight * 0.8;

  // 그리기 상태에 대한 변수 초기화
  let drawing = false;
  let erasing = false;
  let penType = "round";
  let penSize = 5;
  let penColor = "#000000";

  // 캔버스에 이벤트 리스너 추가
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseout", stopDrawing);

  // toolbar에 따른 펜 설정 이벤트 리스너
  document.getElementById("pen-type").addEventListener("change", (e) => {
    penType = e.target.value;
  });

  document.getElementById("pen-size").addEventListener("input", (e) => {
    penSize = e.target.value;
  });

  document.getElementById("pen-color").addEventListener("input", (e) => {
    penColor = e.target.value;
  });

  // 버튼 모음에 대한 이벤트 리스너 설정
  document.getElementById("pencil").addEventListener("click", () => {
    erasing = false; // 지우기 모드 비활성화
    toggleActiveButton("pencil"); // 활성화 버튼 토글
  });

  document.getElementById("eraser").addEventListener("click", () => {
    erasing = true; // 지우기 모드 활성화
    toggleActiveButton("eraser"); // 활성화 버튼 토글
  });

  document.getElementById("clear").addEventListener("click", clearCanvas);
  document.getElementById("save").addEventListener("click", saveCanvas);
  document.getElementById("load-image").addEventListener("change", loadImage);

  // 그림 그리기를 시작하는 함수
  function startDrawing(e) {
    drawing = true;
    draw(e);
  }

  // 그림 그리기를 멈추는 함수
  function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // 새로운 경로 시작
  }

  // 그림을 그리는 함수
  function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = penSize;
    ctx.lineCap = penType;
    ctx.strokeStyle = erasing ? "#fff" : penColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  // 캔버스를 지우는 함수
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // 캔버스를 저장하는 함수
  function saveCanvas() {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  // 이미지를 불러오는 함수
  function loadImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function toggleActiveButton(activeButtonId) {
    document.getElementById("pencil").classList.remove("active");
    document.getElementById("eraser").classList.remove("active");

    document.getElementById(activeButtonId).classList.add("active");
  }

  toggleActiveButton('pencil');
});
/*
  1. canvas.getContext('2d')
    canvas.getContext('2d')는 캔버스 요소에서 2D 렌더링 컨텍스트를 가져옴
    >> 컨텍스트는 캔버스에 그래픽을 그리기 위한 다양한 메서드와 속성을 포함하고 있음

  2. 주요 메서드
    ctx.beginPath()
    : 새로운 경로를 시작
    >> 이 메서드는 선, 아크, 곡선 등을 그리기 전에 호출

    ctx.moveTo(x, y)
    : 경로의 시작점을 (x, y)로 이동
    
    ctx.lineTo(x, y)
    : 현재 경로에 (x, y)까지의 직선을 추가

    ctx.stroke()
    : 현재 경로를 실제로 그림
    >> strokeStyle, lineWidth 등 스타일 속성에 따라 그려짐

    ctx.clearRect(x, y, width, height)
    : 주어진 사각형 영역을 지움
    >> (x, y)부터 너비와 높이 만큼의 영역을 투명하게 만듬

    ctx.drawImage(image, dx, dy, dWidth, dHeight)
    : 이미지 또는 비디오 요소를 캔버스에 그림

    image: 그릴 이미지 또는 비디오 요소

    dx, dy: 캔버스에서의 이미지 시작 위치

    dWidth, dHeight: 캔버스에 그릴 이미지의 크기

    ctx.lineWidth
    : 그리기 작업에 사용되는 선의 두께를 설정
    
    ctx.lineCap
    : 선의 끝 모양을 설정
    >> butt, round, square 값이 있음

    ctx.strokeStyle
    : 선의 색상을 설정

  3. 주요 속성
    ctx.lineWidth
    : 선의 두께를 나타냄
    >>  기본값은 1
    
    ctx.lineCap
    : 선의 끝 모양을 지정
    >> 가능한 값은 butt (기본값), round, square
    
    ctx.strokeStyle
    : 선의 색상 또는 스타일을 지정
    >> 기본값은 #000000 (검정색)

    ===== 정리 =====
    1. canvas.getContext('2d') 사용 기능

    새로운 경로 시작 (beginPath())
    경로의 시작점 이동 (moveTo(x, y))
    직선 추가 (lineTo(x, y))
    경로 그리기 (stroke())
    영역 지우기 (clearRect(x, y, width, height))
    이미지 그리기 (drawImage(image, dx, dy, dWidth, dHeight))
    
    2. 속성

    lineWidth: 선의 두께 설정
    lineCap: 선 끝 모양 설정
    strokeStyle: 선 색상 설정
*/
