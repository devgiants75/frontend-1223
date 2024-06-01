import React from 'react'
/*
1. 온라인 책 상점

- 책 상세 정보 가져오기
  : GET 서버경로/books/{id}

- 책에 리뷰 추가하기
  : POST 서버경로/books/{id}/reviews

- 책의 모든 리뷰보기
  : GET 서버경로/books/{id}/reviews

- 특정 리뷰 수정
  : PUT 서버경로/books/{id}/reviews/{reviewId}

- 특정 리뷰 삭제하기
  : DELETE 서버경로/books/{id}/reviews/{reviewId}

2. 영화 정보 및 예매 시스템

- 영화 목록 조회하기
  : GET /movies

- 새 영화 추가하기
  : POST /movies

- 영화 상세 정보 조회하기
  : GET /movies/{id}

- 영화 정보 업데이트하기
  : PUT /movies/{id}

- 영화 삭제하기
  : DELETE /movies/{id}

- 영화 예매하기
  : POST /movies/{id}/bookings

- 영화 예매 취소하기
  : DELETE /movies/{id}/bookings/{bookingId}

3. 음식 주문 시스템

- 메뉴 목록 조회하기
  : GET /restaurants/{id}/menu

- 새 메뉴 항목 추가하기
  : POST /restaurants/{id}/menu

- 메뉴 항목 수정
  : PUT /restaurants/{id}/menu/{itemId}

- 메뉴 항목 삭제
  : DELETE /restaurants/{id}/menu/{itemId}

- 주문하기
  : POST /restaurants/{id}/orders

- 주문 상태 업데이트(준비 중, 배달 중, 배달 완료)
  : PUT /restaurants/{id}/orders/{orderId}

*/
export default function C_RestApi02() {
  return (
    <div>C_RESTApi02</div>
  )
}
