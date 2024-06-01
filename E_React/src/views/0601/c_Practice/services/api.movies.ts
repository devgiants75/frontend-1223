import axios from "axios";

/*
!2. 영화 정보 및 예매 시스템

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
*/
//! 영화 관련 API 모음
const BASE_URL = 'http://localhost:3000';