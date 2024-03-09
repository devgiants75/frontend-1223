document.addEventListener("DOMContentLoaded", () => {
  //! 1. querySelector()
  // 요소 읽어오기 (태그 선택자 사용)
  const header1 = document.querySelector("h1");

  // 해당 요소의 텍스트와 스타일을 변경
  header1.textContent = "HEADER1";
  header1.style.color = "white";
  // JS에서 CSS의 속성을 사용하는 경우 camelCase를 사용
  header1.style.backgroundColor = "black";
  header1.style.padding = "10px";

  //! 2. querySelectorAll()
  // header2의 데이터 타입: 배열
  const header2 = document.querySelectorAll(".header2");

  // header2의 텍스트와 스타일 변경
  // : 각각의 배열 요소에 하나씩 스타일을 첨부
  // : 배열의 모든 요소에 동일한 기능을 지정하는 방법
  header2.forEach((h2) => {
    h2.textContent = "HEADER2";
    h2.style.color = "yellow";
    h2.style.backgroundColor = "black";
    h2.style.padding = "20px";
  });

  //! 3. 글자 조작(textContent / innerHTML)
  // 특정 아이디로 요소를 선택
  const a = document.querySelector("#a");
  const b = document.querySelector("#b");

  a.textContent = "<h1>textContent 속성</h1>";
  // : 텍스트 그 자체가 내용으로 삽입

  b.innerHTML = "<h1>innerHTML 속성</h1>";
  // : HTML 문서 구조를 인식하여 해석한 뒤 내용만 삽입

  //? JS에서 글자 조작 시에는 문서 구조는 HTML이 담당하기 때문에 문서구조를 직접 생성하는 innerHTML 보다 기능적인 텍스트만 첨부하는 textContent를 사용하는 것을 권장

  //! 4. 속성 조작
  const cats = document.querySelectorAll(".cat");
  cats.forEach((cat, index) => {
    const width = (index + 1) * 100;
    const source = `http://placekitten.com/${width}/250`;
    const alter = '고양이이미지';
    // src와 alt 속성에 값을 지정
    // cat.setAttribute("src", src);
    // cat.setAttribute('alt', alt);

    // HTML 표준에 정의된 속성은 setAttribute()와 getAttribute() 메서드를 사용하지 않고도 불러오기 가능
    // : .연산자(온점)를 사용하여 속성을 바로 읽거나 지정 가능
    cat.src = source;
    cat.alt = alter;

  });

  //! 5. 스타일 조작하기
  const divs = document.querySelectorAll('#divs > div');

  divs.forEach((div, index) => { 
    // #divs 안의 div 개수만큼 반복하여 출력
    const val = index * 10; // 0 ~ 24
    div.style.height = `10px`;
    div.style.backgroundColor = `rgba(${val}, ${val}, ${val})`
  })
});
