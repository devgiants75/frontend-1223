
/*
! 1. 온라인 책 상점

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
*/

import axios from "axios";

//! 책 관련 API 모음
const BASE_URL = 'http://localhost:3000';

// 책 상세 정보 가져오기
export async function fetchBookDetails(bookId: number) {
  const response = await axios.get(`${BASE_URL}/books/${bookId}`);
  return response.data;
}

// 책에 리뷰 추가하기
export async function addBookReview(bookId: number, review: any) {
  await axios.post(`${BASE_URL}/books/${bookId}/reviews`, review);
}

// 책의 모든 리뷰 보기
export async function fetchBookReviews(bookId: number) {
  const response = await axios.get(`${BASE_URL}/books/${bookId}/reviews`);
  return response.data;
}

// 특정 리뷰 수정하기
export async function updateBookReview(bookId: number, reviewId: number, reviewUpdate: any) {
  await axios.put(`${BASE_URL}/books/${bookId}/reviews/${reviewId}`, reviewUpdate);
}

// 특정 리뷰 삭제하기
export async function deleteBookReview(bookId: number, reviewId: number) {
  await axios.delete(`${BASE_URL}/books/${bookId}/reviews/${reviewId}`)
}