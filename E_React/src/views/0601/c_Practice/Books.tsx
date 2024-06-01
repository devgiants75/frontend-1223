import React, { useEffect, useRef, useState } from 'react'
import { addBookReview, deleteBookReview, fetchBookDetails, fetchBookReviews, updateBookReview } from './services/api.books';

interface Reviews {
    reviewId: number;
    rating: number;
    comment: string;
}

interface Book {
    id: number;
    title: string;
    author: string;
    reviews?: Reviews[];
}

export default function Books() {
    // 책 상세 정보 상태
    const [bookDetails, setBookDetails] = useState<Book | null>(null);
    // 리뷰 목록 상태
    const [reviews, setReviews] = useState<any[]>([]);
    // 새 리뷰 내용 상태
    const [newReview, setNewReview] = useState<string>('');
    // 새 리뷰 평점 상태
    const [newRating, setNewRating] = useState<number>(5);

    // 수정 중인 리뷰 ID를 저장하는 useRef
    const updatingReviewId = useRef<number | null>(null);

    useEffect(() => {
        loadData();
    }, []);

    // 책 상세 정보와 리뷰를 불러오는 함수
    const loadData = async () => {
        const details = await fetchBookDetails(1);
        setBookDetails(details);
        reloadReviews();
    };

    // 리뷰를 새로 불러오는 함수
    const reloadReviews = async () => {
        const reviewsData = await fetchBookReviews(1);
        setReviews(reviewsData);
    }

    // 새 리뷰를 추가하는 함수
    const handleAddReview = async () => {
        if (newReview) {
            await addBookReview(1, {comment: newReview, rating: newRating});
            setNewReview('');
            setNewRating(5);
            reloadReviews();
        }
    }

    // 리뷰를 업데이트 하는 함수
    const handleUpdateReview = async () => {
      if (updatingReviewId.current !== null) {
        await updateBookReview(1, updatingReviewId.current, {comment: newReview, rating: newRating});
        setNewReview('');
        setNewRating(5);

        updatingReviewId.current = null;
        reloadReviews();
      }
    }

    // 리뷰 수정을 위해 현재 리뷰 내용을 입력 필드에 설정하는 함수
    const handleEditInit = (reviewId: number, currentReview: string, currentRating: number) => {
        updatingReviewId.current = reviewId;
        setNewReview(currentReview);
        setNewRating(currentRating);
    }

    // 리뷰 삭제하는 함수
    const handleDeleteReview = async (reviewId: number) => {
        await deleteBookReview(1, reviewId);
        reloadReviews();
    }

  return (
    <div>
        <h4>Book Details</h4>
        {bookDetails && (
            <div>
                <p>Title: {bookDetails.title}</p>
                <p>Author: {bookDetails.author}</p>
                <div>
                  <h5>Reviews</h5>
                  {reviews.map(review => (
                    <div key={review.reviewId}>
                      <p>{review.comment} - Rating: {review.rating}</p>
                      <button onClick={() => handleEditInit(review.reviewId, review.comment, review.rating)}>
                        Edit Review
                      </button>
                      <button onClick={() => handleDeleteReview(review.reviewId)}>
                        Delete Review
                      </button>
                    </div>
                  ))}
                  <div>
                    <input 
                      type="text" 
                      value={newReview}
                      onChange={e => setNewReview(e.target.value)}
                      placeholder='Add or update a review'
                    />
                    <input 
                      type="number" 
                      value={newRating}
                      onChange={e => setNewRating(Number(e.target.value))}
                      placeholder='Rating'
                      min='1'
                      max='5'
                    />
                    {updatingReviewId.current !== null ? (
                      <button onClick={handleUpdateReview}>Update Review</button>
                    ) : (
                      <button onClick={handleAddReview}>Add Review</button>
                    )}
                  </div>
                </div>
            </div>
        )}
    </div>
  )
}
