// 요구 사항
// 각 버튼의 동작 구현
// - 감소 버튼 클릭 시 h1 요소의 내용이 -1씩 감소
// - 증가 버튼 클릭 시 h1 요소의 내용이 +1씩 증가
// : 각 버튼 클릭 시 이벤트 리스너를 추가
// : 클릭 된 버튼의 이벤트에 따라 number인 요소의 텍스트를 업데이트
//! DOM 조작을 위한 요소 접근
var number = document.getElementById('number');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
if (increase && decrease && number) {
    increase.onclick = function () {
        // parseInt(): 문자열을 정수로 변환
        // >> 두 번째 매개변수는 변환하고자 하는 진수를 표현
        var current = parseInt(number.innerText, 10);
        number.innerText = (current + 1).toString();
    };
    decrease.onclick = function () {
        var current = parseInt(number.innerText, 10);
        number.innerText = (current - 1).toString();
    };
}
