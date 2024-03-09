document.addEventListener("DOMContentLoaded", () => {
  //! 문서 객체 생성
  const header = document.createElement("h1");

  // 생성한 태그 조작
  header.textContent = "문서 객체 동적으로 생성하기";
  header.setAttribute("data-cumstom", "사용자 정의 속성");
  header.style.color = "white";
  header.style.backgroundColor = "black";

  // 트리 개념을 사용하여 부모 객체인 body 아래에 자식 객체 header를 추가
  document.body.appendChild(header);

  //! 문서 객체 이동하기
  const divA = document.querySelector("#first");
  const divB = document.querySelector("#second");
  const header1 = document.createElement("h1");
  header1.textContent = "이동하는 h1 태그";

  // 서로 번갈아가면서 실행하는 함수를 구현
  const toFirst = () => {
    divA.appendChild(header1);
    setTimeout(toSecond, 1000);
  };

  const toSecond = () => {
    divB.appendChild(header1);
    setTimeout(toFirst, 1000);
  };

  toFirst();

  setTimeout(() => {
    const h3 = document.querySelector("h3");

    document.body.removeChild(h3);
    // : document.body로 h3의 부모객체를 직접 지정
  }, 3000);
});
