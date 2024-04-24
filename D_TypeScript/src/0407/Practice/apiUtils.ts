// API 호출 유틸리티 모듈

// 제네릭을 사용하여 다양한 타입의 응답을 처리할 수 있는 fetchData 함수
export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url); // 주어진 URL로부터 데이터를 비동기적으로 가져옴
  if (!response.ok) {
    throw new Error('Network response was not ok'); // 네트워크 응답이 실패하면 에러 발생
  }
  return response.json() as Promise<T>; // 응답을 JSON으로 변환하고, 제네릭 타입으로 캐스팅
}
