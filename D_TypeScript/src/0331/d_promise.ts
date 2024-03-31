// d_promise.ts
{
//! 프로미스(Promise)
// : 비동기 연산의 최종 완료(또는 실패) 및 그 결과값을 나타내는 '객체'

//! 프로미스의 상태(3가지)
// - 대기: 초기 상태, 이행되지도 거부되지도 않는 상태
// - 이행: 연산이 성공적으로 완료
// - 거부: 연산이 실패

//! 프로미스 사용방법
// 프로미스의 생성
// : Promise 생성자를 사용하여 생성
//   - 비동기 작업을 수행하는 함수를 인자로 전달 받음
//   - 연산의 결과에 따라 resolve(성공) 또는 reject(실패) 상태를 가짐

const fetchData = () => {
  // 프로미스의 생성
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// 프로미스 소비
// : 프로미스가 생성되면 콜백을 첨부하여 사용 가능
// : then과 catch를 사용하여 이행과 거부 결과를 호출 가능
fetchData()
  .then(data => console.log('성공! 데이터: ', data))
  .catch(error => console.error('실패! 에러: ', error));

// 프로미스 체이닝
// : 서로 연결할 수 있는 기능
// : 하나의 프로미스의 결과를 다른 프로미스의 입력으로 사용 가능
fetchData()
  .then(data => {
    console.log('첫 번째 데이터: ', data);
    return fetchData(); // 첫 번째 데이터를 바탕으로 다른 데이터 요청
  })
  .then(anotherData => console.log('두 번째 데이터: ', anotherData))
  .catch(error => console.error(error));
}